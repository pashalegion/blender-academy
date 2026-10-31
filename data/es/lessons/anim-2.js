// Cuerpo de la lección anim-2. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["anim-2"] = {
  "overview": "El skinning conecta tu malla 3D con la armadura de huesos. Esta lección esencial explica cómo emparentar con pesos automáticos (Ctrl + P -> With Automatic Weights) y cómo usar Weight Paint. Aprenderás cómo los grupos de vértices controlan la deformación y cómo resolver el error más famoso de Blender: \"Bone Heat Weighting: failed to find solution\".",
  "summary": [
    "Orden de emparentado: primero selecciona la malla, DESPUÉS añade la armadura con Shift -> pulsa Ctrl + P -> 'With Automatic Weights'.",
    "Weight Paint: azul = 0 % de influencia, verde = 50 %, rojo = 100 % del hueso activo.",
    "En Pose Mode, rota los huesos para comprobar las deformaciones y cambia a Weight Paint para suavizar los pliegues.",
    "Normalizar pesos: asegúrate de que ningún vértice supere un peso total de 1,0 entre todos los huesos.",
    "Usa la herramienta Gradient y el pincel Smooth para eliminar los estiramientos en axilas y codos."
  ],
  "troubleshooting": [
    {
      "problem": "¡Error: 'Bone Heat Weighting: failed to find solution for one or more bones'!",
      "cause": "La malla tiene geometría non-manifold, piezas sueltas que se cruzan o vértices duplicados.",
      "solution": "1. Selecciona la malla en Edit Mode -> 'A' -> 'M' -> 'By Distance'. 2. Busca aristas non-manifold (Select -> All by Trait -> Non-Manifold). 3. Si sigue fallando, escala temporalmente malla y armadura por 10 (Ctrl + A -> Scale), emparenta con pesos automáticos y vuelve a escalar a 0,1."
    },
    {
      "problem": "¡Al mover el brazo izquierdo se estiran vértices del brazo DERECHO o de la cintura!",
      "cause": "Los pesos automáticos se han extendido a geometría cercana, o los huesos estaban demasiado juntos.",
      "solution": "Entra en Weight Paint, selecciona el grupo de vértices del brazo izquierdo y pinta los vértices no deseados con peso 0, o usa 'Weights' -> 'Clean'."
    },
    {
      "problem": "Los ojos y los dientes salen volando al mover el hueso del cuello.",
      "cause": "Las mallas de ojos y dientes no tienen peso 100 % en el hueso de la cabeza.",
      "solution": "Selecciona la malla de los ojos, ve a Vertex Groups, selecciona 'Head' y haz clic en 'Assign' con Weight = 1,0."
    }
  ]
};
