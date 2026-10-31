// Lesson metadata only. Bodies live in data/lessons/<id>.js.
// checkedOn: date the YouTube ID was checked (oEmbed). videoChannel: channel reported by oEmbed (null if unavailable).
window.LESSON_TRACKS = [
  {
    "id": "fundamentals",
    "name": "Blender Fundamentals",
    "icon": "🧭",
    "color": "#EA7600",
    "description": "Interface and navigation, core transforms, focused modifier and topology lessons, followed by the Blender 5 donut project as a capstone.",
    "badge": "Donut Apprentice"
  },
  {
    "id": "hardsurface",
    "name": "Hard Surface & Modeling",
    "icon": "📐",
    "color": "#00A2FF",
    "description": "Low-poly modeling, modifiers (bevel, mirror, solidify), booleans, precision CAD techniques.",
    "badge": "Modifier Master"
  },
  {
    "id": "sculpting",
    "name": "Digital Sculpting & Anatomy",
    "icon": "🗿",
    "color": "#E040FB",
    "description": "Sculpting brush fundamentals, Dyntopo vs voxel remesh, and manual retopology.",
    "badge": "Sculpt Titan"
  },
  {
    "id": "shading",
    "name": "Materials, Shading & UVs",
    "icon": "🎨",
    "color": "#00E676",
    "description": "Principled BSDF and PBR fundamentals, UV seam strategy, and procedural node materials.",
    "badge": "Shader Alchemist"
  },
  {
    "id": "lighting",
    "name": "Lighting, Cameras & Render",
    "icon": "💡",
    "color": "#FFD600",
    "description": "Cycles vs Eevee, three-point studio lighting, and HDRI world lighting with Poly Haven.",
    "badge": "Render Maestro"
  },
  {
    "id": "animation",
    "name": "Rigging & Character Animation",
    "icon": "🦴",
    "color": "#FF5252",
    "description": "Armature basics, automatic skinning and weights, and the 12 animation principles with a bouncing ball.",
    "badge": "Keyframe Virtuoso"
  },
  {
    "id": "geonodes",
    "name": "Geometry Nodes & Procedural",
    "icon": "🔮",
    "color": "#7C4DFF",
    "description": "The modern node-based modeling workflow: scattering, procedural cables, generative geometry.",
    "badge": "Node Sorcerer"
  },
  {
    "id": "physics",
    "name": "Physics, Cloth & VFX",
    "icon": "🌊",
    "color": "#00BCD4",
    "description": "Rigid body dynamics and cloth simulation workflows.",
    "badge": "Simulation Wizard"
  }
];
window.LESSONS_INDEX = [
  {
    "id": "fund-1",
    "trackId": "fundamentals",
    "title": "Blender 5 Beginner Course: Interface & Navigation",
    "author": "Grant Abbitt",
    "duration": "13 mins",
    "level": "Absolute Beginner",
    "youtubeId": "kVcY7K-JA1Y",
    "videoUrl": "https://www.youtube.com/watch?v=kVcY7K-JA1Y",
    "videoChannel": "Grant Abbitt (Gabbitt)",
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "tags": [
      "blender 5",
      "interface",
      "navigation",
      "viewport",
      "beginner",
      "transforms"
    ]
  },
  {
    "id": "fund-4",
    "trackId": "fundamentals",
    "title": "Modifiers 101: Subdivision Surface, Mirror & Solidify",
    "author": "CrossMind Studio",
    "duration": "24 mins",
    "level": "Beginner",
    "youtubeId": "qJEWOTrmzpg",
    "videoUrl": "https://www.youtube.com/watch?v=qJEWOTrmzpg",
    "videoChannel": null,
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "tags": [
      "modifiers",
      "subdivision",
      "mirror",
      "solidify",
      "normals",
      "edge loop"
    ]
  },
  {
    "id": "fund-5",
    "trackId": "fundamentals",
    "title": "Clean Mesh Topology & Non-Manifold Geometry",
    "author": "CG Cookie / Kent Trammell",
    "duration": "20 mins",
    "level": "Beginner",
    "youtubeId": "4b4U63oG7YI",
    "videoUrl": "https://www.youtube.com/watch?v=4b4U63oG7YI",
    "videoChannel": null,
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "tags": [
      "topology",
      "quads",
      "ngons",
      "non-manifold",
      "auto smooth",
      "cleanup"
    ]
  },
  {
    "id": "fund-3",
    "trackId": "fundamentals",
    "title": "Complete Beginner Donut Course (Blender 5)",
    "author": "Blender Guru",
    "duration": "Full course",
    "level": "Beginner",
    "youtubeId": "z-Xl9tGqH14",
    "videoUrl": "https://www.youtube.com/watch?v=z-Xl9tGqH14",
    "videoChannel": "Blender Guru",
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "tags": [
      "donut",
      "blender 5",
      "blender guru",
      "beginner",
      "modeling",
      "materials",
      "geometry nodes"
    ],
    "resourceUrl": "https://www.blenderguru.com/posts/blender-donut-v5-tutorial"
  },
  {
    "id": "hard-1",
    "trackId": "hardsurface",
    "title": "Low Poly Game Asset Modeling: The Medieval Well",
    "author": "Grant Abbitt",
    "duration": "35 mins",
    "level": "Beginner",
    "youtubeId": "1pnh4A9Iq48",
    "videoUrl": "https://www.youtube.com/watch?v=1pnh4A9Iq48",
    "videoChannel": null,
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "tags": [
      "low poly",
      "grant abbitt",
      "game assets",
      "medieval well",
      "array modifier"
    ]
  },
  {
    "id": "hard-2",
    "trackId": "hardsurface",
    "title": "Hard Surface Modeling with Booleans & Bevels",
    "author": "Josh Gambrell & Ponte Ryuurui (Blender Bros)",
    "duration": "28 mins",
    "level": "Intermediate",
    "youtubeId": "U4m6gC3d3l0",
    "videoUrl": "https://www.youtube.com/watch?v=U4m6gC3d3l0",
    "videoChannel": null,
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "tags": [
      "hard surface",
      "booleans",
      "bevel",
      "booltool",
      "weighted normal",
      "sci-fi"
    ]
  },
  {
    "id": "hard-3",
    "trackId": "hardsurface",
    "title": "Precision 3D Modeling & Snapping for Architecture",
    "author": "CG Essentials",
    "duration": "26 mins",
    "level": "Intermediate",
    "youtubeId": "WvGk04RkIeI",
    "videoUrl": "https://www.youtube.com/watch?v=WvGk04RkIeI",
    "videoChannel": null,
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "tags": [
      "archviz",
      "precision",
      "snapping",
      "grid",
      "measurements",
      "units"
    ]
  },
  {
    "id": "sculpt-1",
    "trackId": "sculpting",
    "title": "Digital Sculpting 101: Core Brushes & Mechanics",
    "author": "Grant Abbitt / CG Boost",
    "duration": "30 mins",
    "level": "Beginner",
    "youtubeId": "4_R0B1-yL7Y",
    "videoUrl": "https://www.youtube.com/watch?v=4_R0B1-yL7Y",
    "videoChannel": null,
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "tags": [
      "sculpting",
      "brushes",
      "clay strips",
      "tablet",
      "smooth",
      "snake hook"
    ]
  },
  {
    "id": "sculpt-2",
    "trackId": "sculpting",
    "title": "Dyntopo vs Voxel Remesh: The Modern Workflow",
    "author": "SpeedChar / Nikolay Naydenov",
    "duration": "25 mins",
    "level": "Intermediate",
    "youtubeId": "uL0XJm9s3p8",
    "videoUrl": "https://www.youtube.com/watch?v=uL0XJm9s3p8",
    "videoChannel": null,
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "tags": [
      "dyntopo",
      "voxel remesh",
      "speedchar",
      "symmetry",
      "multires"
    ]
  },
  {
    "id": "sculpt-3",
    "trackId": "sculpting",
    "title": "Manual Retopology for Animation & Games",
    "author": "FlippedNormals",
    "duration": "32 mins",
    "level": "Intermediate",
    "youtubeId": "CuQzPDs99yM",
    "videoUrl": "https://www.youtube.com/watch?v=CuQzPDs99yM",
    "videoChannel": "FlippedNormals",
    "videoVersion": "2.8",
    "checkedOn": "2026-10-31",
    "tags": [
      "retopology",
      "shrinkwrap",
      "quads",
      "animation prep",
      "face loops"
    ]
  },
  {
    "id": "shade-1",
    "trackId": "shading",
    "title": "The Principled BSDF & PBR Texturing Fundamentals",
    "author": "Blender Guru",
    "duration": "28 mins",
    "level": "Beginner",
    "youtubeId": "4H5W6C_Mbck",
    "videoUrl": "https://www.youtube.com/watch?v=4H5W6C_Mbck",
    "videoChannel": "Blender Guru",
    "videoVersion": "2.79",
    "checkedOn": "2026-10-31",
    "tags": [
      "materials",
      "pbr",
      "principled bsdf",
      "roughness",
      "metallic",
      "normal map"
    ]
  },
  {
    "id": "shade-2",
    "trackId": "shading",
    "title": "UV Unwrapping & Seam Strategy Made Simple",
    "author": "Ryan King Art",
    "duration": "30 mins",
    "level": "Beginner",
    "youtubeId": "qa_1LjeWsJg",
    "videoUrl": "https://www.youtube.com/watch?v=qa_1LjeWsJg",
    "videoChannel": "Ryan King Art",
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "tags": [
      "uv unwrap",
      "seams",
      "texel density",
      "uv editor",
      "texture mapping"
    ]
  },
  {
    "id": "shade-3",
    "trackId": "shading",
    "title": "Procedural Shading: Creating Real Materials with Math",
    "author": "Ducky 3D",
    "duration": "25 mins",
    "level": "Intermediate",
    "youtubeId": "j6fKkG7_pA8",
    "videoUrl": "https://www.youtube.com/watch?v=j6fKkG7_pA8",
    "videoChannel": null,
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "tags": [
      "procedural",
      "shader nodes",
      "ducky 3d",
      "voronoi",
      "colorramp",
      "bump"
    ]
  },
  {
    "id": "light-1",
    "trackId": "lighting",
    "title": "Cycles vs Eevee: Choosing Your Render Engine",
    "author": "CG Geek",
    "duration": "22 mins",
    "level": "Beginner",
    "youtubeId": "QzVzXF395Zg",
    "videoUrl": "https://www.youtube.com/watch?v=QzVzXF395Zg",
    "videoChannel": null,
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "tags": [
      "cycles",
      "eevee",
      "denoising",
      "render",
      "agx",
      "color management"
    ]
  },
  {
    "id": "light-2",
    "trackId": "lighting",
    "title": "Cinematic 3-Point Studio Lighting & Mood",
    "author": "Gleb Alexandrov / Creative Shrimp",
    "duration": "27 mins",
    "level": "Intermediate",
    "youtubeId": "m-N149FMlWk",
    "videoUrl": "https://www.youtube.com/watch?v=m-N149FMlWk",
    "videoChannel": "Blender Guru",
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "tags": [
      "lighting",
      "3 point lighting",
      "gleb alexandrov",
      "rim light",
      "soft shadows"
    ]
  },
  {
    "id": "light-3",
    "trackId": "lighting",
    "title": "Photorealistic HDRI World Lighting & Poly Haven",
    "author": "Curtis Holt",
    "duration": "19 mins",
    "level": "Beginner",
    "youtubeId": "V_x4H8r6P_U",
    "videoUrl": "https://www.youtube.com/watch?v=V_x4H8r6P_U",
    "videoChannel": null,
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "tags": [
      "hdri",
      "poly haven",
      "world lighting",
      "environment texture",
      "transparent film"
    ]
  },
  {
    "id": "anim-1",
    "trackId": "animation",
    "title": "Bones & Armature Fundamentals: Your First Rig",
    "author": "Royal Skies LLC",
    "duration": "18 mins",
    "level": "Beginner",
    "youtubeId": "f280dE6w318",
    "videoUrl": "https://www.youtube.com/watch?v=f280dE6w318",
    "videoChannel": null,
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "tags": [
      "rigging",
      "armature",
      "bones",
      "ik",
      "pose mode",
      "royal skies"
    ]
  },
  {
    "id": "anim-2",
    "trackId": "animation",
    "title": "Skinning & Automatic Weights: Fixing The Dreaded Error",
    "author": "Dikko",
    "duration": "26 mins",
    "level": "Beginner to Intermediate",
    "youtubeId": "T7y_LqU_JkE",
    "videoUrl": "https://www.youtube.com/watch?v=T7y_LqU_JkE",
    "videoChannel": null,
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "tags": [
      "skinning",
      "weight painting",
      "automatic weights",
      "bone heat error",
      "dikko"
    ]
  },
  {
    "id": "anim-3",
    "trackId": "animation",
    "title": "The 12 Principles: Bouncing Ball & The Graph Editor",
    "author": "Alan Becker Tutorials & Pierrick Picaut",
    "duration": "25 mins",
    "level": "Beginner",
    "youtubeId": "uDqjIdI4bF4",
    "videoUrl": "https://www.youtube.com/watch?v=uDqjIdI4bF4",
    "videoChannel": "AlanBeckerTutorials",
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "tags": [
      "animation",
      "graph editor",
      "bouncing ball",
      "squash and stretch",
      "keyframes"
    ]
  },
  {
    "id": "geo-1",
    "trackId": "geonodes",
    "title": "Geometry Nodes 101: The Modern Procedural Way",
    "author": "Joey Carlino & CG Cookie",
    "duration": "24 mins",
    "level": "Beginner",
    "youtubeId": "p_6F1eK1s6U",
    "videoUrl": "https://www.youtube.com/watch?v=p_6F1eK1s6U",
    "videoChannel": null,
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "tags": [
      "geometry nodes",
      "procedural",
      "distribute points",
      "instancing",
      "joey carlino"
    ]
  },
  {
    "id": "geo-2",
    "trackId": "geonodes",
    "title": "Procedural Curves, Cables & Sci-Fi Pipes",
    "author": "Erindale & CrossMind Studio",
    "duration": "26 mins",
    "level": "Intermediate",
    "youtubeId": "J8C_tA7E6a0",
    "videoUrl": "https://www.youtube.com/watch?v=J8C_tA7E6a0",
    "videoChannel": null,
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "tags": [
      "curves",
      "cables",
      "pipes",
      "curve to mesh",
      "erindale",
      "procedural generator"
    ]
  },
  {
    "id": "phys-1",
    "trackId": "physics",
    "title": "Rigid Body Physics: Destruction & Falling Dominos",
    "author": "CG Geek",
    "duration": "20 mins",
    "level": "Beginner",
    "youtubeId": "GqYhT65mD8U",
    "videoUrl": "https://www.youtube.com/watch?v=GqYhT65mD8U",
    "videoChannel": null,
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "tags": [
      "physics",
      "rigid body",
      "dominos",
      "destruction",
      "cell fracture",
      "collisions"
    ]
  },
  {
    "id": "phys-2",
    "trackId": "physics",
    "title": "Realistic Cloth Simulation: Pillows & Fabric",
    "author": "Blender Guru",
    "duration": "24 mins",
    "level": "Beginner to Intermediate",
    "youtubeId": "F4s4xV4wJq0",
    "videoUrl": "https://www.youtube.com/watch?v=F4s4xV4wJq0",
    "videoChannel": null,
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "tags": [
      "cloth simulation",
      "pillows",
      "fabric",
      "cloth brush",
      "pressure",
      "folds"
    ]
  }
];
