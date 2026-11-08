// Lesson body for light-4. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["light-4"] = {
  "overview": "A good render depends on where you put the camera as much as on the model. This lesson covers moving and aiming the camera, how focal length changes the feel of a shot, and how depth of field blurs the background to draw the viewer's eye.",
  "summary": [
    "Numpad 0 shows the view through the active camera.",
    "Use View ‣ Align View ‣ Align Active Camera to View to snap the camera to what you're looking at.",
    "Turn on Lock Camera to View in the sidebar to fly the camera with normal viewport navigation.",
    "Longer focal lengths zoom in and flatten perspective. Shorter ones show more of the scene and exaggerate it.",
    "Enable Depth of Field in the camera properties, pick a Focus Object, then lower the F-Stop for stronger blur."
  ],
  "troubleshooting": [
    {
      "problem": "My whole image is blurry after I enabled Depth of Field.",
      "cause": "The focus point isn't on your subject.",
      "solution": "Set Focus Object to the subject so focus follows it automatically."
    },
    {
      "problem": "Depth of Field is enabled, but I can't see any blur.",
      "cause": "The F-Stop is too high for this scene, or the scene scale is unusual.",
      "solution": "Lower the F-Stop, and check that the scene uses a sensible real-world scale."
    },
    {
      "problem": "Objects vanish when they are close to or far from the camera.",
      "cause": "They are outside the camera's Clip Start and Clip End range.",
      "solution": "Adjust Clip Start and Clip End in the camera's Lens settings."
    }
  ],
  "tutorial": [
    {
      "heading": "Look through the camera",
      "steps": [
        "Press Numpad 0 to see through the active camera. This is what the render shows.",
        "If there is no camera, add one with Shift + A ‣ Camera."
      ]
    },
    {
      "heading": "Move the camera",
      "steps": [
        "Select the camera and move and rotate it like any object (G, R).",
        "Easier: frame the view you like, then use View ‣ Align View ‣ Align Active Camera to View.",
        "Or open the Sidebar (N) ‣ View tab and turn on Lock Camera to View, then navigate normally; the camera follows."
      ]
    },
    {
      "heading": "Focal length",
      "steps": [
        "In Camera Properties ‣ Lens, Focal Length sets the zoom. 50 mm looks natural, 24 mm is wide, 85–135 mm is a tight, flattering portrait lens.",
        "Short focal lengths exaggerate perspective; long ones flatten it."
      ]
    },
    {
      "heading": "Clipping",
      "steps": [
        "Clip Start and Clip End set the closest and farthest distances the camera sees.",
        "If objects disappear, adjust these values."
      ]
    },
    {
      "heading": "Depth of field",
      "steps": [
        "Turn on Depth of Field in Camera Properties.",
        "Set Focus Object to your subject so it stays sharp.",
        "Lower F-Stop for more background blur (for example 1.8); raise it for more of the scene in focus."
      ]
    },
    {
      "heading": "Composition",
      "steps": [
        "Use the camera's overlays (Camera Properties ‣ Viewport Display ‣ Composition Guides) to show thirds or other guides.",
        "Place the subject on a third line, leave space in the direction it faces, and avoid cutting objects at awkward points."
      ],
      "tip": "Set the output resolution in Output Properties before framing, because it changes the camera's frame shape."
    }
  ]
};
