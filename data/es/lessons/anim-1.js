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
  ],
  "tutorial": [
    {
      "heading": "Crea una armadura",
      "steps": [
        "Una armadura es un esqueleto de huesos que mueve una malla.",
        "Añádela con Shift + A ‣ Armature. Empieza con un solo hueso.",
        "En Armature Properties ‣ Viewport Display, activa In Front para que los huesos se vean dentro de la malla.",
        "Pulsa Tab para editar los huesos. Selecciona la punta de un hueso y pulsa E para extruir uno nuevo, formando una cadena como columna y cuello."
      ]
    },
    {
      "heading": "Nombres y simetría",
      "steps": [
        "Pon a cada hueso un nombre claro, por ejemplo spine, neck, head.",
        "Termina los nombres con .L y .R para los huesos izquierdos y derechos, como arm.L y arm.R. Así Blender sabe cuáles se reflejan.",
        "Usa Armature ‣ Symmetrize después de hacer un lado para crear el otro automáticamente."
      ]
    },
    {
      "heading": "Pesos automáticos",
      "steps": [
        "En Object Mode, selecciona primero la malla, luego la armadura con Shift, y pulsa Ctrl + P ‣ With Automatic Weights.",
        "Blender calcula cuánto mueve cada hueso cada parte de la malla.",
        "Selecciona la armadura, pulsa Ctrl + Tab para entrar en Pose Mode y gira huesos (R) para probar la deformación."
      ],
      "tip": "Si aparece el error 'Bone Heat Weighting: failed to find solution', consulta la lección de skinning para solucionarlo."
    },
    {
      "heading": "Trucos de pesos",
      "steps": [
        "Para corregir deformaciones, cambia la malla al modo Weight Paint. El rojo es influencia total y el azul, ninguna.",
        "Selecciona un hueso (Ctrl + clic en Weight Paint, con la armadura en Pose Mode) y pinta dónde debe mover la malla.",
        "Usa las herramientas Blur y Smooth para suavizar transiciones bruscas."
      ]
    },
    {
      "heading": "Ajustes de Weight Paint",
      "steps": [
        "Weight es el valor que pintas (1 = total, 0 = nada). Radius y Strength funcionan como en otros pinceles.",
        "Activa Auto Normalize para que los pesos de cada vértice sumen 1."
      ]
    },
    {
      "heading": "Rigging rígido",
      "steps": [
        "Los objetos mecánicos (robots, lámparas) no necesitan pesos suaves.",
        "Emparenta cada pieza a un hueso: selecciona la pieza, luego la armadura con Shift, entra en Pose Mode, selecciona el hueso y pulsa Ctrl + P ‣ Bone.",
        "Cada pieza se mueve ahora de forma rígida con su hueso."
      ]
    },
    {
      "heading": "Cinemática inversa",
      "steps": [
        "Con cinemática inversa (IK) mueves una mano o un pie y el brazo o la pierna se doblan solos.",
        "En Pose Mode, selecciona el hueso inferior de la pierna y añade Bone Constraint ‣ Inverse Kinematics. Pon como Target la armadura y un hueso de control del pie, y Chain Length en 2.",
        "Dobla un poco la rodilla hacia delante en Edit Mode para que Blender sepa hacia dónde debe doblarse."
      ]
    }
  ]
};
