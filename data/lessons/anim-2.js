// Lesson body for anim-2. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["anim-2"] = {
  "overview": "Skinning connects your 3D mesh to the bone armature. This essential lesson breaks down parenting with Automatic Weights (Ctrl + P -> With Automatic Weights) and Weight Paint Mode. You'll learn how vertex groups control deformation and how to resolve the most infamous error in all of Blender: \"Bone Heat Weighting: failed to find solution\".",
  "summary": [
    "Parenting Order: First select the Mesh, THEN Shift-select the Armature -> Press Ctrl + P -> 'With Automatic Weights'.",
    "Weight Paint Mode: Blue = 0% influence, Green = 50%, Red = 100% influence from the active bone.",
    "In Pose Mode, rotate bones to check deformations, then switch to Weight Paint to smooth harsh creases.",
    "Normalize Weights: Ensure no vertex has more than a total combined 1.0 weight across all bones.",
    "Use the Gradient weight tool and Smooth brush to eliminate sharp armpit and elbow stretching."
  ],
  "troubleshooting": [
    {
      "problem": "Error: 'Bone Heat Weighting: failed to find solution for one or more bones'!",
      "cause": "The mesh has non-manifold geometry, self-intersecting loose parts, or duplicate overlapping vertices.",
      "solution": "1. Select mesh in Edit Mode -> 'A' -> 'M' -> 'By Distance'. 2. Check for non-manifold edges (Select -> All by Trait -> Non-Manifold). 3. If still failing, temporarily scale the mesh and armature up by 10x (Ctrl + A -> Scale), parent with Auto Weights, then scale back down to 0.1x!"
    },
    {
      "problem": "Moving the character's left arm causes vertices on the RIGHT arm or waist to stretch across the body!",
      "cause": "Automatic weights bled across close geometry or bones were too close together during parenting.",
      "solution": "Enter Weight Paint Mode, select the left arm vertex group, and paint the unwanted vertices with 0 Weight, or use 'Weights' -> 'Clean' -> limit to subset."
    },
    {
      "problem": "Eyes and teeth are flying out of the character's head when moving the neck bone.",
      "cause": "Separate eye/teeth meshes were not weighted 100% to the head bone.",
      "solution": "Select the eyes mesh, go to Vertex Groups, select 'Head', and click 'Assign' with Weight = 1.0."
    }
  ],
  "tutorial": [
    {
      "heading": "The error",
      "steps": [
        "When you parent with Automatic Weights, Blender may show 'Bone Heat Weighting: failed to find solution for one or more bones'.",
        "Some or all of the mesh then does not move with the bones."
      ]
    },
    {
      "heading": "Why it happens",
      "steps": [
        "Automatic weights need a clean, closed mesh.",
        "Duplicate vertices, overlapping separate parts, holes and very small object sizes are the usual causes."
      ]
    },
    {
      "heading": "Solution 1: Merge by Distance",
      "steps": [
        "Select the mesh, press Tab, select all (A), and use M ‣ By Distance to remove duplicate vertices.",
        "Return to Object Mode and parent again with Ctrl + P ‣ With Automatic Weights."
      ]
    },
    {
      "heading": "Solution 2: scale the object up",
      "steps": [
        "Very small models often fail. Select both the mesh and the armature and scale them up 100 times (S, 100, Enter).",
        "Apply the scale (Ctrl + A ‣ Scale), parent with automatic weights, then scale both back down."
      ]
    },
    {
      "heading": "Solution 3: split loose parts",
      "steps": [
        "Models made of many overlapping pieces (eyes, teeth, clothes) often fail together.",
        "In Edit Mode use P ‣ By Loose Parts to split them into separate objects, then parent each one separately or join only the clean parts."
      ]
    },
    {
      "heading": "Add-on options",
      "steps": [
        "Free and paid add-ons such as Surface Heat Diffuse Skinning and Voxel Heat Diffuse Skinning calculate weights in a different way that fails less often.",
        "Install them only if the built-in fixes do not work."
      ]
    },
    {
      "heading": "Solution 4: transfer weights",
      "steps": [
        "Make a simple, clean copy of the mesh, parent it with automatic weights, then copy its weights to the real mesh.",
        "Use a Data Transfer modifier (Vertex Data ‣ Vertex Groups) or Weight Paint ‣ Transfer Weights."
      ]
    },
    {
      "heading": "Solution 5: paint the weights",
      "steps": [
        "When automatic weights still fail, paint them yourself in Weight Paint mode.",
        "Create a vertex group per bone (named exactly like the bone) and paint where each bone should have influence.",
        "Test often in Pose Mode by rotating the bones."
      ]
    }
  ]
};
