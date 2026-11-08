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
  ],
  "tutorial": [
    {
      "heading": "Qué es la densidad de texel",
      "steps": [
        "Un texel es un píxel de textura sobre una superficie 3D. La densidad de texel es cuántos píxeles cubren un área, por ejemplo píxeles por metro.",
        "Una densidad alta se ve nítida; una baja se ve borrosa o pixelada."
      ]
    },
    {
      "heading": "Resolución de la textura",
      "steps": [
        "Una textura más grande (por ejemplo 2048 en vez de 1024 píxeles) en el mismo objeto duplica la densidad en cada dirección.",
        "Las texturas grandes ocupan más memoria, así que úsalas solo donde haga falta."
      ]
    },
    {
      "heading": "Tamaño del objeto",
      "steps": [
        "La misma textura estirada sobre un objeto más grande da menos densidad.",
        "Por eso una pared grande con la misma textura que una caja pequeña se ve más borrosa."
      ]
    },
    {
      "heading": "Los factores principales",
      "steps": [
        "Resolución de la textura, tamaño del objeto, tamaño de las islas UV y lo bien que las islas llenan la textura.",
        "Si cambia cualquiera de ellos, cambia la densidad."
      ]
    },
    {
      "heading": "Elige una densidad objetivo",
      "steps": [
        "Elige una densidad para toda la escena según lo cerca que llegue la cámara.",
        "Los objetos vistos de cerca (un arma en primera persona) necesitan más; los edificios lejanos, menos."
      ]
    },
    {
      "heading": "Ponlo en práctica",
      "steps": [
        "Despliega tus objetos y haz que el tamaño de las islas coincida con su tamaño real con UV ‣ Average Islands Scale.",
        "Usa UV ‣ Pack Islands para llenar la textura y pon un Margin para que las islas no se mezclen.",
        "Comprueba con una textura UV Grid o de cuadros: los cuadrados deben tener un tamaño parecido en todos los objetos."
      ]
    },
    {
      "heading": "Mantén la coherencia",
      "steps": [
        "Cuando hay objetos juntos, mantén una densidad parecida para que ninguno se vea borroso al lado de los demás.",
        "Rompe la regla solo a propósito, por ejemplo para dar más detalle a un objeto protagonista."
      ]
    },
    {
      "heading": "Tamaño de las islas y empaquetado",
      "steps": [
        "Las islas más grandes reciben más píxeles. Agranda las partes que más se miran, como la parte delantera de un modelo.",
        "Un empaquetado ajustado desperdicia menos espacio y da resultados más nítidos."
      ]
    }
  ]
};
