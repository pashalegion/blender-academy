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
  ],
  "tutorial": [
    {
      "heading": "El error",
      "steps": [
        "Al emparentar con Automatic Weights, Blender puede mostrar 'Bone Heat Weighting: failed to find solution for one or more bones'.",
        "Entonces parte de la malla, o toda, no se mueve con los huesos."
      ]
    },
    {
      "heading": "Por qué ocurre",
      "steps": [
        "Los pesos automáticos necesitan una malla limpia y cerrada.",
        "Las causas habituales son vértices duplicados, piezas separadas superpuestas, agujeros y objetos muy pequeños."
      ]
    },
    {
      "heading": "Solución 1: Merge by Distance",
      "steps": [
        "Selecciona la malla, pulsa Tab, selecciona todo (A) y usa M ‣ By Distance para quitar vértices duplicados.",
        "Vuelve a Object Mode y emparenta otra vez con Ctrl + P ‣ With Automatic Weights."
      ]
    },
    {
      "heading": "Solución 2: escala el objeto",
      "steps": [
        "Los modelos muy pequeños suelen fallar. Selecciona la malla y la armadura y escálalas 100 veces (S, 100, Enter).",
        "Aplica la escala (Ctrl + A ‣ Scale), emparenta con pesos automáticos y vuelve a reducir ambos."
      ]
    },
    {
      "heading": "Solución 3: separa piezas sueltas",
      "steps": [
        "Los modelos hechos de muchas piezas superpuestas (ojos, dientes, ropa) suelen fallar juntos.",
        "En Edit Mode usa P ‣ By Loose Parts para separarlas en objetos distintos y emparenta cada una por separado, o une solo las partes limpias."
      ]
    },
    {
      "heading": "Complementos",
      "steps": [
        "Complementos gratuitos y de pago como Surface Heat Diffuse Skinning y Voxel Heat Diffuse Skinning calculan los pesos de otra forma que falla menos.",
        "Instálalos solo si las soluciones integradas no funcionan."
      ]
    },
    {
      "heading": "Solución 4: transfiere los pesos",
      "steps": [
        "Haz una copia sencilla y limpia de la malla, emparéntala con pesos automáticos y copia sus pesos a la malla real.",
        "Usa un modificador Data Transfer (Vertex Data ‣ Vertex Groups) o Weight Paint ‣ Transfer Weights."
      ]
    },
    {
      "heading": "Solución 5: pinta los pesos",
      "steps": [
        "Si los pesos automáticos siguen fallando, píntalos tú en el modo Weight Paint.",
        "Crea un grupo de vértices por hueso (con el mismo nombre que el hueso) y pinta dónde debe influir cada uno.",
        "Prueba a menudo en Pose Mode girando los huesos."
      ]
    }
  ]
};
