// Cuerpo de la lección post-3. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["post-3"] = {
  "overview": "Un modelo que se ve bien en Blender puede llegar a un motor de videojuegos con otro tamaño, mirando hacia otro lado o sin materiales. Una breve rutina de preparación evita casi todo eso. Esta lección explica qué revisar antes de exportar y cuándo usar FBX o glTF.",
  "summary": [
    "Haz primero una copia de seguridad, porque la preparación puede cambiar tu modelo.",
    "Revisa el número de caras, limpia los n-gons y comprueba que el modelo tenga UV.",
    "Usa Object ‣ Apply ‣ All Transforms y coloca el origen donde lo necesites.",
    "Triangula si tu flujo de trabajo lo requiere, por ejemplo con el modificador Triangulate.",
    "FBX se usa mucho con Unity y Unreal. glTF 2.0 va muy bien para web y Godot, y lee materiales Principled BSDF."
  ],
  "troubleshooting": [
    {
      "problem": "Mi modelo es enorme o diminuto en el motor.",
      "cause": "La escala no está aplicada, o las unidades de Blender y el motor no coinciden.",
      "solution": "Aplica All Transforms y revisa los ajustes Scale en las opciones de exportación FBX."
    },
    {
      "problem": "Faltan mis texturas tras importar.",
      "cause": "La mayoría de nodos de shader complejos no pasan a otros programas, y las imágenes pueden no incluirse.",
      "solution": "Hornea los materiales procedurales a texturas de imagen y usa una configuración sencilla de Principled BSDF."
    },
    {
      "problem": "Mi modelo gira alrededor del punto equivocado.",
      "cause": "El origen del objeto no está donde lo espera el motor.",
      "solution": "Define el origen antes de exportar, normalmente en la base o en el centro del objeto."
    }
  ]
};
