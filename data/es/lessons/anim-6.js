// Cuerpo de la lección anim-6. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["anim-6"] = {
  "overview": "Blender no es solo 3D. Grease Pencil es un objeto con el que dibujas, trazo a trazo, dentro del espacio 3D. Sirve para animación 2D tradicional, animación recortada, motion graphics o storyboards. La plantilla 2D Animation te deja dibujar al instante.",
  "summary": [
    "File ‣ New ‣ 2D Animation abre una configuración preparada, con fondo blanco y capas Line y Fill.",
    "Para añadirlo a una escena, usa Add ‣ Grease Pencil ‣ Blank.",
    "Los trazos se crean en Draw Mode y necesitan un keyframe en la línea de tiempo, así que crea uno o activa Auto Key.",
    "Corrige los trazos después en Edit Mode o Sculpt Mode.",
    "Onion Skinning muestra los fotogramas cercanos con transparencia, lo que facilita dibujar un movimiento suave."
  ],
  "troubleshooting": [
    {
      "problem": "No aparece nada cuando dibujo.",
      "cause": "Dibujar necesita un keyframe en la capa activa en el fotograma actual.",
      "solution": "Crea un keyframe o activa Auto Key, y comprueba que la capa esté visible y desbloqueada."
    },
    {
      "problem": "Mi dibujo está en un ángulo extraño o cuesta verlo.",
      "cause": "Los trazos se colocan en el espacio 3D, así que la vista y el plano de dibujo importan.",
      "solution": "Usa la plantilla 2D Animation, que dibuja en el plano frontal (X-Z), y pulsa Numpad 1 para la vista frontal."
    },
    {
      "problem": "Mi dibujo nuevo se ha añadido a lo que tenía en ese fotograma.",
      "cause": "Sigues en el mismo keyframe, así que los trazos se añaden ahí.",
      "solution": "Pasa a otro fotograma con Auto Key activado, o añade un keyframe nuevo antes de dibujar."
    }
  ],
  "tutorial": [
    {
      "heading": "Abre un proyecto 2D",
      "steps": [
        "Usa File ‣ New ‣ 2D Animation. Tendrás un lienzo blanco, un workspace de dibujo y capas listas.",
        "O añade Grease Pencil a cualquier escena con Add ‣ Grease Pencil ‣ Blank."
      ]
    },
    {
      "heading": "Herramientas básicas de dibujo",
      "steps": [
        "En Draw Mode, elige la herramienta Draw y dibuja con el ratón o una tableta.",
        "Cambia el tamaño con F y la fuerza con Shift + F. Elige colores en los ajustes de la herramienta o en la paleta.",
        "Usa Erase para borrar trazos y Fill para colorear formas cerradas."
      ]
    },
    {
      "heading": "Transforma trazos",
      "steps": [
        "Cambia a Edit Mode para seleccionar trazos y puntos y moverlos, girarlos y escalarlos con G, R y S.",
        "En Object Mode puedes mover todo el dibujo."
      ]
    },
    {
      "heading": "Añade y mueve objetos",
      "steps": [
        "Cada objeto Grease Pencil es como una capa de dibujo independiente en el espacio 3D.",
        "Puedes añadir varios objetos (un personaje y un fondo) y moverlos por separado."
      ]
    },
    {
      "heading": "La línea de tiempo",
      "steps": [
        "Dibujar necesita un keyframe. Activa Auto Key (el botón de grabar) para que los dibujos nuevos creen keyframes solos.",
        "Ve a un fotograma posterior y dibuja la siguiente pose. Cada keyframe mantiene un dibujo hasta el siguiente."
      ]
    },
    {
      "heading": "Papel cebolla",
      "steps": [
        "Activa Onion Skinning en las superposiciones para ver versiones tenues de los dibujos anterior y siguiente.",
        "Te ayuda a dibujar fotogramas intermedios suaves."
      ]
    },
    {
      "heading": "Línea temblorosa",
      "steps": [
        "Añade un modificador Noise a los trazos para que las líneas tiemblen un poco en cada fotograma, un aspecto vivo de dibujo a mano (line boil)."
      ]
    },
    {
      "heading": "Rotoscopia",
      "steps": [
        "La rotoscopia consiste en calcar sobre un vídeo. Importa un vídeo o una imagen como referencia detrás del dibujo.",
        "Dibuja encima fotograma a fotograma y luego oculta la referencia."
      ]
    },
    {
      "heading": "Importa imágenes y vídeo",
      "steps": [
        "Usa Add ‣ Image ‣ Reference (o arrastra una imagen) para colocar imágenes de referencia.",
        "El vídeo se puede añadir como fondo de cámara o como secuencia de imágenes."
      ]
    },
    {
      "heading": "Exporta",
      "steps": [
        "Define el rango de fotogramas y el formato en Output Properties y renderiza la animación con Render ‣ Render Animation (Ctrl + F12)."
      ]
    }
  ]
};
