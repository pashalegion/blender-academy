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
  ],
  "tutorial": [
    {
      "heading": "Open a 2D project",
      "steps": [
        "Use File ‣ New ‣ 2D Animation. You get a white canvas, a drawing workspace and layers ready to use.",
        "Or add Grease Pencil to any scene with Add ‣ Grease Pencil ‣ Blank."
      ]
    },
    {
      "heading": "Basic drawing tools",
      "steps": [
        "In Draw Mode, choose the Draw tool and draw with the mouse or a tablet.",
        "Change brush size with F and strength with Shift + F. Pick colors in the tool settings or the color palette.",
        "Use Erase to remove strokes and Fill to color closed shapes."
      ]
    },
    {
      "heading": "Transform strokes",
      "steps": [
        "Switch to Edit Mode to select strokes and points, then move, rotate and scale them with G, R and S.",
        "In Object Mode you can move the whole drawing object."
      ]
    },
    {
      "heading": "Add and move objects",
      "steps": [
        "Each Grease Pencil object is like a separate drawing layer in 3D space.",
        "You can add several objects (for a character and a background) and move them independently."
      ]
    },
    {
      "heading": "The animation timeline",
      "steps": [
        "Drawing needs a keyframe. Turn on Auto Key (the record button) so new drawings create keys automatically.",
        "Move to a later frame and draw the next pose. Each keyframe holds a drawing until the next one."
      ]
    },
    {
      "heading": "Onion skinning",
      "steps": [
        "Turn on Onion Skinning in the overlays to see faint versions of the previous and next drawings.",
        "It helps you draw smooth in-between frames."
      ]
    },
    {
      "heading": "Line boil",
      "steps": [
        "Add a Noise modifier to strokes to make lines wiggle slightly on every frame, a lively hand-drawn look called line boil."
      ]
    },
    {
      "heading": "Rotoscoping",
      "steps": [
        "Rotoscoping means tracing over video. Import a video or image as a reference behind the drawing.",
        "Draw over it frame by frame, then hide the reference."
      ]
    },
    {
      "heading": "Import images and video",
      "steps": [
        "Use Add ‣ Image ‣ Reference (or drag in an image) to place reference images.",
        "Video can be added as a camera background or an image sequence."
      ]
    },
    {
      "heading": "Export",
      "steps": [
        "Set the frame range and output format in Output Properties, then render the animation with Render ‣ Render Animation (Ctrl + F12)."
      ]
    }
  ]
};
