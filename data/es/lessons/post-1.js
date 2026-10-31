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
  ]
};
