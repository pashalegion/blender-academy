// Cuerpo de la lección sculpt-1. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["sculpt-1"] = {
  "overview": "Esculpir se parece a trabajar con arcilla digital. En esta guía aprenderás a entrar en Sculpt Mode, a preparar una tableta o un ratón y a dominar los pinceles fundamentales: Draw, Clay Strips, Grab, Snake Hook, Crease, Inflate y Smooth, modelando formas orgánicas paso a paso.",
  "summary": [
    "<span class=\"unverified\" title=\"No confirmado todavía en el mapa de teclas del manual de Blender 5.2\">F cambia el radio del pincel; Shift + F cambia su fuerza.</span>",
    "<span class=\"unverified\" title=\"No confirmado todavía en el mapa de teclas del manual de Blender 5.2\">Mantén Ctrl mientras pintas para invertir el efecto del pincel (por ejemplo, Draw excava en lugar de levantar).</span>",
    "<span class=\"unverified\" title=\"No confirmado todavía en el mapa de teclas del manual de Blender 5.2\">Mantén Shift en cualquier momento para cambiar temporalmente al pincel Smooth.</span>",
    "Clay Strips es el pincel ideal para encajar los volúmenes principales y secundarios.",
    "Snake Hook es esencial para estirar cuernos, orejas, dedos y formas largas rápidamente."
  ],
  "troubleshooting": [
    {
      "problem": "¡Arrastro el pincel sobre el cubo por defecto y no pasa NADA!",
      "cause": "Un cubo estándar solo tiene 8 vértices, y los pinceles necesitan vértices que desplazar.",
      "solution": "<span class=\"unverified\" title=\"No confirmado todavía en el mapa de teclas del manual de Blender 5.2\">Pulsa Ctrl + 3 para añadir un modificador Subdivision Surface y aplícalo, O usa el Voxel Remesher (Ctrl + R en Sculpt Mode con un tamaño de vóxel pequeño) para dar a la malla millones de vértices editables.</span>"
    },
    {
      "problem": "Mi trazo de escultura se ve dentado, pixelado y con facetas.",
      "cause": "La resolución de la malla es demasiado baja, o el detalle de Dyntopo es demasiado grueso.",
      "solution": "<span class=\"unverified\" title=\"No confirmado todavía en el mapa de teclas del manual de Blender 5.2\">Reduce el tamaño de Voxel Remesh (por ejemplo, de 0,1 m a 0,02 m) y pulsa Ctrl + R, o activa Dyntopo con un detalle relativo de unos 8 px.</span>"
    },
    {
      "problem": "La sensibilidad a la presión del lápiz no cambia el tamaño ni la fuerza del pincel.",
      "cause": "El icono de presión junto a Radius y Strength, en la cabecera, está desactivado.",
      "solution": "Haz clic en el pequeño icono de lápiz con círculos concéntricos junto a los controles Radius y Strength."
    }
  ]
};
