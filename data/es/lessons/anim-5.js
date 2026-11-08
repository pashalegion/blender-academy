// Cuerpo de la lección anim-5. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["anim-5"] = {
  "overview": "Las shape keys guardan versiones distintas de la misma malla y mezclan entre ellas. Son la forma estándar de animar expresiones faciales y bocas, y de corregir zonas problemáticas de un rig. Otros programas las llaman morph targets o blend shapes.",
  "summary": [
    "La clave Basis es la forma de reposo con la que se comparan las demás.",
    "Añade una clave en Object Data Properties ‣ Shape Keys y mueve vértices en Edit Mode para crear la forma nueva.",
    "El valor Value mezcla entre Basis (0) y la forma nueva (1).",
    "Usa claves Relative para formas que se combinan, como expresiones y poses correctivas.",
    "Pon keyframes en Value para animar una clave, y usa drivers para controlarla desde un rig."
  ],
  "troubleshooting": [
    {
      "problem": "Blender no me deja aplicar un modificador a mi malla.",
      "cause": "Por lo general, no se pueden aplicar modificadores a una malla con shape keys.",
      "solution": "Aplica los modificadores antes de crear las claves. Si no, déjalos sin aplicar hasta exportar."
    },
    {
      "problem": "Mis ediciones han cambiado todas las shape keys.",
      "cause": "Has editado Basis o la clave equivocada.",
      "solution": "Selecciona la clave correcta en la lista antes de entrar en Edit Mode, y comprueba que Basis no esté activa."
    },
    {
      "problem": "Una shape key mueve el lado equivocado de la cara.",
      "cause": "La forma no está separada ni reflejada.",
      "solution": "Usa un Vertex Group para limitar la clave a un lado, o la opción de espejo del menú Shape Keys para reflejarla."
    }
  ],
  "tutorial": [
    {
      "heading": "Qué son las shape keys",
      "steps": [
        "Las shape keys guardan distintas formas de la misma malla y mezclan entre ellas, por ejemplo una boca cerrada y otra abierta.",
        "Otros programas las llaman morph targets o blend shapes."
      ]
    },
    {
      "heading": "Añade shape keys",
      "steps": [
        "Selecciona la malla y abre Object Data Properties ‣ Shape Keys. Pulsa + para crear Basis, la forma de reposo.",
        "Pulsa + otra vez para una clave nueva. Selecciónala, pulsa Tab y mueve vértices para crear la forma nueva.",
        "Vuelve a Object Mode y arrastra el Value de la clave entre 0 y 1 para mezclar."
      ],
      "tip": "No edites con Basis seleccionada salvo que quieras cambiar la forma base."
    },
    {
      "heading": "Formas desde una malla nueva",
      "steps": [
        "También puedes crear la forma nueva en una copia de la malla y unirla como shape key.",
        "La copia debe tener exactamente el mismo número y orden de vértices."
      ]
    },
    {
      "heading": "Anima las shape keys",
      "steps": [
        "Pon el ratón sobre el Value de una clave y pulsa I para añadir un keyframe.",
        "Cambia de fotograma, cambia el Value y vuelve a poner un keyframe. La forma ya se anima."
      ]
    },
    {
      "heading": "Esculpe shape keys",
      "steps": [
        "Selecciona una shape key y cambia a Sculpt Mode para esculpirla con pinceles.",
        "Es útil para formas orgánicas como sonrisas y ceños fruncidos."
      ]
    },
    {
      "heading": "Otros ajustes",
      "steps": [
        "Range Min y Max permiten valores por debajo de 0 o por encima de 1 para exagerar.",
        "Mute (la casilla) desactiva una clave. El icono de chincheta muestra solo la clave seleccionada.",
        "Usa el menú junto a la lista para opciones como New Shape from Mix."
      ]
    },
    {
      "heading": "Refleja una shape key",
      "steps": [
        "Crea una forma en un lado y usa la opción de espejo del menú de shape keys para voltearla.",
        "Usa un Vertex Group para limitar una clave a un lado de la cara."
      ]
    },
    {
      "heading": "Copiar a otro objeto y modificadores",
      "steps": [
        "Las shape keys se pueden transferir a una malla parecida con las opciones del menú (las mallas deben coincidir).",
        "Normalmente no se pueden aplicar modificadores a una malla con shape keys, así que aplícalos antes de crear las claves."
      ]
    },
    {
      "heading": "Relativas y absolutas",
      "steps": [
        "Las claves relativas (por defecto) mezclan desde Basis y se pueden combinar; son las mejores para caras.",
        "Si desactivas Relative, las claves se reproducen una tras otra según un tiempo de evaluación, útil para una secuencia de formas."
      ]
    }
  ]
};
