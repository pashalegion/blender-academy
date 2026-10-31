// Lesson body for anim-6. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["anim-6"] = {
  "overview": "Blender isn't only for 3D. Grease Pencil is an object you draw with, stroke by stroke, inside 3D space. Use it for traditional 2D animation, cut-out animation, motion graphics or storyboards. The 2D Animation template gets you drawing right away.",
  "summary": [
    "File ‣ New ‣ 2D Animation opens a ready-made setup with a white background and Line and Fill layers.",
    "To add it to a scene, use Add ‣ Grease Pencil ‣ Blank.",
    "Strokes are created in Draw Mode and need a keyframe in the timeline, so create one or turn on Auto Key.",
    "Fix strokes afterward in Edit Mode or Sculpt Mode.",
    "Onion Skinning shows nearby frames faintly, which makes smooth motion much easier to draw."
  ],
  "troubleshooting": [
    {
      "problem": "Nothing appears when I draw.",
      "cause": "Drawing needs a keyframe on the active layer at the current frame.",
      "solution": "Create a keyframe or turn on Auto Key, then check that the layer is visible and unlocked."
    },
    {
      "problem": "My drawing is on a strange angle or hard to see.",
      "cause": "Strokes are placed in 3D space, so the view and drawing plane matter.",
      "solution": "Use the 2D Animation template, which draws on the Front (X-Z) plane, and press Numpad 1 for a front view."
    },
    {
      "problem": "My new drawing replaced what I had on that frame.",
      "cause": "You stayed on the same keyframe, so the strokes were added there.",
      "solution": "Move to a new frame with Auto Key on, or add a new keyframe before you draw."
    }
  ]
};
