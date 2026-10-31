// Lesson body for anim-1. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["anim-1"] = {
  "overview": "Before you can animate a character or mechanical contraption, you need a digital skeleton (Armature). Learn how to add bones (Shift + A -> Armature), extrude bone chains in Edit Mode, name bones with .L and .R suffixes for automatic symmetry, understand parent-child relationships, and pose bones in Pose Mode.",
  "summary": [
    "Shift + A -> Armature -> Single Bone. Enable 'In Front' in Armature Properties -> Viewport Display.",
    "Edit Mode: Extrude bone tips with 'E' to grow a spine, arms, and legs.",
    "Naming Convention: Always name bones with symmetry suffixes (e.g., 'Arm.L', 'Hand.L') so Blender can mirror poses.",
    "Pose Mode (Ctrl + Tab): The only mode where keyframes should be animated! Never animate bone positions in Edit Mode.",
    "Inverse Kinematics (IK): Add an IK bone constraint so dragging a hand or foot automatically calculates elbow and knee bends."
  ],
  "troubleshooting": [
    {
      "problem": "I can't see the bones because they are buried inside my character mesh!",
      "cause": "Viewport display does not prioritize the armature by default.",
      "solution": "Select the Armature -> Go to the green Running Man icon (Armature Object Data) -> 'Viewport Display' -> Check the 'In Front' checkbox."
    },
    {
      "problem": "When I move the character's foot, the knee bends backward or sideways like a broken bone!",
      "cause": "The IK Bone constraint's 'Pole Angle' is incorrect, or the base skeleton has no pre-bent knee angle in Edit Mode.",
      "solution": "In Edit Mode, pull the knee joint slightly forward so Blender knows the natural bend direction. In Pose Mode, select the IK constraint and adjust 'Pole Angle' by 90 or -90 degrees."
    },
    {
      "problem": "Moved bones in Pose Mode and now I can't return my character to the default rest pose.",
      "cause": "Pose transforms have not been cleared.",
      "solution": "In Pose Mode, select all bones with 'A', then press Alt + G (clear location), Alt + R (clear rotation), and Alt + S (clear scale)."
    }
  ]
};
