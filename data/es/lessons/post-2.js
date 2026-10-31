// Cuerpo de la lección post-2. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["post-2"] = {
  "overview": "Blender incluye un editor de vídeo completo llamado Video Sequencer. Colocas clips, sonido, imágenes y texto como tiras en una línea de tiempo, así que puedes montar tu animación y exportarla sin otro programa.",
  "summary": [
    "File ‣ New ‣ Video Editing abre una disposición pensada para editar.",
    "Añade los clips como tiras. Ajusta la frecuencia de fotogramas y la resolución de la escena a las de tu material.",
    "Las tiras están en canales, y los canales superiores se ven encima de los inferiores.",
    "Pulsa K en el cabezal para cortar las tiras seleccionadas y borra lo que no necesites.",
    "Ajusta End Frame al final de tu montaje y usa Render Animation para exportar."
  ],
  "troubleshooting": [
    {
      "problem": "El vídeo y el audio se desincronizan.",
      "cause": "La frecuencia de fotogramas de la escena no coincide con la del material.",
      "solution": "Ajusta la frecuencia de la escena a la del clip antes de empezar a cortar."
    },
    {
      "problem": "Mi exportación termina antes o tiene negro al final.",
      "cause": "End Frame no coincide con el final del montaje.",
      "solution": "Pon End Frame en el último fotograma de tu tira final."
    },
    {
      "problem": "La exportación muestra la escena 3D y no mi montaje.",
      "cause": "El render no está usando el secuenciador.",
      "solution": "Activa Sequencer en Output Properties ‣ Post Processing."
    }
  ]
};
