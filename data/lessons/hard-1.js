// Lesson body for hard-1. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["hard-1"] = {
  "overview": "Grant Abbitt's low-poly well is a classic beginner project, and this video is Part 1 of the series. You will learn how to create charming wooden beams, stone roof shingles, a bucket, and rope using minimal polycounts, clever extrusion techniques, and color palettes that run smoothly in game engines like Unreal Engine and Unity.",
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
  ],
  "tutorial": [
    {
      "heading": "Plan the low-poly style",
      "steps": [
        "Low poly means few faces, clear shapes and flat shading. Think in simple blocks.",
        "Look at a few reference pictures of old wells before you start: a round stone wall, two posts, a small roof and a bucket on a rope."
      ]
    },
    {
      "heading": "Model the stone wall",
      "steps": [
        "Add a Cylinder (Shift + A ‣ Mesh ‣ Cylinder) and in Adjust Last Operation set Vertices to about 10 or 12.",
        "Scale it down in height (S, Z) so it becomes a short, wide ring.",
        "In Edit Mode, select the top face and press I to inset it, then E to extrude it down to hollow out the well.",
        "Delete the bottom face if nobody will see it, to save geometry."
      ]
    },
    {
      "heading": "Add stone detail",
      "steps": [
        "Add a horizontal loop cut (Ctrl + R) around the wall.",
        "Select a few random vertices and nudge them with G so the stones look uneven and handmade.",
        "Keep the changes small; low-poly charm comes from slightly irregular shapes."
      ]
    },
    {
      "heading": "Posts and roof frame",
      "steps": [
        "Add a Cube, scale it into a tall thin post (S, Z, then S, X), and place it on one side of the wall.",
        "Duplicate it with Shift + D and move it to the other side (combine with X or Y to keep it aligned).",
        "Add a horizontal beam between the posts for the rope winch."
      ]
    },
    {
      "heading": "The roof",
      "steps": [
        "Add a Cube above the posts. In Edit Mode, select the top edge loop and scale it in (S, X) to make a pointed roof shape.",
        "Or use a plane with Solidify for thin roof boards.",
        "Repeat roof tiles with an Array modifier, or with linked duplicates (Alt + D) so editing one updates the others."
      ],
      "tip": "Linked duplicates share mesh data. To make one independent later, use Object ‣ Relations ‣ Make Single User."
    },
    {
      "heading": "Bucket and rope",
      "steps": [
        "Make the bucket from a small cylinder: inset and extrude the top face down to hollow it.",
        "Make the rope from a thin cylinder hanging from the beam, or from a curve with a bevel depth.",
        "Keep both simple; they only need to read well from a distance."
      ]
    },
    {
      "heading": "Finish and shade",
      "steps": [
        "Right-click each object and choose Shade Flat for the crisp low-poly look.",
        "Check the scale of everything with Object ‣ Apply ‣ Scale before adding colors.",
        "Add simple colors in the next parts of the series, and save your file."
      ]
    }
  ]
};
