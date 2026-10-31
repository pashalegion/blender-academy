// Cuerpo de la lección shade-3. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["shade-3"] = {
  "overview": "Los materiales procedurales no necesitan archivos de imagen y nunca pierden resolución por mucho que se acerque la cámara. Esta lección trata sobre cómo crear metales de ciencia ficción, mármol y suciedad orgánica con Noise Texture, Voronoi Texture, ColorRamp, Bump y la combinación esencial de Texture Coordinate y Mapping.",
  "summary": [
    "Nodos Texture Coordinate + Mapping: selecciona un nodo de textura y pulsa Ctrl + T (con Node Wrangler activado) para añadir ambos al instante.",
    "Conecta la salida 'Object' (no Generated ni UV) a Mapping para obtener texturas procedurales sin costuras UV.",
    "Nodo ColorRamp: es la herramienta principal para reasignar valores, aumentar el contraste y convertir ruido gris en paletas de color.",
    "Voronoi Texture crea celdas, escamas, tierra agrietada y patrones de piedra.",
    "Nodo Bump: convierte datos de altura en blanco y negro en relieve falso, conectado a 'Normal' en Principled BSDF."
  ],
  "troubleshooting": [
    {
      "problem": "¡Mi ruido procedural se ve estirado en largas franjas paralelas!",
      "cause": "Usas coordenadas 'Generated' en una malla no cúbica o con la escala sin aplicar.",
      "solution": "Conecta la salida 'Object' del nodo Texture Coordinate a la entrada Vector del nodo Mapping. Comprueba que la escala esté aplicada (Ctrl + A -> Scale)."
    },
    {
      "problem": "Mi bump se ve exagerado y con sombras duras y dentadas.",
      "cause": "'Strength' o 'Distance' del nodo Bump son demasiado altos (¡Distance vale 1 metro por defecto!).",
      "solution": "Baja 'Strength' a 0,1 y reduce 'Distance' a 0,01 o 0,005 metros para conseguir un relieve sutil."
    },
    {
      "problem": "¿Cómo puedo ver rápidamente qué hace un solo nodo de mi shader?",
      "cause": "Ver el shader final no permite revisar cada máscara por separado.",
      "solution": "Con Node Wrangler activo, mantén Ctrl + Shift y haz clic izquierdo en cualquier nodo. Se conectará un nodo Viewer temporal para aislar su salida."
    }
  ]
};
