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
  ]
};
