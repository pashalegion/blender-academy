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
  ],
  "tutorial": [
    {
      "heading": "Getting started",
      "steps": [
        "Geometry Nodes builds or changes geometry with nodes, procedurally.",
        "Open the Geometry Nodes workspace tab, select an object (for example a plane for the ground), and click New."
      ]
    },
    {
      "heading": "It is a modifier",
      "steps": [
        "Geometry Nodes appears as a modifier in the wrench tab, so you can turn it off or reorder it like any modifier.",
        "Group Input is the original mesh; Group Output is the result."
      ]
    },
    {
      "heading": "Distribute points",
      "steps": [
        "Add Distribute Points on Faces (Shift + A, or search) between Group Input and Group Output.",
        "The mesh becomes many points. Change Density to add or remove points. Choose Poisson Disk for evenly spaced points."
      ]
    },
    {
      "heading": "Join geometry",
      "steps": [
        "The original surface disappeared because only the points reach the output.",
        "Add a Join Geometry node and connect both the original geometry and the new geometry into it."
      ]
    },
    {
      "heading": "Instance objects on the points",
      "steps": [
        "Add Instance on Points after the points. Connect an object (for example a rock) to its Instance input.",
        "Every point now shows a copy of that object."
      ]
    },
    {
      "heading": "Pin the node layout",
      "steps": [
        "Click the pin icon in the node editor header to keep this node tree shown, even when you select another object, such as the rock."
      ]
    },
    {
      "heading": "Reference another object",
      "steps": [
        "Drag the object from the Outliner into the node editor to make an Object Info node.",
        "Connect its Geometry output to Instance. Changes to the original object update every copy."
      ]
    },
    {
      "heading": "Randomize rotation",
      "steps": [
        "Add a Random Value node set to Vector, and connect it to the Rotation input of Instance on Points.",
        "Set Max Z to about 6.28 (a full turn in radians) so every rock faces a different way."
      ]
    },
    {
      "heading": "Randomize scale",
      "steps": [
        "Add another Random Value node (Float), set Min and Max, for example 0.5 and 1.5, and connect it to Scale.",
        "Now every instance has a different size, which looks much more natural."
      ]
    }
  ]
};
