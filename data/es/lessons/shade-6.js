// Cuerpo de la lección shade-6. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["shade-6"] = {
  "overview": "Desplegar es solo la mitad del trabajo. Un buen diseño UV aprovecha al máximo la textura y da a cada parte del modelo un nivel de detalle similar. Esa coherencia se llama densidad de texel, y explica por qué algunos modelos de videojuegos se ven nítidos y otros borrosos a su lado.",
  "summary": [
    "La densidad de texel indica cuántos píxeles de textura cubren un área del modelo.",
    "Las texturas más grandes aumentan la densidad. Los objetos más grandes con la misma textura la reducen.",
    "Mantén la densidad constante en objetos que aparecen juntos.",
    "Pack Islands coloca las islas para llenar la textura, y Margin deja espacio entre ellas.",
    "Da más espacio UV solo a las zonas que se verán de cerca."
  ],
  "troubleshooting": [
    {
      "problem": "Una parte de mi modelo se ve mucho más borrosa que otra.",
      "cause": "Sus islas UV son pequeñas en comparación con las demás.",
      "solution": "Usa Average Islands Scale para igualarlas y vuelve a empaquetar."
    },
    {
      "problem": "Los colores se mezclan entre partes en los bordes.",
      "cause": "Las islas están demasiado juntas en la textura.",
      "solution": "Aumenta Margin al usar Pack Islands."
    },
    {
      "problem": "Mi diseño UV desperdicia mucho espacio vacío.",
      "cause": "Las islas están sin girar, con escalas desiguales o en su posición original.",
      "solution": "Usa Pack Islands con la rotación activada y endereza antes las islas largas."
    }
  ]
};
