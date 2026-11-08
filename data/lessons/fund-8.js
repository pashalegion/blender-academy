// Lesson body for fund-8. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["fund-8"] = {
  "overview": "Stop rebuilding the same things. The Asset Browser turns your objects and materials into a personal library that you can drag into any project. An asset is simply a data-block you have marked for reuse, and an asset library is a folder registered in Preferences.",
  "summary": [
    "Open the Asset Browser by changing any area's Editor Type.",
    "Right-click an object or material in the Outliner and choose Mark as Asset.",
    "Register a folder as an asset library in Preferences so its assets appear in every project.",
    "Use catalogs to sort assets into a clear folder structure.",
    "Import Method decides what happens when you use an asset, such as linking it or appending a copy."
  ],
  "troubleshooting": [
    {
      "problem": "My asset doesn't appear in the Asset Browser.",
      "cause": "It may not be marked as an asset, or it lives in an unsaved file or a folder that isn't a library.",
      "solution": "Mark it as an asset, save the blend-file inside a registered library folder, then refresh the browser."
    },
    {
      "problem": "I changed an asset, but older projects don't update.",
      "cause": "With an appended copy, each project keeps its own independent version.",
      "solution": "Choose a linked import method if you want later changes to carry over."
    },
    {
      "problem": "Blender asks for images, video or sound as assets, and they're missing.",
      "cause": "Blender's assets are data-blocks, so standalone images, sounds and videos aren't currently supported.",
      "solution": "Keep those files in a normal project folder, or add them to a material or object that you mark as an asset."
    }
  ],
  "tutorial": [
    {
      "heading": "What the Asset Browser is",
      "steps": [
        "The Asset Browser is a library of reusable objects, materials, node groups and poses that you can drag into any project.",
        "An asset is a normal data-block (such as an object or material) that you have marked as an asset.",
        "An asset library is a folder on your computer that Blender knows about."
      ]
    },
    {
      "heading": "Open the Asset Browser",
      "steps": [
        "Change any area to the Asset Browser using the Editor Type menu in its top-left corner. A good place is the Timeline at the bottom; drag its top edge up to make it bigger.",
        "On the left you can pick the library. Current File shows assets saved in the file you have open."
      ]
    },
    {
      "heading": "Mark something as an asset",
      "steps": [
        "In the Outliner, right-click an object or material and choose Mark as Asset.",
        "It now appears in the Asset Browser under Current File.",
        "Blender creates a small preview picture. You can refresh it from the asset's settings in the browser's sidebar."
      ]
    },
    {
      "heading": "Create your own asset library",
      "steps": [
        "Make a folder on your computer for your assets, for example Documents/Blender Assets.",
        "Open Edit ‣ Preferences ‣ File Paths, find Asset Libraries, click + and choose that folder.",
        "Save the .blend files that contain your marked assets inside this folder. Now every project can use them from the library dropdown."
      ]
    },
    {
      "heading": "Organize with catalogs",
      "steps": [
        "Catalogs are folders inside the library, such as Furniture, Rocks or Metals.",
        "Use the + button in the catalog list to make a new catalog, then drag assets onto it.",
        "Good catalogs make large libraries quick to search."
      ]
    },
    {
      "heading": "Use assets in your scenes",
      "steps": [
        "Drag an asset from the browser into the 3D Viewport. Materials can be dropped straight onto an object.",
        "Import Method (in the browser header) decides what happens: Link keeps a connection to the library file, Append makes an independent copy, and Append (Reuse Data) avoids duplicate materials and textures.",
        "To change an asset, open the .blend file it is saved in, edit it there and save."
      ],
      "tip": "Save your file before marking assets. Unsaved files cannot share their assets with other projects."
    }
  ]
};
