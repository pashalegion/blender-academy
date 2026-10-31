// Lesson body for shade-4. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["shade-4"] = {
  "overview": "Texture Paint Mode lets you paint straight onto a 3D model, like decorating a miniature. It's a great fit for stylized and low-poly work. Blender uses your UV map to transfer each brush stroke into an image, so you need to unwrap the model first.",
  "summary": [
    "Unwrap the model first. Painting writes into an image through the UV map.",
    "Use the Texture Paint workspace, which shows the Image Editor and the 3D Viewport side by side.",
    "Add a texture slot to create the image you paint on, usually starting with Base Color.",
    "You can paint in the 3D Viewport or directly on the flat image in the Image Editor.",
    "Save the painted image. Painted images are separate from the mesh and aren't kept just because you saved your scene."
  ],
  "troubleshooting": [
    {
      "problem": "Blender says there are missing textures, or my brush paints nothing.",
      "cause": "The material has no image to paint on, or the mesh has no UV map.",
      "solution": "Unwrap the mesh, then add a Base Color texture slot in the tool settings."
    },
    {
      "problem": "My painting disappeared after I reopened the file.",
      "cause": "The new image was never saved or packed into the blend-file.",
      "solution": "Use Image ‣ Save in the Image Editor, or pack the image into the blend-file, before closing Blender."
    },
    {
      "problem": "Paint appears in the wrong place or on several areas at once.",
      "cause": "UV islands overlap, so the same part of the image is used in more than one place.",
      "solution": "Unwrap again so the islands don't overlap. Mirrored or stacked UVs share paint on purpose, so leave those if that's what you want."
    }
  ]
};
