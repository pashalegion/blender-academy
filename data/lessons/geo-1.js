// Lesson body for geo-1. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["geo-1"] = {
  "overview": "Geometry Nodes have revolutionized Blender, turning it into a procedural power system rivaling Houdini. In this beginner-friendly breakdown, you'll learn what fields and sockets mean, how to distribute thousands of rocks and grass instances across a landscape with 'Distribute Points on Faces' and 'Instance on Points', and how to randomize rotation and scale.",
  "summary": [
    "Add a Geometry Nodes modifier to any mesh and open the 'Geometry Node Editor' workspace.",
    "Every tree starts with 'Group Input' and ends with 'Group Output' geometry data.",
    "Distribute Points on Faces: Converts surface area into floating spawn points (set to Poisson Disk for clean spacing).",
    "Instance on Points: Places your collection or mesh objects onto each distributed point.",
    "Random Value node: Plug into Rotation and Scale to give every pebble or tree varied, natural proportions."
  ],
  "troubleshooting": [
    {
      "problem": "My instanced objects render completely solid grey with no materials in the final render!",
      "cause": "Instances don't carry material slots natively, or materials need a 'Set Material' node.",
      "solution": "Add a 'Set Material' node after 'Instance on Points' and select your material from the dropdown. Alternatively, insert a 'Realize Instances' node before the Group Output."
    },
    {
      "problem": "The ground terrain mesh disappeared after adding points!",
      "cause": "The original input geometry was replaced by points rather than combined.",
      "solution": "Add a 'Join Geometry' node before Group Output. Plug both the original Group Input geometry and your new instanced geometry into the Join Geometry node."
    },
    {
      "problem": "All my trees are pointing in the exact same direction and look like copies.",
      "cause": "Rotation input on 'Instance on Points' has no random variation.",
      "solution": "Add a 'Rotate Instances' node or plug a 'Random Value' node (Vector type, Min -3.14 to Max 3.14 on Z) into the Rotation socket."
    }
  ]
};
