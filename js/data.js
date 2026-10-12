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
      description: "Interface, 3D navigation, core transformations, object vs edit mode, and essential topology.",
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
      description: "Dynamic topology (Dyntopo), voxel remesher, brush mechanics, stylized character heads, retopology.",
      badge: "Sculpt Titan"
    },
    {
      id: "shading",
      name: "Materials, Shading & UVs",
      icon: "🎨",
      color: "#00E676",
      description: "Principled BSDF, PBR textures, procedural shader nodes, UV unwrapping, and direct texture painting.",
      badge: "Shader Alchemist"
    },
    {
      id: "lighting",
      name: "Lighting, Cameras & Render",
      icon: "💡",
      color: "#FFD600",
      description: "Cycles and Eevee, 3-point lighting setups, photorealistic HDRIs, depth of field, color management.",
      badge: "Render Maestro"
    },
    {
      id: "animation",
      name: "Rigging & Character Animation",
      icon: "🦴",
      color: "#FF5252",
      description: "Bones & armatures, weight painting, Rigify auto-rigging, Graph Editor, bouncing ball principles.",
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
      description: "Rigid body destruction, realistic cloth simulation, smoke, fire, and liquid physics.",
      badge: "Simulation Wizard"
    }
  ],

  lessons: [
    /* ---------------- TRACK 1: FUNDAMENTALS ---------------- */
    {
      id: "fund-1",
      trackId: "fundamentals",
      title: "Blender Interface & 3D Viewport Navigation (Blender 5)",
      author: "Blender Guru",
      duration: "22 mins",
      level: "Absolute Beginner",
      youtubeId: "-tbSCMbJA6o",
      videoUrl: "https://www.youtube.com/watch?v=-tbSCMbJA6o",
      overview: `Start with the interface and navigation chapter from Blender Guru's current Blender 5 beginner donut course. The controls and core concepts apply in Blender 5.2; use the linked 5.2 manual when labels or panels differ.`,
      summary: [
        "Orbit with Middle Mouse Button (MMB), Pan with Shift + MMB, Zoom with Mouse Scroll.",
        "Snap to orthographic views using Numpad 1 (Front), 3 (Right), 7 (Top), and 0 (Active Camera).",
        "Press 'Numpad .' (period) to instantly center and focus your view on any selected object.",
        "Toggle the Left Toolbar with 'T' and the Right Properties/Sidebar with 'N'.",
        "Switch between Viewport Shading modes (Wireframe, Solid, Material Preview, Rendered) using 'Z'."
      ],
      troubleshooting: [
        {
          problem: "I got lost in infinite empty space and can't find my objects!",
          cause: "Your viewport camera panned or zoomed far away from world center (0,0,0).",
          solution: "Select your object in the top-right Outliner hierarchy, hover your mouse over the 3D viewport, and press Numpad . (Period). Alternatively, press Home to view all objects in the scene."
        },
        {
          problem: "The viewport starts clipping and cutting through my object when I zoom close.",
          cause: "The Viewport Camera's 'Clip Start' distance is set too high or your object scale is tiny.",
          solution: "Press 'N' to open the Sidebar -> click the 'View' tab -> under 'View', lower 'Clip Start' to 0.01m (or 1mm). Don't set it to 0, or you will get depth-fighting artifacts!"
        },
        {
          problem: "I don't have a Numpad on my keyboard! How do I switch views?",
          cause: "Tenkeyless or laptop keyboards lack the dedicated numpad cluster.",
          solution: "Go to Edit -> Preferences -> Input -> Check 'Emulate Numpad'. Now the top number keys 1-9 will act as Numpad keys. Alternatively, use the Grave Accent key (`) for the View Pie Menu."
        }
      ],
      tags: ["navigation", "interface", "viewport", "orbit", "basics", "shortcuts"]
    },
    {
      id: "fund-2",
      trackId: "fundamentals",
      title: "The Holy Trinity: Move, Rotate, Scale (Transforms)",
      author: "Grant Abbitt",
      duration: "18 mins",
      level: "Absolute Beginner",
      youtubeId: "il6_26k4lFk",
      videoUrl: "https://www.youtube.com/watch?v=il6_26k4lFk",
      overview: `Every 3D artist lives and breathes the transform hotkeys: G (Grab/Move), R (Rotate), and S (Scale). In this lesson, you will learn how to constrain transformations to specific axes (X, Y, Z), switch between Global and Local coordinates, use precision numeric input, and learn the single most important rule in Blender: ALWAYS apply your object scale!`,
      summary: [
        "G = Grab/Move, R = Rotate, S = Scale. Confirm with Left Click, Cancel with Right Click or Esc.",
        "Lock to an axis by pressing X, Y, or Z after G/R/S (e.g., G then Z to move purely vertically).",
        "Exclude an axis with Shift (e.g., S then Shift + Z scales horizontally while keeping height constant).",
        "Hold Shift while transforming for ultra-precise micro-adjustments.",
        "The golden rule: Press Ctrl + A -> 'Apply Scale' whenever you resize an object in Object Mode before adding modifiers or texturing!"
      ],
      troubleshooting: [
        {
          problem: "My Bevel modifier or Inset tool is squished or unevenly stretched!",
          cause: "The object was scaled in Object Mode without applying the scale (Scale is e.g. 1.0, 0.2, 3.5 instead of 1.0, 1.0, 1.0).",
          solution: "In Object Mode, select the object and press Ctrl + A -> click 'Scale'. This resets the object's transform matrix to 1.0 without changing its physical shape."
        },
        {
          problem: "Rotating an object rotates it around an empty space instead of its center.",
          cause: "The Object Origin point (the tiny yellow dot) is separated from the mesh geometry.",
          solution: "Right-click the object -> Set Origin -> 'Origin to Geometry'. To move the origin to the 3D Cursor, position the cursor and choose 'Origin to 3D Cursor'."
        },
        {
          problem: "Accidentally moved an object and now it's off-center.",
          cause: "Transform values are no longer zero.",
          solution: "Press Alt + G to clear position back to (0,0,0), Alt + R to clear rotation, and Alt + S to reset scale to 1.0."
        }
      ],
      tags: ["transforms", "grab", "rotate", "scale", "apply scale", "origin"]
    },
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
      id: "hard-1",
      trackId: "hardsurface",
      title: "Low Poly Game Asset Modeling: The Medieval Well",
      author: "Grant Abbitt",
      duration: "35 mins",
      level: "Beginner",
      youtubeId: "1pnh4A9Iq48",
      videoUrl: "https://www.youtube.com/watch?v=1pnh4A9Iq48",
      overview: `Grant Abbitt's Medieval Well is one of the most beloved low-poly beginner tutorials in the entire 3D community. You will learn how to create charming wooden beams, stone roof shingles, a bucket, and rope using minimal polycounts, clever extrusion techniques, and color palettes that run smoothly in game engines like Unreal Engine and Unity.`,
      summary: [
        "Low poly focuses on strong silhouettes, readable shapes, and efficient vertex budgets.",
        "Use Inset ('I'), Extrude ('E'), and Loop Cut ('Ctrl + R') to block out architectural assets.",
        "Randomize low poly wooden beams by selecting random vertices and nudging them slightly with G.",
        "Use Linked Duplicates (Alt + D) for repeating tiles and shingles to save memory and synchronize edits.",
        "Array modifier: Quickly duplicate shingles and bricks along a fixed spacing offset."
      ],
      troubleshooting: [
        {
          problem: "When I edit one roof tile, all my other tiles change too!",
          cause: "You created them using Alt + D (Linked Duplicate) which shares the exact same mesh data.",
          solution: "If you want a tile to be independent, click Object -> Relations -> Make Single User -> 'Object & Data'."
        },
        {
          problem: "Inset ('I') is insetting faces into weird uneven thin strips instead of even borders.",
          cause: "The object scale is non-uniform (e.g. Z scale is 4x larger than X and Y).",
          solution: "Exit to Object Mode, press Ctrl + A -> 'Apply Scale', then go back into Edit Mode and try insetting again."
        },
        {
          problem: "My low-poly wood planks look blurry or washed out.",
          cause: "Smooth shading is active on low poly geometry with sharp angles.",
          solution: "Right click the object -> Select 'Shade Flat' for that crisp, stylized low-poly aesthetic."
        }
      ],
      tags: ["low poly", "grant abbitt", "game assets", "medieval well", "array modifier"]
    },
    {
      id: "hard-2",
      trackId: "hardsurface",
      title: "Hard Surface Modeling with Booleans & Bevels",
      author: "Josh Gambrell & Ponte Ryuurui (Blender Bros)",
      duration: "28 mins",
      level: "Intermediate",
      youtubeId: "U4m6gC3d3l0",
      videoUrl: "https://www.youtube.com/watch?v=U4m6gC3d3l0",
      overview: `Hard surface modeling (weapons, mechs, vehicles, sci-fi props) relies on crisp industrial cuts and highlights. In this lesson, you'll master non-destructive Boolean workflows (Difference, Union, Intersect), understand the difference between the Exact and Fast solvers, and learn how to pair Booleans with the Bevel modifier and Weighted Normal to achieve clean, high-end bevel highlights.`,
      summary: [
        "Enable the built-in 'BoolTool' addon (Edit -> Preferences -> Add-ons) for instant hotkey booleans.",
        "BoolTool hotkeys: Select cutter, then target object -> Ctrl + Shift + '-' for Difference, Ctrl + Shift + '+' for Union.",
        "Weighted Normal Modifier: Fixes shading gradients across large flat surfaces with complex boolean cuts.",
        "Always place the Bevel modifier AFTER the Boolean modifier in the stack.",
        "Switch the Boolean solver between 'Exact' (accurate, handles coplanar faces) and 'Fast' (speedy performance)."
      ],
      troubleshooting: [
        {
          problem: "The Boolean modifier failed and made the entire object disappear!",
          cause: "The cutter or target has non-manifold geometry, flipped normals, or perfectly coplanar overlapping faces.",
          solution: "Switch the Boolean solver from 'Exact' to 'Fast' (or vice versa). Check both objects for flipped normals (Shift + N) and remove duplicate vertices (M -> By Distance)."
        },
        {
          problem: "The Bevel modifier causes geometry to explode and cross over itself at corners.",
          cause: "Bevel width is larger than adjacent edge space, or 'Clamp Overlap' is disabled.",
          solution: "In Bevel modifier settings, enable 'Clamp Overlap' to prevent vertex self-intersection. Lower the Bevel Amount/Width."
        },
        {
          problem: "Shading looks wobbly and distorted around the boolean hole cutouts.",
          cause: "Triangulation artifacts created by Blender connecting vertices arbitrarily to the cut.",
          solution: "Add a 'Weighted Normal' modifier at the bottom of the stack and check 'Keep Sharp'."
        }
      ],
      tags: ["hard surface", "booleans", "bevel", "booltool", "weighted normal", "sci-fi"]
    },
    {
      id: "hard-3",
      trackId: "hardsurface",
      title: "Precision 3D Modeling & Snapping for Architecture",
      author: "CG Essentials",
      duration: "26 mins",
      level: "Intermediate",
      youtubeId: "WvGk04RkIeI",
      videoUrl: "https://www.youtube.com/watch?v=WvGk04RkIeI",
      overview: `Learn how to model with exact millimeter-accurate architectural dimensions. You will configure Blender's scene units (Metric/Imperial), master vertex and edge snapping with target alignment, use the Measure tool, and build modular walls, doors, and window frames suitable for architectural visualization (ArchViz) and level design.`,
      summary: [
        "Set Scene Units in Scene Properties -> Units (Metric, Millimeters/Meters or Imperial/Feet).",
        "Hold Ctrl while transforming to snap to grid increments automatically.",
        "Snapping menu (Shift + Tab): Toggle between Vertex, Edge, Face, and Incremental snapping.",
        "Set Snap Target to 'Closest' or 'Center' depending on whether you want corners to weld.",
        "Use the 3D Cursor (Shift + Right Click) as a temporary pivot point for precision rotational alignment."
      ],
      troubleshooting: [
        {
          problem: "My object snaps violently across the scene when moving.",
          cause: "Snapping is set to 'Face Nearest' with 'Project Individual Elements' or snap distance is misconfigured.",
          solution: "Set Snap Target to 'Vertex' and Snap With to 'Active' or 'Closest'. Turn off 'Align Rotation to Target' unless aligning normal vectors."
        },
        {
          problem: "Measurements on screen don't match the dimensions in the Transform sidebar.",
          cause: "Object scale is unapplied, so mesh dimensions are being multiplied by scale factors.",
          solution: "Press Ctrl + A in Object Mode and select 'Apply Scale'."
        },
        {
          problem: "The grid disappears when zooming in close.",
          cause: "Viewport clip settings or grid subdivisions scaling limits.",
          solution: "Open Overlays dropdown in top right -> check Grid and adjust Subdivisions to 10."
        }
      ],
      tags: ["archviz", "precision", "snapping", "grid", "measurements", "units"]
    },

    /* ---------------- TRACK 3: SCULPTING & ANATOMY ---------------- */
    {
      id: "sculpt-1",
      trackId: "sculpting",
      title: "Digital Sculpting 101: Core Brushes & Mechanics",
      author: "Grant Abbitt / CG Boost",
      duration: "30 mins",
      level: "Beginner",
      youtubeId: "4_R0B1-yL7Y",
      videoUrl: "https://www.youtube.com/watch?v=4_R0B1-yL7Y",
      overview: `Sculpting feels like working with digital clay in real life. In this comprehensive guide, you'll learn how to enter Sculpt Mode, set up a drawing tablet or mouse, and master the fundamental brushes: Draw, Clay Strips, Grab, Snake Hook, Crease, Inflate, and Smooth. You will sculpt a stylized organic stone and goblin creature head.`,
      summary: [
        "F changes Brush Radius; Shift + F changes Brush Strength.",
        "Hold Ctrl while brushing to invert the brush effect (e.g. Draw carves inward instead of pulling outward).",
        "Hold Shift at any time to temporarily switch any active brush to the Smooth brush.",
        "Clay Strips is the premier brush for blocking in primary and secondary anatomical volumes.",
        "Snake Hook brush is essential for pulling out horns, ears, fingers, and long tendrils quickly."
      ],
      troubleshooting: [
        {
          problem: "I click and drag my sculpt brush on the default cube, but NOTHING happens!",
          cause: "A standard cube only has 8 vertices. Sculpt brushes require vertices to displace!",
          solution: "Press Ctrl + 3 to add a Subdivision Surface modifier and apply it, OR use the Voxel Remesher (Ctrl + R in Sculpt Mode with a small voxel size) to give the mesh millions of editable vertices."
        },
        {
          problem: "My sculpt stroke is jaggy, pixelated, and faceted.",
          cause: "Mesh resolution is too low, or Dyntopo detail size is too coarse.",
          solution: "Lower your Voxel Remesh size (e.g., from 0.1m to 0.02m) and press Ctrl + R, or enable Dyntopo with relative detail around 8px."
        },
        {
          problem: "Stylus pressure sensitivity is not changing my brush size or strength.",
          cause: "The tablet pressure toggle icon next to Radius / Strength in the top header is toggled off.",
          solution: "Click the little pen/stylus icon with concentric circles next to the Radius and Strength sliders."
        }
      ],
      tags: ["sculpting", "brushes", "clay strips", "tablet", "smooth", "snake hook"]
    },
    {
      id: "sculpt-2",
      trackId: "sculpting",
      title: "Dyntopo vs Voxel Remesh: The Modern Workflow",
      author: "SpeedChar / Nikolay Naydenov",
      duration: "25 mins",
      level: "Intermediate",
      youtubeId: "uL0XJm9s3p8",
      videoUrl: "https://www.youtube.com/watch?v=uL0XJm9s3p8",
      overview: `Dynamic Topology (Dyntopo) dynamically generates triangles under your brush stroke, while the Voxel Remesher rebuilds the entire object into uniform quads in a fraction of a second. This lesson teaches you when to use each approach during character concepting, blocking, and detailing.`,
      summary: [
        "Voxel Remesher shortcut: Press Shift + R to adjust the grid visualizer preview, then Ctrl + R to execute the remesh.",
        "Voxel Remesher fuses separate overlapping shapes (like head, ears, nose) into one continuous seamless manifold mesh.",
        "Dyntopo is ideal for stretching shapes extreme distances with Snake Hook without losing geometry.",
        "Never use Dyntopo if you already have UV maps or vertex colors, as it will destroy them.",
        "Keep polycount under control: Start blockout at 0.1m voxel size, refine at 0.03m, and save fine pores/wrinkles for multiresolution."
      ],
      troubleshooting: [
        {
          problem: "I pressed Ctrl + R to Voxel Remesh and my fine details (eyes, lips) melted into a blob!",
          cause: "The Voxel Size was too large relative to the scale of your object details.",
          solution: "Press Ctrl + Z to undo. Press Shift + R to see the voxel grid preview, scroll your mouse until the squares are small and tight, then press Ctrl + R."
        },
        {
          problem: "Blender froze or crashed when I remeshed!",
          cause: "Voxel size was set too tiny (e.g. 0.0001m), requesting hundreds of millions of polygons which overloaded RAM.",
          solution: "Always save with Ctrl + S before remeshing. Avoid stepping voxel size down by more than 50% at a time."
        },
        {
          problem: "Symmetry stopped working on one side of my sculpt.",
          cause: "The mesh center shifted away from the world X=0 axis, or Dyntopo created asymmetric density.",
          solution: "In Sculpt Mode, go to the top header -> click the Symmetry dropdown -> click 'Symmetrize' (+X to -X or -X to +X)."
        }
      ],
      tags: ["dyntopo", "voxel remesh", "speedchar", "symmetry", "multires"]
    },
    {
      id: "sculpt-3",
      trackId: "sculpting",
      title: "Manual Retopology for Animation & Games",
      author: "FlippedNormals",
      duration: "32 mins",
      level: "Intermediate",
      youtubeId: "CuQzPDs99yM",
      videoUrl: "https://www.youtube.com/watch?v=CuQzPDs99yM",
      overview: `Raw high-poly sculpts with millions of triangles cannot be rigged or animated efficiently. Retopology is the art of drawing clean, optimized low-poly quad geometry over your high-poly sculpt. Learn how to use Blender's snapping tools, the Shrinkwrap modifier, and face loops around the mouth and eyes for clean facial deformations.`,
      summary: [
        "Add a new single Plane, add a 'Shrinkwrap' modifier targeting your high-poly sculpt, and enable Face Snapping.",
        "Turn on 'In Front' in Object Properties -> Viewport Display so your new retopology is always visible over the sculpt.",
        "Build key edge loops first: circular loops around the eye sockets, mouth, and jawline.",
        "Connect loops with quad strips using Extrude (E) and Auto-Merge vertices.",
        "Use PolyQuilt or RetopoFlow addons to drastically accelerate retopology speed."
      ],
      troubleshooting: [
        {
          problem: "My retopology plane vertices are sinking inside the high-poly sculpt mesh.",
          cause: "Without 'In Front' display or normal offset, the faces clip into the sculpt.",
          solution: "In the Shrinkwrap modifier, increase the 'Offset' slightly (e.g., 0.005m). In Object Properties -> Viewport Display, check 'In Front'."
        },
        {
          problem: "Vertices are snapping to the BACK of the character's head instead of the front surface.",
          cause: "Snapping does not occlude back-facing polygons.",
          solution: "In the Snapping dropdown (top center), check 'Backface Culling' or enable X-Ray mode (Alt + Z) carefully."
        },
        {
          problem: "I have an odd number of vertices and ended up with an unavoidable triangle.",
          cause: "Loop counts between two merging branches don't match.",
          solution: "Use a standard topology step-down redirect (converting 3 edge loops into 1 quad) to maintain pure quad flow."
        }
      ],
      tags: ["retopology", "shrinkwrap", "quads", "animation prep", "face loops"]
    },

    /* ---------------- TRACK 4: MATERIALS & SHADING ---------------- */
    {
      id: "shade-1",
      trackId: "shading",
      title: "The Principled BSDF & PBR Texturing Fundamentals",
      author: "Blender Guru",
      duration: "28 mins",
      level: "Beginner",
      youtubeId: "4H5W6C_Mbck",
      videoUrl: "https://www.youtube.com/watch?v=4H5W6C_Mbck",
      overview: `Physically Based Rendering (PBR) is how modern 3D games and movies simulate real-world light interactions. In this lesson, you will master the Principled BSDF shader in Blender's Shader Editor. You'll learn how Base Color (Albedo), Roughness, Metallic, IOR (Index of Refraction), Transmission (Glass), and Normal Maps work together to create any surface imaginable.`,
      summary: [
        "Switch to the 'Shading' workspace tab at the top of Blender to access the Shader Editor and 3D preview.",
        "Metallic is almost always binary in the real world: either 0.0 (dielectrics like wood, plastic, skin) or 1.0 (pure metals like chrome, gold, iron).",
        "Roughness controls surface microsurface: 0.0 is mirror-glossy reflection; 1.0 is diffuse and matte chalk.",
        "Transmission at 1.0 creates glass, diamonds, and transparent liquids (requires IOR ~1.45 for glass).",
        "Always use the 'Node Wrangler' addon (Ctrl + Shift + T on Principled BSDF to auto-connect full PBR texture sets)!"
      ],
      troubleshooting: [
        {
          problem: "My Normal Map makes the mesh look black, inverted, or faceted like an ugly glitch!",
          cause: "The Image Texture node's Color Space is set to 'sRGB' instead of 'Non-Color'.",
          solution: "On the Normal Map Image Texture node, change the Color Space dropdown from 'sRGB' to 'Non-Color'. Always ensure it plugs into a 'Normal Map' vector node before reaching Principled BSDF."
        },
        {
          problem: "My textures appear totally black or completely pink in the viewport.",
          cause: "Pink indicates a missing/broken image file path; black indicates no scene lighting in Rendered mode.",
          solution: "If pink, go to File -> External Data -> 'Find Missing Files' and point to your texture folder. If black, add a light source (Shift + A -> Light -> Sun/Area) or switch viewport shading to Material Preview."
        },
        {
          problem: "Glass material shows up completely pitch black and opaque in Eevee.",
          cause: "Screen Space Refraction is not enabled in the Eevee engine settings.",
          solution: "In Material Settings under Settings, enable 'Screen Space Refraction'. In Render Properties, check 'Screen Space Reflections' -> 'Refraction'."
        }
      ],
      tags: ["materials", "pbr", "principled bsdf", "roughness", "metallic", "normal map"]
    },
    {
      id: "shade-2",
      trackId: "shading",
      title: "UV Unwrapping & Seam Strategy Made Simple",
      author: "Ryan King Art",
      duration: "30 mins",
      level: "Beginner",
      youtubeId: "qa_1LjeWsJg",
      videoUrl: "https://www.youtube.com/watch?v=qa_1LjeWsJg",
      overview: `UV unwrapping is the process of flattening a 3D model into 2D coordinates so textures can be wrapped around it—just like cutting a cardboard box flat. In this lesson, you'll learn where to place Seams (Ctrl + E -> Mark Seam), how to use Smart UV Project, and how to maintain consistent Texel Density so textures never stretch.`,
      summary: [
        "Select edges where seams should go (hide them in natural crevices or unseen undersides) -> Ctrl + E -> 'Mark Seam' (edges turn red).",
        "In Edit Mode, press 'A' to select all faces, then press 'U' -> 'Unwrap'.",
        "Open the 'UV Editor' window to view the unwrapped 2D UV islands.",
        "Pack UV Islands: In UV Editor, click UV -> 'Pack Islands' to maximize texture resolution usage.",
        "Check UV Stretch: In UV Editor overlays, enable 'Display Stretch' (Blue = zero distortion, Green/Red = stretching)."
      ],
      troubleshooting: [
        {
          problem: "My UV unwrap is horribly warped and stretched out in one direction!",
          cause: "You forgot to apply object scale before unwrapping!",
          solution: "Go to Object Mode, press Ctrl + A -> 'Apply Scale'. Return to Edit Mode, press 'A', then 'U' -> 'Unwrap' again."
        },
        {
          problem: "Two parts of my mesh are overlapping on top of each other in the UV editor.",
          cause: "The mesh wasn't split with enough seams, causing the island to fold over itself.",
          solution: "Add an extra seam along the dividing fold. Re-unwrap with 'U' -> 'Unwrap'. In UV Editor, press UV -> 'Pack Islands'."
        },
        {
          problem: "The texture resolution looks blurry on one part of the model but sharp on another.",
          cause: "Inconsistent Texel Density (UV island sizes don't match their real 3D proportions).",
          solution: "In the UV Editor, select all islands and click UV -> 'Average Island Scale', then 'Pack Islands'."
        }
      ],
      tags: ["uv unwrap", "seams", "texel density", "uv editor", "texture mapping"]
    },
    {
      id: "shade-3",
      trackId: "shading",
      title: "Procedural Shading: Creating Real Materials with Math",
      author: "Ducky 3D",
      duration: "25 mins",
      level: "Intermediate",
      youtubeId: "j6fKkG7_pA8",
      videoUrl: "https://www.youtube.com/watch?v=j6fKkG7_pA8",
      overview: `Procedural materials require zero external image files and never lose resolution no matter how close the camera gets. Ducky 3D guides you through building sci-fi metals, marble, and organic grunge using Noise Texture, Voronoi Texture, ColorRamp, Bump nodes, and the essential Texture Coordinate + Mapping setup.`,
      summary: [
        "Texture Coordinate + Mapping nodes: Select any texture node and press Ctrl + T (with Node Wrangler enabled) to instantly add both.",
        "Plug 'Object' coordinate output (not Generated or UV) into Mapping for seamless procedural textures without UV seams.",
        "ColorRamp node: The primary tool for remapping values, increasing contrast, and converting greyscale noise to color palettes.",
        "Voronoi Texture creates cells, scales, cracked earth, and stone patterns.",
        "Bump node: Converts black-and-white height data into fake surface depth plugged into Principled BSDF 'Normal'."
      ],
      troubleshooting: [
        {
          problem: "My procedural noise pattern looks stretched out into long parallel stripes!",
          cause: "Using 'Generated' texture coordinates on a non-cubic mesh or unapplied scale.",
          solution: "Connect the 'Object' output of the Texture Coordinate node into the Vector input of the Mapping node. Make sure scale is applied (Ctrl + A -> Scale)."
        },
        {
          problem: "My bump map looks like an intense spiky mess with jagged harsh shadows.",
          cause: "The Bump node 'Strength' or 'Distance' is set way too high (default Distance is 1.0 meter!).",
          solution: "Lower the Bump node 'Strength' to 0.1 and reduce 'Distance' to 0.01 or 0.005 meters for realistic subtle surface relief."
        },
        {
          problem: "How do I quickly preview what a single node in my shader tree looks like?",
          cause: "Viewing the final shader doesn't let you debug individual masks.",
          solution: "With Node Wrangler active, hold Ctrl + Shift and Left-Click any node. It instantly connects a temporary Viewer node so you can isolate its output!"
        }
      ],
      tags: ["procedural", "shader nodes", "ducky 3d", "voronoi", "colorramp", "bump"]
    },

    /* ---------------- TRACK 5: LIGHTING & RENDERING ---------------- */
    {
      id: "light-1",
      trackId: "lighting",
      title: "Cycles vs Eevee: Choosing Your Render Engine",
      author: "CG Geek",
      duration: "22 mins",
      level: "Beginner",
      youtubeId: "QzVzXF395Zg",
      videoUrl: "https://www.youtube.com/watch?v=QzVzXF395Zg",
      overview: `Cycles is Blender's path tracer, while Eevee is its real-time render engine. Learn when to pick each engine and how to optimize render settings for speed and quality. In Blender 5.2, the engine is named Eevee in the interface; older videos may call it Eevee Next.`,
      summary: [
        "Switch Render Engine in Render Properties: Cycles for photorealism, EEVEE for instant real-time speed.",
        "In Cycles, enable GPU Compute in Render Properties and configure CUDA / OptiX / HIP in System Preferences.",
        "Enable Denoising: Use OptiX (NVIDIA) or OpenImageDenoise (CPU/AMD) to clean up noise with low sample counts (e.g. 128-256 samples).",
        "Set Color Management: Change 'View Transform' from Standard to 'AgX' (or Filmic) with 'High Contrast' for cinematic dynamic range.",
        "Press F12 to render the final frame, and Ctrl + F12 to render an animation sequence."
      ],
      troubleshooting: [
        {
          problem: "Cycles render is taking 30 minutes per frame and my computer fan is screaming!",
          cause: "Render samples are set unnecessarily high (e.g. 4096) or rendering on CPU instead of GPU.",
          solution: "In Edit -> Preferences -> System, select your GPU under OptiX or CUDA. In Render Properties, set Max Samples to 256 or 512, and turn on 'Denoise'."
        },
        {
          problem: "My render window renders nothing but a grey void or solid black image.",
          cause: "Camera object is missing, disabled in render (camera icon in outliner), or there are no lights in the scene.",
          solution: "Check the top-right Outliner: ensure your Camera icon is enabled. Press Numpad 0 to see what the active camera sees. Add a light source."
        },
        {
          problem: "Bright highlights look flat, washed out, and have zero color vibrancy.",
          cause: "View Transform is set to 'Standard', which clips high-dynamic-range highlights to pure white.",
          solution: "Go to Render Properties -> Color Management and choose a view transform such as AgX. Follow the linked Blender 5.2 manual for current names and controls."
        }
      ],
      tags: ["cycles", "eevee", "denoising", "render", "agx", "color management"]
    },
    {
      id: "light-2",
      trackId: "lighting",
      title: "Cinematic 3-Point Studio Lighting & Mood",
      author: "Gleb Alexandrov / Creative Shrimp",
      duration: "27 mins",
      level: "Intermediate",
      youtubeId: "m-N149FMlWk",
      videoUrl: "https://www.youtube.com/watch?v=m-N149FMlWk",
      overview: `Bad lighting ruins great models, while masterful lighting makes simple models look legendary. Gleb Alexandrov demonstrates classic studio lighting principles: Key Light (primary subject illuminator), Fill Light (softens harsh shadows), and Rim/Back Light (separates the subject from the dark background with a crisp edge highlight).`,
      summary: [
        "Key Light: Placed ~45 degrees to the side and slightly above the subject; strongest light in the scene.",
        "Fill Light: Placed opposite the Key Light with ~20-50% power and a larger radius to create soft, diffused shadows.",
        "Rim Light (Kicker): Placed behind the subject pointing towards the camera edge to outline the silhouette.",
        "Light Radius / Size: Larger lights produce soft, flattering shadows; tiny point lights produce razor-sharp hard shadows.",
        "Color Temperature: Pair warm key lights (e.g. 3500K-4500K orange) with cool fill lights (6500K-8000K cyan) for color contrast."
      ],
      troubleshooting: [
        {
          problem: "I increased light power from 10W to 100W but it still looks completely dark!",
          cause: "In Blender's real-world unit system, a standard room requires 1,000 to 10,000 Watts or your object is gigantic in scale.",
          solution: "Increase power to 500W - 2500W, or check your object dimensions in the 'N' panel to make sure it isn't 50 meters wide!"
        },
        {
          problem: "My lights cast ugly harsh blocky shadows.",
          cause: "The light 'Radius' or 'Size' in light properties is set to 0.0m.",
          solution: "Select the light -> Light Properties (green lightbulb icon) -> Increase 'Radius' or 'Size' to 0.5m - 2.0m for soft diffused shadows."
        },
        {
          problem: "Light is shining right through solid walls and geometry.",
          cause: "Contact Shadows not enabled in Eevee, or thin single-sided geometry without thickness.",
          solution: "Add a Solidify modifier to the wall geometry, and in Eevee Light settings, check 'Contact Shadows'."
        }
      ],
      tags: ["lighting", "3 point lighting", "gleb alexandrov", "rim light", "soft shadows"]
    },
    {
      id: "light-3",
      trackId: "lighting",
      title: "Photorealistic HDRI World Lighting & Poly Haven",
      author: "Curtis Holt",
      duration: "19 mins",
      level: "Beginner",
      youtubeId: "V_x4H8r6P_U",
      videoUrl: "https://www.youtube.com/watch?v=V_x4H8r6P_U",
      overview: `High Dynamic Range Images (HDRIs) capture 360-degree real-world lighting, reflections, and color in 32-bit floating point precision. In this lesson, you will connect free CC0 HDRIs from Poly Haven into Blender's World shader, rotate the sun angle, balance ambient background brightness, and render transparent backgrounds for PNG composites.`,
      summary: [
        "Go to the World Properties tab -> Click yellow dot next to 'Color' -> Select 'Environment Texture'.",
        "Open an .exr or .hdr file downloaded from PolyHaven.com.",
        "Rotate the HDRI: Switch Shader Editor to 'World' mode, select Environment Texture, press Ctrl + T, and adjust 'Rotation Z' on the Mapping node.",
        "Transparent Render: In Render Properties -> 'Film' -> Check 'Transparent' to hide the HDRI background while keeping its realistic lighting reflections.",
        "Use Light Paths node to show a custom solid background color while lighting with the HDRI."
      ],
      troubleshooting: [
        {
          problem: "My entire scene background turned neon pink!",
          cause: "You added an Environment Texture node but didn't open an image, or the HDRI file was moved/deleted.",
          solution: "Open the World Shader or World Properties and click 'Open' to re-link your .hdr or .exr image file."
        },
        {
          problem: "I can't see the HDRI in the 3D viewport while modeling.",
          cause: "Viewport Shading is set to Solid mode or Material Preview with default studio lights.",
          solution: "Switch to Rendered Mode (press 'Z' -> Rendered). In Material Preview, click the shading dropdown arrow and check 'Scene Lights' and 'Scene World'."
        },
        {
          problem: "The HDRI looks low resolution and pixelated in the final render.",
          cause: "A 1K HDRI is great for lighting but blurry as a background backdrop.",
          solution: "Enable Render Properties -> Film -> 'Transparent' to render without the background, or download an 8K/16K HDRI for direct camera backdrops."
        }
      ],
      tags: ["hdri", "poly haven", "world lighting", "environment texture", "transparent film"]
    },

    /* ---------------- TRACK 6: RIGGING & ANIMATION ---------------- */
    {
      id: "anim-1",
      trackId: "animation",
      title: "Bones & Armature Fundamentals: Your First Rig",
      author: "Royal Skies LLC",
      duration: "18 mins",
      level: "Beginner",
      youtubeId: "f280dE6w318",
      videoUrl: "https://www.youtube.com/watch?v=f280dE6w318",
      overview: `Before you can animate a character or mechanical contraption, you need a digital skeleton (Armature). Learn how to add bones (Shift + A -> Armature), extrude bone chains in Edit Mode, name bones with .L and .R suffixes for automatic symmetry, understand parent-child relationships, and pose bones in Pose Mode.`,
      summary: [
        "Shift + A -> Armature -> Single Bone. Enable 'In Front' in Armature Properties -> Viewport Display.",
        "Edit Mode: Extrude bone tips with 'E' to grow a spine, arms, and legs.",
        "Naming Convention: Always name bones with symmetry suffixes (e.g., 'Arm.L', 'Hand.L') so Blender can mirror poses.",
        "Pose Mode (Ctrl + Tab): The only mode where keyframes should be animated! Never animate bone positions in Edit Mode.",
        "Inverse Kinematics (IK): Add an IK bone constraint so dragging a hand or foot automatically calculates elbow and knee bends."
      ],
      troubleshooting: [
        {
          problem: "I can't see the bones because they are buried inside my character mesh!",
          cause: "Viewport display does not prioritize the armature by default.",
          solution: "Select the Armature -> Go to the green Running Man icon (Armature Object Data) -> 'Viewport Display' -> Check the 'In Front' checkbox."
        },
        {
          problem: "When I move the character's foot, the knee bends backward or sideways like a broken bone!",
          cause: "The IK Bone constraint's 'Pole Angle' is incorrect, or the base skeleton has no pre-bent knee angle in Edit Mode.",
          solution: "In Edit Mode, pull the knee joint slightly forward so Blender knows the natural bend direction. In Pose Mode, select the IK constraint and adjust 'Pole Angle' by 90 or -90 degrees."
        },
        {
          problem: "Moved bones in Pose Mode and now I can't return my character to the default rest pose.",
          cause: "Pose transforms have not been cleared.",
          solution: "In Pose Mode, select all bones with 'A', then press Alt + G (clear location), Alt + R (clear rotation), and Alt + S (clear scale)."
        }
      ],
      tags: ["rigging", "armature", "bones", "ik", "pose mode", "royal skies"]
    },
    {
      id: "anim-2",
      trackId: "animation",
      title: "Skinning & Automatic Weights: Fixing The Dreaded Error",
      author: "Dikko",
      duration: "26 mins",
      level: "Beginner to Intermediate",
      youtubeId: "T7y_LqU_JkE",
      videoUrl: "https://www.youtube.com/watch?v=T7y_LqU_JkE",
      overview: `Skinning connects your 3D mesh to the bone armature. In this essential lesson, Dikko breaks down parenting with Automatic Weights (Ctrl + P -> With Automatic Weights) and Weight Paint Mode. You'll learn how vertex groups control deformation and how to resolve the most infamous error in all of Blender: "Bone Heat Weighting: failed to find solution".`,
      summary: [
        "Parenting Order: First select the Mesh, THEN Shift-select the Armature -> Press Ctrl + P -> 'With Automatic Weights'.",
        "Weight Paint Mode: Blue = 0% influence, Green = 50%, Red = 100% influence from the active bone.",
        "In Pose Mode, rotate bones to check deformations, then switch to Weight Paint to smooth harsh creases.",
        "Normalize Weights: Ensure no vertex has more than a total combined 1.0 weight across all bones.",
        "Use the Gradient weight tool and Smooth brush to eliminate sharp armpit and elbow stretching."
      ],
      troubleshooting: [
        {
          problem: "Error: 'Bone Heat Weighting: failed to find solution for one or more bones'!",
          cause: "The mesh has non-manifold geometry, self-intersecting loose parts, or duplicate overlapping vertices.",
          solution: "1. Select mesh in Edit Mode -> 'A' -> 'M' -> 'By Distance'. 2. Check for non-manifold edges (Select -> All by Trait -> Non-Manifold). 3. If still failing, temporarily scale the mesh and armature up by 10x (Ctrl + A -> Scale), parent with Auto Weights, then scale back down to 0.1x!"
        },
        {
          problem: "Moving the character's left arm causes vertices on the RIGHT arm or waist to stretch across the body!",
          cause: "Automatic weights bled across close geometry or bones were too close together during parenting.",
          solution: "Enter Weight Paint Mode, select the left arm vertex group, and paint the unwanted vertices with 0 Weight, or use 'Weights' -> 'Clean' -> limit to subset."
        },
        {
          problem: "Eyes and teeth are flying out of the character's head when moving the neck bone.",
          cause: "Separate eye/teeth meshes were not weighted 100% to the head bone.",
          solution: "Select the eyes mesh, go to Vertex Groups, select 'Head', and click 'Assign' with Weight = 1.0."
        }
      ],
      tags: ["skinning", "weight painting", "automatic weights", "bone heat error", "dikko"]
    },
    {
      id: "anim-3",
      trackId: "animation",
      title: "The 12 Principles: Bouncing Ball & The Graph Editor",
      author: "Alan Becker Tutorials & Pierrick Picaut",
      duration: "25 mins",
      level: "Beginner",
      youtubeId: "uDqjIdI4bF4",
      videoUrl: "https://www.youtube.com/watch?v=uDqjIdI4bF4",
      overview: `The bouncing ball is the ultimate gateway to animation. It teaches Squash & Stretch, Timing & Spacing, Ease In & Ease Out, and Arc of Motion. Learn how to record keyframes ('I' hotkey), master the Timeline, and use the Graph Editor (F-curves and bezier handles) to sculpt gravity and physical momentum like a seasoned animator.`,
      summary: [
        "Press 'I' over the 3D viewport to insert a Keyframe (Location, Rotation, Scale).",
        "Open the 'Graph Editor' to view animation curves (F-curves) instead of just timeline dots.",
        "Gravity Curve: Change the bottom contact keyframe handles to 'Vector' (Press 'V' -> Vector) to create a sharp instant bounce instead of floaty easing.",
        "Squash & Stretch: Squash the ball along Z on impact while scaling X and Y outwards to preserve volume.",
        "Anticipation & Arcs: No natural object moves in robotic straight lines; always curve spatial paths."
      ],
      troubleshooting: [
        {
          problem: "My bouncing ball slows down before hitting the ground like it's floating through molasses!",
          cause: "Default keyframes use 'Bezier' interpolation which eases in and eases out on both sides.",
          solution: "In the Graph Editor, select the bottom impact keyframe, press 'V' and choose 'Vector' or break handle handles with 'Free' so the incoming curve slams down fast and shoots up instantly."
        },
        {
          problem: "I move my object on frame 20, but when I scrub the timeline it resets back to frame 1!",
          cause: "You didn't insert a keyframe after moving the object, or Auto-Keyframing is turned off.",
          solution: "Press 'I' to insert a Location keyframe, OR click the red circular 'Auto-Keying' record button in the timeline header."
        },
        {
          problem: "My animation keeps looping forever past my ending keyframe with dead blank space.",
          cause: "The Timeline End Frame is set to default 250 instead of your animation length.",
          solution: "In the bottom Timeline header, set 'End:' to the last frame of your action (e.g. 60)."
        }
      ],
      tags: ["animation", "graph editor", "bouncing ball", "squash and stretch", "keyframes"]
    },

    /* ---------------- TRACK 7: GEOMETRY NODES ---------------- */
    {
      id: "geo-1",
      trackId: "geonodes",
      title: "Geometry Nodes 101: The Modern Procedural Way",
      author: "Joey Carlino & CG Cookie",
      duration: "24 mins",
      level: "Beginner",
      youtubeId: "p_6F1eK1s6U",
      videoUrl: "https://www.youtube.com/watch?v=p_6F1eK1s6U",
      overview: `Geometry Nodes have revolutionized Blender, turning it into a procedural power system rivaling Houdini. In this beginner-friendly breakdown, you'll learn what fields and sockets mean, how to distribute thousands of rocks and grass instances across a landscape with 'Distribute Points on Faces' and 'Instance on Points', and how to randomize rotation and scale.`,
      summary: [
        "Add a Geometry Nodes modifier to any mesh and open the 'Geometry Node Editor' workspace.",
        "Every tree starts with 'Group Input' and ends with 'Group Output' geometry data.",
        "Distribute Points on Faces: Converts surface area into floating spawn points (set to Poisson Disk for clean spacing).",
        "Instance on Points: Places your collection or mesh objects onto each distributed point.",
        "Random Value node: Plug into Rotation and Scale to give every pebble or tree varied, natural proportions."
      ],
      troubleshooting: [
        {
          problem: "My instanced objects render completely solid grey with no materials in the final render!",
          cause: "Instances don't carry material slots natively, or materials need a 'Set Material' node.",
          solution: "Add a 'Set Material' node after 'Instance on Points' and select your material from the dropdown. Alternatively, insert a 'Realize Instances' node before the Group Output."
        },
        {
          problem: "The ground terrain mesh disappeared after adding points!",
          cause: "The original input geometry was replaced by points rather than combined.",
          solution: "Add a 'Join Geometry' node before Group Output. Plug both the original Group Input geometry and your new instanced geometry into the Join Geometry node."
        },
        {
          problem: "All my trees are pointing in the exact same direction and look like copies.",
          cause: "Rotation input on 'Instance on Points' has no random variation.",
          solution: "Add a 'Rotate Instances' node or plug a 'Random Value' node (Vector type, Min -3.14 to Max 3.14 on Z) into the Rotation socket."
        }
      ],
      tags: ["geometry nodes", "procedural", "distribute points", "instancing", "joey carlino"]
    },
    {
      id: "geo-2",
      trackId: "geonodes",
      title: "Procedural Curves, Cables & Sci-Fi Pipes",
      author: "Erindale & CrossMind Studio",
      duration: "26 mins",
      level: "Intermediate",
      youtubeId: "J8C_tA7E6a0",
      videoUrl: "https://www.youtube.com/watch?v=J8C_tA7E6a0",
      overview: `Stop hand-modeling cables, wires, and ropes! Learn how to build an interactive procedural wire generator using Geometry Nodes. You will draw standard curves in the viewport and watch Blender automatically turn them into hanging catenary cables with plugs, connectors, and adjustable thickness sliders exposed in the modifier panel.`,
      summary: [
        "Curve to Mesh node: Converts 1D mathematical curves into 3D tubular geometry.",
        "Curve Circle: Plug into the 'Profile Curve' socket of 'Curve to Mesh' to define pipe radius and resolution.",
        "Expose parameters: Drag sockets from nodes into empty Group Input slots to create custom sliders in the modifier UI.",
        "Resample Curve: Controls point density along the curve so curves deform cleanly.",
        "Set Curve Radius: Allows procedural tapering from thick base to thin wire tip."
      ],
      troubleshooting: [
        {
          problem: "The 'Curve to Mesh' node outputs completely invisible geometry!",
          cause: "The 'Profile Curve' input socket was left empty.",
          solution: "Add a 'Curve Circle' (or 'Curve Line') node and plug its Curve output into the 'Profile Curve' input of the 'Curve to Mesh' node."
        },
        {
          problem: "The cables look like harsh jagged bent sticks rather than smooth hanging arcs.",
          cause: "The curve does not have enough points along its length.",
          solution: "Add a 'Resample Curve' node right before 'Curve to Mesh' and set the Count to 32 or Length to 0.05m."
        },
        {
          problem: "How do I change cable thickness from the regular Modifier panel without opening nodes?",
          cause: "The radius socket is hardcoded inside the node graph.",
          solution: "Drag a noodle from the 'Radius' input of the Curve Circle node all the way to an empty slot on the 'Group Input' node. Now it appears as an input slider in the Modifier tab!"
        }
      ],
      tags: ["curves", "cables", "pipes", "curve to mesh", "erindale", "procedural generator"]
    },

    /* ---------------- TRACK 8: PHYSICS & SIMULATION ---------------- */
    {
      id: "phys-1",
      trackId: "physics",
      title: "Rigid Body Physics: Destruction & Falling Dominos",
      author: "CG Geek",
      duration: "20 mins",
      level: "Beginner",
      youtubeId: "GqYhT65mD8U",
      videoUrl: "https://www.youtube.com/watch?v=GqYhT65mD8U",
      overview: `Physics simulations make complex natural collisions effortless. In this lesson, you'll set up Rigid Body Active and Passive dynamics, create a chain reaction of toppling dominos and a wrecking ball smashing a brick wall, configure collision shapes (Convex Hull vs Mesh), and bake physics simulations into keyframes.`,
      summary: [
        "In Physics Properties: 'Active' objects are affected by gravity and forces; 'Passive' objects act as immovable static ground/obstacles.",
        "Collision Shape: 'Convex Hull' is fast and efficient for solid items; 'Mesh' is required for hollow bowls, cups, and complex shapes.",
        "Bake Simulation: Go to Scene Properties -> Rigid Body World -> Cache -> Click 'Bake' so simulations replay smoothly and reliably.",
        "Friction & Bounciness: Adjust surface resistance and bounce restitution in the physics settings.",
        "Cell Fracture Addon: Built-in tool to shatter any 3D object into hundreds of realistic shards."
      ],
      troubleshooting: [
        {
          problem: "Objects pass straight through the floor and fall into infinity!",
          cause: "The floor object is either set to 'Active' instead of 'Passive', or scale is unapplied.",
          solution: "Select the floor object -> In Physics Properties, set Type to 'Passive'. Press Ctrl + A -> 'Apply Scale' on both the floor and falling objects."
        },
        {
          problem: "Bricks start jittering and exploding before anything even hits them!",
          cause: "Collision shapes are overlapping each other at frame 1, or collision margin is too thick.",
          solution: "Reduce 'Collision Margin' to 0.001m. In Scene Properties -> Rigid Body World, increase 'Substeps Per Frame' from 10 to 30."
        },
        {
          problem: "An object inside a bowl bounces off an invisible roof instead of landing inside.",
          cause: "The bowl's collision shape is set to 'Convex Hull' which shrinkwraps over hollow openings.",
          solution: "Change the Collision Shape from 'Convex Hull' to 'Mesh' in the bowl's Rigid Body settings."
        }
      ],
      tags: ["physics", "rigid body", "dominos", "destruction", "cell fracture", "collisions"]
    },
    {
      id: "phys-2",
      trackId: "physics",
      title: "Realistic Cloth Simulation: Pillows & Fabric",
      author: "Blender Guru",
      duration: "24 mins",
      level: "Beginner to Intermediate",
      youtubeId: "F4s4xV4wJq0",
      videoUrl: "https://www.youtube.com/watch?v=F4s4xV4wJq0",
      overview: `Creating realistic folds, wrinkles, bedsheets, and plush sofa cushions by hand is notoriously tedious. Blender's Cloth Simulator and Cloth Brush do the heavy lifting for you! Learn how to drop a tablecloth over a table, use Pressure settings to inflate fluffy pillows instantly, enable self-collisions, and pin cloth vertices.`,
      summary: [
        "Cloth requires dense quad geometry: Subdivide a plane 30-50 times before adding Cloth physics.",
        "Add 'Collision' physics to any solid furniture or table the cloth should interact with.",
        "Enable 'Self Collisions' in the Cloth settings under Collisions to prevent the fabric from clipping through itself.",
        "Pressure: In Cloth physics settings, enable 'Pressure' (>1.0) on a closed mesh (like a cube) to inflate it into a plush cushion/balloon.",
        "Cloth Brush in Sculpt Mode: Drag, grab, and inflate realistic wrinkles manually in real time."
      ],
      troubleshooting: [
        {
          problem: "My cloth explodes into giant chaotic jagged spikes the moment I press spacebar!",
          cause: "The cloth mesh scale was not applied, or collision distance is larger than the distance between vertices.",
          solution: "Apply scale (Ctrl + A -> Scale). In Cloth settings under Collisions, reduce 'Distance' from 0.015m down to 0.002m. Also lower collision distance on the obstacle."
        },
        {
          problem: "The cloth falls straight through the table as if the table wasn't there.",
          cause: "The table does not have 'Collision' physics enabled.",
          solution: "Select the table -> go to Physics Properties -> click the 'Collision' physics button."
        },
        {
          problem: "Cloth simulation looks like stiff cardboard rather than soft silk.",
          cause: "Vertex density is too low or Bending stiffness is set too high.",
          solution: "Subdivide the cloth plane with more edge loops. In Cloth settings, choose the 'Silk' or 'Cotton' preset from the top dropdown."
        }
      ],
      tags: ["cloth simulation", "pillows", "fabric", "cloth brush", "pressure", "folds"]
    }
  ],

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

