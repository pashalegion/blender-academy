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
  ],
  "tutorial": [
    {
      "heading": "Set up an armature",
      "steps": [
        "An armature is a skeleton of bones that moves a mesh.",
        "Add one with Shift + A ‣ Armature. It starts with a single bone.",
        "In Armature Properties ‣ Viewport Display, turn on In Front so the bones stay visible inside the mesh.",
        "Press Tab to edit the bones. Select the tip of a bone and press E to extrude a new bone from it, building a chain such as a spine and neck."
      ]
    },
    {
      "heading": "Names and symmetry",
      "steps": [
        "Name every bone clearly, for example spine, neck, head.",
        "Use .L and .R at the end of names for left and right bones, such as arm.L and arm.R. Blender then knows which bones mirror each other.",
        "Use Armature ‣ Symmetrize after building one side to create the other side automatically."
      ]
    },
    {
      "heading": "Automatic weights",
      "steps": [
        "In Object Mode, select the mesh first, then Shift-select the armature, and press Ctrl + P ‣ With Automatic Weights.",
        "Blender calculates how strongly each bone moves each part of the mesh.",
        "Select the armature, press Ctrl + Tab for Pose Mode, and rotate bones (R) to test the deformation."
      ],
      "tip": "If you get the error 'Bone Heat Weighting: failed to find solution', see the Skinning lesson for fixes."
    },
    {
      "heading": "Weight tricks",
      "steps": [
        "To fix bad deformation, switch the mesh to Weight Paint mode. Red means full influence, blue means none.",
        "Select a bone (Ctrl + click it in Weight Paint mode with the armature in Pose Mode) and paint where it should move the mesh.",
        "Use the Blur and Smooth tools to soften harsh transitions."
      ]
    },
    {
      "heading": "Weight paint settings",
      "steps": [
        "Weight sets the value you paint (1 = full, 0 = none). Radius and Strength work like other brushes.",
        "Turn on Auto Normalize so the weights on each vertex add up to 1."
      ]
    },
    {
      "heading": "Rigid rigging",
      "steps": [
        "Mechanical objects (robots, lamps) don't need smooth weights.",
        "Parent each separate piece to one bone: select the piece, Shift-select the armature, enter Pose Mode, select the bone, then Ctrl + P ‣ Bone.",
        "Each piece now moves rigidly with its bone."
      ]
    },
    {
      "heading": "Inverse kinematics",
      "steps": [
        "With inverse kinematics (IK) you move a hand or foot and the arm or leg bends automatically.",
        "In Pose Mode, select the lower bone of the leg and add Bone Constraint ‣ Inverse Kinematics. Set the Target to the armature and a foot control bone, and Chain Length to 2.",
        "Bend the knee slightly forward in Edit Mode so Blender knows which way it should bend."
      ]
    }
  ]
};
