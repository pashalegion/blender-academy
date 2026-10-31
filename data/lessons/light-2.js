// Lesson body for light-2. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["light-2"] = {
  "overview": "Bad lighting ruins great models, while masterful lighting makes simple models look legendary. Gleb Alexandrov demonstrates classic studio lighting principles: Key Light (primary subject illuminator), Fill Light (softens harsh shadows), and Rim/Back Light (separates the subject from the dark background with a crisp edge highlight).",
  "summary": [
    "Key Light: Placed ~45 degrees to the side and slightly above the subject; strongest light in the scene.",
    "Fill Light: Placed opposite the Key Light with ~20-50% power and a larger radius to create soft, diffused shadows.",
    "Rim Light (Kicker): Placed behind the subject pointing towards the camera edge to outline the silhouette.",
    "Light Radius / Size: Larger lights produce soft, flattering shadows; tiny point lights produce razor-sharp hard shadows.",
    "Color Temperature: Pair warm key lights (e.g. 3500K-4500K orange) with cool fill lights (6500K-8000K cyan) for color contrast."
  ],
  "troubleshooting": [
    {
      "problem": "I increased light power from 10W to 100W but it still looks completely dark!",
      "cause": "In Blender's real-world unit system, a standard room requires 1,000 to 10,000 Watts or your object is gigantic in scale.",
      "solution": "Increase power to 500W - 2500W, or check your object dimensions in the 'N' panel to make sure it isn't 50 meters wide!"
    },
    {
      "problem": "My lights cast ugly harsh blocky shadows.",
      "cause": "The light 'Radius' or 'Size' in light properties is set to 0.0m.",
      "solution": "Select the light -> Light Properties (green lightbulb icon) -> Increase 'Radius' or 'Size' to 0.5m - 2.0m for soft diffused shadows."
    },
    {
      "problem": "Light is shining right through solid walls and geometry.",
      "cause": "Contact Shadows not enabled in Eevee, or thin single-sided geometry without thickness.",
      "solution": "Add a Solidify modifier to the wall geometry, and in Eevee Light settings, check 'Contact Shadows'."
    }
  ]
};
