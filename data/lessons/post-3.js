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
  ],
  "tutorial": [
    {
      "heading": "Back up first",
      "steps": [
        "Save a copy of your file before preparing it for export. Some steps (like triangulating) change the mesh."
      ]
    },
    {
      "heading": "Check face count",
      "steps": [
        "Turn on Statistics in the Viewport Overlays to see the face and triangle count.",
        "Game engines prefer light models, so remove hidden or unneeded faces."
      ]
    },
    {
      "heading": "Fix n-gons",
      "steps": [
        "Faces with more than four sides can triangulate badly in a game engine.",
        "Find them with Select ‣ Select All by Trait ‣ Faces by Sides (more than 4) and fix them with the knife or by connecting vertices (J)."
      ]
    },
    {
      "heading": "UV unwrap",
      "steps": [
        "Every model needs a clean UV map for its textures. Unwrap it and check for stretching."
      ]
    },
    {
      "heading": "Set the origin",
      "steps": [
        "The origin is the point the object moves and rotates around in the engine.",
        "Place it at the base or center: for example, Object ‣ Set Origin ‣ Origin to 3D Cursor after putting the cursor at the bottom."
      ]
    },
    {
      "heading": "Apply transforms",
      "steps": [
        "Use Object ‣ Apply ‣ All Transforms so the engine gets the right scale and rotation."
      ]
    },
    {
      "heading": "Triangulate",
      "steps": [
        "Engines turn everything into triangles anyway. Doing it yourself (Triangulate modifier or Ctrl + T in Edit Mode) means you control how faces are split."
      ]
    },
    {
      "heading": "FBX for Unity and Unreal",
      "steps": [
        "Use File ‣ Export ‣ FBX. Turn on Selected Objects if you only want part of the scene.",
        "Check the scale and axis options; Unity and Unreal each have recommended settings.",
        "Import into the engine and check size, rotation and materials."
      ]
    },
    {
      "heading": "glTF for Godot",
      "steps": [
        "Use File ‣ Export ‣ glTF 2.0 and choose .glb to pack everything into one file.",
        "glTF reads Principled BSDF materials and textures directly, which Godot supports well."
      ]
    }
  ]
};
