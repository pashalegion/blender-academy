// Lesson body for anim-2. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["anim-2"] = {
  "overview": "Skinning connects your 3D mesh to the bone armature. In this essential lesson, Dikko breaks down parenting with Automatic Weights (Ctrl + P -> With Automatic Weights) and Weight Paint Mode. You'll learn how vertex groups control deformation and how to resolve the most infamous error in all of Blender: \"Bone Heat Weighting: failed to find solution\".",
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
  ]
};
