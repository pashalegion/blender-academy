// Lesson body for sculpt-3. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["sculpt-3"] = {
  "overview": "Raw high-poly sculpts with millions of triangles cannot be rigged or animated efficiently. Retopology is the art of drawing clean, optimized low-poly quad geometry over your high-poly sculpt. Learn how to use Blender's snapping tools, the Shrinkwrap modifier, and face loops around the mouth and eyes for clean facial deformations.",
  "summary": [
    "Add a new single Plane, add a 'Shrinkwrap' modifier targeting your high-poly sculpt, and enable Face Snapping.",
    "Turn on 'In Front' in Object Properties -> Viewport Display so your new retopology is always visible over the sculpt.",
    "Build key edge loops first: circular loops around the eye sockets, mouth, and jawline.",
    "Connect loops with quad strips using Extrude (E) and Auto-Merge vertices.",
    "Use PolyQuilt or RetopoFlow addons to drastically accelerate retopology speed."
  ],
  "troubleshooting": [
    {
      "problem": "My retopology plane vertices are sinking inside the high-poly sculpt mesh.",
      "cause": "Without 'In Front' display or normal offset, the faces clip into the sculpt.",
      "solution": "In the Shrinkwrap modifier, increase the 'Offset' slightly (e.g., 0.005m). In Object Properties -> Viewport Display, check 'In Front'."
    },
    {
      "problem": "Vertices are snapping to the BACK of the character's head instead of the front surface.",
      "cause": "Snapping does not occlude back-facing polygons.",
      "solution": "In the Snapping dropdown (top center), check 'Backface Culling' or enable X-Ray mode (Alt + Z) carefully."
    },
    {
      "problem": "I have an odd number of vertices and ended up with an unavoidable triangle.",
      "cause": "Loop counts between two merging branches don't match.",
      "solution": "Use a standard topology step-down redirect (converting 3 edge loops into 1 quad) to maintain pure quad flow."
    }
  ]
};
