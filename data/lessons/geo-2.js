// Lesson body for geo-2. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["geo-2"] = {
  "overview": "Stop hand-modeling cables, wires, and ropes! Learn how to build an interactive procedural wire generator using Geometry Nodes. You will draw standard curves in the viewport and watch Blender automatically turn them into hanging catenary cables with plugs, connectors, and adjustable thickness sliders exposed in the modifier panel.",
  "summary": [
    "Curve to Mesh node: Converts 1D mathematical curves into 3D tubular geometry.",
    "Curve Circle: Plug into the 'Profile Curve' socket of 'Curve to Mesh' to define pipe radius and resolution.",
    "Expose parameters: Drag sockets from nodes into empty Group Input slots to create custom sliders in the modifier UI.",
    "Resample Curve: Controls point density along the curve so curves deform cleanly.",
    "Set Curve Radius: Allows procedural tapering from thick base to thin wire tip."
  ],
  "troubleshooting": [
    {
      "problem": "The 'Curve to Mesh' node outputs completely invisible geometry!",
      "cause": "The 'Profile Curve' input socket was left empty.",
      "solution": "Add a 'Curve Circle' (or 'Curve Line') node and plug its Curve output into the 'Profile Curve' input of the 'Curve to Mesh' node."
    },
    {
      "problem": "The cables look like harsh jagged bent sticks rather than smooth hanging arcs.",
      "cause": "The curve does not have enough points along its length.",
      "solution": "Add a 'Resample Curve' node right before 'Curve to Mesh' and set the Count to 32 or Length to 0.05m."
    },
    {
      "problem": "How do I change cable thickness from the regular Modifier panel without opening nodes?",
      "cause": "The radius socket is hardcoded inside the node graph.",
      "solution": "Drag a noodle from the 'Radius' input of the Curve Circle node all the way to an empty slot on the 'Group Input' node. Now it appears as an input slider in the Modifier tab!"
    }
  ]
};
