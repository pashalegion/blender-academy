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
  ],
  "tutorial": [
    {
      "heading": "What the compositor does",
      "steps": [
        "The Compositor edits your render after it's made: color, glow, blur and combining images, without rendering again."
      ]
    },
    {
      "heading": "Create a compositing node tree",
      "steps": [
        "Open the Compositing workspace tab, or switch an area to the Compositor.",
        "Click New in the header. Blender creates a basic node tree with Render Layers and Group Output.",
        "Check that Compositing is turned on in Output Properties ‣ Post Processing."
      ]
    },
    {
      "heading": "Render Layers and output",
      "steps": [
        "Render Layers brings in your rendered image. Render once with F12 so it has an image.",
        "Group Output defines the final image. Everything you want in the result must connect to it.",
        "Add a Viewer node to preview the result in the editor background or the Image Editor."
      ]
    },
    {
      "heading": "Add glow with Glare",
      "steps": [
        "Add a Glare node between Render Layers and Group Output.",
        "Choose a glare type, such as Bloom or Fog Glow, and lower the threshold to make more areas glow.",
        "Glare is great for lights, screens and hot metal."
      ]
    },
    {
      "heading": "Color correction",
      "steps": [
        "Add a Color Balance or Brightness/Contrast node to adjust the look.",
        "Warm up the highlights or cool the shadows to set the mood."
      ]
    },
    {
      "heading": "More effects",
      "steps": [
        "Lens Distortion adds slight chromatic edges like a real lens.",
        "Mix nodes combine images, and Blur nodes soften parts of the image."
      ]
    },
    {
      "heading": "Save the result",
      "steps": [
        "Render again with F12; the compositor result appears in the render window.",
        "Save it with Image ‣ Save As."
      ],
      "tip": "Older tutorials mention a Use Nodes checkbox. In Blender 5, you create the node tree with the New button instead."
    }
  ]
};
