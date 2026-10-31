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
  ]
};
