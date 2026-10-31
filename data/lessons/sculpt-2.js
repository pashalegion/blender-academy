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
  ]
};
