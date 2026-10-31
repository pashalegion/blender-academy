// Datos de referencia en español: atajos, complementos, recursos, glosario y logros.
window.BLENDER_REFERENCE = {
  "shortcuts": [
    {
      "category": "Navegación y vista 3D",
      "items": [
        {
          "key": "MMB (botón central)",
          "desc": "Orbitar la vista 3D"
        },
        {
          "key": "Shift + MMB",
          "desc": "Desplazar la vista"
        },
        {
          "key": "Rueda del ratón",
          "desc": "Acercar y alejar"
        },
        {
          "key": "Numpad .",
          "desc": "Encuadrar el objeto seleccionado"
        },
        {
          "key": "Numpad 1 / 3 / 7",
          "desc": "Vistas ortográficas frontal, derecha y superior"
        },
        {
          "key": "Numpad 0",
          "desc": "Cambiar a la vista de cámara"
        },
        {
          "key": "` (acento grave)",
          "desc": "Menú circular de vistas"
        },
        {
          "key": "Z",
          "desc": "Menú circular de sombreado (Wire, Solid, Material, Render)"
        },
        {
          "key": "Alt + Z",
          "desc": "Activar o desactivar X-Ray"
        }
      ]
    },
    {
      "category": "Manipular objetos",
      "items": [
        {
          "key": "G",
          "desc": "Mover"
        },
        {
          "key": "R",
          "desc": "Rotar"
        },
        {
          "key": "S",
          "desc": "Escalar"
        },
        {
          "key": "X / Y / Z",
          "desc": "Limitar la transformación a un eje"
        },
        {
          "key": "Shift + X / Y / Z",
          "desc": "Limitar a un plano (excluye el eje)"
        },
        {
          "key": "Ctrl + A",
          "desc": "Aplicar transformaciones (¡CLAVE: aplica la escala!)"
        },
        {
          "key": "Alt + G / R / S",
          "desc": "Restablecer posición, rotación o escala"
        },
        {
          "key": "Shift + D",
          "desc": "Duplicar el objeto"
        },
        {
          "key": "Alt + D",
          "desc": "Duplicado enlazado (comparte la malla)"
        },
        {
          "key": "X o Supr",
          "desc": "Borrar el objeto seleccionado"
        }
      ]
    },
    {
      "category": "Edit Mode (modelado)",
      "items": [
        {
          "key": "Tab",
          "desc": "Cambiar entre Object Mode y Edit Mode"
        },
        {
          "key": "1 / 2 / 3",
          "desc": "Selección de vértices, aristas o caras"
        },
        {
          "key": "E",
          "desc": "Extruir la geometría seleccionada"
        },
        {
          "key": "I",
          "desc": "Inset de cara"
        },
        {
          "key": "Ctrl + B",
          "desc": "Biselar aristas o vértices"
        },
        {
          "key": "Ctrl + R",
          "desc": "Loop Cut and Slide"
        },
        {
          "key": "K",
          "desc": "Herramienta Knife (cortar aristas a mano)"
        },
        {
          "key": "F",
          "desc": "Rellenar una cara entre vértices o aristas"
        },
        {
          "key": "M",
          "desc": "Menú para unir vértices ('By Distance' quita duplicados)"
        },
        {
          "key": "Shift + N",
          "desc": "Recalcular normales hacia fuera (arregla sombras oscuras)"
        },
        {
          "key": "O",
          "desc": "Activar o desactivar la edición proporcional"
        },
        {
          "key": "Alt + clic izquierdo",
          "desc": "Seleccionar un bucle de aristas o caras"
        }
      ]
    },
    {
      "category": "Sombreado y nodos",
      "items": [
        {
          "key": "Ctrl + Shift + T",
          "desc": "Node Wrangler: montar texturas PBR automáticamente"
        },
        {
          "key": "Ctrl + Shift + clic",
          "desc": "Node Wrangler: vista previa con nodo Viewer"
        },
        {
          "key": "Ctrl + T",
          "desc": "Node Wrangler: añadir Texture Coordinate + Mapping"
        },
        {
          "key": "F3",
          "desc": "Búsqueda global de operadores y comandos"
        },
        {
          "key": "F12",
          "desc": "Renderizar el fotograma actual"
        },
        {
          "key": "Ctrl + F12",
          "desc": "Renderizar la animación"
        }
      ]
    }
  ],
  "addons": [
    {
      "id": "node-wrangler",
      "name": "Node Wrangler",
      "category": "Sombreado y texturizado",
      "icon": "⚡",
      "whyYouNeedIt": "El complemento más esencial de Blender. Sin él, preparar materiales PBR lleva mucho más tiempo. Automatiza conjuntos de texturas completos, da vistas previas de nodos al instante y conecta rápido.",
      "howToEnable": "Edit -> Preferences -> Add-ons -> busca 'Node Wrangler' -> marca la casilla.",
      "keyShortcuts": [
        "Ctrl + Shift + T: Auto-setup full PBR texture sets (select Albedo, Roughness, Normal, etc.)",
        "Ctrl + Shift + Left Click: Instant Viewer node to preview any individual node output",
        "Ctrl + T: Instantly add Texture Coordinate and Mapping nodes to any texture",
        "Alt + Right Click Drag: Lazy connect two nodes with a line"
      ],
      "docUrl": "https://docs.blender.org/manual/es/5.2/addons/node/node_wrangler.html",
      "downloadUrl": null,
      "source": "Bundled",
      "sourceNote": "El manual de 5.2 indica que este complemento viene incluido en Blender."
    },
    {
      "id": "loop-tools",
      "name": "LoopTools",
      "category": "Modelado",
      "icon": "⭕",
      "whyYouNeedIt": "¡Convierte cualquier selección desordenada de vértices en un círculo perfecto con un clic! También une bucles irregulares, aplana caras y reparte la separación de las aristas.",
      "howToEnable": "Edit -> Preferences -> Add-ons -> busca 'LoopTools' -> marca la casilla.",
      "keyShortcuts": [
        "Right Click in Edit Mode -> LoopTools -> Circle (makes perfect circular holes)",
        "Right Click -> LoopTools -> Space (evens out spacing between vertices)",
        "Right Click -> LoopTools -> Bridge (bridges two separate edge loops with quads)",
        "Right Click -> LoopTools -> Relax (smooths out topology without losing overall shape)"
      ],
      "docUrl": "https://docs.blender.org/manual/es/5.2/addons/index.html",
      "downloadUrl": null,
      "source": "Unconfirmed",
      "sourceNote": "La página de este complemento en 5.2 devolvió un error 404. Compruébalo en Preferences → Add-ons."
    },
    {
      "id": "bool-tool",
      "name": "BoolTool",
      "category": "Modelado",
      "icon": "✂️",
      "whyYouNeedIt": "Potencia las operaciones booleanas. En lugar de añadir modificadores, ajustar objetivos y aplicarlos a mano, cortas formas con atajos en medio segundo.",
      "howToEnable": "Edit -> Preferences -> Add-ons -> busca 'BoolTool' -> marca la casilla.",
      "keyShortcuts": [
        "Ctrl + Shift + '-' (Numpad Minus): Auto Difference Cut",
        "Ctrl + Shift + '+' (Numpad Plus): Auto Union (fuses shapes together)",
        "Ctrl + Shift + '*' (Numpad Multiply): Auto Intersect",
        "Ctrl + Shift + B: Open BoolTool interactive pie menu"
      ],
      "docUrl": "https://docs.blender.org/manual/es/5.2/addons/index.html",
      "downloadUrl": null,
      "source": "Unconfirmed",
      "sourceNote": "La página de este complemento en 5.2 devolvió un error 404. Su estado en 5.2 no está confirmado."
    },
    {
      "id": "images-as-planes",
      "name": "Images as Planes",
      "category": "Flujo de trabajo",
      "icon": "🖼️",
      "whyYouNeedIt": "Importa imágenes 2D, arte conceptual, dibujos de referencia o texturas con transparencia sobre un plano 3D con la proporción correcta y el shader preparado.",
      "howToEnable": "Edit -> Preferences -> Add-ons -> busca 'Images as Planes' -> marca la casilla.",
      "keyShortcuts": [
        "Shift + A -> Image -> 'Images as Planes'",
        "Enable 'Use Alpha' in the file browser sidebar for transparent PNG cutouts"
      ],
      "docUrl": "https://docs.blender.org/manual/es/5.2/addons/index.html",
      "downloadUrl": null,
      "source": "Unconfirmed",
      "sourceNote": "La página de este complemento en 5.2 devolvió un error 404. Compruébalo en Preferences → Add-ons."
    },
    {
      "id": "extra-objects",
      "name": "Extra Mesh & Curve Objects",
      "category": "Modelado",
      "icon": "⚙️",
      "whyYouNeedIt": "Añade decenas de primitivas listas para usar en Shift + A: engranajes, diamantes, tuberías, rocas, arcos, nudos toroidales y espirales.",
      "howToEnable": "Edit -> Preferences -> Add-ons -> busca 'Add Mesh: Extra Objects' y 'Add Curve: Extra Objects' -> marca ambas.",
      "keyShortcuts": [
        "Shift + A -> Mesh -> Gears (Gear, Worm)",
        "Shift + A -> Mesh -> Rock Generator",
        "Shift + A -> Curve -> Spirals & Curves galore"
      ],
      "docUrl": "https://docs.blender.org/manual/es/5.2/addons/index.html",
      "downloadUrl": null,
      "source": "Unconfirmed",
      "sourceNote": "La página de este complemento en 5.2 devolvió un error 404. Compruébalo en Preferences → Add-ons."
    },
    {
      "id": "rigify",
      "name": "Rigify",
      "category": "Animación y rigging",
      "icon": "🦴",
      "whyYouNeedIt": "El sistema oficial de Blender para crear rigs de personajes automáticamente. Genera un rig modular completo con cambios IK/FK, control de dedos y controles faciales a partir de un metarig básico.",
      "howToEnable": "Edit -> Preferences -> Add-ons -> busca 'Rigify' -> marca la casilla.",
      "keyShortcuts": [
        "Shift + A -> Armature -> Human (Meta-Rig)",
        "Fit metarig bones to your character mesh",
        "In Armature Properties -> Click 'Generate Rig' button"
      ],
      "docUrl": "https://docs.blender.org/manual/es/5.2/addons/rigging/rigify/index.html",
      "downloadUrl": null,
      "source": "Bundled",
      "sourceNote": "El manual de 5.2 indica que este complemento viene incluido en Blender."
    },
    {
      "id": "blenderkit",
      "name": "BlenderKit",
      "category": "Biblioteca de assets",
      "icon": "📦",
      "whyYouNeedIt": "Una enorme biblioteca en línea dentro de la vista 3D, con decenas de miles de modelos, materiales PBR, HDRI y pinceles gratuitos. ¡Arrastra y suelta en tu escena!",
      "howToEnable": "Descarga el .zip de blenderkit.com -> Edit -> Preferences -> Add-ons -> Install -> selecciona el .zip -> marca la casilla.",
      "keyShortcuts": [
        "Find assets in the top 3D viewport search bar",
        "Drag and drop any material or model straight into your 3D scene"
      ],
      "docUrl": "https://www.blenderkit.com/docs/",
      "downloadUrl": "https://www.blenderkit.com/",
      "source": "Community"
    },
    {
      "id": "poly-haven",
      "name": "Poly Haven Asset Browser Addon",
      "category": "Materiales e iluminación",
      "icon": "🌄",
      "whyYouNeedIt": "Conecta el Asset Browser de Blender con la biblioteca de Poly Haven (HDRI, materiales fotorrealistas y modelos CC0 gratuitos). Sin descargas ni descompresiones manuales.",
      "howToEnable": "Descárgalo de polyhaven.com (la página del complemento devolvió un 404 el 31-10-2026) -> instálalo en Preferences -> Add-ons -> descarga la biblioteca.",
      "keyShortcuts": [
        "Open Blender Asset Browser window",
        "Browse hundreds of 1K/2K/4K HDRIs and drag directly onto World"
      ],
      "docUrl": "https://polyhaven.com/",
      "downloadUrl": "https://polyhaven.com/",
      "source": "Community",
      "sourceNote": "La página del complemento en polyhaven.com devolvió un error 404; este enlace lleva a la página principal."
    },
    {
      "id": "fspy",
      "name": "fSpy (Photo Perspective Matcher)",
      "category": "Modelado y cámara",
      "icon": "📷",
      "whyYouNeedIt": "El arma secreta para modelar desde fotos de referencia. Calcula automáticamente la distancia focal, la posición de la cámara y los puntos de fuga de cualquier fotografía.",
      "howToEnable": "Descarga la app fSpy y su importador para Blender -> instala el complemento -> File -> Import -> fSpy project.",
      "keyShortcuts": [
        "Align 2 axis guide lines in fSpy app to perspective lines in photo",
        "Import into Blender for a camera perfectly matched to the photo"
      ],
      "docUrl": "https://fspy.io/",
      "downloadUrl": "https://fspy.io/",
      "source": "Community"
    },
    {
      "id": "screencast-keys",
      "name": "Screencast Keys",
      "category": "Aprendizaje y streaming",
      "icon": "⌨️",
      "whyYouNeedIt": "Muestra en una esquina de la vista 3D las teclas, los atajos y los clics que pulsas. Imprescindible para grabar tutoriales o compartir tu trabajo con un profesor.",
      "howToEnable": "Descarga el .zip de GitHub -> Preferences -> Add-ons -> Install -> actívalo -> pulsa 'N' -> Screencast Keys -> marca 'Start'.",
      "keyShortcuts": [
        "Toggle in the 'N' Sidebar -> Screencast Keys tab"
      ],
      "docUrl": "https://github.com/nutti/Screencast-Keys",
      "downloadUrl": "https://github.com/nutti/Screencast-Keys/releases",
      "source": "Community"
    }
  ],
  "vault": [
    {
      "id": "polyhaven-textures",
      "name": "Poly Haven (texturas PBR)",
      "category": "textures",
      "categoryName": "Texturas y materiales",
      "icon": "🧱",
      "url": "https://polyhaven.com/textures",
      "badge": "100 % gratis CC0",
      "description": "Miles de materiales PBR fotorrealistas sin comprimir (Albedo, Roughness, Normal, Displacement) de hasta 8K.",
      "whyTopTier": "No necesita cuenta ni pagos, y es dominio público CC0 para proyectos personales y comerciales."
    },
    {
      "id": "ambientcg",
      "name": "ambientCG",
      "category": "textures",
      "categoryName": "Texturas y materiales",
      "icon": "🎨",
      "url": "https://ambientcg.com/",
      "badge": "Más de 1800 materiales",
      "description": "Más de 1800 texturas PBR de dominio público, procedurales y de fotogrametría, con archivos sbsar y packs de materiales para Blender.",
      "whyTopTier": "Lo mantiene Lennart Demes. Incluye archivos SBSAR, texturas repetibles sin cortes y descargas por lotes."
    },
    {
      "id": "sharetextures",
      "name": "ShareTextures",
      "category": "textures",
      "categoryName": "Texturas y materiales",
      "icon": "📐",
      "url": "https://www.sharetextures.com/",
      "badge": "Enfoque ArchViz",
      "description": "Una gran colección de texturas arquitectónicas: mármol pulido, parqué, hormigón y baldosas cerámicas.",
      "whyTopTier": "Creado por profesionales de visualización arquitectónica, con escala real y repetición UV sin cortes."
    },
    {
      "id": "kenney",
      "name": "Kenney.nl",
      "category": "models",
      "categoryName": "Modelos y kits 3D",
      "icon": "🎮",
      "url": "https://kenney.nl/assets/category:3d",
      "badge": "Listo para juegos, CC0",
      "description": "Más de 20 000 recursos low poly modulares: pueblos medievales, estaciones espaciales, vehículos, naturaleza y mazmorras.",
      "whyTopTier": "Un recurso legendario para desarrollo indie. Todo es modular, tiene texturas limpias y licencia CC0."
    },
    {
      "id": "sketchfab-cc0",
      "name": "Sketchfab (Creative Commons)",
      "category": "models",
      "categoryName": "Modelos y kits 3D",
      "icon": "🏺",
      "url": "https://sketchfab.com/",
      "badge": "Historia y objetos",
      "description": "Galería 3D con miles de modelos descargables CC0 y CC-BY: escaneos de museos, vehículos y personajes.",
      "whyTopTier": "Revisa mallas y texturas en el navegador antes de descargar en .blend o .gltf."
    },
    {
      "id": "mixamo",
      "name": "Adobe Mixamo",
      "category": "models",
      "categoryName": "Modelos y kits 3D",
      "icon": "🏃",
      "url": "https://www.mixamo.com/",
      "badge": "Auto-rigging y mocap",
      "description": "Personajes gratuitos y miles de animaciones de captura de movimiento (caminar, luchar, bailar, saltar).",
      "whyTopTier": "Sube tu personaje humanoide y Mixamo lo riggea automáticamente en unos 60 segundos."
    },
    {
      "id": "pureref",
      "name": "PureRef",
      "category": "tools",
      "categoryName": "Utilidades para artistas",
      "icon": "🖼️",
      "url": "https://www.pureref.com/",
      "badge": "Herramienta esencial",
      "description": "Visor ligero de imágenes de referencia con lienzo infinito, muy usado por artistas 3D y digitales.",
      "whyTopTier": "Se mantiene sobre Blender con transparencia y permite pegar cientos de referencias, recortarlas y hacer zoom sin retrasos."
    },
    {
      "id": "krita",
      "name": "Krita",
      "category": "tools",
      "categoryName": "Utilidades para artistas",
      "icon": "🖌️",
      "url": "https://krita.org/",
      "badge": "Código abierto",
      "description": "Programa gratuito y de código abierto para pintar alphas de textura, bocetos conceptuales y calcomanías en PNG.",
      "whyTopTier": "Tiene un modo de repetición (tecla W) para dibujar texturas repetibles fácilmente."
    },
    {
      "id": "polyhaven-hdri",
      "name": "Poly Haven (HDRI)",
      "category": "hdris",
      "categoryName": "HDRI e iluminación",
      "icon": "🌄",
      "url": "https://polyhaven.com/hdris",
      "badge": "Hasta 16K EXR",
      "description": "Mapas de entorno panorámicos de 360° sin comprimir: estudios soleados, bosques al atardecer, naves industriales.",
      "whyTopTier": "Captura en 32 bits para lograr sombras y reflejos fotorrealistas en Cycles y Eevee."
    },
    {
      "id": "hdri-hub",
      "name": "HDRI-Hub",
      "category": "hdris",
      "categoryName": "HDRI e iluminación",
      "icon": "🏙️",
      "url": "https://www.hdri-hub.com/hdrishop/freesamples",
      "badge": "Ciudad y naturaleza",
      "description": "Pack gratuito de alta resolución con calles, autopistas de noche y fondos arquitectónicos.",
      "whyTopTier": "Incluye fotografías de fondo con la perspectiva ajustada para componer renders sin costuras."
    }
  ],
  "glossary": [
    {
      "term": "Normales y orientación de caras",
      "category": "Geometría",
      "summary": "La flecha imaginaria que sale perpendicular de cada polígono e indica cuál es su lado 'frontal'.",
      "explanation": "Si las normales apuntan hacia dentro, Blender cree que el interior es el exterior. Esto causa sombras negras, booleanos rotos e impresiones 3D fallidas.",
      "hotkey": "Shift + N (Recalculate Normals Outside) en Edit Mode"
    },
    {
      "term": "Despliegue UV",
      "category": "Texturizado",
      "summary": "Aplanar una malla 3D sobre un plano de coordenadas 2D para pintar y envolver texturas.",
      "explanation": "Es como desmontar una caja de cartón sobre una mesa. U y V son los ejes de la imagen 2D, separados de los ejes X, Y y Z del espacio 3D.",
      "hotkey": "U ➔ Unwrap en Edit Mode; Ctrl + E ➔ Mark Seam"
    },
    {
      "term": "Quads, tris y n-gons",
      "category": "Topología",
      "summary": "Polígonos según sus vértices: 4 (quad), 3 (tri), 5 o más (n-gon).",
      "explanation": "Los quads son lo ideal porque subdividen de forma suave y deforman limpiamente al animar. Los tris se usan en motores de videojuegos. Los n-gons causan pellizcos imprevisibles en superficies curvas.",
      "hotkey": "Ctrl + T (triangular); Alt + J (tris a quads)"
    },
    {
      "term": "Geometría non-manifold",
      "category": "Topología",
      "summary": "Geometría que no podría existir como un sólido real.",
      "explanation": "Por ejemplo: una cara interna dentro de un cubo hueco, una arista compartida por 3 o más caras, o caras sin grosor. Estas mallas estropean el rigging automático y los modificadores.",
      "hotkey": "Select ➔ Select All by Trait ➔ Non-Manifold (Ctrl+Alt+Shift+M)",
      "unverified": true
    },
    {
      "term": "Retopología",
      "category": "Modelado",
      "summary": "Reconstruir geometría limpia y ligera, apta para animar, sobre una escultura con millones de vértices.",
      "explanation": "Las esculturas densas son demasiado pesadas para animar o para motores de videojuegos. La retopología dibuja bucles limpios de quads sobre la silueta.",
      "hotkey": "Usa el modificador Shrinkwrap + ajuste a caras"
    },
    {
      "term": "Densidad de texel",
      "category": "Texturizado",
      "summary": "La relación entre los píxeles de la textura y la superficie 3D.",
      "explanation": "Si una moneda diminuta tiene 2048×2048 de espacio UV y todo el pecho 512×512, la moneda se ve nítida y el cuerpo borroso. Una densidad uniforme mantiene la misma nitidez.",
      "hotkey": "UV Editor ➔ UV ➔ Average Island Scale"
    },
    {
      "term": "Cinemática inversa (IK) y directa (FK)",
      "category": "Animación",
      "summary": "FK rota articulación a articulación, del hombro a la muñeca; con IK mueves la mano y el brazo se dobla solo.",
      "explanation": "Con IK, si pones el pie de un personaje en un escalón, la rodilla y la cadera se doblan solas para mantenerlo apoyado. Es esencial para los ciclos de andar.",
      "hotkey": "Shift + I en Pose Mode (añadir restricción IK al hueso)"
    },
    {
      "term": "Horneado de texturas",
      "category": "Texturizado",
      "summary": "Pasar detalles de la geometría 3D (poros, biseles, sombras) a imágenes 2D.",
      "explanation": "Permite que un modelo de 2000 polígonos parezca una escultura de 2 000 000 al guardar el detalle en un mapa de normales.",
      "hotkey": "Render Properties (Cycles) ➔ sección Bake"
    },
    {
      "term": "Principled BSDF",
      "category": "Sombreado",
      "summary": "El shader PBR unificado de Blender.",
      "explanation": "Se basa en la investigación de Disney sobre PBR. Sustituye a muchos nodos antiguos con una sola interfaz para Base Color, Metallic, Roughness, Specular, Transmission y Normal.",
      "hotkey": "Shift + A en el Shader Editor ➔ Shader ➔ Principled BSDF"
    },
    {
      "term": "Dispersión subsuperficial (SSS)",
      "category": "Sombreado",
      "summary": "La luz entra en un material translúcido, se dispersa dentro y sale en otro ángulo.",
      "explanation": "Piensa en una linterna detrás de los dedos y su brillo rojo. Sin SSS, la piel, la cera, el mármol, el jade y la leche parecen plástico duro.",
      "hotkey": "Principled BSDF ➔ control Subsurface Weight"
    },
    {
      "term": "Dyntopo (topología dinámica)",
      "category": "Escultura",
      "summary": "Crea triángulos en tiempo real bajo el pincel de escultura.",
      "explanation": "A diferencia de la escultura normal, que solo empuja vértices, Dyntopo genera geometría nueva con cada trazo. Puedes estirar cuernos u orejas sin quedarte sin resolución.",
      "hotkey": "Ctrl + D en Sculpt Mode para activar Dyntopo",
      "unverified": true
    },
    {
      "term": "Operaciones booleanas",
      "category": "Modelado",
      "summary": "Interacciones entre volúmenes sólidos: Difference (cortar), Union (fusionar) e Intersect.",
      "explanation": "Permiten hacer agujeros en objetos o unir formas complejas, con los solvers Fast y Exact de Blender.",
      "hotkey": "Ctrl + Shift + '-' o '+' (con el complemento BoolTool activado)"
    }
  ],
  "achievements": [
    {
      "id": "cube-slayer",
      "title": "Matacubos",
      "description": "Borra el cubo por defecto por primera vez. ¡El rito de iniciación universal!",
      "icon": "🗑️",
      "xp": 50,
      "type": "action",
      "secret": true
    },
    {
      "id": "first-step",
      "title": "Primera coordenada",
      "description": "Completa tu primera lección de Blender.",
      "icon": "🌱",
      "xp": 100,
      "type": "lesson-count",
      "count": 1,
      "secret": false
    },
    {
      "id": "donut-graduate",
      "title": "Masa dulce",
      "description": "Completa la icónica lección del donut.",
      "icon": "🍩",
      "xp": 150,
      "type": "specific-lesson",
      "lessonId": "fund-3",
      "secret": false
    },
    {
      "id": "bug-squasher",
      "title": "Cazador de errores",
      "description": "Consulta las guías de problemas de 3 lecciones.",
      "icon": "🔍",
      "xp": 75,
      "type": "troubleshoot-count",
      "count": 3,
      "secret": false
    },
    {
      "id": "modifier-master",
      "title": "Maestro de los modificadores",
      "description": "Completa la lección Modificadores 101.",
      "icon": "🛠️",
      "xp": 100,
      "type": "specific-lesson",
      "lessonId": "fund-4",
      "secret": false
    },
    {
      "id": "tool-collector",
      "title": "Fan de los complementos",
      "description": "Explora el directorio de complementos.",
      "icon": "🔌",
      "xp": 50,
      "type": "action",
      "secret": false
    },
    {
      "id": "shader-alchemist",
      "title": "Mago de los materiales",
      "description": "Completa la lección de Principled BSDF y PBR.",
      "icon": "🎨",
      "xp": 100,
      "type": "specific-lesson",
      "lessonId": "shade-1",
      "secret": false
    },
    {
      "id": "sculptor",
      "title": "Escultor de arcilla",
      "description": "Completa la lección Escultura 101.",
      "icon": "🗿",
      "xp": 100,
      "type": "specific-lesson",
      "lessonId": "sculpt-1",
      "secret": false
    },
    {
      "id": "bone-collector",
      "title": "Constructor de esqueletos",
      "description": "Completa la lección de armaduras y huesos.",
      "icon": "🦴",
      "xp": 100,
      "type": "specific-lesson",
      "lessonId": "anim-1",
      "secret": false
    },
    {
      "id": "note-taker",
      "title": "Libreta del estudiante",
      "description": "Guarda un apunte personal en cualquier lección.",
      "icon": "📝",
      "xp": 75,
      "type": "action",
      "secret": false
    },
    {
      "id": "five-lessons",
      "title": "Artista dedicado",
      "description": "Completa 5 lecciones de cualquier ruta.",
      "icon": "⭐",
      "xp": 250,
      "type": "lesson-count",
      "count": 5,
      "secret": false
    },
    {
      "id": "ten-lessons",
      "title": "Héroe a medio camino",
      "description": "Completa 10 lecciones de la academia.",
      "icon": "🏆",
      "xp": 500,
      "type": "lesson-count",
      "count": 10,
      "secret": false
    },
    {
      "id": "all-fundamentals",
      "title": "Fundamentos certificados",
      "description": "Completa todas las lecciones de la ruta Fundamentos de Blender.",
      "icon": "🎓",
      "xp": 400,
      "type": "track-complete",
      "trackId": "fundamentals",
      "secret": false
    },
    {
      "id": "grandmaster",
      "title": "Virtuoso 3D",
      "description": "¡Completa todas las lecciones del curso!",
      "icon": "👑",
      "xp": 1000,
      "type": "lesson-count",
      "count": 20,
      "secret": false
    },
    {
      "id": "cube-necromancer",
      "title": "Nigromante de cubos",
      "description": "Recupera el cubo por defecto 3 veces. ¿Por qué no lo dejas descansar?",
      "icon": "🧟",
      "xp": 75,
      "type": "action",
      "secret": true
    },
    {
      "id": "suzanne-disciple",
      "title": "Discípulo de Suzanne",
      "description": "¡Has descubierto y saludado a Suzanne, la legendaria mona de Blender!",
      "icon": "🐵",
      "xp": 100,
      "type": "action",
      "secret": true
    },
    {
      "id": "shortcut-master",
      "title": "Memoria muscular",
      "description": "Has descubierto la lista de atajos de teclado.",
      "icon": "⌨️",
      "xp": 75,
      "type": "action",
      "secret": false
    },
    {
      "id": "hardware-tester",
      "title": "Diagnóstico de hardware",
      "description": "Has evaluado un equipo en el comprobador de Blender.",
      "icon": "🖥️",
      "xp": 75,
      "type": "action",
      "secret": false
    },
    {
      "id": "vault-looter",
      "title": "Saqueador de recursos",
      "description": "Has explorado los recursos 3D gratuitos.",
      "icon": "📦",
      "xp": 75,
      "type": "action",
      "secret": false
    },
    {
      "id": "glossary-scholar",
      "title": "Políglota 3D",
      "description": "Has descifrado la jerga técnica del glosario.",
      "icon": "📖",
      "xp": 75,
      "type": "action",
      "secret": false
    },
    {
      "id": "night-owl",
      "title": "Búho nocturno",
      "description": "Has visitado Blender Academy entre medianoche y las 5 de la mañana. ¡A dormir!",
      "icon": "🦉",
      "xp": 100,
      "type": "action",
      "secret": true
    },
    {
      "id": "konami-master",
      "title": "Maestro Konami",
      "description": "Has introducido el legendario código Konami. ↑↑↓↓←→←→BA. ¡Puro instinto gamer!",
      "icon": "🎮",
      "xp": 200,
      "type": "action",
      "secret": true
    },
    {
      "id": "lore-keeper",
      "title": "Guardián de la historia",
      "description": "Has descubierto la historia secreta del nombre original de Blender.",
      "icon": "🔮",
      "xp": 75,
      "type": "action",
      "secret": true
    },
    {
      "id": "render-addict",
      "title": "Adicto al render",
      "description": "Has completado 15 lecciones. Has pulsado F12 más veces de las que puedes contar.",
      "icon": "🖨️",
      "xp": 750,
      "type": "lesson-count",
      "count": 15,
      "secret": false
    },
    {
      "id": "twenty-five-lessons",
      "title": "Leyenda de la academia",
      "description": "Has completado 25 lecciones. ¡Dominas la malla!",
      "icon": "🌟",
      "xp": 900,
      "type": "lesson-count",
      "count": 25,
      "secret": false
    }
  ]
};
