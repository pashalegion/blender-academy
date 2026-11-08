// Lesson body for post-5. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["post-5"] = {
  "overview": "Motion tracking studies your footage to work out how the real camera moved. Blender then builds a matching 3D camera, so anything you add looks fixed in the filmed scene. It runs in the Movie Clip Editor in three stages: 2D tracking, camera calibration, then solving.",
  "summary": [
    "Load your footage in the Movie Clip Editor, and use the Tracking mode.",
    "Use Detect Features to place markers, then track them through the shot.",
    "Remove markers that slide or drift, because they lower the quality of the solve.",
    "Enter real camera details when you know them, such as focal length.",
    "Solve the camera, then use Setup Tracking Scene to build the 3D scene."
  ],
  "troubleshooting": [
    {
      "problem": "The solve error is high, or the 3D object slides.",
      "cause": "Bad markers, or too few of them, are confusing the solver.",
      "solution": "Delete the tracks with the worst error, add more stable ones, and solve again."
    },
    {
      "problem": "Markers lose track partway through the shot.",
      "cause": "Motion blur or low contrast makes features hard to follow.",
      "solution": "Try better features or a larger search area, and shoot with a faster shutter when you can."
    },
    {
      "problem": "The solved camera looks tilted or the wrong size.",
      "cause": "The solve has no idea which way is up or how big the scene is.",
      "solution": "Set the floor, origin and scale in the orientation tools."
    }
  ],
  "tutorial": [
    {
      "heading": "Prepare the footage",
      "steps": [
        "Use footage with enough detail to track (corners, marks, texture) and not too much motion blur.",
        "Open a new file and switch to the Motion Tracking workspace (File ‣ New ‣ VFX ‣ Motion Tracking)."
      ]
    },
    {
      "heading": "Load the clip and settings",
      "steps": [
        "Click Open in the Movie Clip Editor and choose your video.",
        "Click Set Scene Frames so the scene matches the clip length.",
        "Prefetch the frames (P) so playback and tracking are fast."
      ]
    },
    {
      "heading": "Place tracking markers",
      "steps": [
        "Click Detect Features to place markers automatically, or Ctrl + click to place them yourself on clear points.",
        "Spread markers across the whole image, in the foreground and background. You need at least 8 that last a long time."
      ]
    },
    {
      "heading": "Track the markers",
      "steps": [
        "Track forward through the clip (Ctrl + T, or the track buttons in the Track panel).",
        "Watch for markers that slide off their point. Delete or fix those, and add new markers where tracks end."
      ]
    },
    {
      "heading": "Solve the camera",
      "steps": [
        "In the Solve panel, choose keyframes with lots of camera movement and click Solve Camera Motion.",
        "Check the solve error in the header. Lower is better; under about 0.3 is very good.",
        "If it is high, remove the worst tracks (Clean Up) and solve again."
      ]
    },
    {
      "heading": "Set up the 3D scene",
      "steps": [
        "Click Setup Tracking Scene. Blender creates a camera that matches the real one, and a background with the footage.",
        "Select three markers on the floor and click Floor to set the ground. Use Set Origin and Set Scale for position and size."
      ]
    },
    {
      "heading": "Add 3D objects",
      "steps": [
        "Add your 3D object where it should stand in the scene.",
        "Add a plane under it as a Shadow Catcher (Object Properties ‣ Visibility) so its shadow appears on the real floor.",
        "Render with Cycles and compare with the original footage."
      ]
    }
  ]
};
