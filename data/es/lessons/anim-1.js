// Cuerpo de la lección anim-1. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["anim-1"] = {
  "overview": "Antes de animar un personaje o una máquina necesitas un esqueleto digital (Armature). Aprende a añadir huesos (Shift + A -> Armature), extruir cadenas de huesos en Edit Mode, nombrarlos con los sufijos .L y .R para la simetría automática, entender las relaciones padre-hijo y posar en Pose Mode.",
  "summary": [
    "Shift + A -> Armature -> Single Bone. Activa 'In Front' en Armature Properties -> Viewport Display.",
    "Edit Mode: extruye las puntas de los huesos con 'E' para crear columna, brazos y piernas.",
    "Nombres: añade siempre sufijos de simetría (por ejemplo, 'Arm.L', 'Hand.L') para que Blender pueda reflejar poses.",
    "Pose Mode (Ctrl + Tab): ¡es el único modo en el que se debe animar! Nunca animes posiciones de huesos en Edit Mode.",
    "Cinemática inversa (IK): añade una restricción IK para que, al mover una mano o un pie, se calculen solos el codo y la rodilla."
  ],
  "troubleshooting": [
    {
      "problem": "¡No veo los huesos porque están dentro de la malla del personaje!",
      "cause": "Por defecto, la vista no da prioridad a la armadura.",
      "solution": "Selecciona la armadura -> icono verde del muñeco que corre (datos de Armature) -> 'Viewport Display' -> marca 'In Front'."
    },
    {
      "problem": "¡Al mover el pie, la rodilla se dobla hacia atrás o de lado como si estuviera rota!",
      "cause": "El 'Pole Angle' de la restricción IK es incorrecto, o el esqueleto no tiene la rodilla ligeramente doblada en Edit Mode.",
      "solution": "En Edit Mode, adelanta un poco la articulación de la rodilla para indicar a Blender la dirección natural. En Pose Mode, selecciona la restricción IK y ajusta 'Pole Angle' a 90 o -90 grados."
    },
    {
      "problem": "He movido huesos en Pose Mode y no puedo volver a la pose de reposo.",
      "cause": "Las transformaciones de pose no se han borrado.",
      "solution": "En Pose Mode, selecciona todos los huesos con 'A' y pulsa Alt + G (posición), Alt + R (rotación) y Alt + S (escala)."
    }
  ]
};
