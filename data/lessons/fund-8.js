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
  ]
};
