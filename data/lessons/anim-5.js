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
  ],
  "tutorial": [
    {
      "heading": "What shape keys are",
      "steps": [
        "Shape keys store different shapes of the same mesh and blend between them, for example a closed and open mouth.",
        "Other programs call them morph targets or blend shapes."
      ]
    },
    {
      "heading": "Add shape keys",
      "steps": [
        "Select the mesh and open Object Data Properties ‣ Shape Keys. Click + to create Basis, the resting shape.",
        "Click + again for a new key. Select it, press Tab, and move vertices to make the new shape.",
        "Return to Object Mode and drag the key's Value between 0 and 1 to blend."
      ],
      "tip": "Never edit while Basis is selected unless you want to change the base shape."
    },
    {
      "heading": "Shapes from a new mesh",
      "steps": [
        "You can also make the new shape as a separate copy of the mesh, then join it as a shape key.",
        "The copy must have exactly the same number and order of vertices."
      ]
    },
    {
      "heading": "Animate shape keys",
      "steps": [
        "Hover over a key's Value and press I to add a keyframe.",
        "Change the frame, change the Value, and key it again. The shape now animates."
      ]
    },
    {
      "heading": "Sculpt shape keys",
      "steps": [
        "Select a shape key and switch to Sculpt Mode to sculpt it with brushes.",
        "This is handy for organic shapes such as smiles and frowns."
      ]
    },
    {
      "heading": "Other settings",
      "steps": [
        "Range Min and Max let values go below 0 or above 1 for exaggeration.",
        "Mute (the checkbox) turns a key off. The pin icon shows only the selected key.",
        "Use the menu next to the list for options such as New Shape from Mix."
      ]
    },
    {
      "heading": "Mirror a shape key",
      "steps": [
        "Make a shape on one side, then use the shape key menu's mirror option to flip it.",
        "Use a Vertex Group to limit a key to one side of the face."
      ]
    },
    {
      "heading": "Copy to another object and modifiers",
      "steps": [
        "Shape keys can be transferred to a similar mesh with the shape key menu options (the meshes must match).",
        "Modifiers usually cannot be applied while a mesh has shape keys, so apply them before making keys."
      ]
    },
    {
      "heading": "Relative and absolute",
      "steps": [
        "Relative keys (the default) blend from Basis and can mix together, best for faces.",
        "Turning Relative off makes the keys play one after another along an evaluation time, useful for a sequence of shapes."
      ]
    }
  ]
};
