// Cuerpo de la lección geo-1. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["geo-1"] = {
  "overview": "Geometry Nodes ha revolucionado Blender y lo ha convertido en un sistema procedural muy potente. En esta introducción para principiantes aprenderás qué son los campos y los sockets, cómo distribuir miles de instancias de rocas y hierba por un paisaje con 'Distribute Points on Faces' e 'Instance on Points', y cómo variar al azar la rotación y la escala.",
  "summary": [
    "Añade un modificador Geometry Nodes a cualquier malla y abre el workspace de nodos de geometría.",
    "Cada árbol empieza con 'Group Input' y termina con 'Group Output'.",
    "Distribute Points on Faces: convierte una superficie en puntos de aparición (usa Poisson Disk para una separación limpia).",
    "Instance on Points: coloca tu colección o tus objetos en cada punto distribuido.",
    "Nodo Random Value: conéctalo a Rotation y Scale para dar variedad y proporciones naturales a cada elemento."
  ],
  "troubleshooting": [
    {
      "problem": "¡Mis objetos instanciados se ven grises y sin materiales en el render final!",
      "cause": "Las instancias no incluyen ranuras de material por sí solas, o los materiales necesitan un nodo 'Set Material'.",
      "solution": "Añade un nodo 'Set Material' tras 'Instance on Points' y elige tu material. También puedes insertar un nodo 'Realize Instances' antes de Group Output."
    },
    {
      "problem": "¡La malla del terreno ha desaparecido al añadir los puntos!",
      "cause": "La geometría original se ha sustituido por puntos en lugar de combinarse.",
      "solution": "Añade un nodo 'Join Geometry' antes de Group Output y conecta tanto la geometría original como la instanciada."
    },
    {
      "problem": "Todos mis árboles miran en la misma dirección y parecen copias.",
      "cause": "La entrada Rotation de 'Instance on Points' no tiene variación aleatoria.",
      "solution": "Añade un nodo 'Rotate Instances' o conecta un nodo 'Random Value' (tipo Vector, de -3,14 a 3,14 en Z) a la entrada Rotation."
    }
  ],
  "tutorial": [
    {
      "heading": "Primeros pasos",
      "steps": [
        "Geometry Nodes crea o cambia geometría con nodos, de forma procedural.",
        "Abre la pestaña Geometry Nodes, selecciona un objeto (por ejemplo un plano para el suelo) y pulsa New."
      ]
    },
    {
      "heading": "Es un modificador",
      "steps": [
        "Geometry Nodes aparece como modificador en la pestaña de la llave inglesa, así que puedes desactivarlo o reordenarlo como cualquier otro.",
        "Group Input es la malla original; Group Output es el resultado."
      ]
    },
    {
      "heading": "Distribuye puntos",
      "steps": [
        "Añade Distribute Points on Faces (Shift + A, o búscalo) entre Group Input y Group Output.",
        "La malla se convierte en muchos puntos. Cambia Density para añadir o quitar puntos. Elige Poisson Disk para una separación uniforme."
      ]
    },
    {
      "heading": "Une la geometría",
      "steps": [
        "La superficie original ha desaparecido porque solo los puntos llegan a la salida.",
        "Añade un nodo Join Geometry y conéctale la geometría original y la nueva."
      ]
    },
    {
      "heading": "Instancia objetos en los puntos",
      "steps": [
        "Añade Instance on Points después de los puntos. Conecta un objeto (por ejemplo una roca) a su entrada Instance.",
        "Cada punto muestra ahora una copia de ese objeto."
      ]
    },
    {
      "heading": "Fija el árbol de nodos",
      "steps": [
        "Pulsa el icono de chincheta de la cabecera del editor de nodos para seguir viendo este árbol aunque selecciones otro objeto, como la roca."
      ]
    },
    {
      "heading": "Referencia otro objeto",
      "steps": [
        "Arrastra el objeto desde el Outliner al editor de nodos para crear un nodo Object Info.",
        "Conecta su salida Geometry a Instance. Los cambios del objeto original actualizan todas las copias."
      ]
    },
    {
      "heading": "Rotación aleatoria",
      "steps": [
        "Añade un nodo Random Value en modo Vector y conéctalo a la entrada Rotation de Instance on Points.",
        "Pon Max Z en unos 6,28 (una vuelta completa en radianes) para que cada roca mire hacia un lado distinto."
      ]
    },
    {
      "heading": "Escala aleatoria",
      "steps": [
        "Añade otro Random Value (Float), pon Min y Max, por ejemplo 0,5 y 1,5, y conéctalo a Scale.",
        "Ahora cada instancia tiene un tamaño distinto, lo que se ve mucho más natural."
      ]
    }
  ]
};
