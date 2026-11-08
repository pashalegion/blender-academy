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
  ],
  "tutorial": [
    {
      "heading": "Planifica el estilo low poly",
      "steps": [
        "Low poly significa pocas caras, formas claras y sombreado plano. Piensa en bloques sencillos.",
        "Mira algunas fotos de pozos antiguos antes de empezar: un muro redondo de piedra, dos postes, un tejadillo y un cubo con cuerda."
      ]
    },
    {
      "heading": "Modela el muro de piedra",
      "steps": [
        "Añade un Cylinder (Shift + A ‣ Mesh ‣ Cylinder) y en Adjust Last Operation pon Vertices en unos 10 o 12.",
        "Redúcelo en altura (S, Z) para que sea un anillo bajo y ancho.",
        "En Edit Mode, selecciona la cara superior, pulsa I para el inset y luego E para extruirla hacia abajo y vaciar el pozo.",
        "Borra la cara inferior si nadie la va a ver, para ahorrar geometría."
      ]
    },
    {
      "heading": "Añade detalle a la piedra",
      "steps": [
        "Añade un loop cut horizontal (Ctrl + R) alrededor del muro.",
        "Selecciona algunos vértices al azar y muévelos un poco con G para que las piedras parezcan irregulares y hechas a mano.",
        "Haz cambios pequeños; el encanto del low poly viene de formas ligeramente irregulares."
      ]
    },
    {
      "heading": "Postes y estructura del tejado",
      "steps": [
        "Añade un Cube, escálalo en un poste alto y fino (S, Z y luego S, X) y colócalo a un lado del muro.",
        "Duplícalo con Shift + D y llévalo al otro lado (combínalo con X o Y para mantenerlo alineado).",
        "Añade una viga horizontal entre los postes para el torno de la cuerda."
      ]
    },
    {
      "heading": "El tejado",
      "steps": [
        "Añade un Cube encima de los postes. En Edit Mode, selecciona el bucle superior y escálalo hacia dentro (S, X) para hacer un tejado en punta.",
        "O usa un plano con Solidify para tablas finas.",
        "Repite las tejas con un modificador Array, o con duplicados enlazados (Alt + D) para que al editar una se actualicen las demás."
      ],
      "tip": "Los duplicados enlazados comparten la malla. Para independizar uno después, usa Object ‣ Relations ‣ Make Single User."
    },
    {
      "heading": "Cubo y cuerda",
      "steps": [
        "Haz el cubo con un cilindro pequeño: haz el inset y extruye la cara superior hacia abajo para vaciarlo.",
        "Haz la cuerda con un cilindro fino que cuelgue de la viga, o con una curva con Bevel Depth.",
        "Mantén ambos sencillos; solo tienen que leerse bien de lejos."
      ]
    },
    {
      "heading": "Termina y sombrea",
      "steps": [
        "Haz clic derecho en cada objeto y elige Shade Flat para el aspecto low poly nítido.",
        "Revisa la escala de todo con Object ‣ Apply ‣ Scale antes de añadir colores.",
        "Añade colores sencillos en las siguientes partes de la serie y guarda el archivo."
      ]
    }
  ]
};
