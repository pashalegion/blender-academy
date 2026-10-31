// Lesson metadata only. Bodies live in data/lessons/<id>.js.
// checkedOn: date the YouTube ID was checked (oEmbed). videoChannel: channel reported by oEmbed (null if unavailable).
window.LESSON_TRACKS = [
  {
    "id": "fundamentals",
    "name": "Blender Fundamentals",
    "icon": "🧭",
    "color": "#EA7600",
    "description": "Interface and navigation, essential mesh tools, modifiers, topology, scene organization, the Asset Browser, then the Blender 5 donut project.",
    "badge": "Donut Apprentice"
  },
  {
    "id": "hardsurface",
    "name": "Hard Surface & Modeling",
    "icon": "📐",
    "color": "#00A2FF",
    "description": "Low-poly modeling, booleans and bevels, precision techniques, and designing for 3D printing.",
    "badge": "Modifier Master"
  },
  {
    "id": "sculpting",
    "name": "Digital Sculpting & Anatomy",
    "icon": "🗿",
    "color": "#E040FB",
    "description": "Sculpting brush fundamentals, Dyntopo vs voxel remesh, manual retopology, and hair grooming.",
    "badge": "Sculpt Titan"
  },
  {
    "id": "shading",
    "name": "Materials, Shading & UVs",
    "icon": "🎨",
    "color": "#00E676",
    "description": "Principled BSDF and PBR fundamentals, UV seams and packing, procedural materials, texture painting, and baking.",
    "badge": "Shader Alchemist"
  },
  {
    "id": "lighting",
    "name": "Lighting, Cameras & Render",
    "icon": "💡",
    "color": "#FFD600",
    "description": "Cycles vs Eevee, three-point lighting, HDRI world lighting, and camera work.",
    "badge": "Render Maestro"
  },
  {
    "id": "animation",
    "name": "Rigging & Character Animation",
    "icon": "🦴",
    "color": "#FF5252",
    "description": "Armatures, skinning, the 12 animation principles, constraints, shape keys, the NLA Editor, drivers, and 2D Grease Pencil animation.",
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
    "description": "Rigid bodies, cloth, liquid, smoke, fire and particle simulations.",
    "badge": "Simulation Wizard"
  },
  {
    "id": "pipeline",
    "name": "Post-Production & Pipeline",
    "icon": "🎞️",
    "color": "#FF7AB6",
    "description": "Finish and ship your work: compositing, video editing, motion tracking, exporting to game engines, and Python scripting.",
    "badge": "Pipeline Pro"
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
    "id": "fund-6",
    "trackId": "fundamentals",
    "title": "Essential Mesh Editing: Extrude, Inset, Bevel & Loop Cut",
    "author": "Ghost Studios",
    "duration": "7 mins",
    "level": "Absolute Beginner",
    "youtubeId": "MKA6ks7C3Ec",
    "videoUrl": "https://www.youtube.com/watch?v=MKA6ks7C3Ec",
    "videoChannel": "Ghost Studios",
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "manualUrl": "https://docs.blender.org/manual/en/5.2/modeling/meshes/tools/extrude_region.html",
    "tags": [
      "edit mode",
      "extrude",
      "inset",
      "bevel",
      "loop cut",
      "modeling basics"
    ]
  },
  {
    "id": "fund-4",
    "trackId": "fundamentals",
    "title": "Modifiers 101: Subdivision Surface, Mirror & Solidify",
    "author": "Ryan King Art",
    "duration": "46 mins",
    "level": "Beginner",
    "youtubeId": "F_f-O-W9lMU",
    "videoUrl": "https://www.youtube.com/watch?v=F_f-O-W9lMU",
    "videoChannel": "Ryan King Art",
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
    "author": "SouthernShotty",
    "duration": "9 mins",
    "level": "Beginner",
    "youtubeId": "HUjpeqpd53A",
    "videoUrl": "https://www.youtube.com/watch?v=HUjpeqpd53A",
    "videoChannel": "SouthernShotty",
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
    "id": "fund-7",
    "trackId": "fundamentals",
    "title": "Stay Organized: Outliner, Collections, Link & Append",
    "author": "Ryan King Art",
    "duration": "13 mins",
    "level": "Beginner",
    "youtubeId": "ph6QUXNq5aE",
    "videoUrl": "https://www.youtube.com/watch?v=ph6QUXNq5aE",
    "videoChannel": "Ryan King Art",
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "manualUrl": "https://docs.blender.org/manual/en/5.2/scene_layout/collections/collections.html",
    "tags": [
      "outliner",
      "collections",
      "append",
      "link",
      "scene organization",
      "library overrides"
    ]
  },
  {
    "id": "fund-8",
    "trackId": "fundamentals",
    "title": "Asset Browser: Build Scenes Faster with Reusable Assets",
    "author": "Grant Abbitt",
    "duration": "9 mins",
    "level": "Beginner",
    "youtubeId": "j1EhPPFrZgk",
    "videoUrl": "https://www.youtube.com/watch?v=j1EhPPFrZgk",
    "videoChannel": "Grant Abbitt (Gabbitt)",
    "videoVersion": "5.1",
    "checkedOn": "2026-10-31",
    "manualUrl": "https://docs.blender.org/manual/en/5.2/editors/asset_browser.html",
    "tags": [
      "asset browser",
      "asset library",
      "reuse",
      "catalogs",
      "materials"
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
    "duration": "15 mins",
    "level": "Beginner",
    "youtubeId": "QPh8h0hWkg0",
    "videoUrl": "https://www.youtube.com/watch?v=QPh8h0hWkg0",
    "videoChannel": "Grant Abbitt (Gabbitt)",
    "videoVersion": "4.2",
    "checkedOn": "2026-10-31",
    "tags": [
      "low poly",
      "game assets",
      "medieval well",
      "array modifier"
    ]
  },
  {
    "id": "hard-2",
    "trackId": "hardsurface",
    "title": "Hard Surface Modeling with Booleans & Bevels",
    "author": "Josh Gambrell (Blender Bros)",
    "duration": "9 mins",
    "level": "Intermediate",
    "youtubeId": "lCA1AFEQ_z4",
    "videoUrl": "https://www.youtube.com/watch?v=lCA1AFEQ_z4",
    "videoChannel": "Josh - Blender Bros",
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
    "author": "SFE-Viz",
    "duration": "37 mins",
    "level": "Intermediate",
    "youtubeId": "-yFnkQHHoWY",
    "videoUrl": "https://www.youtube.com/watch?v=-yFnkQHHoWY",
    "videoChannel": "SFE-Viz",
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
    "id": "hard-4",
    "trackId": "hardsurface",
    "title": "Design for 3D Printing: From Blender to Slicer",
    "author": "ZeroDotCMD",
    "duration": "23 mins",
    "level": "Intermediate",
    "youtubeId": "PHh-uNbCCs8",
    "videoUrl": "https://www.youtube.com/watch?v=PHh-uNbCCs8",
    "videoChannel": "ZeroDotCMD",
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "manualUrl": "https://docs.blender.org/manual/en/5.2/files/import_export/stl.html",
    "tags": [
      "3d printing",
      "stl",
      "manifold",
      "units",
      "3d print toolbox",
      "thickness"
    ]
  },
  {
    "id": "sculpt-1",
    "trackId": "sculpting",
    "title": "Digital Sculpting 101: Core Brushes & Mechanics",
    "author": "Grant Abbitt",
    "duration": "37 mins",
    "level": "Beginner",
    "youtubeId": "K7AJVx0H3Ec",
    "videoUrl": "https://www.youtube.com/watch?v=K7AJVx0H3Ec",
    "videoChannel": "Grant Abbitt (Gabbitt)",
    "videoVersion": "4.4",
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
    "author": "Grant Abbitt",
    "duration": "13 mins",
    "level": "Intermediate",
    "youtubeId": "Y6asaZsDHCg",
    "videoUrl": "https://www.youtube.com/watch?v=Y6asaZsDHCg",
    "videoChannel": "Grant Abbitt (Gabbitt)",
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "tags": [
      "dyntopo",
      "voxel remesh",
      "symmetry",
      "multires"
    ]
  },
  {
    "id": "sculpt-3",
    "trackId": "sculpting",
    "title": "Manual Retopology for Animation & Games",
    "author": "Ryan King Art",
    "duration": "21 mins",
    "level": "Intermediate",
    "youtubeId": "1myOZaxtHes",
    "videoUrl": "https://www.youtube.com/watch?v=1myOZaxtHes",
    "videoChannel": "Ryan King Art",
    "videoVersion": null,
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
    "id": "sculpt-4",
    "trackId": "sculpting",
    "title": "Hair & Fur: Grooming with Hair Curves",
    "author": "Martin Klekner",
    "duration": "12 mins",
    "level": "Intermediate",
    "youtubeId": "bIsJquzVsPY",
    "videoUrl": "https://www.youtube.com/watch?v=bIsJquzVsPY",
    "videoChannel": "Martin Klekner",
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "manualUrl": "https://docs.blender.org/manual/en/5.2/sculpt_paint/curves_sculpting/introduction.html",
    "tags": [
      "hair",
      "fur",
      "curves sculpt",
      "grooming",
      "hair curves",
      "geometry nodes"
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
    "id": "shade-6",
    "trackId": "shading",
    "title": "UV Layouts for Games: Packing & Texel Density",
    "author": "On Mars 3D",
    "duration": "13 mins",
    "level": "Intermediate",
    "youtubeId": "nkUuidQb4Tk",
    "videoUrl": "https://www.youtube.com/watch?v=nkUuidQb4Tk",
    "videoChannel": "On Mars 3D",
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "manualUrl": "https://docs.blender.org/manual/en/5.2/modeling/meshes/uv/editing.html",
    "tags": [
      "uv packing",
      "texel density",
      "pack islands",
      "game art",
      "uv layout"
    ]
  },
  {
    "id": "shade-3",
    "trackId": "shading",
    "title": "Procedural Shading: Creating Real Materials with Math",
    "author": "Ryan King Art",
    "duration": "23 mins",
    "level": "Intermediate",
    "youtubeId": "J5t7gzIfTt0",
    "videoUrl": "https://www.youtube.com/watch?v=J5t7gzIfTt0",
    "videoChannel": "Ryan King Art",
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "tags": [
      "procedural",
      "shader nodes",
      "voronoi",
      "colorramp",
      "bump"
    ]
  },
  {
    "id": "shade-4",
    "trackId": "shading",
    "title": "Texture Painting: Paint Directly on Your Model",
    "author": "Grant Abbitt",
    "duration": "21 mins",
    "level": "Beginner",
    "youtubeId": "7kSRXnAi7uA",
    "videoUrl": "https://www.youtube.com/watch?v=7kSRXnAi7uA",
    "videoChannel": "Grant Abbitt (Gabbitt)",
    "videoVersion": "5.1",
    "checkedOn": "2026-10-31",
    "manualUrl": "https://docs.blender.org/manual/en/5.2/sculpt_paint/texture_paint/introduction.html",
    "tags": [
      "texture painting",
      "paint",
      "uv",
      "stylized",
      "texture slots",
      "hand painted"
    ]
  },
  {
    "id": "shade-5",
    "trackId": "shading",
    "title": "Baking Textures: High-Poly Detail on a Low-Poly Mesh",
    "author": "Ryan King Art",
    "duration": "13 mins",
    "level": "Intermediate",
    "youtubeId": "Zxl38NpPWdo",
    "videoUrl": "https://www.youtube.com/watch?v=Zxl38NpPWdo",
    "videoChannel": "Ryan King Art",
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "manualUrl": "https://docs.blender.org/manual/en/5.2/render/cycles/baking.html",
    "tags": [
      "baking",
      "normal map",
      "high poly",
      "low poly",
      "selected to active",
      "game assets"
    ]
  },
  {
    "id": "light-1",
    "trackId": "lighting",
    "title": "Cycles vs Eevee: Choosing Your Render Engine",
    "author": "The Blenderender",
    "duration": "3 mins",
    "level": "Beginner",
    "youtubeId": "Enggo_nqDHs",
    "videoUrl": "https://www.youtube.com/watch?v=Enggo_nqDHs",
    "videoChannel": "The Blenderender",
    "videoVersion": "4.2",
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
    "author": "Blender Guru",
    "duration": "43 mins",
    "level": "Intermediate",
    "youtubeId": "ENnEYoUpFfU",
    "videoUrl": "https://www.youtube.com/watch?v=ENnEYoUpFfU",
    "videoChannel": "Blender Guru",
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "tags": [
      "lighting",
      "3 point lighting",
      "rim light",
      "soft shadows"
    ]
  },
  {
    "id": "light-3",
    "trackId": "lighting",
    "title": "Photorealistic HDRI World Lighting & Poly Haven",
    "author": "The CG Essentials",
    "duration": "22 mins",
    "level": "Beginner",
    "youtubeId": "N3DZL56cG84",
    "videoUrl": "https://www.youtube.com/watch?v=N3DZL56cG84",
    "videoChannel": "The CG Essentials",
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
    "id": "light-4",
    "trackId": "lighting",
    "title": "Camera & Composition: Lenses, Focus & Framing",
    "author": "Ryan King Art",
    "duration": "16 mins",
    "level": "Beginner",
    "youtubeId": "aY04h4ujrlY",
    "videoUrl": "https://www.youtube.com/watch?v=aY04h4ujrlY",
    "videoChannel": "Ryan King Art",
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "manualUrl": "https://docs.blender.org/manual/en/5.2/render/cameras.html",
    "tags": [
      "camera",
      "focal length",
      "depth of field",
      "composition",
      "framing",
      "f-stop"
    ]
  },
  {
    "id": "anim-1",
    "trackId": "animation",
    "title": "Bones & Armature Fundamentals: Your First Rig",
    "author": "Joey Carlino",
    "duration": "10 mins",
    "level": "Beginner",
    "youtubeId": "DDeB4tDVCGY",
    "videoUrl": "https://www.youtube.com/watch?v=DDeB4tDVCGY",
    "videoChannel": "Joey Carlino",
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "tags": [
      "rigging",
      "armature",
      "bones",
      "ik",
      "pose mode"
    ]
  },
  {
    "id": "anim-2",
    "trackId": "animation",
    "title": "Skinning & Automatic Weights: Fixing The Dreaded Error",
    "author": "CGDive",
    "duration": "18 mins",
    "level": "Beginner to Intermediate",
    "youtubeId": "FuiY0wtxdHQ",
    "videoUrl": "https://www.youtube.com/watch?v=FuiY0wtxdHQ",
    "videoChannel": "CGDive (Blender Rigging Tuts)",
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "tags": [
      "skinning",
      "weight painting",
      "automatic weights",
      "bone heat error"
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
    "id": "anim-4",
    "trackId": "animation",
    "title": "Constraints: Make Objects Follow, Aim & Attach",
    "author": "Ryan King Art",
    "duration": "49 mins",
    "level": "Intermediate",
    "youtubeId": "fQJK3thkh0k",
    "videoUrl": "https://www.youtube.com/watch?v=fQJK3thkh0k",
    "videoChannel": "Ryan King Art",
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "manualUrl": "https://docs.blender.org/manual/en/5.2/animation/constraints/introduction.html",
    "tags": [
      "constraints",
      "track to",
      "child of",
      "copy location",
      "follow path",
      "rigging"
    ]
  },
  {
    "id": "anim-5",
    "trackId": "animation",
    "title": "Shape Keys: Facial Expressions & Morphing",
    "author": "Ryan King Art",
    "duration": "26 mins",
    "level": "Intermediate",
    "youtubeId": "Kumk-reupso",
    "videoUrl": "https://www.youtube.com/watch?v=Kumk-reupso",
    "videoChannel": "Ryan King Art",
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "manualUrl": "https://docs.blender.org/manual/en/5.2/animation/shape_keys/introduction.html",
    "tags": [
      "shape keys",
      "facial animation",
      "morph targets",
      "blend shapes",
      "expressions"
    ]
  },
  {
    "id": "anim-7",
    "trackId": "animation",
    "title": "NLA Editor: Layer & Reuse Your Animations",
    "author": "Joey Carlino",
    "duration": "19 mins",
    "level": "Intermediate",
    "youtubeId": "Vud9Ora9IwE",
    "videoUrl": "https://www.youtube.com/watch?v=Vud9Ora9IwE",
    "videoChannel": "Joey Carlino",
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "manualUrl": "https://docs.blender.org/manual/en/5.2/editors/nla/introduction.html",
    "tags": [
      "nla",
      "nonlinear animation",
      "actions",
      "animation layers",
      "strips"
    ]
  },
  {
    "id": "anim-8",
    "trackId": "animation",
    "title": "Drivers: Link Values with Simple Math",
    "author": "The CG Essentials",
    "duration": "5 mins",
    "level": "Intermediate",
    "youtubeId": "XfHC7mpYNbA",
    "videoUrl": "https://www.youtube.com/watch?v=XfHC7mpYNbA",
    "videoChannel": "The CG Essentials",
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "manualUrl": "https://docs.blender.org/manual/en/5.2/animation/drivers/introduction.html",
    "tags": [
      "drivers",
      "expressions",
      "automation",
      "rigging",
      "properties"
    ]
  },
  {
    "id": "anim-6",
    "trackId": "animation",
    "title": "Grease Pencil: Draw & Animate in 2D",
    "author": "Micah Buzan",
    "duration": "12 mins",
    "level": "Beginner",
    "youtubeId": "ZkqZRe9IXQ8",
    "videoUrl": "https://www.youtube.com/watch?v=ZkqZRe9IXQ8",
    "videoChannel": "Micah Buzan ANIMATION",
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "manualUrl": "https://docs.blender.org/manual/en/5.2/grease_pencil/introduction.html",
    "tags": [
      "grease pencil",
      "2d animation",
      "drawing",
      "onion skinning",
      "storyboard"
    ]
  },
  {
    "id": "geo-1",
    "trackId": "geonodes",
    "title": "Geometry Nodes 101: The Modern Procedural Way",
    "author": "Blender Guru",
    "duration": "14 mins",
    "level": "Beginner",
    "youtubeId": "aO0eUnu0hO0",
    "videoUrl": "https://www.youtube.com/watch?v=aO0eUnu0hO0",
    "videoChannel": "Blender Guru",
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "tags": [
      "geometry nodes",
      "procedural",
      "distribute points",
      "instancing"
    ]
  },
  {
    "id": "geo-2",
    "trackId": "geonodes",
    "title": "Procedural Curves, Cables & Sci-Fi Pipes",
    "author": "Johnny Matthews",
    "duration": "8 mins",
    "level": "Intermediate",
    "youtubeId": "k65ofSRnxfs",
    "videoUrl": "https://www.youtube.com/watch?v=k65ofSRnxfs",
    "videoChannel": "Johnny Matthews",
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "tags": [
      "curves",
      "cables",
      "pipes",
      "curve to mesh",
      "procedural generator"
    ]
  },
  {
    "id": "phys-1",
    "trackId": "physics",
    "title": "Rigid Body Physics: Destruction & Falling Dominos",
    "author": "Ryan King Art",
    "duration": "25 mins",
    "level": "Beginner",
    "youtubeId": "lctjzasiy64",
    "videoUrl": "https://www.youtube.com/watch?v=lctjzasiy64",
    "videoChannel": "Ryan King Art",
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
    "author": "Grant Abbitt",
    "duration": "10 mins",
    "level": "Beginner to Intermediate",
    "youtubeId": "UcYdWmUIssA",
    "videoUrl": "https://www.youtube.com/watch?v=UcYdWmUIssA",
    "videoChannel": "Grant Abbitt (Gabbitt)",
    "videoVersion": "5.2",
    "checkedOn": "2026-10-31",
    "tags": [
      "cloth simulation",
      "pillows",
      "fabric",
      "cloth brush",
      "pressure",
      "folds"
    ]
  },
  {
    "id": "phys-3",
    "trackId": "physics",
    "title": "Liquid Simulation: Fill a Cup with Water",
    "author": "Ryan King Art",
    "duration": "54 mins",
    "level": "Intermediate",
    "youtubeId": "A93O4COVPyw",
    "videoUrl": "https://www.youtube.com/watch?v=A93O4COVPyw",
    "videoChannel": "Ryan King Art",
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "manualUrl": "https://docs.blender.org/manual/en/5.2/physics/fluid/introduction.html",
    "tags": [
      "fluid",
      "liquid",
      "mantaflow",
      "domain",
      "inflow",
      "simulation"
    ]
  },
  {
    "id": "phys-4",
    "trackId": "physics",
    "title": "Smoke & Fire Simulation",
    "author": "Ryan King Art",
    "duration": "35 mins",
    "level": "Intermediate",
    "youtubeId": "vQq0jFL1I-Y",
    "videoUrl": "https://www.youtube.com/watch?v=vQq0jFL1I-Y",
    "videoChannel": "Ryan King Art",
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "manualUrl": "https://docs.blender.org/manual/en/5.2/physics/fluid/type/flow.html",
    "tags": [
      "smoke",
      "fire",
      "gas simulation",
      "mantaflow",
      "quick smoke",
      "vfx"
    ]
  },
  {
    "id": "phys-5",
    "trackId": "physics",
    "title": "Particle Systems: Sparks, Dust & Scattered Objects",
    "author": "Ryan King Art",
    "duration": "52 mins",
    "level": "Intermediate",
    "youtubeId": "Lj2EBG2_ooQ",
    "videoUrl": "https://www.youtube.com/watch?v=Lj2EBG2_ooQ",
    "videoChannel": "Ryan King Art",
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "manualUrl": "https://docs.blender.org/manual/en/5.2/physics/particles/introduction.html",
    "tags": [
      "particles",
      "emitter",
      "force fields",
      "hair particles",
      "instancing"
    ]
  },
  {
    "id": "post-1",
    "trackId": "pipeline",
    "title": "Compositing in Blender 5: Finish Your Renders",
    "author": "Grant Abbitt",
    "duration": "9 mins",
    "level": "Beginner",
    "youtubeId": "4zoixL45nvI",
    "videoUrl": "https://www.youtube.com/watch?v=4zoixL45nvI",
    "videoChannel": "Grant Abbitt (Gabbitt)",
    "videoVersion": "5",
    "checkedOn": "2026-10-31",
    "manualUrl": "https://docs.blender.org/manual/en/5.2/compositing/introduction.html",
    "tags": [
      "compositor",
      "post processing",
      "glare",
      "color grading",
      "render layers",
      "nodes"
    ]
  },
  {
    "id": "post-2",
    "trackId": "pipeline",
    "title": "Video Editing in Blender: Cut Your First Video",
    "author": "Ryan King Art",
    "duration": "23 mins",
    "level": "Beginner",
    "youtubeId": "XKqdmHRGnjI",
    "videoUrl": "https://www.youtube.com/watch?v=XKqdmHRGnjI",
    "videoChannel": "Ryan King Art",
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "manualUrl": "https://docs.blender.org/manual/en/5.2/video_editing/edit/montage/strips/index.html",
    "tags": [
      "video editing",
      "sequencer",
      "vse",
      "strips",
      "cutting",
      "audio"
    ]
  },
  {
    "id": "post-5",
    "trackId": "pipeline",
    "title": "Motion Tracking: Put 3D Objects into Real Video",
    "author": "Jacob Zirkle",
    "duration": "24 mins",
    "level": "Intermediate",
    "youtubeId": "Jdc3hHHOdnk",
    "videoUrl": "https://www.youtube.com/watch?v=Jdc3hHHOdnk",
    "videoChannel": "Jacob Zirkle",
    "videoVersion": "5.0",
    "checkedOn": "2026-10-31",
    "manualUrl": "https://docs.blender.org/manual/en/5.2/movie_clip/tracking/introduction.html",
    "tags": [
      "motion tracking",
      "camera tracking",
      "vfx",
      "movie clip editor",
      "camera solve"
    ]
  },
  {
    "id": "post-3",
    "trackId": "pipeline",
    "title": "Export for Games: FBX & glTF to Unity, Unreal & Godot",
    "author": "Versatile Vertices",
    "duration": "8 mins",
    "level": "Intermediate",
    "youtubeId": "-rG4QOR_UHM",
    "videoUrl": "https://www.youtube.com/watch?v=-rG4QOR_UHM",
    "videoChannel": "Versatile Vertices",
    "videoVersion": null,
    "checkedOn": "2026-10-31",
    "manualUrl": "https://docs.blender.org/manual/en/5.2/files/import_export/index.html",
    "tags": [
      "export",
      "fbx",
      "gltf",
      "unity",
      "unreal",
      "godot",
      "game assets"
    ]
  },
  {
    "id": "post-4",
    "trackId": "pipeline",
    "title": "Python Scripting: Automate Blender",
    "author": "Mina Pêcheux",
    "duration": "8 mins",
    "level": "Intermediate",
    "youtubeId": "aGsbOGK9Ia8",
    "videoUrl": "https://www.youtube.com/watch?v=aGsbOGK9Ia8",
    "videoChannel": "Mina Pêcheux",
    "videoVersion": "4.2",
    "checkedOn": "2026-10-31",
    "manualUrl": "https://docs.blender.org/manual/en/5.2/advanced/scripting/introduction.html",
    "tags": [
      "python",
      "scripting",
      "bpy",
      "automation",
      "add-ons",
      "text editor"
    ]
  }
];
