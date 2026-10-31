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
  ]
};
