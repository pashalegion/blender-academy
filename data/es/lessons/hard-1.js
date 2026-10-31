// Cuerpo de la lección hard-1. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["hard-1"] = {
  "overview": "Un pozo low poly es un proyecto clásico para principiantes. Aprenderás a crear vigas de madera, tejas, un cubo y una cuerda con muy pocos polígonos, usando técnicas de extrusión ingeniosas y paletas de color, un estilo que funciona muy bien en motores de videojuegos como Unreal Engine y Unity.",
  "summary": [
    "El low poly se centra en siluetas fuertes, formas fáciles de leer y un uso eficiente de los vértices.",
    "Usa Inset ('I'), Extrude ('E') y Loop Cut ('Ctrl + R') para encajar elementos arquitectónicos.",
    "Da un aspecto más natural a las vigas seleccionando vértices al azar y moviéndolos ligeramente con G.",
    "Usa Linked Duplicates (Alt + D) para repetir tejas: ahorras memoria y las ediciones se sincronizan.",
    "Modificador Array: duplica tejas y ladrillos rápidamente con una separación fija."
  ],
  "troubleshooting": [
    {
      "problem": "¡Cuando edito una teja, cambian todas las demás!",
      "cause": "Las creaste con Alt + D (Linked Duplicate), que comparte exactamente los mismos datos de malla.",
      "solution": "Si quieres que una teja sea independiente, haz clic en Object -> Relations -> Make Single User -> 'Object & Data'."
    },
    {
      "problem": "Inset ('I') crea tiras finas y desiguales en lugar de bordes uniformes.",
      "cause": "La escala del objeto no es uniforme (por ejemplo, Z es 4 veces mayor que X e Y).",
      "solution": "Sal a Object Mode, pulsa Ctrl + A -> 'Apply Scale', vuelve a Edit Mode e inténtalo de nuevo."
    },
    {
      "problem": "Mis tablas de madera low poly se ven borrosas o lavadas.",
      "cause": "El sombreado suave está activo en geometría low poly con ángulos marcados.",
      "solution": "Haz clic derecho en el objeto y elige 'Shade Flat' para conseguir ese aspecto low poly nítido."
    }
  ]
};
