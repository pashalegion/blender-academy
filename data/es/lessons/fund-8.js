// Cuerpo de la lección fund-8. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["fund-8"] = {
  "overview": "Deja de rehacer las mismas cosas. El Asset Browser convierte tus objetos y materiales en una biblioteca personal que puedes arrastrar a cualquier proyecto. Un asset es simplemente un bloque de datos marcado para reutilizarlo, y una biblioteca de assets es una carpeta registrada en Preferences.",
  "summary": [
    "Abre el Asset Browser cambiando el tipo de editor de cualquier área.",
    "Haz clic derecho en un objeto o material en el Outliner y elige Mark as Asset.",
    "Registra una carpeta como biblioteca en Preferences para que sus assets aparezcan en todos tus proyectos.",
    "Usa catálogos para ordenar los assets en carpetas claras.",
    "Import Method decide qué ocurre al usar un asset, como enlazarlo o añadir una copia."
  ],
  "troubleshooting": [
    {
      "problem": "Mi asset no aparece en el Asset Browser.",
      "cause": "Puede que no esté marcado como asset, o que esté en un archivo sin guardar o en una carpeta que no sea una biblioteca.",
      "solution": "Márcalo como asset, guarda el archivo dentro de una carpeta de biblioteca registrada y actualiza el navegador."
    },
    {
      "problem": "He cambiado un asset, pero los proyectos antiguos no se actualizan.",
      "cause": "Con una copia añadida (Append), cada proyecto conserva su propia versión independiente.",
      "solution": "Elige un método de importación enlazado si quieres que los cambios se apliquen después."
    },
    {
      "problem": "Quiero añadir imágenes, vídeo o sonido como assets y no aparecen.",
      "cause": "Los assets de Blender son bloques de datos, y ahora mismo no admite imágenes, sonidos o vídeos sueltos.",
      "solution": "Guarda esos archivos en una carpeta normal del proyecto, o añádelos a un material u objeto marcado como asset."
    }
  ]
};
