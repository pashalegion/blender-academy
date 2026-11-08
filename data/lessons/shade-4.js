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
  ],
  "tutorial": [
    {
      "heading": "Prepare the model",
      "steps": [
        "Texture painting works best on a simple, low-poly model, for example a stylized gravestone.",
        "Make sure the model is UV unwrapped (U ‣ Unwrap or Smart UV Project) with no overlapping islands."
      ]
    },
    {
      "heading": "Open Texture Paint",
      "steps": [
        "Click the Texture Paint workspace tab. You get the 3D view in Texture Paint mode and an Image Editor on the left.",
        "If Blender warns about missing textures, you still need a paint slot."
      ]
    },
    {
      "heading": "Add a texture to paint on",
      "steps": [
        "In the tool settings (or the Texture Slots panel), add a Base Color texture slot.",
        "Choose a resolution such as 1024 or 2048 and a starting color, then click OK. Blender creates the image and connects it to the material."
      ]
    },
    {
      "heading": "Paint on the model",
      "steps": [
        "Pick a color in the tool settings and paint directly on the 3D model with the Draw brush.",
        "Press F to change the brush size and Shift + F to change strength.",
        "Turn on symmetry (X) if both sides should match."
      ]
    },
    {
      "heading": "Other useful brushes",
      "steps": [
        "Fill colors a whole area at once. Soften blurs edges. Smear smudges paint.",
        "Clone copies one area of the texture onto another.",
        "You can also paint in the 2D Image Editor for straight lines and precise work."
      ]
    },
    {
      "heading": "Stylized painting tips",
      "steps": [
        "Start with flat base colors, then add darker colors in cracks and lighter colors on edges.",
        "Use a slightly softer brush for gradients and a hard brush for details like moss or cracks."
      ]
    },
    {
      "heading": "Save your painting",
      "steps": [
        "The painted image is not saved with Ctrl + S on the scene. In the Image Editor use Image ‣ Save (Alt + S) or Save As.",
        "Or pack it into the .blend file with Image ‣ Pack."
      ],
      "tip": "If you close Blender without saving the image, your painting is lost."
    }
  ]
};
