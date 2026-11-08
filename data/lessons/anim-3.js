// Lesson body for anim-3. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["anim-3"] = {
  "overview": "The bouncing ball is the ultimate gateway to animation. It teaches Squash & Stretch, Timing & Spacing, Ease In & Ease Out, and Arc of Motion. Learn how to record keyframes ('I' hotkey), master the Timeline, and use the Graph Editor (F-curves and bezier handles) to sculpt gravity and physical momentum like a seasoned animator.",
  "summary": [
    "Press 'I' over the 3D viewport to insert a Keyframe (Location, Rotation, Scale).",
    "Open the 'Graph Editor' to view animation curves (F-curves) instead of just timeline dots.",
    "Gravity Curve: Change the bottom contact keyframe handles to 'Vector' (Press 'V' -> Vector) to create a sharp instant bounce instead of floaty easing.",
    "Squash & Stretch: Squash the ball along Z on impact while scaling X and Y outwards to preserve volume.",
    "Anticipation & Arcs: No natural object moves in robotic straight lines; always curve spatial paths."
  ],
  "troubleshooting": [
    {
      "problem": "My bouncing ball slows down before hitting the ground like it's floating through molasses!",
      "cause": "Default keyframes use 'Bezier' interpolation which eases in and eases out on both sides.",
      "solution": "In the Graph Editor, select the bottom impact keyframe, press 'V' and choose 'Vector' or break handles with 'Free' so the incoming curve slams down fast and shoots up instantly."
    },
    {
      "problem": "I move my object on frame 20, but when I scrub the timeline it resets back to frame 1!",
      "cause": "You didn't insert a keyframe after moving the object, or Auto-Keyframing is turned off.",
      "solution": "Press 'I' to insert a Location keyframe, OR click the red circular 'Auto-Keying' record button in the timeline header."
    },
    {
      "problem": "My animation keeps looping forever past my ending keyframe with dead blank space.",
      "cause": "The Timeline End Frame is set to default 250 instead of your animation length.",
      "solution": "In the bottom Timeline header, set 'End:' to the last frame of your action (e.g. 60)."
    }
  ],
  "tutorial": [
    {
      "heading": "1. Squash and stretch",
      "steps": [
        "Objects squash when they hit something and stretch when they move fast, while keeping the same volume.",
        "For a bouncing ball, squash it on impact (S, Z, smaller) and widen it on X and Y."
      ]
    },
    {
      "heading": "2. Anticipation",
      "steps": [
        "Before a big action, show a small opposite movement: a character crouches before a jump.",
        "It prepares the viewer for what is about to happen."
      ]
    },
    {
      "heading": "3. Staging",
      "steps": [
        "Present one clear idea at a time. Choose the pose and camera angle that make the action easy to read."
      ]
    },
    {
      "heading": "4. Straight ahead and pose to pose",
      "steps": [
        "Straight ahead means animating frame by frame from start to end. Pose to pose means setting the key poses first and filling in the gaps.",
        "In Blender, pose to pose is the usual method: set key poses with I, and Blender fills the frames in between."
      ]
    },
    {
      "heading": "5. Follow through and overlapping action",
      "steps": [
        "Parts of a body keep moving after the main body stops, like hair, a tail or clothes.",
        "Different parts move at slightly different times, which makes motion feel natural."
      ]
    },
    {
      "heading": "6. Slow in and slow out",
      "steps": [
        "Real motion speeds up and slows down gradually. Put more frames near the start and end of a movement.",
        "In the Graph Editor, Bezier curves give slow in and slow out automatically."
      ]
    },
    {
      "heading": "7. Arcs",
      "steps": [
        "Most natural movement follows curved paths, not straight lines.",
        "Check the path of a hand or a ball from the side; smooth arcs look more alive."
      ]
    },
    {
      "heading": "8. Secondary action",
      "steps": [
        "Small extra actions support the main one, such as a character whistling while walking.",
        "They add personality but should not distract."
      ]
    },
    {
      "heading": "9. Timing",
      "steps": [
        "The number of frames for an action decides how heavy, fast or emotional it feels.",
        "Move keyframes closer together in the Timeline or Dope Sheet for faster actions."
      ]
    },
    {
      "heading": "10. Exaggeration",
      "steps": [
        "Push poses and motion a bit further than reality to make them clear and fun."
      ]
    },
    {
      "heading": "11. Solid drawing",
      "steps": [
        "Think of forms as 3D volumes with weight and balance. In 3D, check poses from several angles."
      ]
    },
    {
      "heading": "12. Appeal",
      "steps": [
        "Characters and motion should be interesting to watch, with clear shapes and personality."
      ]
    },
    {
      "heading": "Try it: bouncing ball in Blender",
      "steps": [
        "Add a sphere, go to frame 1, and press I ‣ Location to add a keyframe high up.",
        "Go to the contact frame, move the ball to the floor and key it again; repeat for the next high point.",
        "Open the Graph Editor. Select the contact keys and press V ‣ Vector so the ball changes direction sharply.",
        "Key a slight squash on the contact frame and a stretch just before and after."
      ]
    }
  ]
};
