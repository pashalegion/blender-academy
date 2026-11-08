// Cuerpo de la lección fund-3. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["fund-3"] = {
  "overview": "Este curso completo en español te lleva de principio a fin: instalación, interfaz, modelado de una taza, un plato, un donut y un croissant, partículas, materiales, iluminación y render. Fue grabado con Blender 4.5. Blender 5.2 es la versión LTS actual; los procesos básicos siguen siendo válidos, y puedes consultar el manual de 5.2 si un control ha cambiado de sitio.",
  "summary": [
    "El vídeo es largo, así que divídelo en sesiones. Usa los capítulos de YouTube para retomarlo donde lo dejaste.",
    "Guarda versiones sucesivas del archivo .blend sobre todo antes de usar modificadores, editar UV o preparar partículas y nodos.",
    "Los recursos de la descripción del vídeo son una ayuda opcional para aprender.",
    "Si un menú o panel es distinto en 5.2, busca el nombre de la función en el manual de esa versión."
  ],
  "troubleshooting": [
    {
      "problem": "La interfaz del vídeo no coincide exactamente con Blender 5.2.",
      "cause": "El curso se grabó con Blender 4.5 y algunos detalles han cambiado desde entonces.",
      "solution": "Busca el nombre de la herramienta en el manual de Blender 5.2, enlazado más abajo."
    },
    {
      "problem": "Me falta una textura o un recurso del curso.",
      "cause": "Algunos recursos se descargan aparte y no forman parte del vídeo.",
      "solution": "Revisa los enlaces de la descripción del vídeo. Vuelve a conectar los archivos perdidos con File -> External Data -> Find Missing Files."
    },
    {
      "problem": "No veo los vértices que hay detrás de las caras delanteras en Edit Mode.",
      "cause": "El sombreado sólido oculta la geometría que queda detrás.",
      "solution": "Pulsa Alt + Z para activar el modo X-Ray. Así podrás seleccionar vértices delanteros y traseros con la selección de caja (B)."
    }
  ],
  "tutorial": [
    {
      "heading": "Parte 1: Lo básico",
      "steps": [
        "Empieza un archivo General nuevo y borra el cubo por defecto (selecciónalo y pulsa X).",
        "Añade la forma del donut con Shift + A ‣ Mesh ‣ Torus.",
        "En el panel Adjust Last Operation ajusta el tamaño y el número de segmentos.",
        "Practica la navegación y guarda el archivo con un nombre claro."
      ],
      "tip": "El curso es largo, así que divídelo en sesiones y guarda una versión nueva del archivo al terminar cada parte."
    },
    {
      "heading": "Parte 2: Modelado básico",
      "steps": [
        "Añade un modificador Subdivision Surface para que el toroide se vea suave.",
        "En Edit Mode activa Proportional Editing (O) y mueve algunos vértices para que el donut parezca hecho a mano.",
        "Duplica la mitad superior de las caras para el glaseado: selecciónalas, pulsa Shift + D y luego P ‣ Selection para separarlas en otro objeto.",
        "Da grosor al glaseado con un modificador Solidify y pégalo al donut con un modificador Shrinkwrap."
      ]
    },
    {
      "heading": "Parte 3: Modelado orgánico",
      "steps": [
        "Haz goteos en el glaseado extruyendo (E) hacia abajo aristas del borde.",
        "Usa pinceles de Sculpt Mode, como Grab y Smooth, para que el glaseado se vea suave y natural.",
        "Comprueba desde distintos ángulos que las formas sean creíbles por todos lados."
      ]
    },
    {
      "heading": "Parte 4: Materiales",
      "steps": [
        "Abre el workspace Shading para ver el Shader Editor.",
        "Haz clic en New para dar un material propio al donut y al glaseado.",
        "Ajusta Base Color y Roughness en el nodo Principled BSDF. El glaseado algo brillante y la masa mate.",
        "Usa Subsurface para un aspecto más suave y comestible en la masa."
      ]
    },
    {
      "heading": "Parte 5: Texturizado",
      "steps": [
        "Añade variación de color para que el donut no parezca de plástico, por ejemplo un anillo más claro en el centro.",
        "Usa texturas procedurales como Noise Texture conectada a un Color Ramp para mezclar dos colores.",
        "Mira el resultado en Material Preview o en modo Rendered (menú Z)."
      ]
    },
    {
      "heading": "Parte 6: Despliegue UV",
      "steps": [
        "Algunas texturas necesitan un mapa UV para envolver bien el modelo.",
        "En Edit Mode selecciona todo y despliega (U ‣ Unwrap). Comprueba el resultado en el UV Editor.",
        "Ajusta las costuras donde la textura se estire o se vea una unión."
      ]
    },
    {
      "heading": "Parte 7: Dispersar los sprinkles",
      "steps": [
        "Modela un sprinkle (un cilindro pequeño y alargado) y crea algunas variantes de color.",
        "Pon los sprinkles en su propia colección.",
        "En el glaseado, usa Geometry Nodes para distribuir puntos por la superficie superior y colocar instancias de sprinkles en ellos.",
        "Varía al azar la rotación y la escala para que no haya dos iguales."
      ]
    },
    {
      "heading": "Parte 8: Iluminación y render",
      "steps": [
        "Coloca la cámara con una buena composición: Numpad 0 para mirar por ella y Lock Camera to View en la barra lateral para ajustarla.",
        "Añade luces, por ejemplo una luz de área lateral, o usa un HDRI en World para una luz natural.",
        "Elige Cycles en Render Properties para un resultado realista y pulsa F12 para renderizar.",
        "Guarda la imagen desde la ventana de render con Image ‣ Save As."
      ]
    }
  ]
};
