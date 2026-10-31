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
  ]
};
