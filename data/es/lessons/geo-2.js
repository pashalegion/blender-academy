// Cuerpo de la lección geo-2. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["geo-2"] = {
  "overview": "¡Deja de modelar cables y cuerdas a mano! Aprende a crear un generador procedural de cables con Geometry Nodes. Dibujarás curvas en la vista y Blender las convertirá automáticamente en cables con grosor ajustable desde el panel del modificador.",
  "summary": [
    "Nodo Curve to Mesh: convierte curvas matemáticas en geometría tubular 3D.",
    "Curve Circle: conéctalo a 'Profile Curve' de 'Curve to Mesh' para definir el radio y la resolución del tubo.",
    "Exponer parámetros: arrastra sockets a huecos vacíos de Group Input para crear controles en el modificador.",
    "Resample Curve: controla la densidad de puntos para que la curva se deforme limpiamente.",
    "Set Curve Radius: permite estrechar el cable de forma procedural desde una base gruesa hasta una punta fina."
  ],
  "troubleshooting": [
    {
      "problem": "¡El nodo 'Curve to Mesh' no genera geometría visible!",
      "cause": "La entrada 'Profile Curve' está vacía.",
      "solution": "Añade un nodo 'Curve Circle' (o 'Curve Line') y conecta su salida Curve a 'Profile Curve' en 'Curve to Mesh'."
    },
    {
      "problem": "Los cables parecen palos doblados en lugar de arcos suaves.",
      "cause": "La curva no tiene suficientes puntos.",
      "solution": "Añade un nodo 'Resample Curve' justo antes de 'Curve to Mesh' y ajusta Count a 32 o Length a 0,05 m."
    },
    {
      "problem": "¿Cómo cambio el grosor del cable desde el panel Modifier sin abrir los nodos?",
      "cause": "El radio está fijo dentro del árbol de nodos.",
      "solution": "Arrastra una conexión desde la entrada 'Radius' de Curve Circle hasta un hueco libre del nodo 'Group Input'. Aparecerá como control en la pestaña Modifier."
    }
  ],
  "tutorial": [
    {
      "heading": "Empieza con una curva",
      "steps": [
        "Añade una curva Bezier (Shift + A ‣ Curve ‣ Bezier) y dale la forma por donde debe colgar el cable.",
        "Añade un modificador Geometry Nodes a la curva y pulsa New."
      ]
    },
    {
      "heading": "Haz que el cable cuelgue con campos",
      "steps": [
        "Remuestrea la curva (Resample Curve) para que tenga muchos puntos a lo largo.",
        "Usa Spline Parameter, que va de 0 en un extremo a 1 en el otro, para calcular cuánto debe colgar cada punto.",
        "Pasa ese valor por un Float Curve o por operaciones sencillas para bajar más los puntos del centro, usando Set Position."
      ]
    },
    {
      "heading": "Convierte la curva en un tubo",
      "steps": [
        "Añade Curve to Mesh y conecta un nodo Curve Circle a su entrada Profile Curve.",
        "El radio del círculo define el grosor del cable."
      ]
    },
    {
      "heading": "Haz varios cables",
      "steps": [
        "Duplica la geometría de la curva, por ejemplo con Instance on Points o Duplicate Elements, y desplaza un poco cada copia.",
        "Da a cada copia una caída algo distinta con un nodo Random Value para que parezcan un mazo de cables."
      ]
    },
    {
      "heading": "Expón los ajustes",
      "steps": [
        "Arrastra entradas como la caída y el grosor al Group Input. Aparecerán como controles en el panel del modificador.",
        "Ya puedes ajustar los cables sin abrir el editor de nodos."
      ]
    },
    {
      "heading": "Añade un material",
      "steps": [
        "Usa Set Material al final para que los cables se rendericen con el material correcto."
      ],
      "tip": "Esta es la parte 1 de la serie del vídeo; las siguientes añaden más detalle."
    }
  ]
};
