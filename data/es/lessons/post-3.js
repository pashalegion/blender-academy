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
  ],
  "tutorial": [
    {
      "heading": "Haz primero una copia",
      "steps": [
        "Guarda una copia del archivo antes de prepararlo para exportar. Algunos pasos (como triangular) cambian la malla."
      ]
    },
    {
      "heading": "Revisa el número de caras",
      "steps": [
        "Activa Statistics en Viewport Overlays para ver el número de caras y triángulos.",
        "Los motores de videojuegos prefieren modelos ligeros, así que quita caras ocultas o innecesarias."
      ]
    },
    {
      "heading": "Arregla los n-gons",
      "steps": [
        "Las caras de más de cuatro lados pueden triangularse mal en un motor.",
        "Encuéntralas con Select ‣ Select All by Trait ‣ Faces by Sides (más de 4) y arréglalas con el cuchillo o conectando vértices (J)."
      ]
    },
    {
      "heading": "Despliegue UV",
      "steps": [
        "Cada modelo necesita un mapa UV limpio para sus texturas. Despliégalo y revisa que no haya estiramientos."
      ]
    },
    {
      "heading": "Coloca el origen",
      "steps": [
        "El origen es el punto alrededor del que el objeto se mueve y gira en el motor.",
        "Ponlo en la base o el centro: por ejemplo, Object ‣ Set Origin ‣ Origin to 3D Cursor tras poner el cursor abajo."
      ]
    },
    {
      "heading": "Aplica las transformaciones",
      "steps": [
        "Usa Object ‣ Apply ‣ All Transforms para que el motor reciba la escala y la rotación correctas."
      ]
    },
    {
      "heading": "Triangula",
      "steps": [
        "Los motores lo convierten todo en triángulos igualmente. Si lo haces tú (modificador Triangulate o Ctrl + T en Edit Mode), controlas cómo se dividen las caras."
      ]
    },
    {
      "heading": "FBX para Unity y Unreal",
      "steps": [
        "Usa File ‣ Export ‣ FBX. Activa Selected Objects si solo quieres una parte de la escena.",
        "Revisa las opciones de escala y ejes; Unity y Unreal tienen ajustes recomendados.",
        "Importa en el motor y comprueba tamaño, rotación y materiales."
      ]
    },
    {
      "heading": "glTF para Godot",
      "steps": [
        "Usa File ‣ Export ‣ glTF 2.0 y elige .glb para guardarlo todo en un solo archivo.",
        "glTF lee directamente los materiales Principled BSDF y las texturas, y Godot los admite bien."
      ]
    }
  ]
};
