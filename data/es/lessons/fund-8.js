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
  ],
  "tutorial": [
    {
      "heading": "Qué es el Asset Browser",
      "steps": [
        "El Asset Browser es una biblioteca de objetos, materiales, grupos de nodos y poses reutilizables que puedes arrastrar a cualquier proyecto.",
        "Un asset es un bloque de datos normal (como un objeto o un material) que has marcado como asset.",
        "Una biblioteca de assets es una carpeta del ordenador que Blender conoce."
      ]
    },
    {
      "heading": "Abre el Asset Browser",
      "steps": [
        "Cambia cualquier área al Asset Browser con el menú Editor Type de su esquina superior izquierda. Un buen sitio es la Timeline de abajo; arrastra su borde superior para agrandarla.",
        "A la izquierda eliges la biblioteca. Current File muestra los assets guardados en el archivo abierto."
      ]
    },
    {
      "heading": "Marca algo como asset",
      "steps": [
        "En el Outliner, haz clic derecho en un objeto o material y elige Mark as Asset.",
        "Aparecerá en el Asset Browser, en Current File.",
        "Blender crea una pequeña imagen de vista previa. Puedes actualizarla desde los ajustes del asset en la barra lateral del navegador."
      ]
    },
    {
      "heading": "Crea tu propia biblioteca",
      "steps": [
        "Crea una carpeta para tus assets, por ejemplo Documentos/Blender Assets.",
        "Abre Edit ‣ Preferences ‣ File Paths, busca Asset Libraries, pulsa + y elige esa carpeta.",
        "Guarda dentro de esa carpeta los archivos .blend con tus assets marcados. Así cualquier proyecto podrá usarlos desde el menú de bibliotecas."
      ]
    },
    {
      "heading": "Organiza con catálogos",
      "steps": [
        "Los catálogos son carpetas dentro de la biblioteca, como Muebles, Rocas o Metales.",
        "Usa el botón + de la lista de catálogos para crear uno y arrastra los assets encima.",
        "Unos buenos catálogos hacen que las bibliotecas grandes sean rápidas de consultar."
      ]
    },
    {
      "heading": "Usa assets en tus escenas",
      "steps": [
        "Arrastra un asset del navegador a la vista 3D. Los materiales se pueden soltar directamente sobre un objeto.",
        "Import Method (en la cabecera del navegador) decide qué pasa: Link mantiene la conexión con la biblioteca, Append hace una copia independiente y Append (Reuse Data) evita duplicar materiales y texturas.",
        "Para cambiar un asset, abre el archivo .blend donde está guardado, edítalo allí y guarda."
      ],
      "tip": "Guarda el archivo antes de marcar assets. Los archivos sin guardar no pueden compartir sus assets con otros proyectos."
    }
  ]
};
