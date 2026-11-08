// Cuerpo de la lección anim-3. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["anim-3"] = {
  "overview": "La pelota que rebota es la puerta de entrada a la animación. Enseña estirar y encoger, tiempo y espaciado, aceleración y desaceleración, y arcos de movimiento. Aprende a grabar fotogramas clave (tecla 'I'), a dominar la línea de tiempo y a usar el Graph Editor (curvas F y manejadores Bézier) para dar forma a la gravedad y al impulso.",
  "summary": [
    "Pulsa 'I' sobre la vista 3D para insertar un keyframe (posición, rotación, escala).",
    "Abre el 'Graph Editor' para ver las curvas de animación (F-curves) en lugar de solo puntos en la línea de tiempo.",
    "Curva de gravedad: cambia los manejadores del keyframe de contacto a 'Vector' (pulsa 'V' -> Vector) para conseguir un rebote seco.",
    "Estirar y encoger: aplasta la pelota en Z al impactar y amplía X e Y para conservar el volumen.",
    "Anticipación y arcos: ningún objeto natural se mueve en líneas rectas robóticas; curva siempre las trayectorias."
  ],
  "troubleshooting": [
    {
      "problem": "¡Mi pelota frena antes de tocar el suelo, como si flotara en miel!",
      "cause": "Los keyframes usan interpolación 'Bezier' por defecto, que suaviza a ambos lados.",
      "solution": "En el Graph Editor, selecciona el keyframe del impacto, pulsa 'V' y elige 'Vector', o separa los manejadores con 'Free' para que la curva baje rápido y suba de golpe."
    },
    {
      "problem": "¡Muevo el objeto en el fotograma 20, pero al mover la línea de tiempo vuelve al fotograma 1!",
      "cause": "No insertaste un keyframe tras moverlo, o Auto-Keying está desactivado.",
      "solution": "Pulsa 'I' para insertar un keyframe de posición, O activa el botón rojo circular de 'Auto-Keying' en la cabecera de la línea de tiempo."
    },
    {
      "problem": "Mi animación se repite con un largo espacio vacío después del último keyframe.",
      "cause": "El fotograma final de la línea de tiempo sigue en 250, el valor por defecto.",
      "solution": "En la cabecera de la línea de tiempo, ajusta 'End:' al último fotograma de tu acción (por ejemplo, 60)."
    }
  ],
  "tutorial": [
    {
      "heading": "1. Estirar y encoger",
      "steps": [
        "Los objetos se aplastan al chocar y se estiran al moverse rápido, manteniendo el mismo volumen.",
        "En una pelota que rebota, aplástala al tocar el suelo (S, Z, más pequeña) y ensánchala en X e Y."
      ]
    },
    {
      "heading": "2. Anticipación",
      "steps": [
        "Antes de una acción grande, muestra un pequeño movimiento contrario: un personaje se agacha antes de saltar.",
        "Prepara al espectador para lo que va a pasar."
      ]
    },
    {
      "heading": "3. Puesta en escena",
      "steps": [
        "Presenta una idea clara cada vez. Elige la pose y el ángulo de cámara que hagan la acción fácil de entender."
      ]
    },
    {
      "heading": "4. Acción directa y pose a pose",
      "steps": [
        "Acción directa es animar fotograma a fotograma de principio a fin. Pose a pose es poner primero las poses clave y luego rellenar.",
        "En Blender lo habitual es pose a pose: pones las poses clave con I y Blender rellena los fotogramas intermedios."
      ]
    },
    {
      "heading": "5. Acción continuada y superpuesta",
      "steps": [
        "Partes del cuerpo siguen moviéndose cuando el cuerpo se para, como el pelo, una cola o la ropa.",
        "Distintas partes se mueven en momentos ligeramente distintos, y eso hace el movimiento natural."
      ]
    },
    {
      "heading": "6. Aceleración y desaceleración",
      "steps": [
        "El movimiento real acelera y frena poco a poco. Pon más fotogramas al principio y al final de un movimiento.",
        "En el Graph Editor, las curvas Bezier dan aceleración y desaceleración automáticamente."
      ]
    },
    {
      "heading": "7. Arcos",
      "steps": [
        "La mayoría de movimientos naturales siguen trayectorias curvas, no líneas rectas.",
        "Comprueba de lado la trayectoria de una mano o una pelota; los arcos suaves parecen más vivos."
      ]
    },
    {
      "heading": "8. Acción secundaria",
      "steps": [
        "Pequeñas acciones extra apoyan la principal, como un personaje que silba mientras camina.",
        "Dan personalidad, pero no deben distraer."
      ]
    },
    {
      "heading": "9. Tiempo",
      "steps": [
        "El número de fotogramas de una acción decide si se siente pesada, rápida o emotiva.",
        "Junta los keyframes en la Timeline o el Dope Sheet para acciones más rápidas."
      ]
    },
    {
      "heading": "10. Exageración",
      "steps": [
        "Lleva las poses y el movimiento un poco más allá de la realidad para que sean claros y divertidos."
      ]
    },
    {
      "heading": "11. Dibujo sólido",
      "steps": [
        "Piensa en las formas como volúmenes 3D con peso y equilibrio. En 3D, revisa las poses desde varios ángulos."
      ]
    },
    {
      "heading": "12. Atractivo",
      "steps": [
        "Los personajes y el movimiento deben ser interesantes de ver, con formas claras y personalidad."
      ]
    },
    {
      "heading": "Pruébalo: pelota que rebota en Blender",
      "steps": [
        "Añade una esfera, ve al fotograma 1 y pulsa I ‣ Location para poner un keyframe en lo alto.",
        "Ve al fotograma del contacto, baja la pelota al suelo y pon otro keyframe; repite para el siguiente punto alto.",
        "Abre el Graph Editor. Selecciona los keyframes de contacto y pulsa V ‣ Vector para que la pelota cambie de dirección de golpe.",
        "Pon un keyframe con un ligero aplastamiento en el contacto y un estiramiento justo antes y después."
      ]
    }
  ]
};
