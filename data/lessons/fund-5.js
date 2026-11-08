// Lesson body for fund-5. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["fund-5"] = {
  "overview": "Bad topology causes shading glitches, rendering artifacts, and nightmare deformation during animation. In this lesson, you'll learn the difference between Quads (4-sided polygons), Tris (3-sided), and N-Gons (5+ sided faces). You'll discover how to identify non-manifold geometry, eliminate internal hidden faces, and maintain smooth edge flow.",
  "summary": [
    "Quads (4-sided faces) are the gold standard for subdivision, deformation, and clean UV unwrapping.",
    "Tris are acceptable on flat planar surfaces and are the native format for game engines.",
    "N-Gons (faces with >4 vertices) cause unpredictable shading errors and subdivision pinching—keep them off curved surfaces!",
    "Interior Faces: Never have faces buried inside a closed volume; they ruin automatic weight painting and modifiers.",
    "Edge Flow: Loops should follow natural contours, muscles, or structural seams."
  ],
  "troubleshooting": [
    {
      "problem": "How do I find internal or non-manifold faces hidden inside my mesh?",
      "cause": "Extruding inward accidentally creates invisible interior geometry.",
      "solution": "<span class=\"unverified\" title=\"Not confirmed in the Blender 5.2 manual keymap yet\">In Edit Mode, deselect all (Alt + A), then click Select -> Select All by Trait -> 'Non-Manifold' (or Ctrl + Alt + Shift + M). Inspect highlighted vertices and delete unnecessary interior faces.</span>"
    },
    {
      "problem": "My flat surface shows weird pinching and wavy shadows after shading smooth.",
      "cause": "Smooth shading is trying to interpolate across sharp 90-degree geometric edges.",
      "solution": "Use Object -> Shade Auto Smooth. In current Blender versions, smooth-by-angle behavior is available through the Smooth by Angle geometry-nodes modifier; consult the Blender 5.2 manual for the current workflow."
    },
    {
      "problem": "Extrude created a weird crease that I can't smooth out.",
      "cause": "Duplicate vertices or edge crease value set higher than 0.",
      "solution": "Select all (A) -> 'M' -> 'By Distance'. Also press 'N' -> Item tab, and check if 'Crease' is set above 0. Set it back to 0."
    }
  ],
  "tutorial": [
    {
      "heading": "What topology is",
      "steps": [
        "Topology is the layout of vertices, edges and faces in your mesh: how the surface is built, not just its shape.",
        "Two models can look the same but have very different topology. Good topology makes a model easier to edit, smooth, texture and animate."
      ]
    },
    {
      "heading": "Why clean geometry matters",
      "steps": [
        "Clean meshes shade smoothly, without dark patches or strange creases.",
        "They subdivide predictably with Subdivision Surface.",
        "They deform nicely when animated, for example at elbows and knees.",
        "They are easier to UV unwrap and to change later."
      ]
    },
    {
      "heading": "Words you need to know",
      "steps": [
        "Vertex: a single point. Edge: a line between two vertices. Face: a filled shape between edges.",
        "Quad: a face with 4 sides. Tri: 3 sides. N-gon: 5 or more sides.",
        "Edge loop: a ring of connected edges that runs around a shape. Alt + left-click an edge in Edit Mode selects its loop.",
        "Pole: a vertex where 3, 5 or more edges meet. A few are normal; too many in the wrong place cause pinching.",
        "Normals: the direction a face points. Faces pointing inward cause dark shading."
      ]
    },
    {
      "heading": "What good topology looks like",
      "steps": [
        "Mostly quads, evenly spread over the surface.",
        "Edge loops follow the form, such as around eyes, mouths, or the curve of a handle.",
        "More detail only where the shape needs it, and simple geometry on flat areas.",
        "No faces hidden inside the object, and no holes unless they are meant to be there."
      ],
      "tip": "Turn on Statistics in the Viewport Overlays menu to see how many vertices, faces and triangles your model has."
    },
    {
      "heading": "Simple tricks to fix bad meshes",
      "steps": [
        "Remove duplicate vertices: in Edit Mode select everything (A), then M ‣ By Distance.",
        "Fix inside-out faces: select everything and press Shift + N (Recalculate Outside). Turn on Face Orientation in the Overlays menu: blue is correct, red is flipped.",
        "Turn triangles into quads: select them and press Alt + J.",
        "Remove unneeded edges with X ‣ Dissolve Edges instead of deleting, so the faces stay closed.",
        "Find holes and broken geometry with Select ‣ Select All by Trait ‣ Non Manifold."
      ]
    },
    {
      "heading": "When in doubt, keep it simple",
      "steps": [
        "Start with as few faces as possible and add detail only when you need it.",
        "Use loop cuts (Ctrl + R) and Subdivision Surface instead of lots of hand-placed vertices.",
        "If a mesh becomes a mess, rebuilding that part cleanly is often faster than fixing it."
      ]
    },
    {
      "heading": "Don't let perfection hold you back",
      "steps": [
        "Triangles and n-gons are fine on flat surfaces that will not bend or be subdivided.",
        "Background props, static objects and game assets do not need perfect quad topology.",
        "Aim for clean topology where it matters: curved surfaces, things that move, and objects seen up close."
      ]
    }
  ]
};
