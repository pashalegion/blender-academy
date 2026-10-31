// Lesson body for post-3. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["post-3"] = {
  "overview": "A model that looks right in Blender can arrive in a game engine at the wrong size, facing the wrong way or missing materials. A short preparation routine prevents most of that. This lesson covers what to check before export, and when to use FBX or glTF.",
  "summary": [
    "Keep a backup first, because export preparation can change your model.",
    "Check face count, clean up n-gons, and make sure the model is UV unwrapped.",
    "Use Object ‣ Apply ‣ All Transforms, and set the object's origin where you want it.",
    "Triangulate if your workflow needs it, for example with the Triangulate modifier.",
    "FBX is widely used with Unity and Unreal. glTF 2.0 is well suited to the web and Godot, and it reads Principled BSDF materials."
  ],
  "troubleshooting": [
    {
      "problem": "My model is huge or tiny in the engine.",
      "cause": "Unapplied scale, or a unit mismatch between Blender and the engine.",
      "solution": "Apply All Transforms, then check the Scale settings in the FBX export options."
    },
    {
      "problem": "My textures are missing after import.",
      "cause": "Most complex shader nodes don't transfer to other apps, and the images may not be included.",
      "solution": "Bake procedural materials to image textures, and use a simple Principled BSDF setup."
    },
    {
      "problem": "My model rotates around the wrong point.",
      "cause": "The object origin isn't where the engine expects it.",
      "solution": "Set the origin before export, usually at the base or center of the object."
    }
  ]
};
