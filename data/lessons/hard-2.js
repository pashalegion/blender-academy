// Lesson body for hard-2. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["hard-2"] = {
  "overview": "Hard surface modeling (weapons, mechs, vehicles, sci-fi props) relies on crisp industrial cuts and highlights. In this lesson, you'll master non-destructive Boolean workflows (Difference, Union, Intersect), understand the difference between the Exact and Fast solvers, and learn how to pair Booleans with the Bevel modifier and Weighted Normal to achieve clean, high-end bevel highlights.",
  "summary": [
    "<span class=\"unverified\" title=\"BoolTool status in Blender 5.2 is not confirmed\">Enable the 'BoolTool' add-on for hotkey booleans.</span> See the Add-ons page for its status.",
    "<span class=\"unverified\" title=\"BoolTool status in Blender 5.2 is not confirmed; hotkeys unverified\">BoolTool hotkeys:</span>  Select cutter, then target object -> Ctrl + Shift + '-' for Difference, Ctrl + Shift + '+' for Union.",
    "Weighted Normal Modifier: Fixes shading gradients across large flat surfaces with complex boolean cuts.",
    "Always place the Bevel modifier AFTER the Boolean modifier in the stack.",
    "Switch the Boolean solver between 'Exact' (accurate, handles coplanar faces) and 'Fast' (speedy performance)."
  ],
  "troubleshooting": [
    {
      "problem": "The Boolean modifier failed and made the entire object disappear!",
      "cause": "The cutter or target has non-manifold geometry, flipped normals, or perfectly coplanar overlapping faces.",
      "solution": "Switch the Boolean solver from 'Exact' to 'Fast' (or vice versa). Check both objects for flipped normals (Shift + N) and remove duplicate vertices (M -> By Distance)."
    },
    {
      "problem": "The Bevel modifier causes geometry to explode and cross over itself at corners.",
      "cause": "Bevel width is larger than adjacent edge space, or 'Clamp Overlap' is disabled.",
      "solution": "In Bevel modifier settings, enable 'Clamp Overlap' to prevent vertex self-intersection. Lower the Bevel Amount/Width."
    },
    {
      "problem": "Shading looks wobbly and distorted around the boolean hole cutouts.",
      "cause": "Triangulation artifacts created by Blender connecting vertices arbitrarily to the cut.",
      "solution": "Add a 'Weighted Normal' modifier at the bottom of the stack and check 'Keep Sharp'."
    }
  ],
  "tutorial": [
    {
      "heading": "What booleans do",
      "steps": [
        "A boolean combines two meshes. Add a Boolean modifier to the main object and choose a cutter object.",
        "Difference cuts the cutter's shape out. Union joins both into one shape. Intersect keeps only where they overlap.",
        "Because it is a modifier, you can still move and edit the cutter afterwards."
      ]
    },
    {
      "heading": "Set up a cutter",
      "steps": [
        "Add a simple shape, such as a cylinder for a hole or a cube for a slot, and place it through the main object.",
        "Select the main object, add Generate ‣ Boolean, set the operation to Difference and pick the cutter in the Object field.",
        "In the cutter's Object Properties ‣ Viewport Display, set Display As to Wire so you can see through it, and turn off rendering for it."
      ],
      "tip": "Keep all cutters in their own collection so they are easy to find and hide."
    },
    {
      "heading": "Exact and Fast solvers",
      "steps": [
        "Exact is accurate and handles most cases, including overlapping faces.",
        "Fast is quicker on heavy scenes but fails more easily.",
        "If a boolean gives holes or missing faces, try the other solver and check both objects for flipped normals (Shift + N in Edit Mode)."
      ]
    },
    {
      "heading": "Clean bevels after booleans",
      "steps": [
        "Add a Bevel modifier below the Boolean, so the cut edges get beveled too.",
        "Set the Bevel's Limit Method to Angle so only sharp edges are rounded.",
        "Turn on Clamp Overlap if the bevel tears at small parts."
      ]
    },
    {
      "heading": "Smooth shading on hard surface",
      "steps": [
        "Right-click and use Shade Smooth by Angle (or Shade Auto Smooth) so flat areas stay flat and curves stay smooth.",
        "Add a Weighted Normal modifier at the bottom of the stack to clean up shading on large flat faces around cuts."
      ]
    },
    {
      "heading": "Build complex shapes step by step",
      "steps": [
        "Stack several Boolean modifiers, one per cutter, to cut panels, vents and holes.",
        "Use Union to add pieces and Difference to remove them.",
        "Apply booleans only when the design is final, because live booleans keep everything editable."
      ]
    }
  ]
};
