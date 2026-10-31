// Cuerpo de la lección shade-1. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["shade-1"] = {
  "overview": "PBR (Physically Based Rendering) es la forma en que los videojuegos y películas actuales simulan el comportamiento real de la luz. En esta lección dominarás el shader Principled BSDF en el Shader Editor de Blender. Aprenderás cómo Base Color, Roughness, Metallic, IOR (índice de refracción), Transmission (vidrio) y los mapas de normales trabajan juntos para crear cualquier superficie.",
  "summary": [
    "Cambia a la pestaña de workspace 'Shading', arriba, para acceder al Shader Editor y a la vista previa 3D.",
    "Metallic casi siempre es binario en el mundo real: 0,0 (madera, plástico, piel) o 1,0 (metales puros como cromo, oro o hierro).",
    "Roughness controla la microsuperficie: 0,0 es un reflejo de espejo y 1,0 es mate como la tiza.",
    "Transmission a 1,0 crea vidrio, diamantes y líquidos transparentes (el vidrio necesita un IOR de unos 1,45).",
    "Usa siempre el complemento 'Node Wrangler' (Ctrl + Shift + T sobre Principled BSDF conecta automáticamente texturas PBR completas)."
  ],
  "troubleshooting": [
    {
      "problem": "¡Mi mapa de normales deja la malla negra, invertida o con facetas!",
      "cause": "El Color Space del nodo Image Texture está en 'sRGB' en lugar de 'Non-Color'.",
      "solution": "En el nodo Image Texture del mapa de normales, cambia Color Space de 'sRGB' a 'Non-Color'. Comprueba que pase por un nodo 'Normal Map' antes de llegar a Principled BSDF."
    },
    {
      "problem": "Mis texturas se ven completamente negras o rosas en la vista.",
      "cause": "El rosa indica que falta el archivo de imagen; el negro indica que no hay luz en el modo Rendered.",
      "solution": "Si es rosa, ve a File -> External Data -> 'Find Missing Files' y busca tu carpeta de texturas. Si es negro, añade una luz (Shift + A -> Light -> Sun/Area) o cambia a Material Preview."
    },
    {
      "problem": "El material de vidrio se ve totalmente negro y opaco en Eevee.",
      "cause": "Screen Space Refraction no está activado en los ajustes de Eevee.",
      "solution": "En Material Settings, en el apartado Settings, activa 'Screen Space Refraction'. En Render Properties, marca 'Screen Space Reflections' -> 'Refraction'."
    }
  ]
};
