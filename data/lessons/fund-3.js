// Lesson body for fund-3. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["fund-3"] = {
  "overview": "Follow Blender Guru's complete beginner donut course made for Blender 5.0 (published in 2026). It is a full start-to-finish course covering the basics, modeling, organic forms, materials, texturing, UVs, Geometry Nodes sprinkles, lighting, and rendering. Blender 5.2 is the current LTS release; the core workflows still apply, and use the official 5.2 manual linked below if a control has moved.",
  "summary": [
    "The course is split into eight chapters: basics, modeling, organic modeling, materials, texturing, UV unwrapping, sprinkles with Geometry Nodes, and final lighting/rendering.",
    "Save incremental versions of the .blend file as you go, especially before modifiers, UV edits, and simulation or node setup.",
    "Treat provided textures and assets as optional learning aids; the course page lists downloadable resources and setup steps.",
    "If a Blender 5.0 menu or panel differs in 5.2, search the versioned manual linked below for the feature name."
  ],
  "troubleshooting": [
    {
      "problem": "The tutorial's interface doesn't exactly match Blender 5.2.",
      "cause": "The course was recorded for Blender 5.0 and some UI details may have changed in 5.2.",
      "solution": "Look up the tool name in the linked Blender 5.2 manual. The course page also includes current chapter links and project resources."
    },
    {
      "problem": "The course's texture or asset is missing.",
      "cause": "Some course assets are provided as separate downloads and are not embedded in the video.",
      "solution": "Open the Blender Guru course page linked above and download the relevant project resources. Reconnect missing files through File -> External Data -> Find Missing Files."
    },
    {
      "problem": "I can't see vertices behind the front faces in Edit Mode.",
      "cause": "Solid shading blocks occluded geometry.",
      "solution": "Press Alt + Z to toggle X-Ray mode. Now you can select both front and back vertices effortlessly with box select (B)."
    }
  ]
};
