// Lesson body for light-2. Loaded only by lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["light-2"] = {
  "overview": "Bad lighting ruins great models, while masterful lighting makes simple models look legendary. This lesson covers classic studio lighting principles: Key Light (primary subject illuminator), Fill Light (softens harsh shadows), and Rim/Back Light (separates the subject from the dark background with a crisp edge highlight).",
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
  ],
  "tutorial": [
    {
      "heading": "Positioning",
      "steps": [
        "Light direction shapes how the viewer reads a form. A light from the side shows texture and volume; a light from the front makes things flat.",
        "A classic start is a key light about 45 degrees to the side and a little above the subject."
      ]
    },
    {
      "heading": "Staging",
      "steps": [
        "Use light to lead the eye to what matters. The brightest area attracts attention first.",
        "Keep backgrounds a little darker so the subject stands out, and use a rim light from behind to separate it from the background."
      ]
    },
    {
      "heading": "Falloff",
      "steps": [
        "Light gets weaker with distance. A light close to the subject fades quickly across the scene; a far light is more even.",
        "Move lights closer or farther to control how fast the light fades, not only the power."
      ]
    },
    {
      "heading": "Size",
      "steps": [
        "The size of a light controls shadow softness. Big lights give soft shadows; small lights give sharp ones.",
        "Change Radius (point and spot lights) or Size (area lights) in Light Properties."
      ]
    },
    {
      "heading": "Color",
      "steps": [
        "Light color sets mood. Warm (orange) light feels cozy or sunny; cool (blue) light feels calm, cold or nighttime.",
        "Combining a warm key light with a cool fill light adds depth and contrast."
      ]
    },
    {
      "heading": "Polish",
      "steps": [
        "Add small fill lights to lift dark areas, but keep some shadow for shape.",
        "Check the overall balance in the render, adjust exposure in Color Management, and compare before and after."
      ],
      "tip": "Change one light at a time, and render to see the effect."
    }
  ]
};
