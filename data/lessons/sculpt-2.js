// Lesson body for sculpt-2. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["sculpt-2"] = {
  "overview": "Dynamic Topology (Dyntopo) dynamically generates triangles under your brush stroke, while the Voxel Remesher rebuilds the entire object into uniform quads in a fraction of a second. This lesson teaches you when to use each approach during character concepting, blocking, and detailing.",
  "summary": [
    "<span class=\"unverified\" title=\"Not confirmed in the Blender 5.2 manual keymap yet\">Voxel Remesher shortcut: Press Shift + R to adjust the grid visualizer preview, then Ctrl + R to execute the remesh.</span>",
    "Voxel Remesher fuses separate overlapping shapes (like head, ears, nose) into one continuous seamless manifold mesh.",
    "Dyntopo is ideal for stretching shapes extreme distances with Snake Hook without losing geometry.",
    "Never use Dyntopo if you already have UV maps or vertex colors, as it will destroy them.",
    "Keep polycount under control: Start blockout at 0.1m voxel size, refine at 0.03m, and save fine pores/wrinkles for multiresolution."
  ],
  "troubleshooting": [
    {
      "problem": "<span class=\"unverified\" title=\"Not confirmed in the Blender 5.2 manual keymap yet\">I pressed Ctrl + R to Voxel Remesh and my fine details (eyes, lips) melted into a blob!</span>",
      "cause": "The Voxel Size was too large relative to the scale of your object details.",
      "solution": "<span class=\"unverified\" title=\"Not confirmed in the Blender 5.2 manual keymap yet\">Press Ctrl + Z to undo. Press Shift + R to see the voxel grid preview, scroll your mouse until the squares are small and tight, then press Ctrl + R.</span>"
    },
    {
      "problem": "Blender froze or crashed when I remeshed!",
      "cause": "Voxel size was set too tiny (e.g. 0.0001m), requesting hundreds of millions of polygons which overloaded RAM.",
      "solution": "<span class=\"unverified\" title=\"Not confirmed in the Blender 5.2 manual keymap yet\">Always save with Ctrl + S before remeshing. Avoid stepping voxel size down by more than 50% at a time.</span>"
    },
    {
      "problem": "Symmetry stopped working on one side of my sculpt.",
      "cause": "The mesh center shifted away from the world X=0 axis, or Dyntopo created asymmetric density.",
      "solution": "In Sculpt Mode, go to the top header -> click the Symmetry dropdown -> click 'Symmetrize' (+X to -X or -X to +X)."
    }
  ],
  "tutorial": [
    {
      "heading": "Three ways to manage detail",
      "steps": [
        "Sculpting needs enough polygons, but in the right place. Blender has three main workflows: Dyntopo, Remesh and the Multiresolution modifier.",
        "Each fits a different stage: rough shapes, blocking out, and fine detail."
      ]
    },
    {
      "heading": "Dyntopo",
      "steps": [
        "Turn on Dyntopo in the Sculpt Mode header. Blender now adds triangles under the brush as you sculpt.",
        "Detail Size controls how fine the new triangles are. Relative detail depends on how far you zoom.",
        "It is great for pulling out long shapes (horns, tentacles) without stretching the mesh.",
        "Dyntopo removes UV maps and some other data, so use it early, before texturing."
      ]
    },
    {
      "heading": "Remesh",
      "steps": [
        "Remesh rebuilds the whole mesh into even quads. Set Voxel Size in the header's Remesh panel and click Remesh.",
        "It also fuses separate overlapping pieces (head, ears, nose) into one mesh.",
        "Smaller voxel sizes give more detail but more polygons. Lower the size step by step.",
        "Use Remesh often while blocking out to keep the mesh clean."
      ],
      "tip": "Save before remeshing at a small size. Very small voxel sizes can create millions of faces and slow your computer down."
    },
    {
      "heading": "Multiresolution modifier",
      "steps": [
        "When the big forms are done, add a Multiresolution modifier and click Subdivide several times.",
        "You can switch between levels: sculpt big shapes on low levels and fine details like pores and wrinkles on high levels.",
        "It works well for final detailing and for baking detail to textures."
      ]
    },
    {
      "heading": "Combine them",
      "steps": [
        "Typical order: Remesh (or Dyntopo) for blocking out, then retopology if you need clean geometry, then Multiresolution for fine detail.",
        "Pick the method that fits the current stage instead of using just one for everything."
      ]
    }
  ]
};
