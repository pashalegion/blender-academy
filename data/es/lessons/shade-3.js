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
  ],
  "tutorial": [
    {
      "heading": "Abre el Shader Editor",
      "steps": [
        "Haz clic en la pestaña Shading, o cambia cualquier área al Shader Editor.",
        "Selecciona tu objeto y pulsa New para añadir un material."
      ]
    },
    {
      "heading": "Nociones de nodos",
      "steps": [
        "Cada nodo hace una tarea. Los datos fluyen de izquierda a derecha por las conexiones.",
        "El Principled BSDF decide el aspecto de la superficie, y Material Output lo envía al render.",
        "Arrastra de una entrada a otra para conectarlas. Ctrl + clic derecho y arrastrar corta conexiones."
      ]
    },
    {
      "heading": "Añade nodos nuevos",
      "steps": [
        "Pulsa Shift + A en el Shader Editor, o usa el menú Add, y elige un nodo de una categoría como Texture o Converter.",
        "Usa la búsqueda de la parte superior del menú Add para encontrar nodos por su nombre."
      ]
    },
    {
      "heading": "Imagen frente a procedural",
      "steps": [
        "Las texturas de imagen usan fotos. Son fáciles, pero necesitan UV y pueden verse borrosas de cerca.",
        "Las procedurales se crean con matemáticas, como Noise, Voronoi y Wave. No tienen límite de resolución ni necesitan archivos."
      ]
    },
    {
      "heading": "Conecta una textura procedural",
      "steps": [
        "Añade una Noise Texture y conecta su salida Color o Fac a Base Color.",
        "Añade un Color Ramp entre ambos para elegir tus colores y controlar el contraste.",
        "Añade un nodo Texture Coordinate y uno Mapping antes de la textura (con Node Wrangler: selecciona la textura y pulsa Ctrl + T) para controlar su posición y escala."
      ]
    },
    {
      "heading": "Edita la textura",
      "steps": [
        "Cambia Scale para hacer el patrón más grande o pequeño, Detail para más variación fina y Roughness para un ruido más definido o suave.",
        "Junta los manejadores del Color Ramp para bordes más marcados."
      ]
    },
    {
      "heading": "Crea un material metálico",
      "steps": [
        "Pon Metallic en 1 y elige un Base Color gris o de color.",
        "Conecta una Noise Texture a través de un Color Ramp a Roughness, para que unas zonas brillen más que otras.",
        "Si quieres, añade un nodo Bump alimentado por el mismo ruido y conectado a Normal para pequeñas abolladuras."
      ]
    }
  ]
};
