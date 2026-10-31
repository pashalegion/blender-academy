// Cuerpo de la lección sculpt-2. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["sculpt-2"] = {
  "overview": "Dynamic Topology (Dyntopo) genera triángulos bajo el pincel a medida que esculpes, mientras que Voxel Remesher reconstruye todo el objeto con quads uniformes en una fracción de segundo. Esta lección te enseña cuándo usar cada uno al idear, encajar y detallar un personaje.",
  "summary": [
    "<span class=\"unverified\" title=\"No confirmado todavía en el mapa de teclas del manual de Blender 5.2\">Atajo de Voxel Remesher: pulsa Shift + R para ajustar la vista previa de la cuadrícula y Ctrl + R para aplicar el remallado.</span>",
    "Voxel Remesher fusiona formas separadas que se solapan (cabeza, orejas, nariz) en una sola malla continua.",
    "Dyntopo es ideal para estirar formas a grandes distancias con Snake Hook sin perder geometría.",
    "No uses Dyntopo si ya tienes mapas UV o colores de vértice, porque los destruirá.",
    "Controla los polígonos: empieza el encaje con vóxeles de 0,1 m, refina con 0,03 m y deja los poros y arrugas finos para Multiresolution."
  ],
  "troubleshooting": [
    {
      "problem": "<span class=\"unverified\" title=\"No confirmado todavía en el mapa de teclas del manual de Blender 5.2\">¡He pulsado Ctrl + R para hacer Voxel Remesh y los detalles finos (ojos, labios) se han fundido en una masa!</span>",
      "cause": "El tamaño de vóxel era demasiado grande para la escala de los detalles.",
      "solution": "<span class=\"unverified\" title=\"No confirmado todavía en el mapa de teclas del manual de Blender 5.2\">Pulsa Ctrl + Z para deshacer. Pulsa Shift + R para ver la cuadrícula, mueve el ratón hasta que los cuadrados sean pequeños y pulsa Ctrl + R.</span>"
    },
    {
      "problem": "¡Blender se ha quedado colgado o se ha cerrado al remallar!",
      "cause": "El tamaño de vóxel era demasiado pequeño (por ejemplo, 0,0001 m), lo que pide cientos de millones de polígonos y agota la RAM.",
      "solution": "<span class=\"unverified\" title=\"No confirmado todavía en el mapa de teclas del manual de Blender 5.2\">Guarda siempre con Ctrl + S antes de remallar. Evita reducir el tamaño de vóxel más de un 50 % cada vez.</span>"
    },
    {
      "problem": "La simetría ha dejado de funcionar en un lado de mi escultura.",
      "cause": "El centro de la malla se ha alejado del eje X = 0 del mundo, o Dyntopo ha creado densidad asimétrica.",
      "solution": "En Sculpt Mode, ve a la cabecera, abre el menú Symmetry y haz clic en 'Symmetrize' (+X a -X o -X a +X)."
    }
  ]
};
