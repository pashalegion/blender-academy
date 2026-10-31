// Lesson body for hard-3. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["hard-3"] = {
  "overview": "Learn how to model with exact millimeter-accurate architectural dimensions. You will configure Blender's scene units (Metric/Imperial), master vertex and edge snapping with target alignment, use the Measure tool, and build modular walls, doors, and window frames suitable for architectural visualization (ArchViz) and level design.",
  "summary": [
    "Set Scene Units in Scene Properties -> Units (Metric, Millimeters/Meters or Imperial/Feet).",
    "Hold Ctrl while transforming to snap to grid increments automatically.",
    "Snapping menu (Shift + Tab): Toggle between Vertex, Edge, Face, and Incremental snapping.",
    "Set Snap Target to 'Closest' or 'Center' depending on whether you want corners to weld.",
    "Use the 3D Cursor (Shift + Right Click) as a temporary pivot point for precision rotational alignment."
  ],
  "troubleshooting": [
    {
      "problem": "My object snaps violently across the scene when moving.",
      "cause": "Snapping is set to 'Face Nearest' with 'Project Individual Elements' or snap distance is misconfigured.",
      "solution": "Set Snap Target to 'Vertex' and Snap With to 'Active' or 'Closest'. Turn off 'Align Rotation to Target' unless aligning normal vectors."
    },
    {
      "problem": "Measurements on screen don't match the dimensions in the Transform sidebar.",
      "cause": "Object scale is unapplied, so mesh dimensions are being multiplied by scale factors.",
      "solution": "Press Ctrl + A in Object Mode and select 'Apply Scale'."
    },
    {
      "problem": "The grid disappears when zooming in close.",
      "cause": "Viewport clip settings or grid subdivisions scaling limits.",
      "solution": "Open Overlays dropdown in top right -> check Grid and adjust Subdivisions to 10."
    }
  ]
};
