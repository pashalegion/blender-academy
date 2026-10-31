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
  ]
};
