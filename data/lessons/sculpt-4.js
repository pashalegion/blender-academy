// Lesson body for sculpt-4. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["sculpt-4"] = {
  "overview": "Hair in modern Blender is made of curves attached to a surface mesh. You comb and shape those curves with brushes in Curves Sculpt Mode, and Geometry Nodes can add detail such as frizz, clumps and extra strands. This short lesson gets you from a bald mesh to your first groom.",
  "summary": [
    "Add hair as a curves object attached to a surface, such as a head. Add ‣ Curve ‣ Fur is one quick starting point.",
    "Curves Sculpt Mode is where you groom, using brushes to add, comb, cut and shape strands.",
    "The surface object matters. Most brushes, including Add Curves, need one to be set.",
    "Keep the strand count low while you shape the groom, then add density for the final render.",
    "Hair needs a real material and a render test. Check it in the render settings, not just in the viewport."
  ],
  "troubleshooting": [
    {
      "problem": "The Add Curves brush does nothing.",
      "cause": "Most curve sculpting brushes need a surface object, and this curves object doesn't have one.",
      "solution": "Set the surface in the curves object's data properties, then try the brush again."
    },
    {
      "problem": "My hair stays behind when the character moves.",
      "cause": "The curves are no longer attached to the deformed surface.",
      "solution": "Use a Deform Curves on Surface setup, then use Curves ‣ Snap to Deformed Surface to re-attach them. That only works if the mesh topology hasn't changed."
    },
    {
      "problem": "Curves don't line up after I edited the head mesh.",
      "cause": "Changing the surface topology breaks the stored attachment information.",
      "solution": "Use Curves ‣ Snap to Nearest Surface, which moves each curve root to the closest point on the mesh."
    }
  ]
};
