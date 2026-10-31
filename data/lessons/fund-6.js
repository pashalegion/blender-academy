// Lesson body for fund-6. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["fund-6"] = {
  "overview": "Almost every model starts with four tools. Extrude pulls new geometry out of a surface, Inset creates a smaller face inside a face, Bevel rounds off hard edges, and Loop Cut adds a ring of edges so you have more to work with. Learn these in Edit Mode and you can build most simple objects.",
  "summary": [
    "Press Tab to switch between Object Mode and Edit Mode. These tools work on a mesh in Edit Mode.",
    "E extrudes the selection. Extrusion duplicates vertices and keeps the new geometry connected to the original.",
    "I insets the selected faces, which is a clean way to start a panel, window or button.",
    "Ctrl + B bevels the selected edges. Scroll the mouse wheel during the bevel to change the number of segments.",
    "Ctrl + R adds a loop cut. Hover over an edge to preview the loop, click to confirm it, then slide it into place."
  ],
  "troubleshooting": [
    {
      "problem": "My extrude did nothing, but the mesh now shades strangely.",
      "cause": "Pressing E and then cancelling with right-click stops the movement, but the extruded geometry stays behind on top of the original.",
      "solution": "Press Ctrl + Z straight away to undo it. If you find this later, select everything in Edit Mode and use Merge by Distance to remove the doubled vertices."
    },
    {
      "problem": "My bevel looks stretched or uneven.",
      "cause": "The object has an unapplied scale, so Blender measures the bevel on a stretched mesh.",
      "solution": "In Object Mode, use Object ‣ Apply ‣ Scale, then bevel again."
    },
    {
      "problem": "Loop Cut only shows a preview on part of the mesh, or none at all.",
      "cause": "Loop cuts follow rows of quads, so triangles and n-gons stop the loop.",
      "solution": "Clean up the faces around that area so the row is made of quads, or use the Knife tool for a one-off cut."
    }
  ]
};
