// Cuerpo de la lección shade-4. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["shade-4"] = {
  "overview": "Texture Paint Mode te permite pintar directamente sobre un modelo 3D, como si decoraras una miniatura. Es ideal para trabajos estilizados y low poly. Blender usa tu mapa UV para pasar cada trazo a una imagen, así que primero debes desplegar el modelo.",
  "summary": [
    "Despliega primero el modelo: la pintura se escribe en una imagen a través del mapa UV.",
    "Usa el workspace Texture Paint, que muestra el Image Editor y la vista 3D a la vez.",
    "Añade una ranura de textura para crear la imagen en la que pintas, normalmente empezando por Base Color.",
    "Puedes pintar en la vista 3D o directamente sobre la imagen plana en el Image Editor.",
    "Guarda la imagen pintada. Las imágenes son independientes de la malla y no se conservan solo por guardar la escena."
  ],
  "troubleshooting": [
    {
      "problem": "Blender dice que faltan texturas, o mi pincel no pinta nada.",
      "cause": "El material no tiene imagen sobre la que pintar, o la malla no tiene mapa UV.",
      "solution": "Despliega la malla y añade una ranura de textura Base Color en los ajustes de la herramienta."
    },
    {
      "problem": "Mi pintura ha desaparecido al volver a abrir el archivo.",
      "cause": "La imagen nueva no se guardó ni se empaquetó en el archivo .blend.",
      "solution": "Usa Image ‣ Save en el Image Editor, o empaqueta la imagen en el archivo, antes de cerrar Blender."
    },
    {
      "problem": "La pintura aparece en el sitio equivocado o en varias zonas a la vez.",
      "cause": "Las islas UV se solapan, así que varias zonas usan la misma parte de la imagen.",
      "solution": "Despliega de nuevo para que no se solapen. Las UV reflejadas o apiladas comparten pintura a propósito, así que déjalas si eso es lo que quieres."
    }
  ],
  "tutorial": [
    {
      "heading": "Prepara el modelo",
      "steps": [
        "Pintar texturas funciona mejor en un modelo sencillo y low poly, por ejemplo una lápida estilizada.",
        "Asegúrate de que el modelo esté desplegado en UV (U ‣ Unwrap o Smart UV Project) sin islas superpuestas."
      ]
    },
    {
      "heading": "Abre Texture Paint",
      "steps": [
        "Haz clic en la pestaña Texture Paint. Verás la vista 3D en modo Texture Paint y un Image Editor a la izquierda.",
        "Si Blender avisa de que faltan texturas, aún necesitas una ranura de pintura."
      ]
    },
    {
      "heading": "Añade una textura para pintar",
      "steps": [
        "En los ajustes de la herramienta (o el panel Texture Slots), añade una ranura Base Color.",
        "Elige una resolución como 1024 o 2048 y un color inicial, y pulsa OK. Blender crea la imagen y la conecta al material."
      ]
    },
    {
      "heading": "Pinta sobre el modelo",
      "steps": [
        "Elige un color en los ajustes de la herramienta y pinta directamente sobre el modelo con el pincel Draw.",
        "Pulsa F para cambiar el tamaño del pincel y Shift + F para la fuerza.",
        "Activa la simetría (X) si los dos lados deben coincidir."
      ]
    },
    {
      "heading": "Otros pinceles útiles",
      "steps": [
        "Fill rellena una zona entera de una vez. Soften difumina bordes. Smear arrastra la pintura.",
        "Clone copia una zona de la textura en otra.",
        "También puedes pintar en el Image Editor 2D para líneas rectas y trabajo preciso."
      ]
    },
    {
      "heading": "Consejos de pintura estilizada",
      "steps": [
        "Empieza con colores base planos y luego añade colores más oscuros en las grietas y más claros en los bordes.",
        "Usa un pincel algo suave para degradados y uno duro para detalles como musgo o grietas."
      ]
    },
    {
      "heading": "Guarda tu pintura",
      "steps": [
        "La imagen pintada no se guarda con Ctrl + S de la escena. En el Image Editor usa Image ‣ Save (Alt + S) o Save As.",
        "O empaquétala en el archivo .blend con Image ‣ Pack."
      ],
      "tip": "Si cierras Blender sin guardar la imagen, perderás tu pintura."
    }
  ]
};
