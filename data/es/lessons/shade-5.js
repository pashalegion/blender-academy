// Cuerpo de la lección shade-5. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["shade-5"] = {
  "overview": "Hornear (bake) guarda información en una imagen de textura. El uso clásico es pasar el detalle fino de un modelo pesado a un mapa de normales de un modelo ligero, y por eso los modelos de videojuegos parecen detallados y funcionan rápido. También permite convertir materiales procedurales en texturas para otros programas.",
  "summary": [
    "El horneado funciona con Cycles, en Render ‣ Bake, y usa tus ajustes de render.",
    "La malla low poly necesita un mapa UV y un material con una imagen en la que hornear.",
    "El nodo Image Texture activo es el destino del horneado, aunque no esté conectado a nada.",
    "Selected to Active hornea del objeto seleccionado al activo, así que selecciona primero la malla high poly y al final la low poly.",
    "Pon el nodo de imagen del mapa de normales en Non-Color y conéctalo mediante un nodo Normal Map."
  ],
  "troubleshooting": [
    {
      "problem": "El horneado ha terminado, pero la imagen está vacía o mal.",
      "cause": "El nodo Image Texture activo no era el que querías, o no había nada seleccionado en el shader.",
      "solution": "Haz clic en el nodo Image Texture correcto para activarlo y vuelve a hornear."
    },
    {
      "problem": "Mi mapa de normales tiene manchas negras o zonas vacías.",
      "cause": "Los rayos de la malla low poly no llegan a la superficie high poly.",
      "solution": "Alinea las dos mallas y aumenta Extrusion o Max Ray Distance en Selected to Active. Para más control, usa un objeto Cage."
    },
    {
      "problem": "La imagen se ve bien, pero el modelo tiene mal sombreado.",
      "cause": "Es probable que el mapa de normales se esté leyendo como color.",
      "solution": "Pon su Color Space en Non-Color y conéctalo mediante un nodo Normal Map."
    }
  ],
  "tutorial": [
    {
      "heading": "Qué hace el horneado",
      "steps": [
        "Hornear (bake) guarda información de la superficie en una imagen. Un uso habitual es pasar el detalle de un modelo high poly a un mapa de normales de un modelo low poly.",
        "Así el modelo low poly parece detallado pero sigue siendo ligero, ideal para videojuegos."
      ]
    },
    {
      "heading": "Despliega el modelo low poly",
      "steps": [
        "Selecciona el modelo low poly, entra en Edit Mode y despliégalo (U ‣ Smart UV Project funciona bien).",
        "Las islas no deben superponerse o la imagen horneada saldrá mal."
      ]
    },
    {
      "heading": "Superpón los dos objetos",
      "steps": [
        "Coloca los modelos high poly y low poly exactamente en el mismo sitio, para que la malla low poly quede sobre la superficie de la high poly."
      ]
    },
    {
      "heading": "Añade una textura donde hornear",
      "steps": [
        "Dale un material al modelo low poly. En el Shader Editor, añade un nodo Image Texture y pulsa New para crear una imagen (por ejemplo 2048 × 2048).",
        "Pon la imagen en Non-Color para un mapa de normales. Deja este nodo seleccionado: el nodo Image Texture activo es el destino del horneado."
      ]
    },
    {
      "heading": "Ajustes de horneado",
      "steps": [
        "Pon el motor de render en Cycles; el horneado solo funciona ahí.",
        "En Render Properties ‣ Bake, pon Bake Type en Normal y activa Selected to Active.",
        "Selecciona primero el modelo high poly y luego, con Shift, el low poly para que sea el activo.",
        "Sube un poco Extrusion para que los rayos lleguen a la superficie high poly y pulsa Bake."
      ]
    },
    {
      "heading": "Revisa el mapa de normales",
      "steps": [
        "Al terminar, el mapa de normales azulado aparece en el Image Editor.",
        "Guárdalo enseguida con Image ‣ Save As."
      ]
    },
    {
      "heading": "Usa el mapa de normales",
      "steps": [
        "Conecta Color del Image Texture a un nodo Normal Map, y el Normal Map a la entrada Normal del Principled BSDF.",
        "Oculta el modelo high poly. El low poly mostrará ahora los detalles finos."
      ]
    }
  ]
};
