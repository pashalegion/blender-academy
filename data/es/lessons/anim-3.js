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
  ]
};
