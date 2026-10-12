/**
 * Blender Academy Hardware Rig Checker
 * Analyzes CPU, GPU, and RAM to determine Blender performance tiers,
 * bottlenecks, and next recommended upgrade with detailed "Why" explainers.
 */

const BLENDER_HARDWARE = {
  cpus: [
    { id: "cpu-entry", name: "Entry 4-Core (Core i3, older i5, Ryzen 3)", score: 4, type: "entry" },
    { id: "cpu-mid", name: "Mainstream 6-8 Core (Core i5/i7, Ryzen 5/7)", score: 7, type: "mid" },
    { id: "cpu-high", name: "High-End 12-16+ Core (Core i9, Ryzen 9)", score: 9.5, type: "high" },
    { id: "cpu-apple", name: "Apple Silicon (M1 / M2 / M3 / M4)", score: 7.5, type: "apple" }
  ],

  gpus: [
    { id: "gpu-igpu", name: "Integrated Graphics (Intel UHD/Iris, AMD Radeon Vega)", score: 2, vram: 0, rtx: false },
    { id: "gpu-budget", name: "Budget Dedicated (GTX 1050 / 1650 / RX 580 / 4GB)", score: 4.5, vram: 4, rtx: false },
    { id: "gpu-mid", name: "Mainstream RTX (RTX 3060 12GB / RTX 4060 / RX 6700)", score: 7.5, vram: 8, rtx: true },
    { id: "gpu-high", name: "High-End RTX (RTX 3080 / RTX 4070 / 4070 Ti / 12-16GB)", score: 9, vram: 12, rtx: true },
    { id: "gpu-flagship", name: "Studio Flagship (RTX 3090 / 4080 / 4090 / 24GB)", score: 10, vram: 24, rtx: true },
    { id: "gpu-apple", name: "Apple Silicon Integrated GPU (Base / Pro / Max)", score: 6.5, vram: 16, rtx: false }
  ],

  rams: [
    { id: "ram-8", name: "8 GB RAM (Bare Minimum)", amount: 8, score: 3 },
    { id: "ram-16", name: "16 GB RAM (Standard Starter)", amount: 16, score: 7 },
    { id: "ram-32", name: "32 GB RAM (3D Sweet Spot)", amount: 32, score: 9 },
    { id: "ram-64", name: "64 GB+ RAM (Studio / Physics Simulation)", amount: 64, score: 10 }
  ],

  evaluate(cpuId, gpuId, ramId) {
    const cpu = this.cpus.find(c => c.id === cpuId) || this.cpus[1];
    const gpu = this.gpus.find(g => g.id === gpuId) || this.gpus[2];
    const ram = this.rams.find(r => r.id === ramId) || this.rams[1];

    // Calculate weighted Blender score (GPU 50%, RAM 30%, CPU 20%)
    const weightedScore = (gpu.score * 0.5) + (ram.score * 0.3) + (cpu.score * 0.2);
    const score10 = Math.round(weightedScore * 10) / 10;

    // Determine Performance Tier
    let tier = {
      label: "3D Starter Rig",
      color: "text-amber-400",
      badgeBg: "bg-amber-400/10 border-amber-400/20",
      description: "Capable of low-poly modeling, UVs, and simple EEVEE scenes. Heavy Cycles renders or high-poly sculpting will struggle."
    };

    if (score10 >= 8.5) {
      tier = {
        label: "Studio Powerhouse Rig",
        color: "text-emerald-400",
        badgeBg: "bg-emerald-400/10 border-emerald-400/20",
        description: "Effortlessly handles 30M+ vertex sculpts, complex Geometry Nodes, instant OptiX Cycles renders, and physics simulations."
      };
    } else if (score10 >= 6.5) {
      tier = {
        label: "3D Sweet Spot Rig",
        color: "text-cyan-400",
        badgeBg: "bg-cyan-400/10 border-cyan-400/20",
        description: "Great for 90% of Blender workflows: character modeling, texturing, animation, and reasonable Cycles renders."
      };
    }

    // Determine Bottleneck & Upgrade Recommendation
    let upgrade = {
      component: "None needed!",
      recommendation: "Your rig is exceptionally balanced for professional 3D work.",
      whyTitle: "Why your setup is ready:",
      whyText: "You have adequate VRAM for Cycles, enough RAM to prevent Out-of-Core crashes, and sufficient CPU cores for modifiers and physics baking."
    };

    if (ram.amount <= 8) {
      upgrade = {
        component: "System RAM (Upgrade to 16 GB or 32 GB)",
        recommendation: "Upgrade RAM immediately. 8 GB is the critical bottleneck in your system.",
        whyTitle: "Why 8 GB RAM bottlenecks Blender:",
        whyText: "Blender stores undo history, modifier caches, and active viewport geometry directly in system RAM. With only 8 GB, your operating system and background apps consume half, leaving Blender to swap to your hard drive. This causes frequent crashes during Subdivision Surface or Sculpt Mode."
      };
    } else if (!gpu.rtx && gpu.score <= 4.5) {
      upgrade = {
        component: "Graphics Card (GPU with NVIDIA RTX & 12GB+ VRAM)",
        recommendation: "Upgrade to an RTX GPU (such as an RTX 3060 12GB or RTX 4070).",
        whyTitle: "Why GPU & OptiX ray-tracing matters most in Blender:",
        whyText: "Cycles rendering relies heavily on GPU hardware ray-tracing (OptiX). NVIDIA RTX cards render scenes up to 300% faster than older GTX cards and up to 10x faster than integrated graphics. Also, 12GB+ VRAM ensures your scene textures don't exceed GPU memory and cause 'CUDA Out of Memory' render crashes."
      };
    } else if (ram.amount === 16 && gpu.score >= 7.5 && cpu.score >= 7) {
      upgrade = {
        component: "RAM (Upgrade from 16 GB to 32 GB)",
        recommendation: "Upgrade to 32 GB RAM for breathing room during heavy sculpting and simulation.",
        whyTitle: "Why 32 GB RAM is the 3D Sweet Spot:",
        whyText: "While 16 GB is enough for general modeling, character sculpting at 10M+ vertices, Mantaflow fluid bakes, and having Substance Painter or Photoshop open alongside Blender quickly exceeds 16 GB."
      };
    } else if (cpu.score <= 4 && gpu.score >= 7) {
      upgrade = {
        component: "Processor (CPU Upgrade to 6–8+ Cores)",
        recommendation: "Upgrade CPU to a modern 6-core / 12-thread or 8-core processor.",
        whyTitle: "Why CPU single-core and multi-core speed matters:",
        whyText: "While Cycles uses the GPU to render pixels, your CPU handles vertex transforms, modifier calculations (Boolean, Mirror, Solidify), Geometry Nodes execution, physics simulation bakes, and OBJ/FBX file exporting."
      };
    } else if (gpu.vram <= 8 && gpu.score >= 7) {
      upgrade = {
        component: "GPU with higher VRAM (12 GB – 16 GB VRAM)",
        recommendation: "Target a GPU with at least 12 GB or 16 GB of VRAM for complex scenes.",
        whyTitle: "Why VRAM capacity matters over raw compute speed:",
        whyText: "In Blender Cycles, your entire 3D scene (all 4K textures, meshes, particle instances, and HDRIs) must fit completely inside your GPU's VRAM. If it overflows by even 100MB, Blender either drops to excruciatingly slow CPU system RAM or completely crashes."
      };
    }

    return {
      score: score10,
      tier,
      upgrade,
      capabilities: [
        { task: "Low-Poly & Hard Surface Modeling", status: "Smooth", color: "text-emerald-400" },
        { 
          task: "Digital Sculpting (Dyntopo / Remesh)", 
          status: ram.amount <= 8 ? "Limited (<1M polys)" : (ram.amount >= 32 ? "Very High (30M+ polys)" : "Good (5M-10M polys)"),
          color: ram.amount <= 8 ? "text-amber-400" : "text-emerald-400"
        },
        { 
          task: "Cycles Photorealistic Path-Tracing", 
          status: gpu.rtx ? (gpu.score >= 9 ? "Blazing Fast" : "Fast (OptiX)") : "Slow (No RTX / CPU)",
          color: gpu.rtx ? "text-emerald-400" : (gpu.score <= 3 ? "text-red-400" : "text-amber-400")
        },
        { 
          task: "EEVEE Next Real-time Viewport", 
          status: gpu.score <= 3 ? "Low FPS" : "Smooth 60 FPS",
          color: gpu.score <= 3 ? "text-amber-400" : "text-emerald-400"
        }
      ]
    };
  }
};
