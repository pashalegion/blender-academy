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
  ],
  "tutorial": [
    {
      "heading": "La interfaz",
      "steps": [
        "Usa File ‣ New ‣ Video Editing. El Sequencer muestra una línea de tiempo con canales y una vista previa encima.",
        "Cada archivo de medios se convierte en una tira (strip) en un canal."
      ]
    },
    {
      "heading": "Añade vídeos",
      "steps": [
        "Usa Add ‣ Movie (o arrastra un vídeo). El vídeo y su sonido llegan como tiras separadas.",
        "Desde el mismo menú Add se añaden imágenes, sonido, color y texto."
      ]
    },
    {
      "heading": "Frecuencia y resolución",
      "steps": [
        "Ajusta el proyecto a tu material: define la frecuencia de fotogramas y la resolución en Output Properties.",
        "Blender puede preguntar si adapta la escena al vídeo al añadirlo; acepta."
      ]
    },
    {
      "heading": "Navega y selecciona",
      "steps": [
        "Usa la rueda para hacer zoom, Ctrl + rueda para moverte a izquierda y derecha, y pulsa Home para verlo todo.",
        "Haz clic en una tira para seleccionarla; arrastra para selección de caja; Shift + clic añade a la selección."
      ]
    },
    {
      "heading": "Canales",
      "steps": [
        "Los canales son filas. Las tiras de canales superiores se ven encima de las inferiores.",
        "Usa los canales como capas: el vídeo en uno, los títulos encima y la música debajo."
      ]
    },
    {
      "heading": "Mueve, recorta, corta y borra",
      "steps": [
        "Arrastra una tira para moverla. Arrastra sus bordes para recortar el principio o el final.",
        "Coloca el cabezal y pulsa K para cortar ahí las tiras seleccionadas.",
        "Selecciona un trozo y pulsa X o Supr para quitarlo."
      ]
    },
    {
      "heading": "Transforma y recorta la imagen",
      "steps": [
        "Selecciona una tira de vídeo y usa la Sidebar (N) ‣ panel Strip para moverla, escalarla, girarla o recortarla."
      ]
    },
    {
      "heading": "Audio",
      "steps": [
        "Cambia Volume en los ajustes de la tira de sonido. Puedes animar el volumen con keyframes para hacer fundidos."
      ]
    },
    {
      "heading": "Tiras de color y texto",
      "steps": [
        "Add ‣ Color crea un fondo liso. Add ‣ Text crea un título.",
        "Edita el texto, el tamaño de letra y la posición en la Sidebar."
      ]
    },
    {
      "heading": "Fundidos",
      "steps": [
        "Usa Add ‣ Fades para que el vídeo seleccionado aparezca y desaparezca con un fundido.",
        "Para el audio, pon keyframes de Volume de 0 a 1 al principio y al revés al final."
      ]
    },
    {
      "heading": "Define el final y exporta",
      "steps": [
        "Pon el fotograma End de la escena en el último fotograma de tu montaje.",
        "En Output Properties, elige FFmpeg Video con contenedor MPEG-4 y códec H.264, y define la carpeta de salida.",
        "Usa Render ‣ Render Animation (Ctrl + F12) para exportar."
      ]
    }
  ]
};
