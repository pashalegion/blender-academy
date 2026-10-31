/*
 * Rig checker. The score is a rule-of-thumb model: GPU 50%, RAM 30%, CPU 20%.
 * It is not a benchmark. Speed claims are deliberately left out.
 */
(function () {
  "use strict";
  var BA = window.BlenderAcademy;
  var esc = BA.esc;
  var hw = window.BLENDER_REFERENCE.hardware;

  var selects = {
    cpu: document.getElementById("cpu"),
    gpu: document.getElementById("gpu"),
    ram: document.getElementById("ram")
  };
  var result = document.getElementById("rig-result");

  function backendGroup(gpu) {
    if (/CUDA|OptiX/.test(gpu.backend)) return "NVIDIA (CUDA / OptiX)";
    if (gpu.backend === "HIP") return "AMD (HIP)";
    if (gpu.backend === "Metal") return "Apple (Metal)";
    return "Integrated graphics";
  }

  function fillSelects() {
    selects.cpu.innerHTML = hw.cpus.map(function (c) {
      return '<option value="' + esc(c.id) + '"' + (c.id === "cpu-mid" ? " selected" : "") + '>' + esc(c.name) + '</option>';
    }).join("");

    var groups = {};
    var order = [];
    hw.gpus.forEach(function (g) {
      var label = backendGroup(g);
      if (!groups[label]) { groups[label] = []; order.push(label); }
      groups[label].push(g);
    });
    selects.gpu.innerHTML = order.map(function (label) {
      return '<optgroup label="' + esc(label) + '">' + groups[label].map(function (g) {
        return '<option value="' + esc(g.id) + '"' + (g.id === "gpu-rtx-mid" ? " selected" : "") + '>' + esc(g.name) + '</option>';
      }).join("") + '</optgroup>';
    }).join("");

    selects.ram.innerHTML = hw.rams.map(function (r) {
      return '<option value="' + esc(r.id) + '"' + (r.id === "ram-16" ? " selected" : "") + '>' + esc(r.name) + '</option>';
    }).join("");
  }

  function find(list, id, fallback) {
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return fallback;
  }

  function evaluate(cpu, gpu, ram) {
    var weighted = gpu.score * 0.5 + ram.score * 0.3 + cpu.score * 0.2;
    var score = Math.round(weighted * 10) / 10;

    var tier = {
      label: "3D Starter Rig",
      status: "status-mid",
      description: "Good for low-poly modelling, UVs and simple EEVEE scenes. Heavy Cycles renders or high-poly sculpting will be slow."
    };
    if (score >= 8.5) {
      tier = { label: "Studio Powerhouse Rig", status: "status-good", description: "Handles very large sculpts, complex Geometry Nodes, GPU Cycles renders and physics simulations comfortably." };
    } else if (score >= 6.5) {
      tier = { label: "3D Sweet Spot Rig", status: "status-good", description: "Good for most Blender work: modelling, texturing, animation and everyday Cycles renders." };
    }

    var upgrade = {
      component: "None needed",
      recommendation: "This rig is well balanced for the lessons in this course.",
      whyTitle: "Why this setup is ready:",
      whyText: "The memory, GPU and CPU levels are each adequate for the lessons, so no single part stands out as the bottleneck."
    };
    if (ram.amount <= 8) {
      upgrade = {
        component: "System RAM (upgrade to 16 GB or more)",
        recommendation: "8 GB is the most likely bottleneck. Add memory first.",
        whyTitle: "Why 8 GB RAM is tight for Blender:",
        whyText: "Blender keeps undo history, modifier results and viewport geometry in system RAM. With 8 GB, the operating system and other apps use much of it, so scenes are more likely to run out of memory or slow down, especially with Subdivision Surface or Sculpt Mode."
      };
    } else if (!gpu.rtx && gpu.score <= 4.5) {
      upgrade = {
        component: "Graphics card (NVIDIA RTX with 12 GB or more VRAM)",
        recommendation: "A GPU with hardware ray tracing and more VRAM would help most for Cycles renders.",
        whyTitle: "Why the GPU matters for Cycles:",
        whyText: "Cycles can use the GPU through CUDA or OptiX (NVIDIA), HIP (AMD) or Metal (Apple). Hardware ray tracing is available on NVIDIA RTX cards with OptiX. The whole scene, including textures and geometry, must fit in VRAM, or the render may fail. How much faster a GPU is depends on the scene, so treat any speed comparison as an estimate."
      };
    } else if (ram.amount === 16 && gpu.score >= 7.5 && cpu.score >= 7) {
      upgrade = {
        component: "RAM (upgrade from 16 GB to 32 GB)",
        recommendation: "32 GB gives more room for heavy sculpting, simulation and other apps open next to Blender.",
        whyTitle: "Why 32 GB suits heavy work:",
        whyText: "16 GB is enough for general modelling. Dense sculpts, fluid or cloth caches and running other creative apps alongside Blender can use more memory than that."
      };
    } else if (cpu.score <= 4 && gpu.score >= 7) {
      upgrade = {
        component: "Processor (6–8 cores or more)",
        recommendation: "A 6-core or 8-core CPU will keep modifiers, simulations and exports moving.",
        whyTitle: "Why the CPU still matters:",
        whyText: "Cycles uses the GPU to render pixels, but the CPU handles modifier evaluation, Geometry Nodes, simulation baking and file export."
      };
    } else if (gpu.vram <= 8 && gpu.score >= 7) {
      upgrade = {
        component: "GPU with more VRAM (12–16 GB or more)",
        recommendation: "Choose a GPU with more VRAM if your scenes use large textures or many instances.",
        whyTitle: "Why VRAM can matter more than speed:",
        whyText: "In Cycles, the scene must fit in GPU memory. If it does not, the render may fall back to slower paths or fail. More VRAM avoids that limit."
      };
    }

    var cycles = gpu.accel
      ? { status: score >= 9 ? "Very fast (GPU)" : "Fast (" + gpu.backend + ")", cls: "status-good" }
      : { status: "Slow (no GPU backend)", cls: "status-bad" };
    var sculpt = ram.amount <= 8
      ? { status: "Limited (under 1M polygons, rule of thumb)", cls: "status-mid" }
      : (ram.amount >= 32
        ? { status: "Very high (30M+ polygons, rule of thumb)", cls: "status-good" }
        : { status: "Good (5M–10M polygons, rule of thumb)", cls: "status-good" });
    var viewport = gpu.score <= 3
      ? { status: "Likely low frame rate", cls: "status-mid" }
      : { status: "Usually smooth", cls: "status-good" };

    return {
      score: score,
      tier: tier,
      upgrade: upgrade,
      capabilities: [
        { task: "Low-poly and hard-surface modelling", status: "Smooth", cls: "status-good" },
        { task: "Digital sculpting", status: sculpt.status, cls: sculpt.cls },
        { task: "Cycles rendering", status: cycles.status, cls: cycles.cls },
        { task: "EEVEE viewport", status: viewport.status, cls: viewport.cls }
      ]
    };
  }

  function render() {
    var cpu = find(hw.cpus, selects.cpu.value, hw.cpus[1]);
    var gpu = find(hw.gpus, selects.gpu.value, hw.gpus[2]);
    var ram = find(hw.rams, selects.ram.value, hw.rams[1]);
    var r = evaluate(cpu, gpu, ram);

    result.innerHTML =
      '<div class="ref-head"><div><p class="ref-meta">Estimated score</p>' +
      '<p class="mono" style="font-size:1.6rem;font-weight:800">' + r.score + ' / 10</p></div>' +
      '<div><p class="' + r.tier.status + '" style="font-weight:700">' + esc(r.tier.label) + '</p>' +
      '<p class="ref-body">' + esc(r.tier.description) + '</p></div></div>' +
      '<div class="capability-grid">' + r.capabilities.map(function (c) {
        return '<div class="capability"><span class="label">' + esc(c.task) + '</span><span class="status ' + c.cls + '">' + esc(c.status) + '</span></div>';
      }).join("") + '</div>' +
      '<div class="upgrade-box"><p><strong>Upgrade that would help most:</strong> ' + esc(r.upgrade.component) + '</p>' +
      '<p class="ref-body">' + esc(r.upgrade.recommendation) + '</p>' +
      '<div><button type="button" class="btn btn-small" id="why-btn" aria-expanded="false" aria-controls="why-text">Why?</button></div>' +
      '<div class="explain" id="why-text" hidden><h2 class="card-title">' + esc(r.upgrade.whyTitle) + '</h2><p>' + esc(r.upgrade.whyText) + '</p></div>' +
      '</div>';
  }

  result.addEventListener("click", function (e) {
    var btn = e.target.closest("#why-btn");
    if (!btn) return;
    var open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!open));
    document.getElementById("why-text").hidden = open;
  });

  Object.keys(selects).forEach(function (key) {
    selects[key].addEventListener("change", render);
  });

  fillSelects();
  render();
  BA.unlock("hardware-tester");
})();
