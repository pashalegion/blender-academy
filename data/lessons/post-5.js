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
  ]
};
