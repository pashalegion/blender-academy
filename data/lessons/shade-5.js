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
  ]
};
