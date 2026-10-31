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
  ]
};
