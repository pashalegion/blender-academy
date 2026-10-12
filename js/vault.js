/**
 * Blender Academy — Free 3D Resource Vault (ZTT Style)
 * Curated directory of the absolute best 100% free textures, models, HDRIs, and tools.
 */

const BLENDER_VAULT = {
  resources: [
    // Textures & PBR Materials
    {
      id: "polyhaven-textures",
      name: "Poly Haven (PBR Textures)",
      category: "textures",
      categoryName: "Textures & Materials",
      icon: "🧱",
      url: "https://polyhaven.com/textures",
      badge: "100% CC0 Free",
      description: "Thousands of uncompressed, photorealistic PBR materials (Albedo, Roughness, Normal, Displacement) up to 8K resolution.",
      whyTopTier: "No account required, no paywalls, completely public domain CC0 for personal and commercial game/film projects."
    },
    {
      id: "ambientcg",
      name: "ambientCG",
      category: "textures",
      categoryName: "Textures & Materials",
      icon: "🎨",
      url: "https://ambientcg.com/",
      badge: "1,800+ Materials",
      description: "Over 1,800 public domain procedural and photogrammetry PBR textures with Substance sbsar files and Blender material packs.",
      whyTopTier: "Maintained by Lennart Demes. Includes SBSAR files, seamless tiling, and 1-click batch downloads."
    },
    {
      id: "sharetextures",
      name: "ShareTextures",
      category: "textures",
      categoryName: "Textures & Materials",
      icon: "📐",
      url: "https://www.sharetextures.com/",
      badge: "ArchViz Focused",
      description: "Exceptional collection of architectural textures: polished marble, herringbone wood flooring, concrete, and ceramic tiles.",
      whyTopTier: "Created by architectural visualizers with realistic real-world scale and seamless UV repeating."
    },

    // 3D Models & Game Kits
    {
      id: "kenney",
      name: "Kenney.nl (Asset Jesus)",
      category: "models",
      categoryName: "3D Models & Kits",
      icon: "🎮",
      url: "https://kenney.nl/assets/category:3d",
      badge: "Game Ready CC0",
      description: "Over 20,000 modular low-poly game assets: medieval villages, sci-fi stations, vehicles, nature, and dungeon kits.",
      whyTopTier: "The legendary indie game developer resource. Everything is modular, cleanly textured, and CC0."
    },
    {
      id: "sketchfab-cc0",
      name: "Sketchfab (Creative Commons)",
      category: "models",
      categoryName: "3D Models & Kits",
      icon: "🏺",
      url: "https://sketchfab.com/feed",
      badge: "Historic & Props",
      description: "World-class 3D gallery with thousands of downloadable CC0 and CC-BY museum scans, vehicles, and character art.",
      whyTopTier: "Inspect wireframes and textures directly in your browser before downloading as .blend or .gltf."
    },
    {
      id: "mixamo",
      name: "Adobe Mixamo",
      category: "models",
      categoryName: "3D Models & Kits",
      icon: "🏃",
      url: "https://www.mixamo.com/",
      badge: "Auto-Rigging & Mocap",
      description: "Free character models and thousands of motion-captured animation clips (walk cycles, combat, dancing, jumping).",
      whyTopTier: "Upload your custom humanoid sculpt and Mixamo automatically rigs it in 60 seconds with full animation clips."
    },

    // Software & Workflow Utilities
    {
      id: "pureref",
      name: "PureRef",
      category: "tools",
      categoryName: "Artist Utilities",
      icon: "🖼️",
      url: "https://www.pureref.com/",
      badge: "Essential Tool",
      description: "The lightweight, infinite canvas reference image viewer used by virtually every 3D modeler and digital artist alive.",
      whyTopTier: "Pins on top of Blender transparently, lets you paste hundreds of reference photos, crop, and zoom with zero lag."
    },
    {
      id: "kspace",
      name: "Krita",
      category: "tools",
      categoryName: "Artist Utilities",
      icon: "🖌️",
      url: "https://krita.org/",
      badge: "Open Source",
      description: "Free, open-source digital painting program perfect for painting custom texture alphas, concept sketches, and decal PNGs.",
      whyTopTier: "Supports wrap-around seamless pattern tiling (W key) for drawing repeating textures effortlessly."
    },

    // HDRIs & Skies
    {
      id: "polyhaven-hdri",
      name: "Poly Haven (HDRIs)",
      category: "hdris",
      categoryName: "HDRIs & Lighting",
      icon: "🌄",
      url: "https://polyhaven.com/hdris",
      badge: "Up to 16K EXR",
      description: "Uncompressed 360° high-dynamic-range panoramic environment maps: sunny studios, twilight forests, industrial warehouses.",
      whyTopTier: "Captures true 32-bit floating point EV stops for 100% photorealistic shadows and camera reflections in Cycles & Eevee."
    },
    {
      id: "hdri-hub",
      name: "HDRI-Hub",
      category: "hdris",
      categoryName: "HDRIs & Lighting",
      icon: "🏙️",
      url: "https://www.hdri-hub.com/hdrishop/freesamples",
      badge: "Urban & Nature",
      description: "High-resolution free sample pack of city streets, highway night lights, and architectural backplates.",
      whyTopTier: "Includes matched perspective camera background photographs for seamless composite rendering."
    }
  ]
};
