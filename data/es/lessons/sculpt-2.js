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
  ],
  "tutorial": [
    {
      "heading": "Tres formas de gestionar el detalle",
      "steps": [
        "Esculpir necesita suficientes polígonos, pero en el sitio adecuado. Blender tiene tres flujos principales: Dyntopo, Remesh y el modificador Multiresolution.",
        "Cada uno encaja en una fase: formas bastas, encaje y detalle fino."
      ]
    },
    {
      "heading": "Dyntopo",
      "steps": [
        "Activa Dyntopo en la cabecera de Sculpt Mode. Blender añade triángulos bajo el pincel mientras esculpes.",
        "Detail Size controla lo finos que son los triángulos nuevos. El detalle Relative depende del zoom.",
        "Es ideal para estirar formas largas (cuernos, tentáculos) sin deformar la malla.",
        "Dyntopo elimina los mapas UV y otros datos, así que úsalo pronto, antes de texturizar."
      ]
    },
    {
      "heading": "Remesh",
      "steps": [
        "Remesh reconstruye toda la malla con quads uniformes. Pon Voxel Size en el panel Remesh de la cabecera y haz clic en Remesh.",
        "También fusiona piezas separadas superpuestas (cabeza, orejas, nariz) en una sola malla.",
        "Un vóxel más pequeño da más detalle pero más polígonos. Redúcelo poco a poco.",
        "Usa Remesh a menudo durante el encaje para mantener la malla limpia."
      ],
      "tip": "Guarda antes de remallar con un tamaño pequeño. Los vóxeles diminutos pueden crear millones de caras y ralentizar el ordenador."
    },
    {
      "heading": "Modificador Multiresolution",
      "steps": [
        "Cuando las formas grandes estén listas, añade un modificador Multiresolution y pulsa Subdivide varias veces.",
        "Puedes cambiar de nivel: esculpe formas grandes en niveles bajos y detalles finos como poros y arrugas en niveles altos.",
        "Funciona muy bien para el detalle final y para hornear el detalle a texturas."
      ]
    },
    {
      "heading": "Combínalos",
      "steps": [
        "Orden típico: Remesh (o Dyntopo) para encajar, después retopología si necesitas geometría limpia, y por último Multiresolution para el detalle fino.",
        "Elige el método que encaje con la fase actual en vez de usar uno solo para todo."
      ]
    }
  ]
};
