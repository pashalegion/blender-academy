// Lesson body for post-4. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["post-4"] = {
  "overview": "Most of Blender can be controlled with Python, including object creation, animation, rendering and import and export. You don't need to be a programmer to start. A small script can turn a boring, repeated job into a single click.",
  "summary": [
    "The Scripting workspace gathers the Text Editor, Python Console and Info Editor together.",
    "Write scripts in the Text Editor and press Run Script to execute them.",
    "The Info Editor logs actions as Python, which makes it a great way to discover commands.",
    "Start scripts with import bpy, which gives you access to Blender's data and tools.",
    "The official Python API documentation is the main reference. Add-ons are scripts packaged to extend Blender."
  ],
  "troubleshooting": [
    {
      "problem": "My script failed, but I can't see why.",
      "cause": "Script errors are reported in the system console.",
      "solution": "Use Window ‣ Toggle System Console on Windows, or start Blender from a terminal on Linux and macOS."
    },
    {
      "problem": "A command from an older tutorial no longer exists.",
      "cause": "The Python API changes between Blender versions.",
      "solution": "Look up the current command in the Python API documentation."
    },
    {
      "problem": "A command fails with a context error.",
      "cause": "Many operators need a particular mode, selection or active object.",
      "solution": "Check the object is active and in the right mode, or edit its data directly through bpy.data."
    }
  ],
  "tutorial": [
    {
      "heading": "Why scripting",
      "steps": [
        "Python lets you control Blender with code: create objects, change settings and automate boring, repeated tasks."
      ]
    },
    {
      "heading": "The Scripting workspace",
      "steps": [
        "Click the Scripting tab. It shows the Text Editor, the Python Console and the Info Editor.",
        "The Info Editor logs your actions as Python commands, which helps you find the code for anything you do."
      ]
    },
    {
      "heading": "Your first script",
      "steps": [
        "In the Text Editor click New, then type: import bpy",
        "Add a line such as bpy.ops.mesh.primitive_cube_add(location=(0, 0, 2)).",
        "Click Run Script (the play button). A cube appears 2 units above the center."
      ]
    },
    {
      "heading": "Control Blender with code",
      "steps": [
        "bpy.data gives access to all data, such as objects and materials.",
        "bpy.context gives what you are working on now, like bpy.context.object for the active object.",
        "Change properties directly, for example bpy.context.object.scale.z = 3.",
        "Use loops to repeat actions, for example adding 10 cubes in a row."
      ]
    },
    {
      "heading": "Tips",
      "steps": [
        "Hover over a button with Python Tooltips turned on (Edit ‣ Preferences ‣ Interface) to see its Python name.",
        "Use the Python Console to test single lines quickly; Tab completes names.",
        "When a script fails, read the error in the system console or the Info Editor."
      ],
      "tip": "The Python API changes between Blender versions; check the official API docs for the version you use."
    }
  ]
};
