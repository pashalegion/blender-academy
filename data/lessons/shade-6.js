// Lesson body for shade-6. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["shade-6"] = {
  "overview": "Unwrapping is only half the job. A good UV layout uses as much of the texture as possible and gives every part of a model a similar level of detail. That consistency is called texel density, and it's why some game assets look crisp while others look blurry next to them.",
  "summary": [
    "Texel density is how many texture pixels cover a given area of the model.",
    "Bigger textures raise texel density. Bigger objects with the same texture lower it.",
    "Keep density consistent across objects that appear side by side.",
    "Pack Islands arranges islands to fill the texture, and Margin leaves space between them.",
    "Give extra UV space only to areas that players or viewers will see up close."
  ],
  "troubleshooting": [
    {
      "problem": "One part of my model looks much blurrier than another.",
      "cause": "Its UV islands are small compared with the rest.",
      "solution": "Use Average Islands Scale so the islands match, then pack again."
    },
    {
      "problem": "Colors bleed between parts at the edges.",
      "cause": "Islands sit too close together in the texture.",
      "solution": "Raise Margin when you run Pack Islands."
    },
    {
      "problem": "My UV layout wastes a lot of empty space.",
      "cause": "Islands are unrotated, unevenly scaled, or still in their unwrapped positions.",
      "solution": "Run Pack Islands with rotation enabled, and straighten long islands first."
    }
  ],
  "tutorial": [
    {
      "heading": "What texel density is",
      "steps": [
        "A texel is one pixel of a texture on a 3D surface. Texel density is how many texture pixels cover a given area, for example pixels per meter.",
        "High density looks sharp; low density looks blurry or pixelated."
      ]
    },
    {
      "heading": "Texture resolution",
      "steps": [
        "A bigger texture (for example 2048 instead of 1024 pixels) on the same object doubles the texel density in each direction.",
        "Bigger textures cost more memory, so use them only where needed."
      ]
    },
    {
      "heading": "Object size",
      "steps": [
        "The same texture stretched over a bigger object gives lower density.",
        "That is why a big wall with the same texture as a small crate looks blurrier."
      ]
    },
    {
      "heading": "The main factors",
      "steps": [
        "Texture resolution, object size, the size of UV islands in the UV map, and how well the islands fill the texture space.",
        "Change any of these and the density changes."
      ]
    },
    {
      "heading": "Pick a target density",
      "steps": [
        "Choose one density for the whole scene, based on how close the camera gets.",
        "Objects seen up close (a weapon in first person) need more; distant buildings need less."
      ]
    },
    {
      "heading": "Put it into practice",
      "steps": [
        "Unwrap your objects, then make island sizes match their real size with UV ‣ Average Islands Scale.",
        "Use UV ‣ Pack Islands to fill the texture, and set a Margin so islands do not bleed into each other.",
        "Check with a UV Grid or checker texture: squares should be about the same size on every object."
      ]
    },
    {
      "heading": "Keep it consistent",
      "steps": [
        "When objects sit next to each other, keep their density similar so none looks blurry beside the others.",
        "Only break the rule on purpose, for example extra detail on a hero object."
      ]
    },
    {
      "heading": "Island size and packing",
      "steps": [
        "Larger islands get more pixels. Scale up the parts the player looks at most, such as the front of a model.",
        "Tight, efficient packing means less wasted texture space and sharper results."
      ]
    }
  ]
};
