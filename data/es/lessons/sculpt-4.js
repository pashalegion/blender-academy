// Cuerpo de la lección sculpt-4. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["sculpt-4"] = {
  "overview": "En el Blender actual, el pelo está hecho de curvas unidas a una malla de superficie. Las peinas y les das forma con pinceles en Curves Sculpt Mode, y Geometry Nodes puede añadir detalles como encrespado, mechones o más hebras. Esta lección corta te lleva de una malla calva a tu primer peinado.",
  "summary": [
    "Añade el pelo como un objeto de curvas unido a una superficie, como una cabeza. Add ‣ Curve ‣ Fur es una forma rápida de empezar.",
    "Curves Sculpt Mode es donde se peina, usando pinceles para añadir, cepillar, cortar y dar forma a las hebras.",
    "El objeto de superficie es importante: la mayoría de pinceles, incluido Add Curves, necesitan uno definido.",
    "Usa pocas hebras mientras das forma y añade densidad para el render final.",
    "El pelo necesita un material y una prueba de render. Compruébalo en los ajustes de render, no solo en la vista."
  ],
  "troubleshooting": [
    {
      "problem": "El pincel Add Curves no hace nada.",
      "cause": "La mayoría de pinceles de curvas necesitan un objeto de superficie, y este objeto de curvas no tiene.",
      "solution": "Define la superficie en las propiedades de datos del objeto de curvas e inténtalo de nuevo."
    },
    {
      "problem": "Mi pelo se queda atrás cuando el personaje se mueve.",
      "cause": "Las curvas ya no están unidas a la superficie deformada.",
      "solution": "Usa un montaje Deform Curves on Surface y después Curves ‣ Snap to Deformed Surface para volver a unirlas. Solo funciona si la topología de la malla no ha cambiado."
    },
    {
      "problem": "Las curvas no coinciden después de editar la malla de la cabeza.",
      "cause": "Cambiar la topología de la superficie rompe la información de unión guardada.",
      "solution": "Usa Curves ‣ Snap to Nearest Surface, que mueve la raíz de cada curva al punto más cercano de la malla."
    }
  ],
  "tutorial": [
    {
      "heading": "Prepara el modelo base",
      "steps": [
        "El pelo crece sobre una malla de superficie, como una cabeza o el cuerpo de una criatura.",
        "Aplica la escala de la malla (Object ‣ Apply ‣ Scale) antes de añadir pelo."
      ]
    },
    {
      "heading": "Quick Fur",
      "steps": [
        "Selecciona la malla y usa Object ‣ Quick Effects ‣ Quick Fur.",
        "Blender crea un objeto de curvas de pelo con Geometry Nodes que ya parece pelaje.",
        "Ajusta los valores en su panel de modificador, como densidad, longitud y agrupación."
      ]
    },
    {
      "heading": "Curvas guía",
      "steps": [
        "Para más control, con la malla seleccionada añade un objeto de pelo vacío con Add ‣ Curve ‣ Empty Hair.",
        "Cambia el objeto de pelo a Sculpt Mode. Usa el pincel Add para colocar unas pocas curvas guía largas donde deba crecer el pelo.",
        "Usa Comb para peinarlas, Cut para acortarlas y Puff para levantarlas de la superficie."
      ]
    },
    {
      "heading": "Herramientas de nodos de pelo",
      "steps": [
        "Blender incluye grupos de nodos de pelo listos para usar en la biblioteca Essentials del Asset Browser.",
        "Añádelos como modificadores al objeto de pelo, por ejemplo Interpolate Hair Curves, Clump Hair Curves y Frizz Hair Curves."
      ]
    },
    {
      "heading": "Interpola el pelo",
      "steps": [
        "Interpolate Hair Curves crea muchos pelos hijos entre tus pocas curvas guía.",
        "Sube la densidad para cubrir la cabeza y mantén pocas guías para que sean fáciles de peinar."
      ]
    },
    {
      "heading": "Da forma al pelo",
      "steps": [
        "Clump Hair Curves agrupa los mechones para un aspecto más natural.",
        "Ajusta la forma y la distancia de los mechones para que no sean demasiado perfectos."
      ]
    },
    {
      "heading": "Ruido y encrespado",
      "steps": [
        "Añade Hair Curves Noise o Frizz Hair Curves para romper las hebras perfectamente rectas.",
        "Usa poca cantidad; el pelo real es un poco desordenado pero sigue la forma general."
      ]
    },
    {
      "heading": "Ejemplo: una barba",
      "steps": [
        "Repite los mismos pasos en la barbilla y la mandíbula.",
        "Pinta una máscara de densidad o un grupo de vértices para que el pelo solo crezca donde va la barba.",
        "Haz las hebras más cortas y encrespadas que el pelo de la cabeza."
      ]
    }
  ]
};
