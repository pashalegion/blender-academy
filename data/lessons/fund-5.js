// Lesson body for fund-5. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["fund-5"] = {
  "overview": "Bad topology causes shading glitches, rendering artifacts, and nightmare deformation during animation. In this lesson, you'll learn the difference between Quads (4-sided polygons), Tris (3-sided), and N-Gons (5+ sided faces). You'll discover how to identify non-manifold geometry, eliminate internal hidden faces, and maintain smooth edge flow.",
  "summary": [
    "Quads (4-sided faces) are the gold standard for subdivision, deformation, and clean UV unwrapping.",
    "Tris are acceptable on flat planar surfaces and are the native format for game engines.",
    "N-Gons (faces with >4 vertices) cause unpredictable shading errors and subdivision pinching—keep them off curved surfaces!",
    "Interior Faces: Never have faces buried inside a closed volume; they ruin automatic weight painting and modifiers.",
    "Edge Flow: Loops should follow natural contours, muscles, or structural seams."
  ],
  "troubleshooting": [
    {
      "problem": "How do I find internal or non-manifold faces hidden inside my mesh?",
      "cause": "Extruding inward accidentally creates invisible interior geometry.",
      "solution": "<span class=\"unverified\" title=\"Not confirmed in the Blender 5.2 manual keymap yet\">In Edit Mode, deselect all (Alt + A), then click Select -> Select All by Trait -> 'Non-Manifold' (or Ctrl + Alt + Shift + M). Inspect highlighted vertices and delete unnecessary interior faces.</span>"
    },
    {
      "problem": "My flat surface shows weird pinching and wavy shadows after shading smooth.",
      "cause": "Smooth shading is trying to interpolate across sharp 90-degree geometric edges.",
      "solution": "Use Object -> Shade Auto Smooth. In current Blender versions, smooth-by-angle behavior is available through the Smooth by Angle geometry-nodes modifier; consult the Blender 5.2 manual for the current workflow."
    },
    {
      "problem": "Extrude created a weird crease that I can't smooth out.",
      "cause": "Duplicate vertices or edge crease value set higher than 0.",
      "solution": "Select all (A) -> 'M' -> 'By Distance'. Also press 'N' -> Item tab, and check if 'Crease' is set above 0. Set it back to 0."
    }
  ]
};
