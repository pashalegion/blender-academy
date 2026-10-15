/**
 * Blender Academy Data Store
 * Comprehensive curated lessons, tracks, beginner addons, achievements, and shortcuts.
 */

const BLENDER_DATA = {
  tracks: [
    {
      id: "fundamentals",
      name: "Blender Fundamentals",
      icon: "🧭",
      color: "#EA7600",
      description: "Interface and navigation, core transforms, focused modifier and topology lessons, followed by the Blender 5 donut project as a capstone.",
      badge: "Donut Apprentice"
    },
    {
      id: "hardsurface",
      name: "Hard Surface & Modeling",
      icon: "📐",
      color: "#00A2FF",
      description: "Low-poly modeling, modifiers (bevel, mirror, solidify), booleans, precision CAD techniques.",
      badge: "Modifier Master"
    },
    {
      id: "sculpting",
      name: "Digital Sculpting & Anatomy",
      icon: "🗿",
      color: "#E040FB",
      description: "Sculpting brush fundamentals, Dyntopo vs voxel remesh, and manual retopology.",
      badge: "Sculpt Titan"
    },
    {
      id: "shading",
      name: "Materials, Shading & UVs",
      icon: "🎨",
      color: "#00E676",
      description: "Principled BSDF and PBR fundamentals, UV seam strategy, and procedural node materials.",
      badge: "Shader Alchemist"
    },
    {
      id: "lighting",
      name: "Lighting, Cameras & Render",
      icon: "💡",
      color: "#FFD600",
      description: "Cycles vs Eevee, three-point studio lighting, and HDRI world lighting with Poly Haven.",
      badge: "Render Maestro"
    },
    {
      id: "animation",
      name: "Rigging & Character Animation",
      icon: "🦴",
      color: "#FF5252",
      description: "Armature basics, automatic skinning and weights, and the 12 animation principles with a bouncing ball.",
      badge: "Keyframe Virtuoso"
    },
    {
      id: "geonodes",
      name: "Geometry Nodes & Procedural",
      icon: "🔮",
      color: "#7C4DFF",
      description: "The modern node-based modeling workflow: scattering, procedural cables, generative geometry.",
      badge: "Node Sorcerer"
    },
    {
      id: "physics",
      name: "Physics, Cloth & VFX",
      icon: "🌊",
      color: "#00BCD4",
      description: "Rigid body dynamics and cloth simulation workflows.",
      badge: "Simulation Wizard"
    }
  ],

  lessons: [
    /* ---------------- TRACK 1: FUNDAMENTALS ---------------- */
    {
      id: "fund-1",
      trackId: "fundamentals",
      title: "Blender 5 Beginner Course: Interface & Navigation",
      author: "Grant Abbitt",
      duration: "13 mins",
      level: "Absolute Beginner",
      youtubeId: "kVcY7K-JA1Y",
      videoUrl: "https://www.youtube.com/watch?v=kVcY7K-JA1Y",
      overview: `Start with the first lesson in Grant Abbitt's separate Blender 5 beginner course. It introduces the interface, navigation, views, selecting and adding objects, and the first move, rotate, and scale operations. Use it as a short orientation before the focused modeling lessons and the separate donut project.`,
      summary: [
        "Learn the main Blender editors and how to navigate the interface.",
        "Orbit the viewport with MMB, inspect orthographic views, and understand perspective vs. orthographic views.",
        "Add and select objects, then practice moving, rotating, and scaling with G, R, and S.",
        "Try the end-of-lesson challenge by adding and positioning objects in the scene.",
        "Save your project with Ctrl + S as you practice."
      ],
      troubleshooting: [
        {
          problem: "I cannot orbit or pan the viewport comfortably.",
          cause: "Viewport navigation depends on mouse input and can feel unfamiliar at first.",
          solution: "Use MMB to orbit, Shift + MMB to pan, and the scroll wheel to zoom. Use the view controls or the Grave Accent view pie when you need a preset angle."
        },
        {
          problem: "My object moves along the wrong direction.",
          cause: "A transform is unconstrained or locked to a different axis than intended.",
          solution: "Start the transform with G, R, or S, then press X, Y, or Z to constrain it. Type a number for a precise value, then confirm with Enter."
        },
        {
          problem: "I get lost after changing editors or workspaces.",
          cause: "Blender workspaces rearrange editor areas for different tasks.",
          solution: "Use the workspace tabs across the top to return to Layout. You can change an editor type from its top-left editor selector."
        }
      ],
      tags: ["blender 5", "interface", "navigation", "viewport", "beginner", "transforms"]
    },
    {
      id: "fund-4",
      trackId: "fundamentals",
      title: "Modifiers 101: Subdivision Surface, Mirror & Solidify",
      author: "CrossMind Studio",
      duration: "24 mins",
      level: "Beginner",
      youtubeId: "qJEWOTrmzpg",
      videoUrl: "https://www.youtube.com/watch?v=qJEWOTrmzpg",
      overview: `Modifiers are non-destructive procedural powerhouses in Blender. They alter geometry without permanently changing your underlying base vertices until you choose to apply them. This lesson breaks down the three most universally used modifiers: Subdivision Surface (for smooth curves), Mirror (for symmetrical modeling), and Solidify (for thickness).`,
      summary: [
        "Add modifiers via the Wrench icon in the Properties panel on the right.",
        "Subdivision Surface shortcut: Ctrl + 1, Ctrl + 2, or Ctrl + 3 to instantly add 1, 2, or 3 viewport subdivision levels.",
        "The order of modifiers in the stack matters drastically! They execute from top to bottom.",
        "Mirror Modifier: Always ensure 'Clipping' is checked so center vertices weld together and don't cross the seam.",
        "Support Edge Loops: Press Ctrl + R in Edit Mode to slide tight edge loops near corners to sharpen subdivided curves."
      ],
      troubleshooting: [
        {
          problem: "My mesh has strange dark shadows, pinched lines, and black patches after adding Subdivision!",
          cause: "Inverted Face Normals! Blender thinks some faces are pointing inside-out.",
          solution: "Go into Edit Mode -> Select all with 'A' -> Press Shift + N ('Recalculate Normals Outside'). To verify, enable 'Face Orientation' in the Viewport Overlays dropdown (Blue = Good, Red = Inverted)."
        },
        {
          problem: "The Mirror modifier leaves an ugly gap or hole down the middle of my model.",
          cause: "Clipping is disabled, or the mesh origin is not aligned with the center symmetry axis.",
          solution: "Check the 'Clipping' checkbox in the Mirror modifier settings. In Edit Mode, select the center vertices and press G then X towards the center until they snap together."
        },
        {
          problem: "I have double vertices stacked on top of each other causing weird shading.",
          cause: "Extruding (E) and right-clicking cancels the movement, but DOES NOT delete the extruded vertices!",
          solution: "In Edit Mode, press 'A' to select everything, then press 'M' -> 'By Distance'. Check the bottom info bar to see how many duplicate vertices were removed."
        }
      ],
      tags: ["modifiers", "subdivision", "mirror", "solidify", "normals", "edge loop"]
    },
    {
      id: "fund-5",
      trackId: "fundamentals",
      title: "Clean Mesh Topology & Non-Manifold Geometry",
      author: "CG Cookie / Kent Trammell",
      duration: "20 mins",
      level: "Beginner",
      youtubeId: "4b4U63oG7YI",
      videoUrl: "https://www.youtube.com/watch?v=4b4U63oG7YI",
      overview: `Bad topology causes shading glitches, rendering artifacts, and nightmare deformation during animation. In this lesson, you'll learn the difference between Quads (4-sided polygons), Tris (3-sided), and N-Gons (5+ sided faces). You'll discover how to identify non-manifold geometry, eliminate internal hidden faces, and maintain smooth edge flow.`,
      summary: [
        "Quads (4-sided faces) are the gold standard for subdivision, deformation, and clean UV unwrapping.",
        "Tris are acceptable on flat planar surfaces and are the native format for game engines.",
        "N-Gons (faces with >4 vertices) cause unpredictable shading errors and subdivision pinching—keep them off curved surfaces!",
        "Interior Faces: Never have faces buried inside a closed volume; they ruin automatic weight painting and modifiers.",
        "Edge Flow: Loops should follow natural contours, muscles, or structural seams."
      ],
      troubleshooting: [
        {
          problem: "How do I find internal or non-manifold faces hidden inside my mesh?",
          cause: "Extruding inward accidentally creates invisible interior geometry.",
          solution: "In Edit Mode, deselect all (Alt + A), then click Select -> Select All by Trait -> 'Non-Manifold' (or Ctrl + Alt + Shift + M). Inspect highlighted vertices and delete unnecessary interior faces."
        },
        {
          problem: "My flat surface shows weird pinching and wavy shadows after shading smooth.",
          cause: "Smooth shading is trying to interpolate across sharp 90-degree geometric edges.",
          solution: "Use Object -> Shade Auto Smooth. In current Blender versions, smooth-by-angle behavior is available through the Smooth by Angle geometry-nodes modifier; consult the Blender 5.2 manual for the current workflow."
        },
        {
          problem: "Extrude created a weird crease that I can't smooth out.",
          cause: "Duplicate vertices or edge crease value set higher than 0.",
          solution: "Select all (A) -> 'M' -> 'By Distance'. Also press 'N' -> Item tab, and check if 'Crease' is set above 0. Set it back to 0."
        }
      ],
      tags: ["topology", "quads", "ngons", "non-manifold", "auto smooth", "cleanup"]
    },

    /* ---------------- TRACK 2: HARD SURFACE & MODELING ---------------- */
    {
      id: "fund-3",
      trackId: "fundamentals",
      title: "Complete Beginner Donut Course (Blender 5)",
      author: "Blender Guru",
      duration: "Full course",
      level: "Beginner",
      youtubeId: "z-Xl9tGqH14",
      videoUrl: "https://www.youtube.com/watch?v=z-Xl9tGqH14",
      resourceUrl: "https://www.blenderguru.com/posts/blender-donut-v5-tutorial",
      overview: `Follow Blender Guru's complete beginner donut course made for Blender 5.0 (published in 2026). It is a full start-to-finish course covering the basics, modeling, organic forms, materials, texturing, UVs, Geometry Nodes sprinkles, lighting, and rendering. Blender 5.2 is the current LTS release; the core workflows still apply, and use the official 5.2 manual linked below if a control has moved.`,
      summary: [
        "The course is split into eight chapters: basics, modeling, organic modeling, materials, texturing, UV unwrapping, sprinkles with Geometry Nodes, and final lighting/rendering.",
        "Save incremental versions of the .blend file as you go, especially before modifiers, UV edits, and simulation or node setup.",
        "Treat provided textures and assets as optional learning aids; the course page lists downloadable resources and setup steps.",
        "If a Blender 5.0 menu or panel differs in 5.2, search the versioned manual linked below for the feature name."
      ],
      troubleshooting: [
        {
          problem: "The tutorial's interface doesn't exactly match Blender 5.2.",
          cause: "The course was recorded for Blender 5.0 and some UI details may have changed in 5.2.",
          solution: "Look up the tool name in the linked Blender 5.2 manual. The course page also includes current chapter links and project resources."
        },
        {
          problem: "The course's texture or asset is missing.",
          cause: "Some course assets are provided as separate downloads and are not embedded in the video.",
          solution: "Open the Blender Guru course page linked above and download the relevant project resources. Reconnect missing files through File -> External Data -> Find Missing Files."
        },
        {
          problem: "I can't see vertices behind the front faces in Edit Mode.",
          cause: "Solid shading blocks occluded geometry.",
          solution: "Press Alt + Z to toggle X-Ray mode. Now you can select both front and back vertices effortlessly with box select (B)."
        }
      ],
      tags: ["donut", "blender 5", "blender guru", "beginner", "modeling", "materials", "geometry nodes"]
    },
  addons: [
    {
      id: "node-wrangler",
      name: "Node Wrangler",
      type: "Built-in (Included)",
      category: "Shading & Texturing",
      icon: "⚡",
      whyYouNeedIt: "The single most essential addon in Blender. Without it, setting up PBR materials takes 10x longer. Automates full texture sets, allows instant node previews, and fast connecting.",
      howToEnable: "Edit -> Preferences -> Add-ons -> Search 'Node Wrangler' -> Check the box.",
      keyShortcuts: [
        "Ctrl + Shift + T: Auto-setup full PBR texture sets (select Albedo, Roughness, Normal, etc.)",
        "Ctrl + Shift + Left Click: Instant Viewer node to preview any individual node output",
        "Ctrl + T: Instantly add Texture Coordinate and Mapping nodes to any texture",
        "Alt + Right Click Drag: Lazy connect two nodes with a line"
      ],
      docUrl: "https://docs.blender.org/manual/en/latest/addons/node/node_wrangler.html",
      downloadUrl: null
    },
    {
      id: "loop-tools",
      name: "LoopTools",
      type: "Built-in (Included)",
      category: "Modeling",
      icon: "⭕",
      whyYouNeedIt: "Turns any messy selection of vertices into a perfect geometric circle in one click! Also bridges irregular loops, flattens faces, and distributes edge spacing evenly.",
      howToEnable: "Edit -> Preferences -> Add-ons -> Search 'LoopTools' -> Check the box.",
      keyShortcuts: [
        "Right Click in Edit Mode -> LoopTools -> Circle (makes perfect circular holes)",
        "Right Click -> LoopTools -> Space (evens out spacing between vertices)",
        "Right Click -> LoopTools -> Bridge (bridges two separate edge loops with quads)",
        "Right Click -> LoopTools -> Relax (smooths out topology without losing overall shape)"
      ],
      docUrl: "https://docs.blender.org/manual/en/latest/addons/mesh/looptools.html",
      downloadUrl: null
    },
    {
      id: "bool-tool",
      name: "BoolTool",
      type: "Built-in (Included)",
      category: "Modeling",
      icon: "✂️",
      whyYouNeedIt: "Supercharges Boolean operations. Instead of manually adding modifiers, tweaking targets, and applying them, you can cut shapes with hotkeys in half a second.",
      howToEnable: "Edit -> Preferences -> Add-ons -> Search 'BoolTool' -> Check the box.",
      keyShortcuts: [
        "Ctrl + Shift + '-' (Numpad Minus): Auto Difference Cut",
        "Ctrl + Shift + '+' (Numpad Plus): Auto Union (fuses shapes together)",
        "Ctrl + Shift + '*' (Numpad Multiply): Auto Intersect",
        "Ctrl + Shift + B: Open BoolTool interactive pie menu"
      ],
      docUrl: "https://docs.blender.org/manual/en/latest/addons/object/booltool.html",
      downloadUrl: null
    },
    {
      id: "images-as-planes",
      name: "Images as Planes",
      type: "Built-in (Included)",
      category: "Workflow",
      icon: "🖼️",
      whyYouNeedIt: "Instantly imports 2D images, concept art, reference drawings, or alpha textures mapped onto a 3D plane with the exact correct aspect ratio and shader set up.",
      howToEnable: "Edit -> Preferences -> Add-ons -> Search 'Images as Planes' -> Check the box.",
      keyShortcuts: [
        "Shift + A -> Image -> 'Images as Planes'",
        "Enable 'Use Alpha' in the file browser sidebar for transparent PNG cutouts"
      ],
      docUrl: "https://docs.blender.org/manual/en/latest/addons/import_export/images_as_planes.html",
      downloadUrl: null
    },
    {
      id: "extra-objects",
      name: "Extra Mesh & Curve Objects",
      type: "Built-in (Included)",
      category: "Modeling",
      icon: "⚙️",
      whyYouNeedIt: "Unlocks dozens of ready-to-use primitives: mechanical gears, diamonds, pipes, rocks, architectural arches, torus knots, and spirals right inside Shift + A.",
      howToEnable: "Edit -> Preferences -> Add-ons -> Search 'Add Mesh: Extra Objects' and 'Add Curve: Extra Objects' -> Check both.",
      keyShortcuts: [
        "Shift + A -> Mesh -> Gears (Gear, Worm)",
        "Shift + A -> Mesh -> Rock Generator",
        "Shift + A -> Curve -> Spirals & Curves galore"
      ],
      docUrl: "https://docs.blender.org/manual/en/latest/addons/add_mesh/mesh_extra_objects.html",
      downloadUrl: null
    },
    {
      id: "rigify",
      name: "Rigify",
      type: "Built-in (Included)",
      category: "Animation & Rigging",
      icon: "🦴",
      whyYouNeedIt: "Blender's official production-ready character auto-rigging system. Generates a fully featured modular rig with IK/FK switches, finger controls, and facial sliders from a basic metarig.",
      howToEnable: "Edit -> Preferences -> Add-ons -> Search 'Rigify' -> Check the box.",
      keyShortcuts: [
        "Shift + A -> Armature -> Human (Meta-Rig)",
        "Fit metarig bones to your character mesh",
        "In Armature Properties -> Click 'Generate Rig' button"
      ],
      docUrl: "https://docs.blender.org/manual/en/latest/addons/rigging/rigify/index.html",
      downloadUrl: null
    },
    {
      id: "blenderkit",
      name: "BlenderKit",
      type: "Free Community Plugin",
      category: "Asset Library",
      icon: "📦",
      whyYouNeedIt: "An enormous in-viewport online library containing tens of thousands of free 3D models, PBR materials, HDRIs, and sculpt brushes. Drag and drop directly into your scene!",
      howToEnable: "Download the .zip from blenderkit.com -> Edit -> Preferences -> Add-ons -> Install -> Select .zip -> Check box.",
      keyShortcuts: [
        "Find assets in the top 3D viewport search bar",
        "Drag and drop any material or model straight into your 3D scene"
      ],
      docUrl: "https://www.blenderkit.com/docs/",
      downloadUrl: "https://www.blenderkit.com/"
    },
    {
      id: "poly-haven",
      name: "Poly Haven Asset Browser Addon",
      type: "Free Community Plugin",
      category: "Materials & Lighting",
      icon: "🌄",
      whyYouNeedIt: "Connects Blender's native Asset Browser directly to the Poly Haven library (100% free CC0 HDRIs, photorealistic materials, and models). Zero manual downloading or unzipping needed.",
      howToEnable: "Download from polyhaven.com/blender -> Install via Preferences -> Add-ons -> Fetch library.",
      keyShortcuts: [
        "Open Blender Asset Browser window",
        "Browse hundreds of 1K/2K/4K HDRIs and drag directly onto World"
      ],
      docUrl: "https://polyhaven.com/",
      downloadUrl: "https://polyhaven.com/blender"
    },
    {
      id: "fspy",
      name: "fSpy (Photo Perspective Matcher)",
      type: "Free Community Standalone + Addon",
      category: "Modeling & Camera",
      icon: "📷",
      whyYouNeedIt: "The secret weapon for 3D modeling from reference photos. Automatically calculates the exact camera focal length, position, and vanishing points from any 2D photograph.",
      howToEnable: "Download fSpy app + fSpy Blender importer addon -> Install addon -> File -> Import -> fSpy project.",
      keyShortcuts: [
        "Align 2 axis guide lines in fSpy app to perspective lines in photo",
        "Import into Blender for a camera perfectly matched to the photo"
      ],
      docUrl: "https://fspy.io/",
      downloadUrl: "https://fspy.io/"
    },
    {
      id: "screencast-keys",
      name: "Screencast Keys",
      type: "Free Community Plugin",
      category: "Learning & Streaming",
      icon: "⌨️",
      whyYouNeedIt: "Displays your pressed keystrokes, shortcuts, and mouse button clicks directly in the corner of your 3D viewport. Indispensable for recording tutorials or sharing workflow clips with mentors.",
      howToEnable: "Download .zip from GitHub -> Preferences -> Add-ons -> Install -> Enable -> Press 'N' -> Screencast Keys -> Check 'Start'.",
      keyShortcuts: [
        "Toggle in the 'N' Sidebar -> Screencast Keys tab"
      ],
      docUrl: "https://github.com/nutti/Screencast-Keys",
      downloadUrl: "https://github.com/nutti/Screencast-Keys/releases"
    }
  ],

  achievements: [
    {
      id: "cube-slayer",
      title: "Cube Slayer",
      description: "Delete the default cube for the first time. The universal rite of passage!",
      icon: "🗑️",
      xp: 50,
      type: "action"
    },
    {
      id: "first-step",
      title: "First Coordinate",
      description: "Complete your very first Blender lesson.",
      icon: "🌱",
      xp: 100,
      type: "lesson-count",
      count: 1
    },
    {
      id: "donut-graduate",
      title: "Sweet Dough",
      description: "Complete the iconic Donut lesson.",
      icon: "🍩",
      xp: 150,
      type: "specific-lesson",
      lessonId: "fund-3"
    },
    {
      id: "bug-squasher",
      title: "Bug Squasher",
      description: "Inspect troubleshooting guides on 3 different lessons.",
      icon: "🔍",
      xp: 75,
      type: "troubleshoot-count",
      count: 3
    },
    {
      id: "modifier-master",
      title: "Modifier Maestro",
      description: "Complete the Modifiers 101 lesson.",
      icon: "🛠️",
      xp: 100,
      type: "specific-lesson",
      lessonId: "fund-4"
    },
    {
      id: "tool-collector",
      title: "Plugin Enthusiast",
      description: "Explore the beginner addons directory.",
      icon: "🔌",
      xp: 50,
      type: "action"
    },
    {
      id: "shader-alchemist",
      title: "Material Wizard",
      description: "Complete the Principled BSDF & PBR lesson.",
      icon: "🎨",
      xp: 100,
      type: "specific-lesson",
      lessonId: "shade-1"
    },
    {
      id: "sculptor",
      title: "Clay Sculptor",
      description: "Complete the Sculpting 101 lesson.",
      icon: "🗿",
      xp: 100,
      type: "specific-lesson",
      lessonId: "sculpt-1"
    },
    {
      id: "bone-collector",
      title: "Skeleton Builder",
      description: "Complete the Armature & Bones lesson.",
      icon: "🦴",
      xp: 100,
      type: "specific-lesson",
      lessonId: "anim-1"
    },
    {
      id: "note-taker",
      title: "Scholar's Notepad",
      description: "Save a personal study note on any lesson.",
      icon: "📝",
      xp: 75,
      type: "action"
    },
    {
      id: "five-lessons",
      title: "Dedicated Artist",
      description: "Complete 5 lessons across any tracks.",
      icon: "⭐",
      xp: 250,
      type: "lesson-count",
      count: 5
    },
    {
      id: "ten-lessons",
      title: "Halfway Hero",
      description: "Complete 10 lessons in the academy.",
      icon: "🏆",
      xp: 500,
      type: "lesson-count",
      count: 10
    },
    {
      id: "all-fundamentals",
      title: "Foundation Certified",
      description: "Complete all lessons in the Blender Fundamentals track.",
      icon: "🎓",
      xp: 400,
      type: "track-complete",
      trackId: "fundamentals"
    },
    {
      id: "grandmaster",
      title: "3D Virtuoso",
      description: "Complete all lessons in the entire curriculum!",
      icon: "👑",
      xp: 1000,
      type: "lesson-count",
      count: 20
    },
    {
      id: "cube-necromancer",
      title: "Cube Necromancer",
      description: "Respawn the default cube 3 times. Why won't you let it rest?!",
      icon: "🧟",
      xp: 75,
      type: "action"
    },
    {
      id: "suzanne-disciple",
      title: "Suzanne's Disciple",
      description: "Discovered and greeted Blender's legendary monkey mascot, Suzanne!",
      icon: "🐵",
      xp: 100,
      type: "action"
    },
    {
      id: "shortcut-master",
      title: "Muscle Memory",
      description: "Discovered the secret Shift+A pie menu or keyboard cheat sheet.",
      icon: "⌨️",
      xp: 75,
      type: "action"
    },
    {
      id: "hardware-tester",
      title: "Hardware Diagnostician",
      description: "Evaluated a 3D workstation setup in the Blender Rig Checker.",
      icon: "🖥️",
      xp: 75,
      type: "action"
    },
    {
      id: "vault-looter",
      title: "Vault Looter",
      description: "Explored the Free 3D Resource Vault for materials and models.",
      icon: "📦",
      xp: 75,
      type: "action"
    },
    {
      id: "glossary-scholar",
      title: "3D Polyglot",
      description: "Decoded technical 3D jargon in the Terminology Glossary.",
      icon: "📖",
      xp: 75,
      type: "action"
    },
    {
      id: "night-owl",
      title: "Night Owl",
      description: "Visited Blender Academy between midnight and 5 AM. Sleep is for the weak!",
      icon: "🦉",
      xp: 100,
      type: "action"
    },
    {
      id: "konami-master",
      title: "Konami Master",
      description: "Entered the legendary Konami code. ↑↑↓↓←→←→BA. True gamer instincts!",
      icon: "🎮",
      xp: 200,
      type: "action"
    },
    {
      id: "lore-keeper",
      title: "Lore Keeper",
      description: "Discovered the logo easter egg and the secret history of Blender's original name.",
      icon: "🔮",
      xp: 75,
      type: "action"
    },
    {
      id: "render-addict",
      title: "Render Addict",
      description: "Completed 15 lessons. You've pressed F12 more times than you can count.",
      icon: "🖨️",
      xp: 750,
      type: "lesson-count",
      count: 15
    },
    {
      id: "twenty-five-lessons",
      title: "Academy Legend",
      description: "Completed 25 lessons. You are the master of the mesh!",
      icon: "🌟",
      xp: 900,
      type: "lesson-count",
      count: 25
    }
  ],

  shortcuts: [
    {
      category: "Navigation & Viewport",
      items: [
        { key: "MMB (Middle Click)", desc: "Orbit 3D Viewport" },
        { key: "Shift + MMB", desc: "Pan Viewport" },
        { key: "Scroll Wheel", desc: "Zoom In / Out" },
        { key: "Numpad .", desc: "Frame & Focus selected object" },
        { key: "Numpad 1 / 3 / 7", desc: "Front / Right / Top orthographic views" },
        { key: "Numpad 0", desc: "Switch to Camera View" },
        { key: "` (Grave Accent)", desc: "Quick View Pie Menu" },
        { key: "Z", desc: "Viewport Shading Pie Menu (Wire, Solid, Material, Render)" },
        { key: "Alt + Z", desc: "Toggle X-Ray Mode" }
      ]
    },
    {
      category: "Object Manipulation",
      items: [
        { key: "G", desc: "Grab / Move" },
        { key: "R", desc: "Rotate" },
        { key: "S", desc: "Scale" },
        { key: "X / Y / Z", desc: "Lock transform to single axis" },
        { key: "Shift + X / Y / Z", desc: "Lock transform to plane (exclude axis)" },
        { key: "Ctrl + A", desc: "Apply All Transforms (CRUCIAL: Apply Scale!)" },
        { key: "Alt + G / R / S", desc: "Clear Location / Rotation / Scale back to zero" },
        { key: "Shift + D", desc: "Duplicate Object" },
        { key: "Alt + D", desc: "Linked Duplicate (shares mesh data)" },
        { key: "X or Delete", desc: "Delete selected object" }
      ]
    },
    {
      category: "Edit Mode (Modeling)",
      items: [
        { key: "Tab", desc: "Toggle Object Mode / Edit Mode" },
        { key: "1 / 2 / 3", desc: "Vertex / Edge / Face selection mode" },
        { key: "E", desc: "Extrude selected geometry" },
        { key: "I", desc: "Inset face" },
        { key: "Ctrl + B", desc: "Bevel edges or vertices" },
        { key: "Ctrl + R", desc: "Loop Cut and Slide" },
        { key: "K", desc: "Knife Tool (cut custom edges)" },
        { key: "F", desc: "Fill face between selected vertices or edges" },
        { key: "M", desc: "Merge Vertices menu ('By Distance' removes duplicates)" },
        { key: "Shift + N", desc: "Recalculate Normals Outside (fixes dark shading)" },
        { key: "O", desc: "Toggle Proportional Editing" },
        { key: "Alt + Left Click", desc: "Select entire Edge or Face Loop" }
      ]
    },
    {
      category: "Shading & Nodes",
      items: [
        { key: "Ctrl + Shift + T", desc: "Node Wrangler: Auto PBR texture setup" },
        { key: "Ctrl + Shift + Click", desc: "Node Wrangler: Instant Viewer node preview" },
        { key: "Ctrl + T", desc: "Node Wrangler: Add Texture Coordinate + Mapping" },
        { key: "F3", desc: "Global Search for any operator or command" },
        { key: "F12", desc: "Render current frame" },
        { key: "Ctrl + F12", desc: "Render animation sequence" }
      ]
    }
  ]
};

