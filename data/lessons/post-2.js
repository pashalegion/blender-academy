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
  ],
  "tutorial": [
    {
      "heading": "The interface",
      "steps": [
        "Use File ‣ New ‣ Video Editing. The Sequencer shows a timeline of channels, with a preview above it.",
        "Each piece of media becomes a strip on a channel."
      ]
    },
    {
      "heading": "Add videos",
      "steps": [
        "Use Add ‣ Movie (or drag a video file in). The video and its sound arrive as separate strips.",
        "Images, sounds, color and text can be added from the same Add menu."
      ]
    },
    {
      "heading": "Frame rate and resolution",
      "steps": [
        "Match the project to your footage: set frame rate and resolution in Output Properties.",
        "Blender may ask to match the scene to the video when you add it; accept it."
      ]
    },
    {
      "heading": "Navigate and select",
      "steps": [
        "Scroll to zoom, Ctrl + scroll to move left and right, and press Home to see everything.",
        "Click a strip to select it; drag to box select; Shift + click adds to the selection."
      ]
    },
    {
      "heading": "Channels",
      "steps": [
        "Channels are rows. Strips on higher channels appear on top of lower ones.",
        "Use channels like layers: video on one, titles above it, music below."
      ]
    },
    {
      "heading": "Move, trim, cut and delete",
      "steps": [
        "Drag a strip to move it. Drag its edges to trim the start or end.",
        "Place the playhead and press K to cut selected strips there.",
        "Select a piece and press X or Delete to remove it."
      ]
    },
    {
      "heading": "Transform and crop",
      "steps": [
        "Select a video strip and use the Sidebar (N) ‣ Strip panel to move, scale, rotate or crop it."
      ]
    },
    {
      "heading": "Audio",
      "steps": [
        "Change Volume in the sound strip settings. You can keyframe the volume for fades."
      ]
    },
    {
      "heading": "Color and text strips",
      "steps": [
        "Add ‣ Color creates a plain background. Add ‣ Text creates a title.",
        "Edit the text, font size and position in the Sidebar."
      ]
    },
    {
      "heading": "Fades",
      "steps": [
        "Use Add ‣ Fades to fade the selected video in and out.",
        "For audio, keyframe the Volume from 0 to 1 at the start and back at the end."
      ]
    },
    {
      "heading": "Set the end and export",
      "steps": [
        "Set the End frame of the scene to the last frame of your edit.",
        "In Output Properties, choose FFmpeg Video with an MP4 container and H.264 codec, and set the output folder.",
        "Use Render ‣ Render Animation (Ctrl + F12) to export."
      ]
    }
  ]
};
