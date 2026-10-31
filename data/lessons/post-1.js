// Lesson body for post-1. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["post-1"] = {
  "overview": "The Compositor is where a render gets its final polish. Using nodes, you can adjust color, add glow and combine images without rendering the scene again. Blender 5 changed how this is set up, so older tutorials may show steps that no longer apply.",
  "summary": [
    "Open the Compositor and press New in the header to create a node tree.",
    "Render Layers brings your render into the node graph.",
    "The Group Output node defines the final image that goes to the renderer.",
    "Check that the Compositing option is on under Output properties ‣ Post Processing.",
    "The Glare node adds bloom and fog glow to bright areas, and color nodes such as Color Balance grade the image."
  ],
  "troubleshooting": [
    {
      "problem": "My compositor changes don't appear in the final render.",
      "cause": "The render isn't using the node tree, or the result isn't reaching the output.",
      "solution": "Enable Compositing under Output properties ‣ Post Processing, and connect your last node to Group Output."
    },
    {
      "problem": "An older tutorial tells me to tick Use Nodes, but I can't find it.",
      "cause": "Blender 5 creates the compositor node tree with the New button.",
      "solution": "Press New in the Compositor header, then continue with the tutorial's nodes."
    },
    {
      "problem": "The Render Layers node has no image.",
      "cause": "Nothing has been rendered yet.",
      "solution": "Press the re-render button on the Render Layers node or press F12 once."
    }
  ]
};
