// Lesson body for sculpt-1. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["sculpt-1"] = {
  "overview": "Sculpting feels like working with digital clay in real life. In this comprehensive guide, you'll learn how to enter Sculpt Mode, set up a drawing tablet or mouse, and master the fundamental brushes: Draw, Clay Strips, Grab, Snake Hook, Crease, Inflate, and Smooth. You will sculpt a stylized organic stone and goblin creature head.",
  "summary": [
    "<span class=\"unverified\" title=\"Not confirmed in the Blender 5.2 manual keymap yet\">F changes Brush Radius; Shift + F changes Brush Strength.</span>",
    "<span class=\"unverified\" title=\"Not confirmed in the Blender 5.2 manual keymap yet\">Hold Ctrl while brushing to invert the brush effect (e.g. Draw carves inward instead of pulling outward).</span>",
    "<span class=\"unverified\" title=\"Not confirmed in the Blender 5.2 manual keymap yet\">Hold Shift at any time to temporarily switch any active brush to the Smooth brush.</span>",
    "Clay Strips is the premier brush for blocking in primary and secondary anatomical volumes.",
    "Snake Hook brush is essential for pulling out horns, ears, fingers, and long tendrils quickly."
  ],
  "troubleshooting": [
    {
      "problem": "I click and drag my sculpt brush on the default cube, but NOTHING happens!",
      "cause": "A standard cube only has 8 vertices. Sculpt brushes require vertices to displace!",
      "solution": "<span class=\"unverified\" title=\"Not confirmed in the Blender 5.2 manual keymap yet\">Press Ctrl + 3 to add a Subdivision Surface modifier and apply it, OR use the Voxel Remesher (Ctrl + R in Sculpt Mode with a small voxel size) to give the mesh millions of editable vertices.</span>"
    },
    {
      "problem": "My sculpt stroke is jaggy, pixelated, and faceted.",
      "cause": "Mesh resolution is too low, or Dyntopo detail size is too coarse.",
      "solution": "<span class=\"unverified\" title=\"Not confirmed in the Blender 5.2 manual keymap yet\">Lower your Voxel Remesh size (e.g., from 0.1m to 0.02m) and press Ctrl + R, or enable Dyntopo with relative detail around 8px.</span>"
    },
    {
      "problem": "Stylus pressure sensitivity is not changing my brush size or strength.",
      "cause": "The tablet pressure toggle icon next to Radius / Strength in the top header is toggled off.",
      "solution": "Click the little pen/stylus icon with concentric circles next to the Radius and Strength sliders."
    }
  ],
  "tutorial": [
    {
      "heading": "Set up for sculpting",
      "steps": [
        "Switch to the Sculpting workspace tab at the top. It opens Sculpt Mode with the brush tools on the left.",
        "If you use a drawing tablet, the pen pressure controls strength or size. Turn pressure on with the small pen icons next to Radius and Strength in the header.",
        "A mouse works too; sculpting is just slower."
      ]
    },
    {
      "heading": "Get enough geometry",
      "steps": [
        "Sculpt brushes push vertices, so a low-poly mesh (like the default cube) will not sculpt well.",
        "Use Remesh in the header: set a Voxel Size (smaller means more detail) and click Remesh. This rebuilds the mesh with even density.",
        "Start with a medium voxel size for big shapes and make it smaller later for detail."
      ]
    },
    {
      "heading": "Brush controls",
      "steps": [
        "Press F and move the mouse to change the brush radius. Press Shift + F to change strength.",
        "Hold Ctrl while sculpting to invert a brush, for example carving in instead of building up.",
        "Hold Shift to smooth temporarily with any brush.",
        "Turn on symmetry (the X button in the header) to sculpt both sides of a face at once."
      ]
    },
    {
      "heading": "The main brushes",
      "steps": [
        "Draw: builds up or carves simple strokes.",
        "Clay Strips: adds flat layers of clay, best for blocking in forms.",
        "Grab: pulls big areas, great for changing proportions.",
        "Snake Hook: pulls out horns, ears and spikes.",
        "Inflate: swells areas, like cheeks or noses.",
        "Crease: makes sharp folds and wrinkles. Smooth: softens bumps."
      ]
    },
    {
      "heading": "Block out a head",
      "steps": [
        "Start from a sphere and use Grab to shape the skull, jaw and brow.",
        "Use Clay Strips to add cheeks, nose and brow ridges.",
        "Pull out ears or horns with Snake Hook. For a goblin, exaggerate: big ears, long nose, deep eyes."
      ]
    },
    {
      "heading": "Refine and detail",
      "steps": [
        "Remesh again at a smaller voxel size when you need more detail.",
        "Use Crease for wrinkles and lines around the eyes and mouth.",
        "Smooth areas that look lumpy, and keep checking from all sides."
      ],
      "tip": "Save often, and save versions before big remesh steps."
    }
  ]
};
