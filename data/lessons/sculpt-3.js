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
  ],
  "tutorial": [
    {
      "heading": "Why retopology",
      "steps": [
        "High-detail sculpts have millions of messy polygons. They are hard to animate, UV unwrap or use in games.",
        "Retopology means building a new, clean, low-poly mesh on top of the sculpt, following its shape."
      ]
    },
    {
      "heading": "Set up the objects",
      "steps": [
        "Keep your sculpt as the high-poly reference.",
        "Add a new plane and move it in front of the sculpt. This will become the new mesh.",
        "In the plane's Object Properties ‣ Viewport Display, turn on In Front so it is always visible over the sculpt."
      ]
    },
    {
      "heading": "Snapping",
      "steps": [
        "Turn on snapping (magnet icon) and set it to snap to Face Project so new vertices stick to the sculpt's surface.",
        "Moving and extruding vertices now places them on the sculpt."
      ]
    },
    {
      "heading": "Shrinkwrap modifier",
      "steps": [
        "Add a Shrinkwrap modifier to the new mesh and choose the sculpt as the Target.",
        "Give it a small Offset so the new mesh sits just above the surface.",
        "Place a Mirror modifier above it if the model is symmetrical."
      ]
    },
    {
      "heading": "Retopology workflow",
      "steps": [
        "Start with the important loops: around the eyes, the mouth and the main joints.",
        "Extrude edges (E) and connect them into quads, following the flow of the form.",
        "Fill gaps with F, and keep the faces evenly sized.",
        "Use G G to slide vertices along edges and keep the spacing even."
      ],
      "tip": "Aim for quads and good edge loops where the model bends."
    },
    {
      "heading": "Apply modifiers",
      "steps": [
        "When the new mesh is finished, apply the Mirror and Shrinkwrap modifiers so the shape becomes real geometry.",
        "Check for holes and fix any faces that point the wrong way (Shift + N)."
      ]
    },
    {
      "heading": "Bake the high-poly details",
      "steps": [
        "The clean mesh has less detail than the sculpt. Bake the sculpt's details into a normal map to get them back as a texture.",
        "See the Baking Textures lesson for the full steps."
      ]
    }
  ]
};
