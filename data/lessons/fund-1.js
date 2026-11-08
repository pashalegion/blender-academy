// Lesson body for fund-1. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["fund-1"] = {
  "overview": "Start with the first lesson in Grant Abbitt's separate Blender 5 beginner course. It introduces the interface, navigation, views, selecting and adding objects, and the first move, rotate, and scale operations. Use it as a short orientation before the focused modeling lessons and the separate donut project.",
  "summary": [
    "Learn the main Blender editors and how to navigate the interface.",
    "Orbit the viewport with MMB, inspect orthographic views, and understand perspective vs. orthographic views.",
    "Add and select objects, then practice moving, rotating, and scaling with G, R, and S.",
    "Try the end-of-lesson challenge by adding and positioning objects in the scene.",
    "Save your project with Ctrl + S as you practice."
  ],
  "troubleshooting": [
    {
      "problem": "I cannot orbit or pan the viewport comfortably.",
      "cause": "Viewport navigation depends on mouse input and can feel unfamiliar at first.",
      "solution": "Use MMB to orbit, Shift + MMB to pan, and the scroll wheel to zoom. Use the view controls or the Grave Accent view pie when you need a preset angle."
    },
    {
      "problem": "My object moves along the wrong direction.",
      "cause": "A transform is unconstrained or locked to a different axis than intended.",
      "solution": "Start the transform with G, R, or S, then press X, Y, or Z to constrain it. Type a number for a precise value, then confirm with Enter."
    },
    {
      "problem": "I get lost after changing editors or workspaces.",
      "cause": "Blender workspaces rearrange editor areas for different tasks.",
      "solution": "Use the workspace tabs across the top to return to Layout. You can change an editor type from its top-left editor selector."
    }
  ],
  "tutorial": [
    {
      "heading": "Download and open Blender",
      "steps": [
        "Download Blender for free from blender.org. Choose the version for your system (Windows, macOS or Linux).",
        "Install it, or unzip the portable version, and start it.",
        "Click anywhere outside the splash screen to close it. You now see the default scene: a cube, a camera and a light."
      ]
    },
    {
      "heading": "Get to know the interface",
      "steps": [
        "The big area in the middle is the 3D Viewport, where you see and edit your scene.",
        "Top right is the Outliner, a list of everything in the scene. Below it is the Properties editor, with tabs for render, object, modifier and material settings.",
        "At the bottom is the Timeline, used for animation.",
        "Across the top are the workspace tabs (Layout, Modeling, Sculpting, Shading and so on). Each one rearranges the editors for a task.",
        "Press T to show or hide the Toolbar on the left of the viewport, and N to show or hide the Sidebar on the right."
      ],
      "tip": "Hover over an area and press Ctrl + Space to make it fill the window. Press it again to go back."
    },
    {
      "heading": "Navigate the 3D Viewport",
      "steps": [
        "Hold the middle mouse button (MMB) and drag to orbit around the scene.",
        "Hold Shift + MMB and drag to pan.",
        "Scroll the mouse wheel to zoom in and out.",
        "You can also drag the gizmo icons in the top right of the viewport (the coloured axis ball, the hand and the magnifier) if you have no middle mouse button.",
        "Select an object and press Numpad . (period) to frame it in the view."
      ]
    },
    {
      "heading": "Perspective, orthographic and the camera",
      "steps": [
        "Perspective view shows depth, like a photo: far things look smaller.",
        "Orthographic view removes depth, so parallel lines stay parallel. It is useful for precise modeling.",
        "Press Numpad 5 to switch between perspective and orthographic.",
        "Press Numpad 0 to look through the active camera. This is what your final render shows."
      ]
    },
    {
      "heading": "Coordinates and the standard views",
      "steps": [
        "Blender uses three axes: X (red, left to right), Y (green, front to back) and Z (blue, up and down).",
        "Press Numpad 1 for the front view, Numpad 3 for the right view and Numpad 7 for the top view.",
        "Hold Ctrl with those keys to see the opposite side: back, left and bottom.",
        "Hold the ` (grave accent) key for a pie menu with all the views if you have no numpad."
      ]
    },
    {
      "heading": "Select and add objects",
      "steps": [
        "Left-click an object to select it. The last one selected is the active object and has a lighter outline.",
        "Shift + left-click adds or removes objects from the selection. A selects everything and Alt + A deselects everything.",
        "Press Shift + A to open the Add menu, then choose Mesh and a shape such as UV Sphere or Cylinder.",
        "New objects appear at the 3D cursor (the red and white circle). Shift + right-click moves the cursor.",
        "Right after adding, open the Adjust Last Operation panel in the bottom-left corner to change the size or detail of the new object.",
        "Press X and confirm, or press Delete, to remove selected objects."
      ]
    },
    {
      "heading": "Move objects with G",
      "steps": [
        "Select an object and press G (grab). Move the mouse, then left-click or press Enter to confirm.",
        "Right-click or press Esc to cancel the move.",
        "Type a number while moving to move by an exact distance, for example G, then 2, then Enter."
      ]
    },
    {
      "heading": "Lock movement to an axis",
      "steps": [
        "While moving, press X, Y or Z to lock the movement to that axis. A coloured line shows the axis.",
        "Press Shift + X, Shift + Y or Shift + Z to move on a plane and lock out that axis. For example, Shift + Z moves only across the floor.",
        "Combine it with a number: G, Z, 1, Enter moves the object up by exactly 1 meter."
      ]
    },
    {
      "heading": "Rotate with R and scale with S",
      "steps": [
        "Press R to rotate the selected object. Press X, Y or Z to rotate around that axis, and type a number of degrees, for example R, Z, 90, Enter.",
        "Press S to scale. Move the mouse away from the object to make it bigger and toward it to make it smaller.",
        "S, Z, 2, Enter makes the object twice as tall without changing its width.",
        "Press Alt + G, Alt + R or Alt + S to reset position, rotation or scale."
      ]
    },
    {
      "heading": "Use the Toolbar",
      "steps": [
        "The Toolbar on the left has Select, Cursor, Move, Rotate, Scale and Transform tools.",
        "With the Move, Rotate or Scale tool active, drag the coloured handles that appear on the object.",
        "Most people switch to keyboard shortcuts (G, R, S) once they are comfortable, because they are faster."
      ]
    },
    {
      "heading": "Challenge: build a small scene",
      "steps": [
        "Start a new file with File ‣ New ‣ General.",
        "Add at least three different objects with Shift + A.",
        "Move, rotate and scale them to build something simple, such as a table with a lamp or a little snowman.",
        "Look at your scene from the front, right and top views to check the positions.",
        "Save your work with Ctrl + S and give the file a clear name."
      ],
      "tip": "Save often. Blender does not save automatically into your file."
    }
  ]
};
