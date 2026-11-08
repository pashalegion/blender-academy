// Lesson body for fund-4. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["fund-4"] = {
  "overview": "Modifiers are non-destructive procedural powerhouses in Blender. They alter geometry without permanently changing your underlying base vertices until you choose to apply them. This lesson breaks down the three most universally used modifiers: Subdivision Surface (for smooth curves), Mirror (for symmetrical modeling), and Solidify (for thickness).",
  "summary": [
    "Add modifiers via the Wrench icon in the Properties panel on the right.",
    "Subdivision Surface shortcut: Ctrl + 1, Ctrl + 2, or Ctrl + 3 to instantly add 1, 2, or 3 viewport subdivision levels.",
    "The order of modifiers in the stack matters drastically! They execute from top to bottom.",
    "Mirror Modifier: Always ensure 'Clipping' is checked so center vertices weld together and don't cross the seam.",
    "Support Edge Loops: Press Ctrl + R in Edit Mode to slide tight edge loops near corners to sharpen subdivided curves."
  ],
  "troubleshooting": [
    {
      "problem": "My mesh has strange dark shadows, pinched lines, and black patches after adding Subdivision!",
      "cause": "Inverted Face Normals! Blender thinks some faces are pointing inside-out.",
      "solution": "Go into Edit Mode -> Select all with 'A' -> Press Shift + N ('Recalculate Normals Outside'). To verify, enable 'Face Orientation' in the Viewport Overlays dropdown (Blue = Good, Red = Inverted)."
    },
    {
      "problem": "The Mirror modifier leaves an ugly gap or hole down the middle of my model.",
      "cause": "Clipping is disabled, or the mesh origin is not aligned with the center symmetry axis.",
      "solution": "Check the 'Clipping' checkbox in the Mirror modifier settings. In Edit Mode, select the center vertices and press G then X towards the center until they snap together."
    },
    {
      "problem": "I have double vertices stacked on top of each other causing weird shading.",
      "cause": "Extruding (E) and right-clicking cancels the movement, but DOES NOT delete the extruded vertices!",
      "solution": "In Edit Mode, press 'A' to select everything, then press 'M' -> 'By Distance'. Check the bottom info bar to see how many duplicate vertices were removed."
    }
  ],
  "tutorial": [
    {
      "heading": "What modifiers are",
      "steps": [
        "Modifiers change an object automatically without destroying the original mesh.",
        "Select an object and open the wrench tab (Modifier Properties) in the Properties editor. Click Add Modifier to see them, grouped as Edit, Generate, Deform and so on.",
        "You can switch each modifier on and off, change its settings at any time, or delete it. Your base mesh stays the same until you apply it."
      ]
    },
    {
      "heading": "Mirror modifier",
      "steps": [
        "Model only one half of a symmetrical object, for example the right half of a face or a car.",
        "Add Generate ‣ Mirror. The other half appears as a mirror image across the object's origin.",
        "Pick the mirror axis (X, Y or Z). Bisect cuts away anything that crosses to the other side.",
        "Turn on Clipping so vertices on the center line cannot cross it and stay welded together.",
        "Use Mirror Object to mirror across another object (for example an empty) instead of the object's own origin."
      ]
    },
    {
      "heading": "Common modifier options and applying",
      "steps": [
        "The icons in each modifier's header show it in Edit Mode, in the viewport and in the render. Turn them off to compare.",
        "Drag the handle on the right to reorder modifiers. The stack runs from top to bottom.",
        "To make a modifier permanent, open its dropdown arrow and choose Apply (or hover over it and press Ctrl + A). The result becomes real geometry."
      ],
      "tip": "Only apply when you are sure. Keeping modifiers live lets you change your mind later."
    },
    {
      "heading": "Subdivision Surface",
      "steps": [
        "Add Generate ‣ Subdivision Surface to smooth a low-poly shape into a rounder one.",
        "Set Levels Viewport for the view and Render for the final image. Higher numbers are smoother but heavier.",
        "Ctrl + 1, Ctrl + 2 and Ctrl + 3 in Object Mode add it with that many levels.",
        "Add edge loops close to an edge (Ctrl + R) to keep it sharper after subdivision."
      ]
    },
    {
      "heading": "Bevel modifier",
      "steps": [
        "Add Generate ‣ Bevel to round edges without editing the mesh.",
        "Amount sets the size and Segments sets the smoothness.",
        "Set Limit Method to Angle so only sharp edges get beveled."
      ]
    },
    {
      "heading": "Array modifier",
      "steps": [
        "Add Generate ‣ Array to repeat the object in a row, like steps, fence posts or chain links.",
        "Count sets how many copies. Relative Offset sets the spacing compared with the object's size.",
        "Turn on Merge to weld copies that touch, so they act as one mesh.",
        "Combine several Array modifiers to make grids."
      ]
    },
    {
      "heading": "Skin modifier",
      "steps": [
        "The Skin modifier turns a skeleton of vertices and edges into a thick, blocky mesh.",
        "Start with a single vertex, add Generate ‣ Skin, then extrude vertices (E) in Edit Mode to grow limbs.",
        "Press Ctrl + A in Edit Mode to scale the skin thickness at the selected vertices.",
        "Add a Subdivision Surface after it for a smooth, quick creature base."
      ]
    },
    {
      "heading": "Boolean modifier",
      "steps": [
        "Booleans combine two objects. Add Generate ‣ Boolean to the main object and choose the other object as the Object.",
        "Difference cuts the second object out, Union joins them, and Intersect keeps only the overlap.",
        "Hide the cutter object (H, or the eye icon in the Outliner) so you see the result.",
        "The Exact solver is accurate; Fast is quicker but can fail on tricky shapes."
      ]
    },
    {
      "heading": "Wireframe, Solidify and Shrinkwrap",
      "steps": [
        "Wireframe turns every edge into a thin beam, for lattice-like or stylized looks. Thickness sets the beam size.",
        "Solidify gives a flat surface real thickness, like turning a plane into a board. Turn on Even Thickness for a uniform wall.",
        "Shrinkwrap pulls an object onto the surface of a target object. It is useful for clothes, decals and retopology."
      ]
    },
    {
      "heading": "Lattice modifier",
      "steps": [
        "A Lattice is a simple cage you use to bend another object.",
        "Add a lattice with Shift + A ‣ Lattice and scale it to surround your object.",
        "On your object add Deform ‣ Lattice and pick the lattice as the Object.",
        "Select the lattice, press Tab, and move its points. The object bends to follow."
      ]
    },
    {
      "heading": "Apply scale, and stack order",
      "steps": [
        "Many modifiers (Bevel, Solidify, Array) use the object's scale. If you scaled the object in Object Mode, results can look stretched.",
        "Fix it with Object ‣ Apply ‣ Scale (or Ctrl + A ‣ Scale) before adjusting the modifier.",
        "Order matters: Mirror before Subdivision Surface gives a clean, smooth center; Boolean before Bevel bevels the cut edges.",
        "If the result looks wrong, try dragging the modifiers into a different order."
      ]
    }
  ]
};
