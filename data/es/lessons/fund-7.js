// Cuerpo de la lección fund-7. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["fund-7"] = {
  "overview": "Las escenas se desordenan enseguida. El Outliner lista todo lo que hay en tu archivo, y las colecciones agrupan objetos para ocultarlos, seleccionarlos o renderizarlos juntos. Esta lección también explica cómo reutilizar trabajo: Append copia datos de otro archivo .blend, mientras que Link mantiene una conexión viva con él.",
  "summary": [
    "Un objeto puede pertenecer a varias colecciones, y todos los objetos de una escena pertenecen a la colección de escena.",
    "Usa Move to Collection para enviar objetos seleccionados a una colección, y crea colecciones nuevas según las necesites.",
    "Pon nombre a objetos y colecciones mientras trabajas. Tardas segundos y ahorras mucho tiempo de búsqueda.",
    "Append (File ‣ Append) crea una copia local independiente que puedes editar libremente.",
    "Link (File ‣ Link) hace referencia a otro archivo, y sus cambios aparecen aquí la próxima vez que abras este archivo. Los elementos enlazados muestran un icono de cadena en el Outliner."
  ],
  "troubleshooting": [
    {
      "problem": "He enlazado un personaje, pero no puedo moverlo ni editarlo.",
      "cause": "Los datos enlazados son de solo lectura en el archivo actual.",
      "solution": "Crea un Library Override para tener una versión local editable que siga conectada al original. Usa Append si no necesitas esa conexión."
    },
    {
      "problem": "Los objetos enlazados han desaparecido o se han vuelto rosas al mover mis archivos.",
      "cause": "Link guarda una ruta al archivo de origen, y el rosa suele indicar que Blender no encuentra una textura.",
      "solution": "Devuelve los archivos a su sitio o usa File ‣ External Data para buscar lo que falta. Usa rutas relativas y guarda el proyecto en una sola carpeta."
    },
    {
      "problem": "Append o Link no pueden leer un archivo .blend.",
      "cause": "No se puede enlazar ni añadir desde un archivo guardado con una versión mucho más nueva de Blender.",
      "solution": "Abre el archivo en la versión nueva, o actualiza tu versión de Blender."
    }
  ],
  "tutorial": [
    {
      "heading": "El Outliner",
      "steps": [
        "El Outliner (arriba a la derecha) lista todos los objetos de la escena, agrupados en colecciones.",
        "Haz clic en un nombre para seleccionar el objeto. Ctrl + clic añade a la selección.",
        "Haz doble clic en un nombre para renombrarlo. En la vista 3D también puedes pulsar F2 para renombrar el objeto activo.",
        "Despliega un objeto con la flechita para ver su malla, modificadores y materiales."
      ]
    },
    {
      "heading": "Ocultar, mostrar y desactivar",
      "steps": [
        "El icono del ojo oculta un objeto en la vista. En la vista, H oculta lo seleccionado y Alt + H vuelve a mostrar todo.",
        "Abre el menú Filter (el embudo) del Outliner para mostrar más opciones, como la cámara (render sí o no) y la flecha (seleccionable o no).",
        "Desactivar la selección es útil para fondos que no quieres pulsar por accidente."
      ]
    },
    {
      "heading": "Colecciones",
      "steps": [
        "Las colecciones son como carpetas para objetos. Toda escena empieza con una llamada Collection.",
        "Haz clic derecho en el Outliner y elige New Collection para crear una. Ponle un nombre claro, como Muebles o Luces.",
        "Arrastra objetos a una colección para moverlos, o selecciónalos en la vista y pulsa M para enviarlos a una colección.",
        "La casilla junto a una colección la excluye por completo de la view layer; el ojo solo la oculta.",
        "Un objeto puede estar en varias colecciones. Todos los objetos de la escena también pertenecen a la Scene Collection principal."
      ],
      "tip": "Pon nombres mientras trabajas. Con decenas de objetos, nombres como Cube.047 hacen la escena muy difícil de manejar."
    },
    {
      "heading": "Organiza una escena real",
      "steps": [
        "Agrupa los objetos por función: entorno, personajes, objetos, luces y cámaras.",
        "Oculta las colecciones en las que no trabajas para que la vista sea rápida y clara.",
        "Usa Shift + clic en el ojo de una colección para ocultar o mostrar todo su contenido a la vez."
      ]
    },
    {
      "heading": "Append desde otro archivo",
      "steps": [
        "Append copia datos de otro archivo .blend en el actual.",
        "Ve a File ‣ Append y elige el otro archivo .blend.",
        "Abre una carpeta interna, como Object o Material, elige lo que quieras y haz clic en Append.",
        "La copia es totalmente tuya: editarla no cambia el archivo original."
      ]
    },
    {
      "heading": "Link desde otro archivo",
      "steps": [
        "Link crea una referencia a datos de otro archivo .blend en lugar de una copia. Ve a File ‣ Link.",
        "Los elementos enlazados muestran un icono de cadena en el Outliner y no se pueden editar directamente.",
        "Si alguien actualiza el archivo de origen, el cambio aparece en el tuyo la próxima vez que lo abras. Los equipos lo usan para personajes y objetos compartidos.",
        "Para editar un elemento enlazado sin perder la conexión, crea un Library Override (haz clic derecho en el Outliner y busca en Library Override)."
      ],
      "tip": "Guarda los archivos enlazados en la misma carpeta del proyecto y no los renombres ni los muevas, o los enlaces se romperán."
    }
  ]
};
