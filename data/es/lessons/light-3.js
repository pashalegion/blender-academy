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
  ],
  "tutorial": [
    {
      "heading": "Qué es un HDRI",
      "steps": [
        "Un HDRI es una foto de 360 grados que guarda un rango de brillo muy amplio.",
        "Usado como fondo del mundo, ilumina toda la escena con luz, colores y reflejos realistas."
      ]
    },
    {
      "heading": "Dónde encontrar HDRI",
      "steps": [
        "Poly Haven (polyhaven.com) tiene HDRI gratuitos CC0 que puedes usar para cualquier cosa.",
        "Descarga el archivo .hdr o .exr. Con 1K–4K basta para iluminar; usa archivos mayores si el fondo se va a ver nítido."
      ]
    },
    {
      "heading": "Añade un HDRI al mundo",
      "steps": [
        "Abre World Properties (el icono del globo rojo). Haz clic en el circulito junto a Color y elige Environment Texture.",
        "Pulsa Open y elige tu archivo HDRI.",
        "Cambia la vista a Rendered, o a Material Preview con Scene World activado, para verlo."
      ]
    },
    {
      "heading": "Gíralo y ajústalo",
      "steps": [
        "En el Shader Editor, cambia a World. Selecciona el nodo Environment Texture y pulsa Ctrl + T (Node Wrangler) para añadir Mapping.",
        "Cambia Rotation Z en el nodo Mapping para girar el sol a donde quieras.",
        "Cambia Strength en el nodo Background para hacer la luz más fuerte o más débil."
      ]
    },
    {
      "heading": "Luz HDRI con fondo liso",
      "steps": [
        "Puedes iluminar con el HDRI pero mostrar detrás un color liso.",
        "Una forma: en Render Properties ‣ Film, activa Transparent y añade el color de fondo después.",
        "Otra forma: usa un nodo Light Path en los nodos del mundo para mostrar otro color a la cámara."
      ]
    },
    {
      "heading": "Montaje con cúpula",
      "steps": [
        "Para un suelo que reciba sombras, coloca tu modelo sobre un plano grande o una media esfera.",
        "El HDRI sigue iluminando todo, y el suelo da una base a la escena."
      ]
    },
    {
      "heading": "Sombras y su intensidad",
      "steps": [
        "Para que las sombras se vean sobre un fondo transparente, convierte el suelo en Shadow Catcher (Object Properties ‣ Visibility).",
        "Ajusta la fuerza o la rotación del HDRI para hacer las sombras más claras, más oscuras o en otra dirección."
      ]
    }
  ]
};
