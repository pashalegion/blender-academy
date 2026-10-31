// Cuerpo de la lección light-3. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["light-3"] = {
  "overview": "Las imágenes HDRI capturan en 360 grados la luz, los reflejos y el color del mundo real con precisión de 32 bits. En esta lección conectarás HDRI gratuitos CC0 de Poly Haven al shader World de Blender, girarás el ángulo del sol, equilibrarás el brillo del fondo y renderizarás con fondo transparente para componer en PNG.",
  "summary": [
    "Ve a la pestaña World Properties -> haz clic en el punto amarillo junto a 'Color' -> selecciona 'Environment Texture'.",
    "Abre un archivo .exr o .hdr descargado de PolyHaven.com.",
    "Gira el HDRI: cambia el Shader Editor al modo 'World', selecciona Environment Texture, pulsa Ctrl + T y ajusta 'Rotation Z' en el nodo Mapping.",
    "Render transparente: en Render Properties -> 'Film' -> marca 'Transparent' para ocultar el fondo HDRI y conservar su luz y sus reflejos.",
    "Usa el nodo Light Path para mostrar un color de fondo propio mientras iluminas con el HDRI."
  ],
  "troubleshooting": [
    {
      "problem": "¡Todo el fondo de la escena se ha vuelto rosa neón!",
      "cause": "Añadiste un nodo Environment Texture sin abrir una imagen, o el archivo HDRI se ha movido o borrado.",
      "solution": "Abre World Properties o el shader de World y haz clic en 'Open' para volver a enlazar tu archivo .hdr o .exr."
    },
    {
      "problem": "No veo el HDRI en la vista 3D mientras modelo.",
      "cause": "La vista está en modo Solid o en Material Preview con las luces de estudio por defecto.",
      "solution": "Cambia al modo Rendered (pulsa 'Z' -> Rendered). En Material Preview, abre el menú de sombreado y marca 'Scene Lights' y 'Scene World'."
    },
    {
      "problem": "El HDRI se ve pixelado en el render final.",
      "cause": "Un HDRI de 1K ilumina muy bien, pero como fondo se ve borroso.",
      "solution": "Activa Render Properties -> Film -> 'Transparent' para renderizar sin fondo, o descarga un HDRI de 8K o 16K para usarlo como fondo directo."
    }
  ]
};
