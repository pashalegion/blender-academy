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
  ]
};
