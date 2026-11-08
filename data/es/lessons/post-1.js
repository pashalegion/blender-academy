// Cuerpo de la lección post-1. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["post-1"] = {
  "overview": "El Compositor es donde un render recibe su pulido final. Con nodos puedes ajustar el color, añadir brillo y combinar imágenes sin volver a renderizar la escena. Blender 5 cambió cómo se prepara, así que los tutoriales antiguos pueden mostrar pasos que ya no se aplican.",
  "summary": [
    "Abre el Compositor y pulsa New en la cabecera para crear un árbol de nodos.",
    "Render Layers lleva tu render al grafo de nodos.",
    "El nodo Group Output define la imagen final que va al renderizador.",
    "Comprueba que la opción Compositing esté activa en Output Properties ‣ Post Processing.",
    "El nodo Glare añade bloom y fog glow a las zonas brillantes, y nodos de color como Color Balance sirven para etalonar."
  ],
  "troubleshooting": [
    {
      "problem": "Los cambios del compositor no aparecen en el render final.",
      "cause": "El render no está usando el árbol de nodos, o el resultado no llega a la salida.",
      "solution": "Activa Compositing en Output Properties ‣ Post Processing y conecta tu último nodo a Group Output."
    },
    {
      "problem": "Un tutorial antiguo dice que marque Use Nodes, pero no lo encuentro.",
      "cause": "Blender 5 crea el árbol de nodos del compositor con el botón New.",
      "solution": "Pulsa New en la cabecera del Compositor y sigue con los nodos del tutorial."
    },
    {
      "problem": "El nodo Render Layers no tiene imagen.",
      "cause": "Todavía no se ha renderizado nada.",
      "solution": "Pulsa el botón de volver a renderizar en el nodo Render Layers o pulsa F12 una vez."
    }
  ],
  "tutorial": [
    {
      "heading": "Qué hace el compositor",
      "steps": [
        "El compositor edita tu render después de hacerlo: color, brillo, desenfoque y combinación de imágenes, sin volver a renderizar."
      ]
    },
    {
      "heading": "Crea un árbol de nodos de composición",
      "steps": [
        "Abre la pestaña Compositing, o cambia un área al Compositor.",
        "Pulsa New en la cabecera. Blender crea un árbol básico con Render Layers y Group Output.",
        "Comprueba que Compositing esté activado en Output Properties ‣ Post Processing."
      ]
    },
    {
      "heading": "Render Layers y salida",
      "steps": [
        "Render Layers trae tu imagen renderizada. Renderiza una vez con F12 para que tenga imagen.",
        "Group Output define la imagen final. Todo lo que quieras en el resultado debe conectarse a él.",
        "Añade un nodo Viewer para ver el resultado en el fondo del editor o en el Image Editor."
      ]
    },
    {
      "heading": "Añade brillo con Glare",
      "steps": [
        "Añade un nodo Glare entre Render Layers y Group Output.",
        "Elige un tipo de brillo, como Bloom o Fog Glow, y baja el umbral para que brillen más zonas.",
        "Glare es perfecto para luces, pantallas y metal al rojo."
      ]
    },
    {
      "heading": "Corrección de color",
      "steps": [
        "Añade un nodo Color Balance o Brightness/Contrast para ajustar el aspecto.",
        "Calienta las luces o enfría las sombras para crear ambiente."
      ]
    },
    {
      "heading": "Más efectos",
      "steps": [
        "Lens Distortion añade bordes de color sutiles como un objetivo real.",
        "Los nodos Mix combinan imágenes y los nodos Blur suavizan partes de la imagen."
      ]
    },
    {
      "heading": "Guarda el resultado",
      "steps": [
        "Vuelve a renderizar con F12; el resultado del compositor aparece en la ventana de render.",
        "Guárdalo con Image ‣ Save As."
      ],
      "tip": "Los tutoriales antiguos mencionan una casilla Use Nodes. En Blender 5, el árbol de nodos se crea con el botón New."
    }
  ]
};
