// Lesson body for hard-1. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["hard-1"] = {
  "overview": "Grant Abbitt's Medieval Well is one of the most beloved low-poly beginner tutorials in the entire 3D community. You will learn how to create charming wooden beams, stone roof shingles, a bucket, and rope using minimal polycounts, clever extrusion techniques, and color palettes that run smoothly in game engines like Unreal Engine and Unity.",
  "summary": [
    "Low poly focuses on strong silhouettes, readable shapes, and efficient vertex budgets.",
    "Use Inset ('I'), Extrude ('E'), and Loop Cut ('Ctrl + R') to block out architectural assets.",
    "Randomize low poly wooden beams by selecting random vertices and nudging them slightly with G.",
    "Use Linked Duplicates (Alt + D) for repeating tiles and shingles to save memory and synchronize edits.",
    "Array modifier: Quickly duplicate shingles and bricks along a fixed spacing offset."
  ],
  "troubleshooting": [
    {
      "problem": "When I edit one roof tile, all my other tiles change too!",
      "cause": "You created them using Alt + D (Linked Duplicate) which shares the exact same mesh data.",
      "solution": "If you want a tile to be independent, click Object -> Relations -> Make Single User -> 'Object & Data'."
    },
    {
      "problem": "Inset ('I') is insetting faces into weird uneven thin strips instead of even borders.",
      "cause": "The object scale is non-uniform (e.g. Z scale is 4x larger than X and Y).",
      "solution": "Exit to Object Mode, press Ctrl + A -> 'Apply Scale', then go back into Edit Mode and try insetting again."
    },
    {
      "problem": "My low-poly wood planks look blurry or washed out.",
      "cause": "Smooth shading is active on low poly geometry with sharp angles.",
      "solution": "Right click the object -> Select 'Shade Flat' for that crisp, stylized low-poly aesthetic."
    }
  ]
};
