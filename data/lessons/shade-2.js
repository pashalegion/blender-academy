// Lesson body for shade-2. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["shade-2"] = {
  "overview": "UV unwrapping is the process of flattening a 3D model into 2D coordinates so textures can be wrapped around it—just like cutting a cardboard box flat. In this lesson, you'll learn where to place Seams (Ctrl + E -> Mark Seam), how to use Smart UV Project, and how to maintain consistent Texel Density so textures never stretch.",
  "summary": [
    "Select edges where seams should go (hide them in natural crevices or unseen undersides) -> Ctrl + E -> 'Mark Seam' (edges turn red).",
    "In Edit Mode, press 'A' to select all faces, then press 'U' -> 'Unwrap'.",
    "Open the 'UV Editor' window to view the unwrapped 2D UV islands.",
    "Pack UV Islands: In UV Editor, click UV -> 'Pack Islands' to maximize texture resolution usage.",
    "Check UV Stretch: In UV Editor overlays, enable 'Display Stretch' (Blue = zero distortion, Green/Red = stretching)."
  ],
  "troubleshooting": [
    {
      "problem": "My UV unwrap is horribly warped and stretched out in one direction!",
      "cause": "You forgot to apply object scale before unwrapping!",
      "solution": "Go to Object Mode, press Ctrl + A -> 'Apply Scale'. Return to Edit Mode, press 'A', then 'U' -> 'Unwrap' again."
    },
    {
      "problem": "Two parts of my mesh are overlapping on top of each other in the UV editor.",
      "cause": "The mesh wasn't split with enough seams, causing the island to fold over itself.",
      "solution": "Add an extra seam along the dividing fold. Re-unwrap with 'U' -> 'Unwrap'. In UV Editor, press UV -> 'Pack Islands'."
    },
    {
      "problem": "The texture resolution looks blurry on one part of the model but sharp on another.",
      "cause": "Inconsistent Texel Density (UV island sizes don't match their real 3D proportions).",
      "solution": "In the UV Editor, select all islands and click UV -> 'Average Island Scale', then 'Pack Islands'."
    }
  ]
};
