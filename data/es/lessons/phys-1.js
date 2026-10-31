// Cuerpo de la lección phys-1. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["phys-1"] = {
  "overview": "Las simulaciones físicas hacen que las colisiones complejas sean muy sencillas. En esta lección prepararás dinámicas Rigid Body activas y pasivas, crearás una reacción en cadena de fichas de dominó y una bola de demolición contra un muro de ladrillos, configurarás las formas de colisión (Convex Hull o Mesh) y hornearás la simulación.",
  "summary": [
    "En Physics Properties: los objetos 'Active' reciben gravedad y fuerzas; los 'Passive' actúan como suelo u obstáculos inmóviles.",
    "Forma de colisión: 'Convex Hull' es rápida para objetos sólidos; 'Mesh' es necesaria para cuencos, tazas y formas huecas.",
    "Hornear: ve a Scene Properties -> Rigid Body World -> Cache -> haz clic en 'Bake' para que la simulación se reproduzca de forma fiable.",
    "Fricción y rebote: ajusta la resistencia de la superficie y el rebote en los ajustes de física.",
    "<span class=\"unverified\" title=\"El estado de este complemento en Blender 5.2 no está confirmado\">Complemento Cell Fracture: rompe un objeto 3D en muchos fragmentos.</span>"
  ],
  "troubleshooting": [
    {
      "problem": "¡Los objetos atraviesan el suelo y caen al infinito!",
      "cause": "El suelo está en 'Active' en lugar de 'Passive', o la escala no está aplicada.",
      "solution": "Selecciona el suelo -> en Physics Properties, pon Type en 'Passive'. Pulsa Ctrl + A -> 'Apply Scale' tanto en el suelo como en los objetos que caen."
    },
    {
      "problem": "¡Los ladrillos tiemblan y explotan antes de que nada los toque!",
      "cause": "Las formas de colisión se solapan en el fotograma 1, o el margen de colisión es demasiado grueso.",
      "solution": "Reduce 'Collision Margin' a 0,001 m. En Scene Properties -> Rigid Body World, sube 'Substeps Per Frame' de 10 a 30."
    },
    {
      "problem": "Un objeto rebota en un techo invisible en lugar de caer dentro de un cuenco.",
      "cause": "La forma de colisión del cuenco es 'Convex Hull', que cubre las aberturas huecas.",
      "solution": "Cambia Collision Shape de 'Convex Hull' a 'Mesh' en los ajustes de Rigid Body del cuenco."
    }
  ]
};
