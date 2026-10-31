#!/usr/bin/env python3
"""Build data/hardware.js from a Blender Open Data snapshot (CC0). Run by hand.

  curl -LO https://opendata.blender.org/snapshots/opendata-latest.zip
  python3 tests/build-hardware.py opendata-latest.zip

Benchmarks are the sum of the median samples per minute for the monster,
junkshop and classroom scenes. Blender 5.x results are used when a device has
at least two runs. Otherwise 4.2-4.5 results are scaled to match. Parsed results
are cached next to the snapshot as <snapshot>.agg.json.
"""
import collections, datetime, io, json, os, re, statistics, sys, zipfile

SCENES = ("monster", "junkshop", "classroom")


def aggregate(path):
    results = collections.defaultdict(lambda: collections.defaultdict(list))
    threads = collections.defaultdict(list)
    with zipfile.ZipFile(path) as archive:
        name = next(n for n in archive.namelist() if n.endswith(".jsonl"))
        with archive.open(name) as raw:
            for line in io.TextIOWrapper(raw, encoding="utf-8"):
                if '"5.' not in line and '"4.' not in line:
                    continue
                try:
                    record = json.loads(line)
                except ValueError:
                    continue
                for entry in record.get("data") or []:
                    try:
                        version = re.match(r"(\d+)\.(\d+)", entry["blender_version"]["label"])
                        major, minor = int(version[1]), int(version[2])
                        bucket = "5" if major >= 5 else ("4" if major == 4 and minor >= 2 else None)
                        devices = entry["device_info"]["compute_devices"]
                        kind = entry["device_info"]["device_type"]
                        if not bucket or len(devices) != 1:
                            continue
                        if kind == "CPU" and entry["system_info"].get("num_cpu_sockets", 1) != 1:
                            continue
                        device = devices[0]["name"] if isinstance(devices[0], dict) else devices[0]
                        key = (device.strip(), kind, bucket)
                        results[key][entry["scene"]["label"]].append(entry["stats"]["samples_per_minute"])
                        threads[key].append(entry["device_info"].get("num_cpu_threads") or 0)
                    except (KeyError, TypeError):
                        continue
    rows = []
    for (device, kind, bucket), scenes in results.items():
        if all(s in scenes for s in SCENES):
            rows.append({
                "name": device, "type": kind, "ver": bucket,
                "runs": min(len(scenes[s]) for s in SCENES),
                "threads": statistics.median(threads[(device, kind, bucket)]),
                "score": round(sum(statistics.median(scenes[s]) for s in SCENES)),
            })
    return rows


def clean(name):
    name = re.sub(r"\((R|TM)\)", "", name)
    name = re.sub(r"\b(NVIDIA|AMD|Intel)\b", "", name)
    name = re.sub(r"\b\d+(st|nd|rd|th) Gen\b|\bCPU @.*|\d+-Core Processor|\bProcessor\b|\bCore\b(?= (i\d|Ultra))", "", name)
    name = name.replace("RYZEN", "Ryzen").replace("Super", "SUPER")
    return re.sub(r"\s+", " ", name).strip()


def lookup(rows, pattern, ratio, kinds):
    regex = re.compile(pattern)
    hits = [r for r in rows if r["type"] in kinds and regex.search(clean(r["name"]))]
    for bucket, scale in (("5", 1), ("4", ratio)):
        pool = [r for r in hits if r["ver"] == bucket and r["runs"] >= 2]
        if pool:
            best = max(pool, key=lambda r: (r["type"] == "OPTIX", r["runs"]))
            return round(best["score"] * scale), best["threads"], bucket, sum(r["runs"] for r in pool)
    return None


def scale_ratio(rows, kinds):
    latest = {(r["name"], r["type"]): r for r in rows if r["ver"] == "5" and r["type"] in kinds and r["runs"] >= 5}
    pairs = [latest[(r["name"], r["type"])]["score"] / r["score"] for r in rows
             if r["ver"] == "4" and (r["name"], r["type"]) in latest and r["runs"] >= 5]
    return statistics.median(pairs)


# Group, label, Open Data name pattern, VRAM in GB, backend, hardware ray tracing.
OPTIX, CUDA, HIP, ONEAPI, METAL = "OptiX", "CUDA / OptiX", "HIP", "oneAPI", "Metal"
N50, N40, N30, N20, N16, N10, N9 = ("NVIDIA RTX 50 series", "NVIDIA RTX 40 series", "NVIDIA RTX 30 series",
    "NVIDIA RTX 20 series", "NVIDIA GTX 16 series", "NVIDIA GTX 10 series", "NVIDIA GTX 900 series")
NL = "NVIDIA laptop"
A9, A7, A6, A5 = "AMD RX 9000 series", "AMD RX 7000 series", "AMD RX 6000 series", "AMD RX 5000 series"
AI, INT = "AMD integrated (Ryzen)", "Intel Arc"
PRO = "Workstation"
GPUS = [(N50, f"RTX {n}", rf"GeForce RTX {n}$", v, OPTIX, True) for n, v in
        [("5090", 32), ("5080", 16), ("5070 Ti", 16), ("5070", 12)]] + [
    (N50, "RTX 5060 Ti (16 GB)", r"GeForce RTX 5060 Ti$", 16, OPTIX, True),
    (N50, "RTX 5060 Ti (8 GB)", r"GeForce RTX 5060 Ti$", 8, OPTIX, True),
    (N50, "RTX 5060", r"GeForce RTX 5060$", 8, OPTIX, True),
    (N50, "RTX 5050", r"GeForce RTX 5050$", 8, OPTIX, True),
] + [(N40, f"RTX {n}", rf"GeForce RTX {n}$", v, OPTIX, True) for n, v in
     [("4090", 24), ("4080 SUPER", 16), ("4080", 16), ("4070 Ti SUPER", 16), ("4070 Ti", 12), ("4070 SUPER", 12), ("4070", 12)]] + [
    (N40, "RTX 4060 Ti (16 GB)", r"GeForce RTX 4060 Ti$", 16, OPTIX, True),
    (N40, "RTX 4060 Ti (8 GB)", r"GeForce RTX 4060 Ti$", 8, OPTIX, True),
    (N40, "RTX 4060", r"GeForce RTX 4060$", 8, OPTIX, True),
] + [(N30, f"RTX {n}", rf"GeForce RTX {n}$", v, OPTIX, True) for n, v in
     [("3090 Ti", 24), ("3090", 24), ("3080 Ti", 12), ("3080", 10), ("3070 Ti", 8), ("3070", 8), ("3060 Ti", 8), ("3060", 12), ("3050", 8)]] + [
    (N20, f"RTX {n}", rf"GeForce RTX {n}$", v, OPTIX, True) for n, v in
    [("2080 Ti", 11), ("2080 SUPER", 8), ("2080", 8), ("2070 SUPER", 8), ("2070", 8), ("2060 SUPER", 8), ("2060", 6)]] + [
    (N16, f"GTX {n}", rf"GeForce GTX {n}$", v, CUDA, False) for n, v in
    [("1660 Ti", 6), ("1660 SUPER", 6), ("1660", 6), ("1650 SUPER", 4), ("1650", 4)]] + [
    (N10, f"GTX {n}", rf"GeForce GTX {n}$", v, CUDA, False) for n, v in
    [("1080 Ti", 11), ("1080", 8), ("1070 Ti", 8), ("1070", 8), ("1060 6GB", 6), ("1060 3GB", 3), ("1050 Ti", 4), ("1050", 2)]] + [
    (N9, f"GTX {n}", rf"GeForce GTX {n}$", v, CUDA, False) for n, v in
    [("980 Ti", 6), ("980", 4), ("970", 4), ("960", 2), ("950", 2)]] + [
    (NL, f"RTX {n} Laptop", rf"GeForce RTX {n} Laptop GPU$", v, OPTIX, True) for n, v in
    [("5090", 24), ("5080", 16), ("5070 Ti", 12), ("5070", 8), ("5060", 8), ("5050", 8), ("4090", 16), ("4080", 12), ("4070", 8),
     ("4060", 8), ("4050", 6), ("3080 Ti", 16), ("3080", 8), ("3070 Ti", 8), ("3070", 8), ("3060", 6), ("3050 Ti", 4), ("3050", 4)]] + [
    (A9, f"RX {n}", rf"Radeon RX {n}$", v, HIP, True) for n, v in [("9070 XT", 16), ("9070", 16), ("9060 XT", 16)]] + [
    (A7, f"RX {n}", rf"Radeon RX {n}$", v, HIP, True) for n, v in
    [("7900 XTX", 24), ("7900 XT", 20), ("7900 GRE", 16), ("7800 XT", 16), ("7700 XT", 12), ("7600 XT", 16), ("7600", 8)]] + [
    (A6, f"RX {n}", rf"Radeon RX {n}$", v, HIP, True) for n, v in
    [("6950 XT", 16), ("6900 XT", 16), ("6800 XT", 16), ("6800", 16), ("6750 XT", 12), ("6700 XT", 12), ("6700", 10), ("6650 XT", 8), ("6600 XT", 8), ("6600", 8)]] + [
    (A5, f"RX {n}", rf"Radeon RX {n}$", v, HIP, False) for n, v in [("5700 XT", 8), ("5700", 8), ("5600 XT", 6)]] + [
    (AI, "Radeon 8060S (Ryzen AI Max)", r"Radeon 8060S Graphics$", 0, HIP, False),
    (AI, "Radeon 890M", r"Radeon 890M Graphics$", 0, HIP, False),
    (AI, "Radeon 880M", r"Radeon 880M Graphics$", 0, HIP, False),
    (AI, "Radeon 780M", r"Radeon 780M Graphics$", 0, HIP, False),
    (AI, "Radeon 760M", r"Radeon 760M( Graphics)?$", 0, HIP, False),
] + [(INT, f"Arc {n}", rf"Arc {n} Graphics$", v, ONEAPI, True) for n, v in
     [("B580", 12), ("B570", 10), ("A770", 16), ("A750", 8), ("A580", 8), ("A380", 6)]] + [
    (INT, "Arc 140V (Core Ultra laptop)", r"Arc 140V GPU \(16GB\)$", 0, ONEAPI, True),
    (INT, "Arc Graphics (Core Ultra laptop)", r"Arc Graphics$", 0, ONEAPI, True),
    (PRO, "RTX PRO 6000 Blackwell", r"RTX PRO 6000 Blackwell Workstation Edition$", 96, OPTIX, True),
    (PRO, "RTX PRO 5000 Blackwell", r"RTX PRO 5000 Blackwell$", 48, OPTIX, True),
    (PRO, "RTX PRO 4000 Blackwell", r"RTX PRO 4000 Blackwell$", 24, OPTIX, True),
    (PRO, "RTX 6000 Ada", r"RTX 6000 Ada Generation$", 48, OPTIX, True),
    (PRO, "RTX 4000 Ada", r"RTX 4000 Ada Generation$", 20, OPTIX, True),
    (PRO, "RTX A6000", r"RTX A6000$", 48, OPTIX, True),
    (PRO, "RTX A4000", r"RTX A4000$", 16, OPTIX, True),
    (PRO, "Radeon PRO W7900", r"Radeon PRO W7900$", 48, HIP, True),
]
APPLE_GPUS = [
    ("M6", 12), ("M5 Ultra", 80), ("M5 Ultra", 64), ("M5 Max", 40), ("M5 Max", 32), ("M5 Pro", 20), ("M5 Pro", 16), ("M5", 10), ("M5", 8),
    ("M4 Max", 40), ("M4 Max", 32), ("M4 Pro", 20), ("M4 Pro", 16), ("M4", 10), ("M4", 8),
    ("M3 Ultra", 80), ("M3 Ultra", 60), ("M3 Max", 40), ("M3 Max", 30), ("M3 Pro", 18), ("M3 Pro", 14), ("M3", 10), ("M3", 8),
    ("M2 Ultra", 76), ("M2 Ultra", 60), ("M2 Max", 38), ("M2 Max", 30), ("M2 Pro", 19), ("M2 Pro", 16), ("M2", 10), ("M2", 8),
    ("M1 Ultra", 64), ("M1 Ultra", 48), ("M1 Max", 32), ("M1 Max", 24), ("M1 Pro", 16), ("M1 Pro", 14), ("M1", 8), ("M1", 7),
]
# Listed so people can find their card. These have no Cycles GPU backend in Blender 5.2.
NO_BACKEND = [
    ("No Cycles GPU support", "Intel UHD / Iris Xe (Kaby Lake or newer)", "none", True),
    ("No Cycles GPU support", "AMD Radeon Vega integrated", "none", True),
    ("No Cycles GPU support", "AMD RX 400 / RX 500 / Vega (e.g. RX 580)", "none", True),
    ("Below Blender 5.2 minimum", "NVIDIA GTX 600 / 700 and older", "old", False),
    ("Below Blender 5.2 minimum", "AMD R9 / R7 (GCN 1st-3rd gen)", "old", False),
    ("Below Blender 5.2 minimum", "Intel HD (Skylake or older)", "old", False),
]

U2, U1, I14, I13, I12, I11, I10, I9, I8, I7, I6, IO = ("Intel Core Ultra 200 (2024-25)", "Intel Core Ultra 100 laptop (2023)",
    "Intel 14th gen (2023)", "Intel 13th gen (2022)", "Intel 12th gen (2021)", "Intel 11th gen (2021)", "Intel 10th gen (2020)",
    "Intel 9th gen (2018)", "Intel 8th gen (2017)", "Intel 7th gen (2017)", "Intel 6th gen (2015)", "Intel older (2011-14)")
R9, R8, R7, R5, R3, R2, R1, RT = ("AMD Ryzen 9000 (2024)", "AMD Ryzen 8000 (2024)", "AMD Ryzen 7000 (2022)", "AMD Ryzen 5000 (2020)",
    "AMD Ryzen 3000 (2019)", "AMD Ryzen 2000 (2018)", "AMD Ryzen 1000 (2017)", "AMD Threadripper")
RL = "AMD Ryzen laptop"
AP = "Apple Silicon"
d = False
m = True
def intel(group, models, mobile=False):
    return [(group, f"Core {x}", rf"\b{x}F?S?\b", mobile) for x in models]
def ultra(group, models, mobile=False):
    return [(group, f"Core Ultra {x}", rf"\bUltra {x}F?\b", mobile) for x in models]
def ryzen(group, models, mobile=False):
    return [(group, f"Ryzen {x}", rf"\bRyzen {x}(?![A-Z0-9])", mobile) for x in models]
CPUS = (
    ultra(U2, ["9 285K", "7 270K Plus", "7 265K", "5 250K Plus", "5 245K"]) +
    ultra(U2, ["X7 358H", "9 285H", "9 275HX", "7 255H", "7 258V", "5 226V", "5 225H"], m) +
    ultra(U1, ["9 185H", "7 155H", "5 125H"], m) +
    intel(I14, ["i9-14900K", "i7-14700K", "i5-14600K", "i5-14400", "i3-14100"]) +
    intel(I14, ["i9-14900HX", "i7-14700HX", "i7-14650HX"], m) +
    intel(I13, ["i9-13900K", "i7-13700K", "i5-13600K", "i5-13400", "i3-13100"]) +
    intel(I13, ["i9-13980HX", "i7-13700H", "i7-13650HX", "i7-13620H", "i5-13500H", "i5-13420H", "i7-1355U", "i5-1335U"], m) +
    intel(I12, ["i9-12900K", "i7-12700K", "i5-12600K", "i5-12400", "i3-12100"]) +
    intel(I12, ["i9-12900H", "i7-12700H", "i5-12500H", "i7-1260P", "i5-1240P", "i5-1235U"], m) +
    intel(I11, ["i9-11900K", "i7-11700K", "i5-11600K", "i5-11400"]) +
    intel(I11, ["i7-11800H", "i5-11400H", "i7-1165G7", "i5-1135G7"], m) +
    intel(I10, ["i9-10900K", "i7-10700K", "i5-10600K", "i5-10400", "i3-10100"]) +
    intel(I10, ["i7-10750H", "i5-10300H", "i7-1065G7", "i5-1035G1"], m) +
    intel(I9, ["i9-9900K", "i7-9700K", "i5-9600K", "i5-9400"]) + intel(I9, ["i7-9750H", "i5-9300H"], m) +
    intel(I8, ["i7-8700K", "i7-8700", "i5-8600K", "i5-8400", "i3-8100"]) + intel(I8, ["i7-8750H", "i5-8250U"], m) +
    intel(I7, ["i7-7700K", "i7-7700", "i5-7600K", "i5-7500"]) + intel(I7, ["i7-7700HQ"], m) +
    intel(I6, ["i7-6700K", "i7-6700", "i5-6600K", "i5-6500"]) + intel(I6, ["i7-6700HQ"], m) +
    intel(IO, ["i7-4790K", "i7-4770", "i5-4590", "i7-3770K", "i7-3770", "i7-2600K", "i7-2600"]) +
    ryzen(R9, ["9 9950X3D", "9 9950X", "9 9900X", "7 9850X3D", "7 9800X3D", "7 9700X", "5 9600X"]) +
    ryzen(R8, ["7 8700G", "5 8600G", "5 8400F"]) +
    ryzen(R7, ["9 7950X3D", "9 7950X", "9 7900X", "7 7800X3D", "7 7700X", "7 7700", "5 7600X", "5 7600", "5 7500F"]) +
    ryzen(R5, ["9 5950X", "9 5900X", "7 5800X3D", "7 5800X", "7 5700X", "5 5600X", "5 5600", "5 5500", "7 5700G", "5 5600G"]) +
    ryzen(R3, ["9 3950X", "9 3900X", "7 3700X", "5 3600X", "5 3600", "3 3300X", "5 3400G"]) +
    ryzen(R2, ["7 2700X", "5 2600", "5 2400G"]) +
    ryzen(R1, ["7 1800X", "7 1700", "5 1600", "5 1400"]) +
    [(RT, f"Threadripper {x}", rf"Threadripper {x}\b", d) for x in ["7980X", "7970X", "7960X", "3990X", "3970X", "3960X"]] +
    [(RL, "Ryzen AI Max+ 395", r"Ryzen AI MAX\+ 395", m), (RL, "Ryzen AI 9 HX 370", r"Ryzen AI 9 HX 370", m), (RL, "Ryzen AI 7 350", r"Ryzen AI 7 350", m)] +
    ryzen(RL, ["9 8945HS", "7 8845HS", "9 7945HX", "7 7840HS", "7 7735HS", "7 6800H", "9 5900HX", "7 5800H", "5 5600H", "5 5500U", "7 4800H", "5 4600H"], m) +
    [(AP, f"Apple {x}", rf"^Apple {x}$", m) for x in ["M6", "M5 Max", "M5 Pro", "M5", "M4 Max", "M4 Pro", "M4", "M3 Ultra", "M3 Max", "M3 Pro", "M3",
                                                     "M2 Ultra", "M2 Max", "M2 Pro", "M2", "M1 Ultra", "M1 Max", "M1 Pro", "M1"]]
)


def slug(text):
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")


def main():
    snapshot = sys.argv[1]
    cache = snapshot + ".agg.json"
    if os.path.exists(cache):
        rows = json.load(open(cache))
    else:
        rows = aggregate(snapshot)
        json.dump(rows, open(cache, "w"))
    gpu_kinds = {"OPTIX", "CUDA", "HIP", "ONEAPI", "METAL"}
    gpu_ratio, cpu_ratio = scale_ratio(rows, gpu_kinds), scale_ratio(rows, {"CPU"})
    missing, gpus, cpus = [], [], []
    for group, label, pattern, vram, backend, rt in GPUS:
        kinds = {"OptiX": {"OPTIX"}, "CUDA / OptiX": {"OPTIX", "CUDA"}, "HIP": {"HIP"}, "oneAPI": {"ONEAPI"}}[backend]
        hit = lookup(rows, pattern, gpu_ratio, kinds)
        if not hit:
            missing.append(label)
            continue
        gpus.append({"id": "gpu-" + slug(label), "group": group, "name": label, "bench": hit[0], "vram": vram, "backend": backend, "rt": rt,
                     **({"mobile": True} if group in (NL, AI) or "laptop" in label else {})})
    for chip, cores in APPLE_GPUS:
        hit = lookup(rows, rf"^Apple {chip} \(GPU - {cores} cores\)$", gpu_ratio, {"METAL"})
        if not hit:
            missing.append(f"{chip} {cores}")
            continue
        gpus.append({"id": "gpu-" + slug(f"{chip} {cores}"), "group": AP, "name": f"Apple {chip} ({cores}-core GPU)", "bench": hit[0], "vram": 0,
                     "backend": METAL, "rt": chip[:2] not in ("M1", "M2"), "mobile": True, "apple": chip})
    for group, label, status, supported in NO_BACKEND:
        gpus.append({"id": "gpu-" + slug(label), "group": group, "name": label, "bench": 0, "vram": 0, "backend": None, "rt": False, "status": status})
    for group, label, pattern, mobile in CPUS:
        hit = lookup(rows, pattern, cpu_ratio, {"CPU"})
        if not hit:
            missing.append(label)
            continue
        cpus.append({"id": "cpu-" + slug(label), "group": group, "name": label, "bench": hit[0], "threads": int(hit[1]),
                     **({"mobile": True} if mobile else {}), **({"apple": label[6:]} if group == AP else {})})
    snapshot_date = re.search(r"\d{4}-\d{2}-\d{2}", " ".join(zipfile.ZipFile(snapshot).namelist()))[0]
    data = {
        "snapshot": snapshot_date, "cpus": cpus, "gpus": gpus,
        "rams": [{"id": f"ram-{a}", "amount": a, "name": f"{a} GB" + note} for a, note in
                 [(8, " (Blender minimum)"), (16, ""), (24, ""), (32, " (Blender recommended)"), (48, ""), (64, ""), (96, ""), (128, " or more")]],
    }
    with open("data/hardware.js", "w") as out:
        out.write("// Generated by tests/build-hardware.py from Blender Open Data (CC0). Do not edit by hand.\n")
        out.write("// bench: samples per minute over monster + junkshop + classroom. Loaded only by rig.html.\n")
        out.write("window.BLENDER_HARDWARE = ")
        json.dump(data, out, indent=1)
        out.write(";\n")
    print(f"gpus {len(gpus)} cpus {len(cpus)} ratios gpu {gpu_ratio:.3f} cpu {cpu_ratio:.3f}")
    print("missing:", ", ".join(missing))


main()
