// Lesson body for anim-4. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["anim-4"] = {
  "overview": "Constraints automatically control an object's location, rotation and scale. They can make a camera aim at a character, attach a sword to a hand or send a train along a track, all without keyframing every move. They also work on bones, so they're a core rigging tool.",
  "summary": [
    "Add constraints with Add Object Constraint in the Properties editor.",
    "Constraints run from top to bottom in the stack, so their order changes the result.",
    "Each one has an Influence value that you can keyframe to switch it on and off during an animation.",
    "Track To aims an object at a target. It's often called Look At or Aim in other 3D software.",
    "Child Of acts like a parent, but its Influence can be animated to switch parents, for example when a character picks something up."
  ],
  "troubleshooting": [
    {
      "problem": "The object jumped to a new place when I added Child Of.",
      "cause": "The constraint now applies the target's transform on top of the object's own.",
      "solution": "Press Set Inverse on the constraint so the object stays where it was."
    },
    {
      "problem": "My camera points the wrong way with Track To.",
      "cause": "The Track and Up axes don't match how the object is built.",
      "solution": "Change the axis settings on the constraint. Cameras look down their local negative Z axis, so use -Z as the track axis and Y as up."
    },
    {
      "problem": "Two constraints are fighting and the result looks wrong.",
      "cause": "The stack runs from top to bottom, so the later constraint works on the earlier result.",
      "solution": "Reorder them by dragging, or lower Influence to see what each one is doing."
    }
  ]
};
