// Lesson body for anim-5. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["anim-5"] = {
  "overview": "Shape keys store different versions of the same mesh and blend between them. They're the standard way to animate facial expressions and mouth shapes, and to fix problem areas in a rig. Other software calls them morph targets or blend shapes.",
  "summary": [
    "The Basis key is the resting shape that other keys are measured against.",
    "Add a key in Object Data properties ‣ Shape Keys, then move vertices in Edit Mode to create the new shape.",
    "A key's Value blends between the Basis (0) and the new shape (1).",
    "Use Relative keys for shapes that blend together, such as expressions and corrective poses.",
    "Keyframe Value to animate a key, and use drivers to control keys from a rig."
  ],
  "troubleshooting": [
    {
      "problem": "Blender won't apply a modifier to my mesh.",
      "cause": "Modifiers generally can't be applied to a mesh that has shape keys.",
      "solution": "Apply modifiers before you create the keys. Otherwise, keep them unapplied until export."
    },
    {
      "problem": "My edits changed every shape key.",
      "cause": "You edited the Basis, or changed the wrong key.",
      "solution": "Select the key you want in the list before entering Edit Mode, and check that Basis isn't active."
    },
    {
      "problem": "A shape key moves the wrong side of the face.",
      "cause": "The sculpted shape isn't split or mirrored.",
      "solution": "Use a Vertex Group to limit the key to one side, or use the mirror option in the Shape Keys menu to flip it."
    }
  ]
};
