// Cuerpo de la lección light-1. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["light-1"] = {
  "overview": "Cycles es el motor de trazado de rayos de Blender, y Eevee es su motor en tiempo real. Aprende cuándo elegir cada uno y cómo optimizar los ajustes de render para ganar velocidad y calidad. En Blender 5.2 el motor se llama Eevee en la interfaz; en vídeos antiguos puede aparecer como Eevee Next.",
  "summary": [
    "Cambia el Render Engine en Render Properties: Cycles para fotorrealismo, EEVEE para velocidad en tiempo real.",
    "En Cycles, activa GPU Compute en Render Properties y configura CUDA / OptiX / HIP en las preferencias de System.",
    "Activa Denoising: usa OptiX (NVIDIA) u OpenImageDenoise (CPU/AMD) para limpiar el ruido con pocas muestras (por ejemplo, 128-256).",
    "Gestión de color: cambia 'View Transform' de Standard a 'AgX' (o Filmic) con 'High Contrast' para lograr un rango dinámico cinematográfico.",
    "Pulsa F12 para renderizar el fotograma final y Ctrl + F12 para renderizar una animación."
  ],
  "troubleshooting": [
    {
      "problem": "¡Cycles tarda 30 minutos por fotograma y el ventilador va a tope!",
      "cause": "Las muestras son innecesariamente altas (por ejemplo, 4096) o estás renderizando con la CPU en vez de la GPU.",
      "solution": "En Edit -> Preferences -> System, selecciona tu GPU en OptiX o CUDA. En Render Properties, pon Max Samples en 256 o 512 y activa 'Denoise'."
    },
    {
      "problem": "Mi render solo muestra un vacío gris o una imagen negra.",
      "cause": "Falta la cámara, está desactivada para el render (icono de cámara en el Outliner) o no hay luces en la escena.",
      "solution": "Revisa el Outliner, arriba a la derecha: comprueba que la cámara esté activada. Pulsa Numpad 0 para ver lo que ve la cámara activa y añade una luz."
    },
    {
      "problem": "Las zonas brillantes se ven planas, lavadas y sin color.",
      "cause": "View Transform está en 'Standard', que recorta las luces altas a blanco puro.",
      "solution": "Ve a Render Properties -> Color Management y elige una transformación como AgX. Consulta el manual de Blender 5.2 para ver los nombres y controles actuales."
    }
  ],
  "tutorial": [
    {
      "heading": "Dos motores de render",
      "steps": [
        "Blender tiene dos motores principales: Cycles y Eevee.",
        "Cycles es un trazador de rayos: sigue los rayos de luz para lograr luz, sombras y reflejos realistas, pero tarda más.",
        "Eevee es en tiempo real: es muy rápido y va bien para vistas previas, animación y estilos no realistas, pero usa atajos menos precisos."
      ]
    },
    {
      "heading": "Cambia de motor",
      "steps": [
        "Abre Render Properties (el icono de la parte trasera de una cámara) y cambia Render Engine.",
        "Pulsa Z ‣ Rendered en la vista para ver el resultado en directo."
      ]
    },
    {
      "heading": "Compáralos en la misma escena",
      "steps": [
        "Renderiza la misma escena en los dos motores y compara rebotes de luz, sombras suaves, vidrio y reflejos.",
        "El Eevee más reciente (llamado Eevee Next en algunos vídeos antiguos) añade opciones de ray tracing y mejores sombras, así que la diferencia es menor que antes."
      ]
    },
    {
      "heading": "Cuándo usar cada uno",
      "steps": [
        "Usa Cycles para imágenes realistas, fotos de producto y todo lo que tenga vidrio o luz compleja.",
        "Usa Eevee para vistas previas rápidas, motion graphics, estilos no realistas y animaciones largas en ordenadores modestos.",
        "Muchos artistas preparan la escena en Eevee y hacen el render final en Cycles."
      ],
      "tip": "En Cycles, usa la GPU si tienes una compatible: Edit ‣ Preferences ‣ System ‣ Cycles Render Devices."
    }
  ]
};
