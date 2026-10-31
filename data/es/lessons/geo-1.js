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
  ]
};
