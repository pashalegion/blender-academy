// Lesson body for fund-7. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["fund-7"] = {
  "overview": "Scenes get messy quickly. The Outliner lists everything in your file, and Collections group objects so you can hide, select or render them together. This lesson also covers how to reuse work: Append copies data from another blend-file, while Link keeps a live connection to it.",
  "summary": [
    "Objects can belong to more than one collection, and every object in a scene belongs to the scene collection.",
    "Use Move to Collection to send selected objects into a collection, and create new collections as you go.",
    "Name objects and collections as you work. It takes seconds now and saves a lot of searching later.",
    "Append (File ‣ Append) makes an independent local copy that you can edit freely.",
    "Link (File ‣ Link) references another file, so changes there appear here the next time this file is reloaded. Linked items show a chain icon in the Outliner."
  ],
  "troubleshooting": [
    {
      "problem": "I linked a character but I can't move or edit it.",
      "cause": "Linked data stays read-only in the current file by design.",
      "solution": "Create a Library Override to get a local, editable version that stays connected to the source file. Use Append instead if you don't need that connection."
    },
    {
      "problem": "Linked objects went missing or turned pink after I moved my files.",
      "cause": "Link stores a path to the source file, and pink usually means Blender can't find a texture image.",
      "solution": "Move the files back, or use File ‣ External Data to find missing files. Use relative paths and keep project files in one folder."
    },
    {
      "problem": "Append or Link can't read a blend-file.",
      "cause": "It isn't possible to Link or Append from a blend-file saved by a much newer version of Blender.",
      "solution": "Open the source file in the newer version, or update the Blender version you are working in."
    }
  ],
  "tutorial": [
    {
      "heading": "The Outliner",
      "steps": [
        "The Outliner (top right) lists every object in your scene, grouped in collections.",
        "Click a name to select that object. Ctrl + click adds to the selection.",
        "Double-click a name to rename it. In the 3D Viewport you can also press F2 to rename the active object.",
        "Expand an object with the small arrow to see its mesh data, modifiers and materials."
      ]
    },
    {
      "heading": "Hide, show and disable",
      "steps": [
        "The eye icon hides an object in the viewport. In the viewport, H hides the selected objects and Alt + H shows everything again.",
        "Open the Filter (funnel) menu in the Outliner to show extra toggles, such as the camera icon (render on or off) and the arrow (selectable or not).",
        "Turning off selectable is handy for backgrounds you do not want to click by accident."
      ]
    },
    {
      "heading": "Collections",
      "steps": [
        "Collections are like folders for objects. Every scene starts with one called Collection.",
        "Right-click in the Outliner and choose New Collection to make one. Give it a clear name, such as Furniture or Lights.",
        "Drag objects onto a collection to move them into it, or select objects in the viewport and press M to move them to a collection.",
        "The checkbox next to a collection excludes it from the view layer completely; the eye only hides it.",
        "An object can be in more than one collection. Every object in the scene also belongs to the main Scene Collection."
      ],
      "tip": "Name things as you work. With dozens of objects, names like Cube.047 make a scene very hard to manage."
    },
    {
      "heading": "Organize a real scene",
      "steps": [
        "Group objects by purpose: environment, characters, props, lights and cameras.",
        "Hide collections you are not working on so the viewport stays fast and clear.",
        "Use Shift + click on a collection's eye icon to hide or show everything inside it at once."
      ]
    },
    {
      "heading": "Append from another file",
      "steps": [
        "Append copies data from another .blend file into your current file.",
        "Go to File ‣ Append and choose the other .blend file.",
        "Open a folder inside it, such as Object or Material, and choose what you want, then click Append.",
        "The appended copy is fully yours: editing it does not change the original file."
      ]
    },
    {
      "heading": "Link from another file",
      "steps": [
        "Link creates a reference to data in another .blend file instead of a copy. Go to File ‣ Link.",
        "Linked items show a chain icon in the Outliner and cannot be edited directly.",
        "If someone updates the source file, the change appears in your file the next time you open it. Teams use this for shared characters and props.",
        "To edit a linked item while keeping the connection, make a Library Override of it (right-click it in the Outliner and look under Library Override)."
      ],
      "tip": "Keep linked files in the same project folder and do not rename or move them, or the links will break."
    }
  ]
};
