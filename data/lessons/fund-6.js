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
  ],
  "tutorial": [
    {
      "heading": "Get ready in Edit Mode",
      "steps": [
        "Select a mesh object, such as the default cube, and press Tab to enter Edit Mode.",
        "Press 1, 2 or 3 on the top row of the keyboard to switch between vertex, edge and face selection.",
        "All the tools in this lesson work on the selected parts of the mesh. Press Tab again to go back to Object Mode."
      ]
    },
    {
      "heading": "Extrude (E)",
      "steps": [
        "Select a face and press E. Move the mouse to pull out new geometry, then left-click to confirm.",
        "Extrude keeps the new part connected to the old one, so it is how you grow shapes: arms from a body, a chimney from a roof.",
        "Type a number to extrude by an exact distance, for example E, 0.5, Enter.",
        "You can also extrude edges and single vertices to build outlines point by point.",
        "Press Alt + E for more options, such as Extrude Faces Along Normals, which pushes each face out in its own direction."
      ],
      "tip": "If you press E and then cancel with right-click, the extruded copy stays behind. Press Ctrl + Z to remove it."
    },
    {
      "heading": "Inset (I)",
      "steps": [
        "Select one or more faces and press I. Move the mouse to create a smaller face inside each selected face.",
        "Left-click to confirm. You can then extrude the inner face in or out to make a panel, a window or a button.",
        "Press I twice quickly to inset each selected face separately instead of as one group."
      ]
    },
    {
      "heading": "Bevel (Ctrl + B)",
      "steps": [
        "Select edges and press Ctrl + B. Move the mouse to round off or cut off the hard edge.",
        "Scroll the mouse wheel while beveling to add segments. More segments give a smoother, rounder edge.",
        "Press Ctrl + Shift + B to bevel vertices (corners) instead of edges.",
        "Real objects rarely have perfectly sharp edges, so a small bevel makes models catch the light and look more realistic."
      ],
      "tip": "If the bevel looks uneven, the object probably has an unapplied scale. Go to Object Mode and use Object ‣ Apply ‣ Scale, then bevel again."
    },
    {
      "heading": "Loop Cut (Ctrl + R)",
      "steps": [
        "Press Ctrl + R and hover over an edge. A yellow line previews a loop that runs all the way around the mesh.",
        "Scroll the mouse wheel to add more cuts at once.",
        "Left-click to place the cut, then slide it along the mesh and left-click again. Right-click instead keeps it centered.",
        "Loop cuts add detail exactly where you need it and help keep edges sharp when you use Subdivision Surface."
      ]
    },
    {
      "heading": "Knife (K)",
      "steps": [
        "Press K to start the Knife tool. Click on the mesh to place cut points; each click adds a new segment.",
        "Press Enter or Space to confirm the cut, or Esc to cancel.",
        "Use the knife for cuts that do not follow a loop, such as a diagonal line or an opening of any shape."
      ]
    },
    {
      "heading": "Spin tool",
      "steps": [
        "The Spin tool is in the Toolbar (it may be grouped with Spin Duplicates; click and hold the icon to see both).",
        "It sweeps the selected geometry around the 3D cursor, like turning on a lathe.",
        "Place the 3D cursor where the center should be, select a profile (for example half the outline of a vase), then drag the spin handle.",
        "Use the Adjust Last Operation panel to set the number of steps and the angle (360 degrees for a full turn)."
      ]
    },
    {
      "heading": "Slide vertices and edges",
      "steps": [
        "Select an edge or vertex and press G twice quickly to slide it along the surrounding edges instead of moving it freely.",
        "Sliding keeps the shape of the surface while you change where an edge loop sits.",
        "It is a quick way to move a loop cut after you made it."
      ]
    },
    {
      "heading": "Rip (V)",
      "steps": [
        "Select a vertex or edge and press V to rip it: the mesh is split there and you can pull the two sides apart.",
        "Rip is useful for making openings or separating parts of a surface.",
        "Use it carefully, because it creates open edges that may need filling later (F fills a face between selected edges)."
      ]
    }
  ]
};
