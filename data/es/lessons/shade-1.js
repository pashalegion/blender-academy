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
  ],
  "tutorial": [
    {
      "heading": "Qué significa PBR",
      "steps": [
        "PBR (Physically Based Rendering) describe los materiales con propiedades del mundo real, para que se vean bien con cualquier luz.",
        "En Blender, el nodo Principled BSDF hace casi todo esto en un solo sitio."
      ]
    },
    {
      "heading": "Abre el Shader Editor",
      "steps": [
        "Haz clic en la pestaña Shading. El Shader Editor está abajo y la vista muestra Material Preview.",
        "Selecciona un objeto y pulsa New para crear un material. Verás un Principled BSDF conectado a Material Output."
      ]
    },
    {
      "heading": "Base Color",
      "steps": [
        "Base Color es el color principal de la superficie, sin brillos ni sombras.",
        "Haz clic en el color para elegirlo, o conecta una textura de imagen a su entrada."
      ]
    },
    {
      "heading": "Metallic",
      "steps": [
        "Metallic suele ser 0 (madera, plástico, piel, piedra) o 1 (metales puros como oro, cromo o hierro).",
        "Los valores intermedios se usan sobre todo para metal sucio o parcialmente pintado."
      ]
    },
    {
      "heading": "Roughness",
      "steps": [
        "Roughness controla lo borrosos que son los reflejos. 0 es un espejo perfecto; 1 es totalmente mate, como la tiza.",
        "La mayoría de superficies reales están entre 0,2 y 0,7. Pequeños cambios de rugosidad hacen los materiales mucho más reales."
      ]
    },
    {
      "heading": "Specular e IOR",
      "steps": [
        "IOR (índice de refracción) controla cuánto refleja una superficie según el ángulo. El vidrio ronda 1,45–1,5 y el agua 1,33.",
        "La mayoría de materiales no metálicos funcionan bien con los valores por defecto."
      ]
    },
    {
      "heading": "Transmission para el vidrio",
      "steps": [
        "Pon Transmission Weight en 1 para crear vidrio o líquidos transparentes, con Roughness cerca de 0 y el IOR adecuado.",
        "El vidrio se ve mejor en Cycles. En Eevee, revisa los ajustes del material y del render para la refracción."
      ]
    },
    {
      "heading": "Subsurface y Emission",
      "steps": [
        "Subsurface deja que la luz entre en la superficie y se disperse: piel, cera, leche y hojas.",
        "Emission hace que una superficie brille, para pantallas y lámparas. Elige Emission Color y sube Strength."
      ]
    },
    {
      "heading": "Usa mapas de textura",
      "steps": [
        "Los materiales PBR reales usan imágenes: color, rugosidad, normales y a veces metálico y desplazamiento.",
        "Pon los mapas de datos (rugosidad, normales, metálico) en Non-Color en el nodo Image Texture.",
        "Un mapa de normales debe pasar por un nodo Normal Map antes de la entrada Normal.",
        "Con Node Wrangler activado, selecciona el Principled BSDF y pulsa Ctrl + Shift + T para cargar todo un conjunto de texturas a la vez."
      ]
    }
  ]
};
