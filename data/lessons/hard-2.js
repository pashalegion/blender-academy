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
  ]
};
