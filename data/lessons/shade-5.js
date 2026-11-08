// Lesson body for shade-5. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["shade-5"] = {
  "overview": "Baking saves information into an image texture. The classic use is transferring the fine detail of a heavy high-poly model into a normal map on a light low-poly model, which is how game assets look detailed and still run fast. It also lets you turn procedural materials into textures for other apps.",
  "summary": [
    "Baking runs through Cycles, under Render ‣ Bake, and it uses your render settings.",
    "The low-poly mesh needs a UV map, plus a material with an image to bake to.",
    "The active Image Texture node is the bake target, even if it isn't connected to anything.",
    "Selected to Active bakes from the selected object onto the active one, so select the high-poly mesh first and the low-poly mesh last.",
    "Set a baked normal map's image node to Non-Color and connect it through a Normal Map node."
  ],
  "troubleshooting": [
    {
      "problem": "The bake finished, but the image is empty or wrong.",
      "cause": "The active Image Texture node was not the one you meant to bake to, or nothing was selected in the shader.",
      "solution": "Click the correct Image Texture node so it's active, then bake again."
    },
    {
      "problem": "My normal map has black patches or missing areas.",
      "cause": "Rays from the low-poly mesh aren't reaching the high-poly surface.",
      "solution": "Line the two meshes up, then raise Extrusion or Max Ray Distance in Selected to Active. For more control, use a Cage object."
    },
    {
      "problem": "The bake looks fine in the image, but the model shades badly.",
      "cause": "The normal map image is probably being read as color.",
      "solution": "Set its Color Space to Non-Color and connect it through a Normal Map node."
    }
  ],
  "tutorial": [
    {
      "heading": "What baking does",
      "steps": [
        "Baking saves surface information into an image. A common use is baking the detail of a high-poly model onto a normal map for a low-poly model.",
        "The low-poly model then looks detailed but stays light, which is ideal for games."
      ]
    },
    {
      "heading": "UV unwrap the low-poly model",
      "steps": [
        "Select the low-poly model, enter Edit Mode and unwrap it (U ‣ Smart UV Project works well for this).",
        "Islands must not overlap, or the baked image will be wrong."
      ]
    },
    {
      "heading": "Overlap the two objects",
      "steps": [
        "Place the high-poly and low-poly models in exactly the same spot, so the low-poly mesh sits on the surface of the high-poly one."
      ]
    },
    {
      "heading": "Add a texture to bake into",
      "steps": [
        "Give the low-poly model a material. In the Shader Editor, add an Image Texture node and click New to create an image (for example 2048 × 2048).",
        "Set the image to Non-Color for a normal map. Keep this node selected: the active Image Texture node is the bake target."
      ]
    },
    {
      "heading": "Bake settings",
      "steps": [
        "Set the render engine to Cycles; baking only works there.",
        "In Render Properties ‣ Bake, set Bake Type to Normal and turn on Selected to Active.",
        "Select the high-poly model first, then Shift-select the low-poly model so it is active.",
        "Raise Extrusion a little so the rays reach the high-poly surface, then click Bake."
      ]
    },
    {
      "heading": "Check the normal map",
      "steps": [
        "When the bake finishes, the bluish normal map appears in the Image Editor.",
        "Save it right away with Image ‣ Save As."
      ]
    },
    {
      "heading": "Use the normal map",
      "steps": [
        "Connect the Image Texture's Color to a Normal Map node, and the Normal Map node to the Principled BSDF's Normal input.",
        "Hide the high-poly model. The low-poly model now shows the fine details."
      ]
    }
  ]
};
