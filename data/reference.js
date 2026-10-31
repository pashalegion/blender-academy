// Reference data: shortcuts, add-ons, vault, glossary, hardware, achievements.
window.BLENDER_REFERENCE = {
  "shortcuts": [
    {
      "category": "Navigation & Viewport",
      "items": [
        {
          "key": "MMB (Middle Click)",
          "desc": "Orbit 3D Viewport"
        },
        {
          "key": "Shift + MMB",
          "desc": "Pan Viewport"
        },
        {
          "key": "Scroll Wheel",
          "desc": "Zoom In / Out"
        },
        {
          "key": "Numpad .",
          "desc": "Frame & Focus selected object"
        },
        {
          "key": "Numpad 1 / 3 / 7",
          "desc": "Front / Right / Top orthographic views"
        },
        {
          "key": "Numpad 0",
          "desc": "Switch to Camera View"
        },
        {
          "key": "` (Grave Accent)",
          "desc": "Quick View Pie Menu"
        },
        {
          "key": "Z",
          "desc": "Viewport Shading Pie Menu (Wire, Solid, Material, Render)"
        },
        {
          "key": "Alt + Z",
          "desc": "Toggle X-Ray Mode"
        }
      ]
    },
    {
      "category": "Object Manipulation",
      "items": [
        {
          "key": "G",
          "desc": "Grab / Move"
        },
        {
          "key": "R",
          "desc": "Rotate"
        },
        {
          "key": "S",
          "desc": "Scale"
        },
        {
          "key": "X / Y / Z",
          "desc": "Lock transform to single axis"
        },
        {
          "key": "Shift + X / Y / Z",
          "desc": "Lock transform to plane (exclude axis)"
        },
        {
          "key": "Ctrl + A",
          "desc": "Apply All Transforms (CRUCIAL: Apply Scale!)"
        },
        {
          "key": "Alt + G / R / S",
          "desc": "Clear Location / Rotation / Scale back to zero"
        },
        {
          "key": "Shift + D",
          "desc": "Duplicate Object"
        },
        {
          "key": "Alt + D",
          "desc": "Linked Duplicate (shares mesh data)"
        },
        {
          "key": "X or Delete",
          "desc": "Delete selected object"
        }
      ]
    },
    {
      "category": "Edit Mode (Modeling)",
      "items": [
        {
          "key": "Tab",
          "desc": "Toggle Object Mode / Edit Mode"
        },
        {
          "key": "1 / 2 / 3",
          "desc": "Vertex / Edge / Face selection mode"
        },
        {
          "key": "E",
          "desc": "Extrude selected geometry"
        },
        {
          "key": "I",
          "desc": "Inset face"
        },
        {
          "key": "Ctrl + B",
          "desc": "Bevel edges or vertices"
        },
        {
          "key": "Ctrl + R",
          "desc": "Loop Cut and Slide"
        },
        {
          "key": "K",
          "desc": "Knife Tool (cut custom edges)"
        },
        {
          "key": "F",
          "desc": "Fill face between selected vertices or edges"
        },
        {
          "key": "M",
          "desc": "Merge Vertices menu ('By Distance' removes duplicates)"
        },
        {
          "key": "Shift + N",
          "desc": "Recalculate Normals Outside (fixes dark shading)"
        },
        {
          "key": "O",
          "desc": "Toggle Proportional Editing"
        },
        {
          "key": "Alt + Left Click",
          "desc": "Select entire Edge or Face Loop"
        }
      ]
    },
    {
      "category": "Shading & Nodes",
      "items": [
        {
          "key": "Ctrl + Shift + T",
          "desc": "Node Wrangler: Auto PBR texture setup"
        },
        {
          "key": "Ctrl + Shift + Click",
          "desc": "Node Wrangler: Instant Viewer node preview"
        },
        {
          "key": "Ctrl + T",
          "desc": "Node Wrangler: Add Texture Coordinate + Mapping"
        },
        {
          "key": "F3",
          "desc": "Global Search for any operator or command"
        },
        {
          "key": "F12",
          "desc": "Render current frame"
        },
        {
          "key": "Ctrl + F12",
          "desc": "Render animation sequence"
        }
      ]
    }
  ],
  "addons": [
    {
      "id": "node-wrangler",
      "name": "Node Wrangler",
      "category": "Shading & Texturing",
      "icon": "⚡",
      "whyYouNeedIt": "The single most essential addon in Blender. Without it, setting up PBR materials takes much longer. Automates full texture sets, allows instant node previews, and fast connecting.",
      "howToEnable": "Edit -> Preferences -> Add-ons -> Search 'Node Wrangler' -> Check the box.",
      "keyShortcuts": [
        "Ctrl + Shift + T: Auto-setup full PBR texture sets (select Albedo, Roughness, Normal, etc.)",
        "Ctrl + Shift + Left Click: Instant Viewer node to preview any individual node output",
        "Ctrl + T: Instantly add Texture Coordinate and Mapping nodes to any texture",
        "Alt + Right Click Drag: Lazy connect two nodes with a line"
      ],
      "docUrl": "https://docs.blender.org/manual/en/5.2/addons/node/node_wrangler.html",
      "downloadUrl": null,
      "source": "Bundled",
      "sourceNote": "The 5.2 manual says this add-on is bundled with Blender."
    },
    {
      "id": "loop-tools",
      "name": "LoopTools",
      "category": "Modeling",
      "icon": "⭕",
      "whyYouNeedIt": "Turns any messy selection of vertices into a perfect geometric circle in one click! Also bridges irregular loops, flattens faces, and distributes edge spacing evenly.",
      "howToEnable": "Edit -> Preferences -> Add-ons -> Search 'LoopTools' -> Check the box.",
      "keyShortcuts": [
        "Right Click in Edit Mode -> LoopTools -> Circle (makes perfect circular holes)",
        "Right Click -> LoopTools -> Space (evens out spacing between vertices)",
        "Right Click -> LoopTools -> Bridge (bridges two separate edge loops with quads)",
        "Right Click -> LoopTools -> Relax (smooths out topology without losing overall shape)"
      ],
      "docUrl": "https://docs.blender.org/manual/en/5.2/addons/index.html",
      "downloadUrl": null,
      "source": "Unconfirmed",
      "sourceNote": "The 5.2 page for this add-on returned 404. Check Preferences → Add-ons."
    },
    {
      "id": "bool-tool",
      "name": "BoolTool",
      "category": "Modeling",
      "icon": "✂️",
      "whyYouNeedIt": "Supercharges Boolean operations. Instead of manually adding modifiers, tweaking targets, and applying them, you can cut shapes with hotkeys in half a second.",
      "howToEnable": "Edit -> Preferences -> Add-ons -> Search 'BoolTool' -> Check the box.",
      "keyShortcuts": [
        "Ctrl + Shift + '-' (Numpad Minus): Auto Difference Cut",
        "Ctrl + Shift + '+' (Numpad Plus): Auto Union (fuses shapes together)",
        "Ctrl + Shift + '*' (Numpad Multiply): Auto Intersect",
        "Ctrl + Shift + B: Open BoolTool interactive pie menu"
      ],
      "docUrl": "https://docs.blender.org/manual/en/5.2/addons/index.html",
      "downloadUrl": null,
      "source": "Unconfirmed",
      "sourceNote": "The 5.2 page for this add-on returned 404. Its status in 5.2 is not confirmed."
    },
    {
      "id": "images-as-planes",
      "name": "Images as Planes",
      "category": "Workflow",
      "icon": "🖼️",
      "whyYouNeedIt": "Instantly imports 2D images, concept art, reference drawings, or alpha textures mapped onto a 3D plane with the exact correct aspect ratio and shader set up.",
      "howToEnable": "Edit -> Preferences -> Add-ons -> Search 'Images as Planes' -> Check the box.",
      "keyShortcuts": [
        "Shift + A -> Image -> 'Images as Planes'",
        "Enable 'Use Alpha' in the file browser sidebar for transparent PNG cutouts"
      ],
      "docUrl": "https://docs.blender.org/manual/en/5.2/addons/index.html",
      "downloadUrl": null,
      "source": "Unconfirmed",
      "sourceNote": "The 5.2 page for this add-on returned 404. Check Preferences → Add-ons."
    },
    {
      "id": "extra-objects",
      "name": "Extra Mesh & Curve Objects",
      "category": "Modeling",
      "icon": "⚙️",
      "whyYouNeedIt": "Unlocks dozens of ready-to-use primitives: mechanical gears, diamonds, pipes, rocks, architectural arches, torus knots, and spirals right inside Shift + A.",
      "howToEnable": "Edit -> Preferences -> Add-ons -> Search 'Add Mesh: Extra Objects' and 'Add Curve: Extra Objects' -> Check both.",
      "keyShortcuts": [
        "Shift + A -> Mesh -> Gears (Gear, Worm)",
        "Shift + A -> Mesh -> Rock Generator",
        "Shift + A -> Curve -> Spirals & Curves galore"
      ],
      "docUrl": "https://docs.blender.org/manual/en/5.2/addons/index.html",
      "downloadUrl": null,
      "source": "Unconfirmed",
      "sourceNote": "The 5.2 page for this add-on returned 404. Check Preferences → Add-ons."
    },
    {
      "id": "rigify",
      "name": "Rigify",
      "category": "Animation & Rigging",
      "icon": "🦴",
      "whyYouNeedIt": "Blender's official production-ready character auto-rigging system. Generates a fully featured modular rig with IK/FK switches, finger controls, and facial sliders from a basic metarig.",
      "howToEnable": "Edit -> Preferences -> Add-ons -> Search 'Rigify' -> Check the box.",
      "keyShortcuts": [
        "Shift + A -> Armature -> Human (Meta-Rig)",
        "Fit metarig bones to your character mesh",
        "In Armature Properties -> Click 'Generate Rig' button"
      ],
      "docUrl": "https://docs.blender.org/manual/en/5.2/addons/rigging/rigify/index.html",
      "downloadUrl": null,
      "source": "Bundled",
      "sourceNote": "The 5.2 manual says this add-on is bundled with Blender."
    },
    {
      "id": "blenderkit",
      "name": "BlenderKit",
      "category": "Asset Library",
      "icon": "📦",
      "whyYouNeedIt": "An enormous in-viewport online library containing tens of thousands of free 3D models, PBR materials, HDRIs, and sculpt brushes. Drag and drop directly into your scene!",
      "howToEnable": "Download the .zip from blenderkit.com -> Edit -> Preferences -> Add-ons -> Install -> Select .zip -> Check box.",
      "keyShortcuts": [
        "Find assets in the top 3D viewport search bar",
        "Drag and drop any material or model straight into your 3D scene"
      ],
      "docUrl": "https://www.blenderkit.com/docs/",
      "downloadUrl": "https://www.blenderkit.com/",
      "source": "Community"
    },
    {
      "id": "poly-haven",
      "name": "Poly Haven Asset Browser Addon",
      "category": "Materials & Lighting",
      "icon": "🌄",
      "whyYouNeedIt": "Connects Blender's native Asset Browser directly to the Poly Haven library (100% free CC0 HDRIs, photorealistic materials, and models). Zero manual downloading or unzipping needed.",
      "howToEnable": "Download from polyhaven.com (the add-on page on the site returned 404 on 2026-10-31) -> Install via Preferences -> Add-ons -> Fetch library.",
      "keyShortcuts": [
        "Open Blender Asset Browser window",
        "Browse hundreds of 1K/2K/4K HDRIs and drag directly onto World"
      ],
      "docUrl": "https://polyhaven.com/",
      "downloadUrl": "https://polyhaven.com/",
      "source": "Community",
      "sourceNote": "The Blender add-on page on polyhaven.com returned 404; this links to the home page instead."
    },
    {
      "id": "fspy",
      "name": "fSpy (Photo Perspective Matcher)",
      "category": "Modeling & Camera",
      "icon": "📷",
      "whyYouNeedIt": "The secret weapon for 3D modeling from reference photos. Automatically calculates the exact camera focal length, position, and vanishing points from any 2D photograph.",
      "howToEnable": "Download fSpy app + fSpy Blender importer addon -> Install addon -> File -> Import -> fSpy project.",
      "keyShortcuts": [
        "Align 2 axis guide lines in fSpy app to perspective lines in photo",
        "Import into Blender for a camera perfectly matched to the photo"
      ],
      "docUrl": "https://fspy.io/",
      "downloadUrl": "https://fspy.io/",
      "source": "Community"
    },
    {
      "id": "screencast-keys",
      "name": "Screencast Keys",
      "category": "Learning & Streaming",
      "icon": "⌨️",
      "whyYouNeedIt": "Displays your pressed keystrokes, shortcuts, and mouse button clicks directly in the corner of your 3D viewport. Indispensable for recording tutorials or sharing workflow clips with mentors.",
      "howToEnable": "Download .zip from GitHub -> Preferences -> Add-ons -> Install -> Enable -> Press 'N' -> Screencast Keys -> Check 'Start'.",
      "keyShortcuts": [
        "Toggle in the 'N' Sidebar -> Screencast Keys tab"
      ],
      "docUrl": "https://github.com/nutti/Screencast-Keys",
      "downloadUrl": "https://github.com/nutti/Screencast-Keys/releases",
      "source": "Community"
    }
  ],
  "vault": [
    {
      "id": "polyhaven-textures",
      "name": "Poly Haven (PBR Textures)",
      "category": "textures",
      "categoryName": "Textures & Materials",
      "icon": "🧱",
      "url": "https://polyhaven.com/textures",
      "badge": "100% CC0 Free",
      "description": "Thousands of uncompressed, photorealistic PBR materials (Albedo, Roughness, Normal, Displacement) up to 8K resolution.",
      "whyTopTier": "No account required, no paywalls, completely public domain CC0 for personal and commercial game/film projects."
    },
    {
      "id": "ambientcg",
      "name": "ambientCG",
      "category": "textures",
      "categoryName": "Textures & Materials",
      "icon": "🎨",
      "url": "https://ambientcg.com/",
      "badge": "1,800+ Materials",
      "description": "Over 1,800 public domain procedural and photogrammetry PBR textures with Substance sbsar files and Blender material packs.",
      "whyTopTier": "Maintained by Lennart Demes. Includes SBSAR files, seamless tiling, and 1-click batch downloads."
    },
    {
      "id": "sharetextures",
      "name": "ShareTextures",
      "category": "textures",
      "categoryName": "Textures & Materials",
      "icon": "📐",
      "url": "https://www.sharetextures.com/",
      "badge": "ArchViz Focused",
      "description": "Exceptional collection of architectural textures: polished marble, herringbone wood flooring, concrete, and ceramic tiles.",
      "whyTopTier": "Created by architectural visualizers with realistic real-world scale and seamless UV repeating."
    },
    {
      "id": "kenney",
      "name": "Kenney.nl (Asset Jesus)",
      "category": "models",
      "categoryName": "3D Models & Kits",
      "icon": "🎮",
      "url": "https://kenney.nl/assets/category:3d",
      "badge": "Game Ready CC0",
      "description": "Over 20,000 modular low-poly game assets: medieval villages, sci-fi stations, vehicles, nature, and dungeon kits.",
      "whyTopTier": "The legendary indie game developer resource. Everything is modular, cleanly textured, and CC0."
    },
    {
      "id": "sketchfab-cc0",
      "name": "Sketchfab (Creative Commons)",
      "category": "models",
      "categoryName": "3D Models & Kits",
      "icon": "🏺",
      "url": "https://sketchfab.com/",
      "badge": "Historic & Props",
      "description": "World-class 3D gallery with thousands of downloadable CC0 and CC-BY museum scans, vehicles, and character art.",
      "whyTopTier": "Inspect wireframes and textures directly in your browser before downloading as .blend or .gltf."
    },
    {
      "id": "mixamo",
      "name": "Adobe Mixamo",
      "category": "models",
      "categoryName": "3D Models & Kits",
      "icon": "🏃",
      "url": "https://www.mixamo.com/",
      "badge": "Auto-Rigging & Mocap",
      "description": "Free character models and thousands of motion-captured animation clips (walk cycles, combat, dancing, jumping).",
      "whyTopTier": "Upload your custom humanoid sculpt and Mixamo automatically rigs it in 60 seconds with full animation clips."
    },
    {
      "id": "pureref",
      "name": "PureRef",
      "category": "tools",
      "categoryName": "Artist Utilities",
      "icon": "🖼️",
      "url": "https://www.pureref.com/",
      "badge": "Essential Tool",
      "description": "The lightweight, infinite canvas reference image viewer used by virtually every 3D modeler and digital artist alive.",
      "whyTopTier": "Pins on top of Blender transparently, lets you paste hundreds of reference photos, crop, and zoom with zero lag."
    },
    {
      "id": "krita",
      "name": "Krita",
      "category": "tools",
      "categoryName": "Artist Utilities",
      "icon": "🖌️",
      "url": "https://krita.org/",
      "badge": "Open Source",
      "description": "Free, open-source digital painting program perfect for painting custom texture alphas, concept sketches, and decal PNGs.",
      "whyTopTier": "Supports wrap-around seamless pattern tiling (W key) for drawing repeating textures effortlessly."
    },
    {
      "id": "polyhaven-hdri",
      "name": "Poly Haven (HDRIs)",
      "category": "hdris",
      "categoryName": "HDRIs & Lighting",
      "icon": "🌄",
      "url": "https://polyhaven.com/hdris",
      "badge": "Up to 16K EXR",
      "description": "Uncompressed 360° high-dynamic-range panoramic environment maps: sunny studios, twilight forests, industrial warehouses.",
      "whyTopTier": "Captures true 32-bit floating point EV stops for 100% photorealistic shadows and camera reflections in Cycles & Eevee."
    },
    {
      "id": "hdri-hub",
      "name": "HDRI-Hub",
      "category": "hdris",
      "categoryName": "HDRIs & Lighting",
      "icon": "🏙️",
      "url": "https://www.hdri-hub.com/hdrishop/freesamples",
      "badge": "Urban & Nature",
      "description": "High-resolution free sample pack of city streets, highway night lights, and architectural backplates.",
      "whyTopTier": "Includes matched perspective camera background photographs for seamless composite rendering."
    }
  ],
  "glossary": [
    {
      "term": "Normals & Face Orientation",
      "category": "Geometry",
      "difficulty": "Must Know",
      "summary": "The imaginary perpendicular arrow pointing outward from every polygon indicating which side is the 'front'.",
      "explanation": "If normals point inward, Blender thinks the inside of your object is the outside. This causes black shading glitches, broken booleans, and failed 3D printing.",
      "hotkey": "Shift + N (Recalculate Normals Outside) in Edit Mode"
    },
    {
      "term": "UV Unwrapping",
      "category": "Texturing",
      "difficulty": "Must Know",
      "summary": "Flattening a 3D mesh onto a 2D coordinate plane so textures can be painted and wrapped onto it.",
      "explanation": "Like unfolding a cardboard box flat onto a table. U and V are the 2D spatial axes corresponding to 3D X, Y, and Z coordinates.",
      "hotkey": "U ➔ Unwrap in Edit Mode; Ctrl + E ➔ Mark Seam"
    },
    {
      "term": "Quads vs. Tris vs. N-Gons",
      "category": "Topology",
      "difficulty": "Must Know",
      "summary": "Polygons classified by vertex count: 4 vertices (Quad), 3 vertices (Tri), 5+ vertices (N-gon).",
      "explanation": "Quads are the gold standard because they subdivide smoothly and deform cleanly during character animation. Tris are used in game engines. N-gons cause unpredictable shading pinches on curved surfaces.",
      "hotkey": "Ctrl + T (Triangulate); Alt + J (Tris to Quads)"
    },
    {
      "term": "Non-Manifold Geometry",
      "category": "Topology",
      "difficulty": "Troubleshooting",
      "summary": "Geometry that physically cannot exist in real 3D solid reality.",
      "explanation": "Examples include: an internal face buried inside a hollow cube, an edge shared by 3 or more faces (T-junction), or zero-thickness faces. Non-manifold meshes break automatic rigging and modifiers.",
      "hotkey": "Select ➔ Select All by Trait ➔ Non-Manifold (Ctrl+Alt+Shift+M)",
      "unverified": true
    },
    {
      "term": "Retopology",
      "category": "Modeling",
      "difficulty": "Intermediate",
      "summary": "Rebuilding clean, low-poly animated geometry over a heavy multi-million vertex sculpt.",
      "explanation": "Raw high-poly sculpts are too dense to animate or put into game engines. Retopology draws clean quad edge loops around joints and eyes over the sculpt silhouette.",
      "hotkey": "Use Shrinkwrap modifier + Face Snapping"
    },
    {
      "term": "Texel Density",
      "category": "Texturing",
      "difficulty": "Intermediate",
      "summary": "The ratio of texture pixels (resolution) to 3D surface area.",
      "explanation": "If a tiny coin on a character has 2048x2048 UV space while the entire chest has 512x512, the coin looks ultra-sharp while the body looks blurry. Maintaining uniform texel density ensures consistent crispness.",
      "hotkey": "UV Editor ➔ UV ➔ Average Island Scale"
    },
    {
      "term": "Inverse Kinematics (IK) vs. FK",
      "category": "Animation",
      "difficulty": "Animation",
      "summary": "Forward Kinematics (FK) rotates joint-by-joint from shoulder to wrist; Inverse Kinematics (IK) moves the hand and auto-bends the arm.",
      "explanation": "With IK, if you place a character's foot on a staircase, the knee and hip bend automatically to keep the foot planted. Essential for walking cycles.",
      "hotkey": "Shift + I in Pose Mode (Add IK Constraint to Bone)"
    },
    {
      "term": "Texture Baking",
      "category": "Texturing",
      "difficulty": "Game Dev",
      "summary": "Transferring heavy 3D geometry details (pores, bevels, shadows) onto 2D image maps.",
      "explanation": "Allows a 2,000-polygon game model to look like a 2,000,000-polygon cinematic sculpt by encoding high-frequency lighting depth into a Normal Map texture.",
      "hotkey": "Render Properties (Cycles) ➔ Bake section"
    },
    {
      "term": "Principled BSDF",
      "category": "Shading",
      "difficulty": "Materials",
      "summary": "Blender's unified Physically Based Rendering (PBR) super-shader.",
      "explanation": "Based on Disney's PBR research. Replaces dozens of older complex nodes with a single interface controlling Base Color, Metallic, Roughness, Specular, Transmission, and Normal inputs.",
      "hotkey": "Shift + A in Shader Editor ➔ Shader ➔ Principled BSDF"
    },
    {
      "term": "Subsurface Scattering (SSS)",
      "category": "Shading",
      "difficulty": "Materials",
      "summary": "Light penetrating translucent materials, scattering internally, and exiting at a different angle.",
      "explanation": "Think of shining a flashlight behind your fingers and seeing a red glow. Without SSS, human skin, wax, marble, jade, and milk look like hard, dead plastic.",
      "hotkey": "Principled BSDF ➔ Subsurface Weight slider"
    },
    {
      "term": "Dyntopo (Dynamic Topology)",
      "category": "Sculpting",
      "difficulty": "Sculpting",
      "summary": "Real-time triangle tessellation under your sculpt brush strokes.",
      "explanation": "Unlike regular sculpting which only pushes existing vertices, Dyntopo generates brand new geometry as you stroke. Pulling out long horns or ears never runs out of resolution.",
      "hotkey": "Ctrl + D in Sculpt Mode to toggle Dyntopo",
      "unverified": true
    },
    {
      "term": "Boolean Operators",
      "category": "Modeling",
      "difficulty": "Modeling",
      "summary": "Mathematical solid volume interactions: Difference (cut), Union (fuse), and Intersect.",
      "explanation": "Allows you to carve holes into objects or weld complex shapes together. Powered by Blender's Fast and Exact solvers.",
      "hotkey": "Ctrl + Shift + '-' or '+' (with BoolTool addon enabled)"
    }
  ],
  "hardware": {
    "cpus": [
      {
        "id": "cpu-entry",
        "name": "Entry 4-Core (Core i3, older i5, Ryzen 3)",
        "score": 4,
        "type": "entry"
      },
      {
        "id": "cpu-mid",
        "name": "Mainstream 6-8 Core (Core i5/i7, Ryzen 5/7)",
        "score": 7,
        "type": "mid"
      },
      {
        "id": "cpu-high",
        "name": "High-End 12-16+ Core (Core i9, Ryzen 9)",
        "score": 9.5,
        "type": "high"
      },
      {
        "id": "cpu-apple",
        "name": "Apple Silicon (M1 / M2 / M3 / M4)",
        "score": 7.5,
        "type": "apple"
      }
    ],
    "gpus": [
      {
        "id": "gpu-igpu",
        "backend": "Integrated",
        "name": "Integrated graphics (Intel UHD / Iris, AMD Radeon Vega)",
        "score": 2,
        "vram": 0,
        "rtx": false,
        "accel": false
      },
      {
        "id": "gpu-gtx",
        "backend": "CUDA",
        "name": "NVIDIA GTX 1050 / 1650 (4 GB)",
        "score": 4.5,
        "vram": 4,
        "rtx": false,
        "accel": true
      },
      {
        "id": "gpu-rtx-mid",
        "backend": "OptiX / CUDA",
        "name": "NVIDIA RTX 3060 12 GB / RTX 4060",
        "score": 7.5,
        "vram": 8,
        "rtx": true,
        "accel": true
      },
      {
        "id": "gpu-rtx-high",
        "backend": "OptiX / CUDA",
        "name": "NVIDIA RTX 3080 / 4070 Ti (12–16 GB)",
        "score": 9,
        "vram": 12,
        "rtx": true,
        "accel": true
      },
      {
        "id": "gpu-rtx-flagship",
        "backend": "OptiX / CUDA",
        "name": "NVIDIA RTX 3090 / 4080 / 4090 (24 GB)",
        "score": 10,
        "vram": 24,
        "rtx": true,
        "accel": true
      },
      {
        "id": "gpu-rx-budget",
        "backend": "HIP",
        "name": "AMD RX 580 (4–8 GB)",
        "score": 4.5,
        "vram": 4,
        "rtx": false,
        "accel": true
      },
      {
        "id": "gpu-rx-mid",
        "backend": "HIP",
        "name": "AMD RX 6700 (8 GB)",
        "score": 7.5,
        "vram": 8,
        "rtx": false,
        "accel": true
      },
      {
        "id": "gpu-apple",
        "backend": "Metal",
        "name": "Apple Silicon GPU (base / Pro / Max)",
        "score": 6.5,
        "vram": 16,
        "rtx": false,
        "accel": true
      }
    ],
    "rams": [
      {
        "id": "ram-8",
        "name": "8 GB RAM (Bare Minimum)",
        "amount": 8,
        "score": 3
      },
      {
        "id": "ram-16",
        "name": "16 GB RAM (Standard Starter)",
        "amount": 16,
        "score": 7
      },
      {
        "id": "ram-32",
        "name": "32 GB RAM (3D Sweet Spot)",
        "amount": 32,
        "score": 9
      },
      {
        "id": "ram-64",
        "name": "64 GB+ RAM (Studio / Physics Simulation)",
        "amount": 64,
        "score": 10
      }
    ]
  },
  "achievements": [
    {
      "id": "cube-slayer",
      "title": "Cube Slayer",
      "description": "Delete the default cube for the first time. The universal rite of passage!",
      "icon": "🗑️",
      "xp": 50,
      "type": "action",
      "secret": true
    },
    {
      "id": "first-step",
      "title": "First Coordinate",
      "description": "Complete your very first Blender lesson.",
      "icon": "🌱",
      "xp": 100,
      "type": "lesson-count",
      "count": 1,
      "secret": false
    },
    {
      "id": "donut-graduate",
      "title": "Sweet Dough",
      "description": "Complete the iconic Donut lesson.",
      "icon": "🍩",
      "xp": 150,
      "type": "specific-lesson",
      "lessonId": "fund-3",
      "secret": false
    },
    {
      "id": "bug-squasher",
      "title": "Bug Squasher",
      "description": "Inspect troubleshooting guides on 3 different lessons.",
      "icon": "🔍",
      "xp": 75,
      "type": "troubleshoot-count",
      "count": 3,
      "secret": false
    },
    {
      "id": "modifier-master",
      "title": "Modifier Maestro",
      "description": "Complete the Modifiers 101 lesson.",
      "icon": "🛠️",
      "xp": 100,
      "type": "specific-lesson",
      "lessonId": "fund-4",
      "secret": false
    },
    {
      "id": "tool-collector",
      "title": "Plugin Enthusiast",
      "description": "Explore the beginner addons directory.",
      "icon": "🔌",
      "xp": 50,
      "type": "action",
      "secret": false
    },
    {
      "id": "shader-alchemist",
      "title": "Material Wizard",
      "description": "Complete the Principled BSDF & PBR lesson.",
      "icon": "🎨",
      "xp": 100,
      "type": "specific-lesson",
      "lessonId": "shade-1",
      "secret": false
    },
    {
      "id": "sculptor",
      "title": "Clay Sculptor",
      "description": "Complete the Sculpting 101 lesson.",
      "icon": "🗿",
      "xp": 100,
      "type": "specific-lesson",
      "lessonId": "sculpt-1",
      "secret": false
    },
    {
      "id": "bone-collector",
      "title": "Skeleton Builder",
      "description": "Complete the Armature & Bones lesson.",
      "icon": "🦴",
      "xp": 100,
      "type": "specific-lesson",
      "lessonId": "anim-1",
      "secret": false
    },
    {
      "id": "note-taker",
      "title": "Scholar's Notepad",
      "description": "Save a personal study note on any lesson.",
      "icon": "📝",
      "xp": 75,
      "type": "action",
      "secret": false
    },
    {
      "id": "five-lessons",
      "title": "Dedicated Artist",
      "description": "Complete 5 lessons across any tracks.",
      "icon": "⭐",
      "xp": 250,
      "type": "lesson-count",
      "count": 5,
      "secret": false
    },
    {
      "id": "ten-lessons",
      "title": "Halfway Hero",
      "description": "Complete 10 lessons in the academy.",
      "icon": "🏆",
      "xp": 500,
      "type": "lesson-count",
      "count": 10,
      "secret": false
    },
    {
      "id": "all-fundamentals",
      "title": "Foundation Certified",
      "description": "Complete all lessons in the Blender Fundamentals track.",
      "icon": "🎓",
      "xp": 400,
      "type": "track-complete",
      "trackId": "fundamentals",
      "secret": false
    },
    {
      "id": "grandmaster",
      "title": "3D Virtuoso",
      "description": "Complete all lessons in the entire curriculum!",
      "icon": "👑",
      "xp": 1000,
      "type": "lesson-count",
      "count": 20,
      "secret": false
    },
    {
      "id": "cube-necromancer",
      "title": "Cube Necromancer",
      "description": "Respawn the default cube 3 times. Why won't you let it rest?!",
      "icon": "🧟",
      "xp": 75,
      "type": "action",
      "secret": true
    },
    {
      "id": "suzanne-disciple",
      "title": "Suzanne's Disciple",
      "description": "Discovered and greeted Blender's legendary monkey mascot, Suzanne!",
      "icon": "🐵",
      "xp": 100,
      "type": "action",
      "secret": true
    },
    {
      "id": "shortcut-master",
      "title": "Muscle Memory",
      "description": "Discovered the secret Shift+A pie menu or keyboard cheat sheet.",
      "icon": "⌨️",
      "xp": 75,
      "type": "action",
      "secret": false
    },
    {
      "id": "hardware-tester",
      "title": "Hardware Diagnostician",
      "description": "Evaluated a 3D workstation setup in the Blender Rig Checker.",
      "icon": "🖥️",
      "xp": 75,
      "type": "action",
      "secret": false
    },
    {
      "id": "vault-looter",
      "title": "Vault Looter",
      "description": "Explored the Free 3D Resource Vault for materials and models.",
      "icon": "📦",
      "xp": 75,
      "type": "action",
      "secret": false
    },
    {
      "id": "glossary-scholar",
      "title": "3D Polyglot",
      "description": "Decoded technical 3D jargon in the Terminology Glossary.",
      "icon": "📖",
      "xp": 75,
      "type": "action",
      "secret": false
    },
    {
      "id": "night-owl",
      "title": "Night Owl",
      "description": "Visited Blender Academy between midnight and 5 AM. Sleep is for the weak!",
      "icon": "🦉",
      "xp": 100,
      "type": "action",
      "secret": true
    },
    {
      "id": "konami-master",
      "title": "Konami Master",
      "description": "Entered the legendary Konami code. ↑↑↓↓←→←→BA. True gamer instincts!",
      "icon": "🎮",
      "xp": 200,
      "type": "action",
      "secret": true
    },
    {
      "id": "lore-keeper",
      "title": "Lore Keeper",
      "description": "Discovered the logo easter egg and the secret history of Blender's original name.",
      "icon": "🔮",
      "xp": 75,
      "type": "action",
      "secret": true
    },
    {
      "id": "render-addict",
      "title": "Render Addict",
      "description": "Completed 15 lessons. You've pressed F12 more times than you can count.",
      "icon": "🖨️",
      "xp": 750,
      "type": "lesson-count",
      "count": 15,
      "secret": false
    },
    {
      "id": "twenty-five-lessons",
      "title": "Academy Legend",
      "description": "Completed 25 lessons. You are the master of the mesh!",
      "icon": "🌟",
      "xp": 900,
      "type": "lesson-count",
      "count": 25,
      "secret": false
    }
  ]
};
