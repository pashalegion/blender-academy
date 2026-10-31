// Lesson body for post-2. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["post-2"] = {
  "overview": "Blender includes a full video editor called the Video Sequencer. You arrange clips, sound, images and text as strips on a timeline, so you can cut your animation together and export it without a separate app.",
  "summary": [
    "File ‣ New ‣ Video Editing opens a layout made for editing.",
    "Add clips as strips. Match the scene's frame rate and resolution to your footage.",
    "Strips sit in channels, and higher channels appear on top of lower ones.",
    "Press K at the playhead to split the selected strips, then delete what you don't need.",
    "Set the End Frame to the end of your edit, then use Render Animation to export."
  ],
  "troubleshooting": [
    {
      "problem": "Video and audio drift out of sync.",
      "cause": "The scene frame rate doesn't match the footage.",
      "solution": "Set the scene frame rate to match the clip before you start cutting."
    },
    {
      "problem": "My export ends too early, or has black frames at the end.",
      "cause": "The scene End Frame doesn't match the end of the edit.",
      "solution": "Set End Frame to the last frame of your final strip."
    },
    {
      "problem": "My export shows the 3D scene and not the edit.",
      "cause": "The render isn't using the sequencer.",
      "solution": "Enable Sequencer under Output properties ‣ Post Processing."
    }
  ]
};
