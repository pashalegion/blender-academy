/*
 * Rig checker. CPU and GPU speed come from Blender Open Data results
 * (data/hardware.js). GPU support follows the Blender 5.2 requirements.
 * The overall score is our own estimate: GPU 45%, CPU 30%, RAM 25%, held
 * back by the weakest part.
 */
(function () {
  "use strict";
  var BA = window.BlenderAcademy;
  var esc = BA.esc;
  var hw = window.BLENDER_HARDWARE;
  var t = BA.t;

  var DEFAULT_CPU = "cpu-ryzen-5-5600";
  var DEFAULT_GPU = "gpu-rtx-4060";
  var RAM_SCORE = { 8: 3, 16: 6, 24: 7, 32: 8.5, 48: 9, 64: 9.5, 96: 10, 128: 10 };

  var selects = {
    cpu: document.getElementById("cpu"),
    gpu: document.getElementById("gpu"),
    ram: document.getElementById("ram")
  };
  var result = document.getElementById("rig-result");

  /* Part names stay as they are, apart from the words we add to them. */
  function displayName(name) {
    return t(name).replace(/ Laptop$/, t(" Laptop")).replace(/(\d+)-core GPU/, t("$1-core GPU"));
  }

  function grouped(list, selectedId) {
    var groups = {};
    var order = [];
    list.forEach(function (item) {
      if (!groups[item.group]) { groups[item.group] = []; order.push(item.group); }
      groups[item.group].push(item);
    });
    return order.map(function (label) {
      return '<optgroup label="' + esc(t(label)) + '">' + groups[label].map(function (item) {
        return '<option value="' + esc(item.id) + '"' + (item.id === selectedId ? " selected" : "") + '>' + esc(displayName(item.name)) + '</option>';
      }).join("") + '</optgroup>';
    }).join("");
  }

  function fillSelects() {
    selects.cpu.innerHTML = grouped(hw.cpus, DEFAULT_CPU);
    selects.gpu.innerHTML = grouped(hw.gpus, DEFAULT_GPU);
    selects.ram.innerHTML = hw.rams.map(function (r) {
      return '<option value="' + esc(r.id) + '"' + (r.amount === 16 ? " selected" : "") + '>' + esc(t(r.name)) + '</option>';
    }).join("");
    document.getElementById("rig-snapshot").textContent = hw.snapshot;
  }

  function find(list, id) {
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return list[0];
  }

  function clamp(value) { return Math.max(0, Math.min(10, value)); }
  function logScale(value, low, high) { return clamp(10 * Math.log(value / low) / Math.log(high / low)); }
  function rounded(value) { return Math.round(value * 10) / 10; }

  /* Memory the GPU can use. Apple and integrated graphics share system RAM. */
  function gpuMemory(gpu, ram) {
    return gpu.vram || (gpu.bench ? Math.round(ram.amount * 0.75) : 0);
  }

  function scoreGpu(gpu, memory) {
    if (gpu.status === "old") return 0.5;
    if (gpu.status === "none") return 1.5;
    var cap = memory < 4 ? 3.5 : memory < 6 ? 5 : memory < 8 ? 6.5 : memory < 12 ? 8.5 : 10;
    return Math.min(logScale(gpu.bench, 60, 12000), cap);
  }

  function capability(task, status, cls) {
    return { task: t(task), status: t(status), cls: cls };
  }

  function evaluate(cpu, gpu, ram) {
    var memory = gpuMemory(gpu, ram);
    var perThread = logScale(cpu.bench / cpu.threads, 3, 24);
    var multi = logScale(cpu.bench, 15, 600);
    var cpuScore = multi * 0.6 + perThread * 0.4;
    var gpuScore = scoreGpu(gpu, memory);
    var ramScore = RAM_SCORE[ram.amount];
    var weakest = Math.min(cpuScore, gpuScore, ramScore);
    var score = rounded(Math.min(gpuScore * 0.45 + cpuScore * 0.3 + ramScore * 0.25, weakest + 3.5));

    var tier = { label: t("Below recommended"), status: "status-bad", description: t("Blender will run, but expect waiting. Stick to small scenes and simple materials.") };
    if (score >= 8.5) {
      tier = { label: t("Studio Powerhouse Rig"), status: "status-good", description: t("Handles large sculpts, complex Geometry Nodes, Cycles renders and physics simulations comfortably.") };
    } else if (score >= 6.5) {
      tier = { label: t("3D Sweet Spot Rig"), status: "status-good", description: t("Good for most Blender work: modelling, texturing, animation and everyday Cycles renders.") };
    } else if (score >= 4.5) {
      tier = { label: t("3D Starter Rig"), status: "status-mid", description: t("Good for the lessons in this course, modelling and simple scenes. Heavy renders and dense sculpts will take longer.") };
    }

    var modelling = perThread >= 6 && ram.amount >= 16
      ? capability("Modelling", "Smooth", "status-good")
      : capability("Modellingt(", perThread >= 4 ? ")Fine for small to medium scenes" : t("Can lag in larger scenes"), perThread >= 4 ? "status-good" : "status-mid");
    var sculpt = ram.amount >= 32 && perThread >= 5
      ? capability("Sculpting", t("Great for dense meshes"), "status-good")
      : (ram.amount >= 16 ? capability("Sculpting", t("Good for medium detail"), "status-good") : capability("Sculpting", t("Small sculpts only"), "status-mid"));
    var bakes = multi >= 7 && ram.amount >= 32
      ? capability(t("Geometry Nodes and simulation"), "Strong", "status-good")
      : (multi >= 4.5 ? capability(t("Geometry Nodes and simulation"), t("Moderate bake times"), "status-mid") : capability(t("Geometry Nodes and simulation"), t("Slow bakes"), "status-bad"));

    var cycles;
    if (!gpu.bench) cycles = capability(t("Cycles rendering"), "CPU onlyt(", cpu.bench >= 300 ? ")status-mid" : "status-bad");
    else {
      var rt = gpu.rt ? t(", hardware ray tracing") : "";
      if (gpu.bench >= 5000) cycles = capability(t("Cycles rendering"), t("Very fast ({detail})", { detail: gpu.backend + rt }), "status-good");
      else if (gpu.bench >= 1500) cycles = capability(t("Cycles rendering"), t("Fast ({detail})", { detail: gpu.backend + rt }), "status-good");
      else if (gpu.bench >= 400) cycles = capability(t("Cycles rendering"), t("Usable ({detail})", { detail: gpu.backend + rt }), "status-mid");
      else cycles = capability(t("Cycles rendering"), t("Slow ({detail})", { detail: gpu.backend }), "status-bad");
    }

    var viewport;
    if (gpu.status === "old") viewport = capability("EEVEE and viewport", t("May not start in Blender 5.2"), "status-bad");
    else if (!gpu.bench) viewport = capability(t("EEVEE and viewport"), t("Light scenes only"), "status-mid");
    else if (gpu.bench >= 1500) viewport = capability(t("EEVEE and viewport"), "Smooth", "status-good");
    else if (gpu.bench >= 300) viewport = capability(t("EEVEE and viewport"), t("Usually smooth"), "status-good");
    else viewport = capability(t("EEVEE and viewport"), t("Low frame rates likely"), "status-mid");

    var scene;
    if (!gpu.bench) scene = capability("GPU memory", t("Not used for Cycles"), "status-mid");
    else {
      var shared = gpu.vram ? "" : t(" shared");
      if (memory >= 16) scene = capability("GPU memory", t("{gb} GB{shared}: large scenes", { gb: memory, shared: shared }), "status-good");
      else if (memory >= 8) scene = capability("GPU memory", t("{gb} GB{shared}: medium scenes", { gb: memory, shared: shared }), "status-good");
      else scene = capability("GPU memory", t("{gb} GB{shared}: can be tight", { gb: memory, shared: shared }), "status-mid");
    }

    return {
      score: score,
      tier: tier,
      upgrade: chooseUpgrade(cpu, gpu, ram, cpuScore, gpuScore, ramScore, memory),
      notes: notesFor(cpu, gpu, ram),
      measure: measureLine(cpu, gpu),
      capabilities: [modelling, sculpt, cycles, viewport, bakes, scene]
    };
  }

  function measureLine(cpu, gpu) {
    var locale = BA.lang === "es" ? "es-ES" : "en-US";
    var line = t("Open Data benchmark: CPU {score}", { score: cpu.bench.toLocaleString(locale) });
    if (!gpu.bench) return line + t(". This GPU has no Cycles result, so renders use the CPU.");
    line += t(", GPU {score}.", { score: gpu.bench.toLocaleString(locale) });
    var ratio = gpu.bench / cpu.bench;
    if (ratio >= 1.2) line += t(" The GPU renders about {ratio} times faster than this CPU.", { ratio: String(ratio >= 10 ? Math.round(ratio) : rounded(ratio)) });
    else if (ratio <= 0.8) line += t(" This CPU renders faster than this GPU, so try both in Blender.");
    else line += t(" This CPU and GPU render at about the same speed.");
    return line;
  }

  function notesFor(cpu, gpu, ram) {
    var notes = [];
    if (gpu.status === "old") notes.push(t("This GPU is below the Blender 5.2 minimum (GeForce 900, AMD GCN 4th gen or Intel Kaby Lake). Blender 4.5 LTS supports older hardware, back to GeForce 400, AMD GCN 1st gen and Intel Broadwell."));
    if (gpu.status === "none") notes.push(t("Blender 5.2 can display on this GPU but cannot render Cycles with it. AMD cards need RDNA1 or newer (RX 5000 and up), and Intel needs Arc. Cycles will use the CPU."));
    if (!!cpu.apple !== !!gpu.apple) notes.push(t("Macs use their built-in Apple GPU. Blender 5.0 and later need Apple Silicon, so Intel Macs should stay on Blender 4.5 LTS."));
    if (cpu.threads < 8) notes.push(t("Blender recommends 8 cores. This CPU has {threads} threads, so simulations and CPU renders will take longer.", { threads: cpu.threads }));
    if (ram.amount === 8) notes.push(t("8 GB is Blender's minimum. The recommended amount is 32 GB."));
    if (gpu.backend === "oneAPI") notes.push(t("With oneAPI, the whole scene has to fit in GPU memory. The other backends can spill into system RAM, though more slowly."));
    if (gpu.vram && gpu.vram < 4 && gpu.bench) notes.push(t("Blender recommends 8 GB of VRAM. Scenes that do not fit will render slower or may fail."));
    return notes;
  }

  function chooseUpgrade(cpu, gpu, ram, cpuScore, gpuScore, ramScore, memory) {
    var locked = gpu.apple || cpu.apple
      ? t(" Mac chips and memory cannot be upgraded later, so this applies to your next Mac.")
      : (gpu.mobile || cpu.mobile ? t(" Laptop CPUs and GPUs usually cannot be swapped, so check what your model allows.") : "");
    var why = {
      gpu: {
        component: t("Graphics card"),
        recommendation: t("A GPU with Cycles support and at least 8 GB of VRAM would help most, and 12 GB or more is safer.") + locked,
        whyTitle: t("Why the GPU matters most here:"),
        whyText: t("Cycles renders on NVIDIA (OptiX or CUDA), AMD RX 5000 and newer (HIP), Intel Arc (oneAPI) or Apple Silicon (Metal). A faster GPU also keeps the viewport responsive.")
      },
      vram: {
        component: t("GPU with more VRAM"),
        recommendation: t("This GPU is fast enough, but its {gb} GB of memory is the limit. Look for 12 GB or more.", { gb: memory }) + locked,
        whyTitle: t("Why VRAM can matter more than speed:"),
        whyText: t("Textures and geometry have to load into GPU memory. When it fills up, Blender moves data to system RAM on most backends. That is slower, and a large scene can still fail.")
      },
      ram: {
        component: ram.amount < 16 ? t("System RAM (16 GB or more)") : t("System RAM (32 GB is Blender's recommendation)"),
        recommendation: t("More memory would help most. Blender recommends 32 GB.") + locked,
        whyTitle: t("Why RAM matters:"),
        whyText: t("Undo history, modifier results and sculpt data all live in system RAM. If it runs out, Blender slows down badly or crashes, and your browser and other apps need memory too.")
      },
      cpu: {
        component: t("Processor (more cores or a newer generation)"),
        recommendation: t("A newer CPU would help most, because this one is the weakest part of the rig.") + locked,
        whyTitle: t("Why the CPU still matters:"),
        whyText: t("Even with a fast GPU, the CPU handles modifiers, Geometry Nodes, simulation baking and scene preparation before each render. Newer generations do more per core, which keeps everyday modelling responsive.")
      }
    };
    if (gpu.status === "old") return why.gpu;
    if (ram.amount < 16) return why.ram;
    var weakest = Math.min(cpuScore, gpuScore, ramScore);
    if (weakest >= 7) {
      return {
        component: t("None needed"),
        recommendation: t("This rig is well balanced for the lessons in this course."),
        whyTitle: t("Why this setup is ready:"),
        whyText: t("Your CPU, GPU and memory all score well, so no single part stands out as the bottleneck.")
      };
    }
    if (ramScore === weakest) return why.ram;
    if (gpuScore === weakest) return memory < 8 && logScale(gpu.bench, 60, 12000) > gpuScore ? why.vram : why.gpu;
    return why.cpu;
  }

  function render() {
    var cpu = find(hw.cpus, selects.cpu.value);
    var gpu = find(hw.gpus, selects.gpu.value);
    var ram = find(hw.rams, selects.ram.value);
    var r = evaluate(cpu, gpu, ram);

    result.innerHTML =
      '<div class="ref-head"><div><p class="ref-meta">' + t("Estimated score") + '</p>' +
      '<p class="mono" id="rig-score" style="font-size:1.6rem;font-weight:800;white-space:nowrap">' + r.score + ' / 10</p></div>' +
      '<div><p class="' + r.tier.status + '" id="rig-tier" style="font-weight:700">' + esc(r.tier.label) + '</p>' +
      '<p class="ref-body">' + esc(r.tier.description) + '</p></div></div>' +
      '<div class="capability-grid">' + r.capabilities.map(function (c) {
        return '<div class="capability"><span class="label">' + esc(c.task) + '</span><span class="status ' + c.cls + '">' + esc(c.status) + '</span></div>';
      }).join("") + '</div>' +
      '<p class="rig-measure" id="rig-measure">' + esc(r.measure) + '</p>' +
      (r.notes.length ? '<ul class="rig-notes">' + r.notes.map(function (n) { return '<li>' + esc(n) + '</li>'; }).join("") + '</ul>' : '') +
      '<div class="upgrade-box"><p id="rig-upgrade"><strong>' + t("Upgrade that would help most:") + '</strong> ' + esc(r.upgrade.component) + '</p>' +
      '<p class="ref-body">' + esc(r.upgrade.recommendation) + '</p>' +
      '<div><button type="button" class="btn btn-small" id="why-btn" aria-expanded="false" aria-controls="why-text">' + t("Why?") + '</button></div>' +
      '<div class="explain" id="why-text" hidden><h2 class="card-title">' + esc(r.upgrade.whyTitle) + '</h2><p>' + esc(r.upgrade.whyText) + '</p></div>' +
      '</div>';
  }

  /* Macs pair an Apple CPU with its own GPU, so keep the two selects in step. */
  function matchApple(changed) {
    var cpu = find(hw.cpus, selects.cpu.value);
    var gpu = find(hw.gpus, selects.gpu.value);
    function sameFamily(a, b) { return a.slice(0, 2) === b.slice(0, 2); }
    function closest(list, chip) {
      return list.filter(function (x) { return x.apple === chip; })[0] ||
        list.filter(function (x) { return x.apple && sameFamily(x.apple, chip); })[0];
    }
    if (changed === "cpu") {
      if (cpu.apple && (!gpu.apple || gpu.apple !== cpu.apple)) {
        var appleGpu = closest(hw.gpus, cpu.apple);
        if (appleGpu) selects.gpu.value = appleGpu.id;
      } else if (!cpu.apple && gpu.apple) selects.gpu.value = DEFAULT_GPU;
    } else if (changed === "gpu") {
      if (gpu.apple && (!cpu.apple || cpu.apple !== gpu.apple)) {
        var appleCpu = closest(hw.cpus, gpu.apple);
        if (appleCpu) selects.cpu.value = appleCpu.id;
      } else if (!gpu.apple && cpu.apple) selects.cpu.value = DEFAULT_CPU;
    }
  }

  result.addEventListener("click", function (e) {
    var btn = e.target.closest("#why-btn");
    if (!btn) return;
    var open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!open));
    document.getElementById("why-text").hidden = open;
  });

  Object.keys(selects).forEach(function (key) {
    selects[key].addEventListener("change", function () {
      matchApple(key);
      render();
    });
  });

  fillSelects();
  render();
  BA.unlock("hardware-tester");
})();
