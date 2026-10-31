#!/usr/bin/env python3
"""Build es/*.html from the English pages. Run by hand after editing a page:

  python3 tests/build-es.py

Page text comes from the table below. The build stops if a phrase is missing
from a page, or if a page still has English text the table does not cover.
Interface text used by the scripts lives in data/es/strings.js.
"""
import pathlib, re

ROOT = pathlib.Path(__file__).resolve().parent.parent
SITE = "https://pashalegion.github.io/blender-academy/"
CSS_VERSION = "2"  # Raise this when css/style.css changes, so browsers fetch the new file.
PAGES = ["index", "lessons", "lesson", "tracks", "shortcuts", "rig", "plugins", "vault", "glossary", "progress", "secrets"]

SHELL = [
    ("Skip to main content", "Saltar al contenido principal"),
    ('aria-label="Blender Academy home"', 'aria-label="Inicio de Blender Academy"'),
    (">Menu</button>", ">Menú</button>"),
    ('aria-label="Main"', 'aria-label="Principal"'),
    (">Home</a>", ">Inicio</a>"), (">Lessons</a>", ">Lecciones</a>"), (">Tracks</a>", ">Rutas</a>"),
    (">Rig checker</a>", ">Mi equipo</a>"), (">Add-ons</a>", ">Complementos</a>"), (">Free vault</a>", ">Recursos</a>"),
    (">Glossary</a>", ">Glosario</a>"), (">Shortcuts</a>", ">Atajos</a>"), (">Progress</a>", ">Progreso</a>"),
    ("Progress could not be saved in this browser, so your last change is not stored. Check that site data is allowed, or <a href=\"progress.html\">export a backup</a> now.",
     "No se ha podido guardar el progreso en este navegador, así que tu último cambio no se ha almacenado. Comprueba que los datos del sitio estén permitidos, o <a href=\"progress.html\">exporta una copia de seguridad</a> ahora."),
    ("· Free community learning guide for Blender 5.2 LTS.", "· Guía de aprendizaje gratuita y comunitaria para Blender 5.2 LTS."),
    ("Progress is saved in this browser only. Use <a href=\"progress.html\">Progreso</a> to export a backup.",
     "El progreso se guarda solo en este navegador. Usa <a href=\"progress.html\">Progreso</a> para exportar una copia de seguridad."),
    ('https://docs.blender.org/manual/en/5.2/" rel="noopener noreferrer">Blender 5.2 manual ↗', 'https://docs.blender.org/manual/es/5.2/" rel="noopener noreferrer">Manual de Blender 5.2 ↗'),
    (">Secrets</a>", ">Secretos</a>"),
]

TEXT = {
    "index": [
        ("<title>Blender Academy — Free Blender 5.2 lessons</title>", "<title>Blender Academy — Lecciones gratuitas de Blender 5.2</title>"),
        ('content="Blender Academy — Free Blender 5.2 lessons"', 'content="Blender Academy — Lecciones gratuitas de Blender 5.2"'),
        ("Free Blender 5.2 lessons in 9 tracks, with troubleshooting, a rig checker, a free asset list and a glossary. No account needed.", "Lecciones gratuitas de Blender 5.2 en 9 rutas, con vídeos en español, solución de problemas, un comprobador de equipo, recursos gratuitos y glosario. Sin cuenta."),
        ("Blender 5.2 LTS · free lessons", "Blender 5.2 LTS · lecciones gratis"),
        ('Learn Blender, <span class="hero-accent">one lesson at a time.</span>', 'Aprende Blender, <span class="hero-accent">lección a lección.</span>'),
        ("45 free community lessons in 9 tracks, each with troubleshooting for common problems. Nothing to install and no account.", "45 lecciones gratuitas en 9 rutas, con vídeos en español y solución de problemas frecuentes. Esta web no necesita instalación ni cuenta."),
        (">Start lesson 1</a>", ">Empezar la lección 1</a>"),
        ('aria-label="At a glance"', 'aria-label="De un vistazo"'),
        ("</strong> lessons</li>", "</strong> lecciones</li>"), ("</strong> tracks</li>", "</strong> rutas</li>"),
        ("</strong> free</li>", "</strong> gratis</li>"), ("</strong> accounts</li>", "</strong> cuentas</li>"),
        (">Pick a track</h2>", ">Elige una ruta</h2>"), (">All lessons</a>", ">Todas las lecciones</a>"),
        (">Tools for your journey</h2>", ">Herramientas para tu camino</h2>"),
        (">Rig checker</span>", ">Mi equipo</span>"), ("Which upgrade matters most for your PC.", "Qué mejora necesita más tu ordenador."),
        (">Add-ons</span>", ">Complementos</span>"), ("What to enable in Blender, and where it comes from.", "Qué activar en Blender y de dónde viene."),
        (">Free vault</span>", ">Recursos gratis</span>"), ("Free asset and texture sources.", "Fuentes gratuitas de assets y texturas."),
        (">3D glossary</span>", ">Glosario 3D</span>"), ("Plain definitions of 3D terms.", "Definiciones claras de términos 3D."),
        (">Shortcuts</span>", ">Atajos</span>"), ("Keyboard shortcut reference.", "Referencia de atajos de teclado."),
        (">Progress</span>", ">Progreso</span>"), ("Achievements, backup and restore.", "Logros, copia de seguridad y restauración."),
    ],
    "lessons": [
        ("<title>Lessons — Blender Academy</title>", "<title>Lecciones — Blender Academy</title>"),
        ('content="Lessons — Blender Academy"', 'content="Lecciones — Blender Academy"'),
        ("Filter and search all 45 free Blender lessons by track, difficulty and your progress.", "Filtra y busca las 45 lecciones gratuitas de Blender por ruta, dificultad y progreso."),
        ("<h1>Lessons</h1>", "<h1>Lecciones</h1>"),
        ("Filter by track, difficulty or your progress. Each lesson opens on its own page.", "Filtra por ruta, dificultad o progreso. Cada lección se abre en su propia página."),
        (">Search lessons</label>", ">Buscar lecciones</label>"), ('placeholder="For example: modifiers, UV, rig"', 'placeholder="Por ejemplo: modificadores, UV, rig"'),
        ("<summary>Filters</summary>", "<summary>Filtros</summary>"), (">Track</label>", ">Ruta</label>"), (">Difficulty</label>", ">Dificultad</label>"),
        (">All difficulties</option>", ">Todas las dificultades</option>"), (">Beginner</option>", ">Principiante</option>"), (">Intermediate</option>", ">Intermedio</option>"),
        (">Status</label>", ">Estado</label>"), (">All lessons</option>", ">Todas las lecciones</option>"), (">Done</option>", ">Hechas</option>"),
        (">Not done</option>", ">Sin hacer</option>"), (">Bookmarked</option>", ">En marcadores</option>"), ("Loading lessons…", "Cargando lecciones…"),
        (">Clear filters</button>", ">Quitar filtros</button>"), (">Lesson list</h2>", ">Lista de lecciones</h2>"),
        ("No lessons match these filters", "Ninguna lección coincide con estos filtros"), ("Clear the filters to see all 45 lessons.", "Quita los filtros para ver las 45 lecciones."),
    ],
    "lesson": [
        ("<title>Lesson — Blender Academy</title>", "<title>Lección — Blender Academy</title>"), ('content="Lesson — Blender Academy"', 'content="Lección — Blender Academy"'),
        ("A single Blender lesson: video on demand, summary, common gotchas with fixes, and a private study note.", "Una lección de Blender: vídeo bajo demanda, resumen, problemas frecuentes con soluciones y apuntes privados."),
        ("Loading lesson…", "Cargando lección…"), ("This lesson needs JavaScript to show its content.", "Esta lección necesita JavaScript para mostrar su contenido."), (">Back to lessons</a>", ">Volver a las lecciones</a>"),
    ],
    "tracks": [
        ("<title>Tracks — Blender Academy</title>", "<title>Rutas — Blender Academy</title>"), ('content="Tracks — Blender Academy"', 'content="Rutas — Blender Academy"'),
        ("The nine learning tracks, with lesson counts and your progress in each.", "Las nueve rutas de aprendizaje, con el número de lecciones y tu progreso en cada una."),
        ("<h1>Tracks</h1>", "<h1>Rutas</h1>"), ("Nine tracks, from fundamentals to scripting. Open a track to see its lessons.", "Nueve rutas, desde los fundamentos hasta el scripting. Abre una ruta para ver sus lecciones."),
    ],
    "shortcuts": [
        ("<title>Keyboard shortcuts — Blender Academy</title>", "<title>Atajos de teclado — Blender Academy</title>"), ('content="Keyboard shortcuts — Blender Academy"', 'content="Atajos de teclado — Blender Academy"'),
        ("Blender 5.2 keyboard shortcuts for navigation, object work, edit mode and shading.", "Atajos de teclado de Blender 5.2 para navegar, trabajar con objetos, Edit Mode y sombreado."),
        ("<h1>Keyboard shortcuts</h1>", "<h1>Atajos de teclado</h1>"), ("Common defaults for Blender. Some lessons use add-ons or custom keymaps; check your own Preferences → Keymap if a key does nothing.", "Atajos habituales de Blender. Algunas lecciones usan complementos o teclas personalizadas; revisa Preferences → Keymap si una tecla no hace nada."),
    ],
    "rig": [
        ("<title>Rig checker — Blender Academy</title>", "<title>Mi equipo — Blender Academy</title>"), ('content="Rig checker — Blender Academy"', 'content="Mi equipo — Blender Academy"'),
        ("<h1>Rig checker</h1>", "<h1>Comprueba tu equipo</h1>"),
        ("Pick your exact parts to see how they handle Blender 5.2 and which upgrade would help most. Speed comes from real benchmark results, so your CPU and GPU generation both count.", "Elige tus componentes exactos para ver cómo funcionan con Blender 5.2 y qué mejora ayudaría más. La velocidad sale de benchmarks reales, así que cuenta la generación de tu CPU y tu GPU."),
        (">Processor (CPU)</label>", ">Procesador (CPU)</label>"), (">Graphics (GPU)</label>", ">Gráfica (GPU)</label>"), (">Memory (RAM)</label>", ">Memoria (RAM)</label>"),
        ("Part not listed? Choose the closest one from the same generation. Laptop parts are listed separately because they usually run slower than desktop parts with similar names.", "¿No aparece tu componente? Elige el más parecido de la misma generación. Los de portátil van aparte porque suelen rendir menos que los de sobremesa con nombres parecidos."),
        (">Where the numbers come from</h2>", ">De dónde salen los números</h2>"),
        ("Benchmarks are median results from ", "Los benchmarks son resultados medianos de "), (", using the snapshot from ", ", según la instantánea del "),
        (". Each score adds up three test scenes, mostly on Blender 5.x. Support rules come from the ", ". Cada puntuación suma tres escenas de prueba, sobre todo en Blender 5.x. Las reglas de compatibilidad vienen de los "),
        (">system requirements ↗</a> and the ", ">requisitos del sistema ↗</a> y del "),
        ('docs.blender.org/manual/en/5.2/render/cycles/gpu_rendering.html" rel="noopener noreferrer">Blender 5.2 GPU rendering manual ↗', 'docs.blender.org/manual/es/5.2/render/cycles/gpu_rendering.html" rel="noopener noreferrer">manual de render por GPU de Blender 5.2 ↗'),
        (". The overall score is our own estimate. Your results will vary with cooling, power limits and the scene.", ". La puntuación global es una estimación nuestra. Tus resultados variarán según la refrigeración, los límites de potencia y la escena."),
    ],
    "plugins": [
        ("<title>Add-ons — Blender Academy</title>", "<title>Complementos — Blender Academy</title>"), ('content="Add-ons — Blender Academy"', 'content="Complementos — Blender Academy"'),
        ("Blender add-ons used in the lessons, labelled by where they come from, with setup steps and guides.", "Complementos de Blender usados en las lecciones, etiquetados según su origen, con pasos de instalación y guías."),
        ("<h1>Add-ons</h1>", "<h1>Complementos</h1>"), ("Each add-on is labelled by where it comes from. Enable bundled add-ons under Edit → Preferences → Add-ons. Extensions and community add-ons install from the Extensions tab.", "Cada complemento indica de dónde viene. Activa los incluidos en Edit → Preferences → Add-ons. Las extensiones y los complementos de la comunidad se instalan desde la pestaña Extensions."),
    ],
    "vault": [
        ("<title>Free resource vault — Blender Academy</title>", "<title>Recursos gratuitos — Blender Academy</title>"), ('content="Free resource vault — Blender Academy"', 'content="Recursos gratuitos — Blender Academy"'),
        ("Free and openly licensed textures, models, HDRIs and artist tools, with the licence and why each is useful.", "Texturas, modelos, HDRI y herramientas gratuitas o con licencia abierta, con su licencia y por qué son útiles."),
        ("<h1>Free resource vault</h1>", "<h1>Recursos gratuitos</h1>"), ("Curated free sources. Check each licence before you use an asset in a commercial project.", "Fuentes gratuitas seleccionadas. Comprueba cada licencia antes de usar un recurso en un proyecto comercial."),
        ('aria-label="Filter by category"', 'aria-label="Filtrar por categoría"'),
    ],
    "glossary": [
        ("<title>3D glossary — Blender Academy</title>", "<title>Glosario 3D — Blender Academy</title>"), ('content="3D glossary — Blender Academy"', 'content="Glosario 3D — Blender Academy"'),
        ("Plain-English definitions of common 3D modelling, shading and animation terms, with the related Blender hotkey.", "Definiciones claras de términos habituales de modelado, sombreado y animación 3D, con su atajo de Blender."),
        ("<h1>3D glossary</h1>", "<h1>Glosario 3D</h1>"), ("Plain-English explanations for terms you will meet in lessons.", "Explicaciones claras de los términos que verás en las lecciones."),
        (">Search terms</label>", ">Buscar términos</label>"), ('placeholder="For example: normal, quad, bake"', 'placeholder="Por ejemplo: normal, quad, horneado"'),
    ],
    "progress": [
        ("<title>Progress and backup — Blender Academy</title>", "<title>Progreso y copias — Blender Academy</title>"), ('content="Progress and backup — Blender Academy"', 'content="Progreso y copias — Blender Academy"'),
        ("Your progress, achievements, and backup export and import. Progress is stored in this browser only.", "Tu progreso, logros y copias de seguridad. El progreso se guarda solo en este navegador."),
        ("<h1>Progress and backup</h1>", "<h1>Progreso y copias de seguridad</h1>"), ("Progress is saved in this browser only. Export a backup to keep it safe or move it to another browser.", "El progreso se guarda solo en este navegador. Exporta una copia para protegerlo o llevarlo a otro navegador."),
        (">Your progress</h2>", ">Tu progreso</h2>"), (">Lessons done</div>", ">Lecciones hechas</div>"), (">Level 1</div>", ">Nivel 1</div>"), (">Achievements</div>", ">Logros</div>"), (">Lessons with notes</div>", ">Lecciones con apuntes</div>"),
        (">Backup and restore</h2>", ">Copia de seguridad y restauración</h2>"), (">Export backup (.json)</button>", ">Exportar copia (.json)</button>"), (">Import a backup file</label>", ">Importar un archivo de copia</label>"),
        ("Import shows a preview first. Nothing changes until you confirm.", "Al importar verás primero una vista previa. Nada cambia hasta que confirmes."), (">Cancel import</button>", ">Cancelar</button>"), (">Import these items</button>", ">Importar estos datos</button>"),
        (">Reset</h2>", ">Borrar</h2>"), ("Reset deletes progress, notes and achievements in this browser. Export a backup first if you want to keep them.", "Esto borra el progreso, los apuntes y los logros de este navegador. Exporta antes una copia si quieres conservarlos."), (">Reset all progress</button>", ">Borrar todo el progreso</button>"),
        (">Achievements</h2>", ">Logros</h2>"),
    ],
    "secrets": [
        ("<title>Secrets — Blender Academy</title>", "<title>Secretos — Blender Academy</title>"), ('content="Secrets — Blender Academy"', 'content="Secretos — Blender Academy"'),
        ("Optional easter eggs for people who like poking around. Nothing here is needed for the lessons.", "Sorpresas opcionales para quienes les gusta curiosear. Nada de esto es necesario para las lecciones."),
        ("<h1>Secrets</h1>", "<h1>Secretos</h1>"), ("Optional extras. Nothing here is needed for the lessons. Achievements unlocked here also appear on your Progress page.", "Extras opcionales. Nada de esto es necesario para las lecciones. Los logros que desbloquees aquí también aparecen en tu página de Progreso."),
        (">The default cube</h2>", ">El cubo por defecto</h2>"), ("Remove the default cube, then bring it back. Removing it is a one-time achievement.", "Borra el cubo por defecto y luego recupéralo. Borrarlo es un logro de una sola vez."), (">Delete cube</button>", ">Borrar el cubo</button>"),
        ("Suzanne is Blender's monkey-head test mesh. It has 500 faces.", "Suzanne es la cabeza de mono de prueba de Blender. Tiene 500 caras."), (">Say hello to Suzanne</button>", ">Saluda a Suzanne</button>"),
        (">Add menu (Shift + A)</h2>", ">Menú Add (Shift + A)</h2>"), ("Open the add menu with Shift + A, or with the button here. Pick a primitive to see what it would do in Blender.", "Abre el menú Add con Shift + A o con este botón. Elige una primitiva para ver qué haría en Blender."), (">Open add menu</button>", ">Abrir el menú Add</button>"),
        (">A bit of lore</h2>", ">Un poco de historia</h2>"), (">Reveal it</button>", ">Descubrirlo</button>"), ("Blender grew out of an earlier in-house program called Traces.", "Blender nació de un programa interno anterior llamado Traces."),
        (">Konami code</h2>", ">Código Konami</h2>"), ("Enter ↑ ↑ ↓ ↓ ← → ← → B A on this page.", "Introduce ↑ ↑ ↓ ↓ ← → ← → B A en esta página."),
        (">Add object</h2>", ">Añadir objeto</h2>"), ("Pick a primitive to add. This page only shows a message; Blender itself is not involved.", "Elige una primitiva. Esta página solo muestra un mensaje; Blender no interviene."), (">Close</button>", ">Cerrar</button>"),
        (">Konami code entered</h2>", ">Código Konami introducido</h2>"), ("In the Python console, ", "En la consola de Python, "), (" adds Suzanne to the scene.", " añade a Suzanne a la escena."),
    ],
}

KEEP = {"Blender", "Academy", "BlenderAcademy", "CPU", "GPU", "RAM", "Suzanne", "Blender Academy", "User Perspective", "(1) Collection | Cube", "Blender Open Data ↗"}


def language_link(html, name, href, code, label):
    """Two-part EN/ES switch. Only the language you are not reading is a link."""
    here = "es" if code == "en" else "en"
    group = "Language" if here == "en" else "Idioma"
    current = f'<span class="lang-option" aria-current="true" lang="{here}">{here.upper()}</span>'
    other = f'<a class="lang-option" id="lang-link" href="{href}" lang="{code}" hreflang="{code}" aria-label="{label}">{code.upper()}</a>'
    parts = current + other if here == "en" else other + current
    tag = f'<div class="lang-switch" role="group" aria-label="{group}">{parts}</div>\n      '
    html = re.sub(r'<div class="lang-switch".*?</div>\n      ', "", html)
    html = re.sub(r'<a class="lang-link".*?</a>\n      ', "", html)
    return html.replace('<button class="nav-toggle"', tag + '<button class="nav-toggle"', 1)


def alternates(html, name):
    path = "" if name == "index" else name + ".html"
    html = re.sub(r'  <link rel="alternate" hreflang[^\n]*\n', "", html)
    links = f'  <link rel="alternate" hreflang="en" href="{SITE}{path}">\n  <link rel="alternate" hreflang="es" href="{SITE}es/{path}">\n'
    return html.replace('  <link rel="icon"', links + '  <link rel="icon"', 1)


def visible_text(html):
    body = re.sub(r"(?s)<head.*?</head>|<script.*?</script>|<svg.*?</svg>|<code.*?</code>", " ", html)
    return [t.strip() for t in re.findall(r">([^<>]+)<", body) if re.search(r"[A-Za-z]{3}", t)]


def main():
    english = {}
    for name in PAGES + ["404"]:
        path = ROOT / f"{name}.html"
        html = alternates(path.read_text(), name) if name != "404" else path.read_text()
        target = f"es/{name}.html" if name != "404" else "es/index.html"
        html = language_link(html, name, target, "es", "Español")
        html = re.sub(r'href="css/style\.css(\?v=\w+)?"', f'href="css/style.css?v={CSS_VERSION}"', html)
        path.write_text(html)
        english[name] = html
    (ROOT / "es").mkdir(exist_ok=True)
    for name in PAGES:
        html = english[name]
        html = html.replace('<html lang="en">', '<html lang="es">')
        html = language_link(html, name, f"../{name}.html", "en", "English")
        for en, es in SHELL + TEXT[name]:
            if en not in html:
                raise SystemExit(f"{name}: not found: {en}")
            html = html.replace(en, es)
        canon = "" if name == "index" else name + ".html"
        for old in (f'{SITE}{canon}"',):
            html = html.replace(f'rel="canonical" href="{old}', f'rel="canonical" href="{SITE}es/{canon}"').replace(f'property="og:url" content="{old}', f'property="og:url" content="{SITE}es/{canon}"')
        html = html.replace('href="assets/', 'href="../assets/').replace('href="css/', 'href="../css/')
        html = html.replace('<script src="js/common.js"></script>', '<script src="../data/es/strings.js"></script>\n  <script src="../js/common.js"></script>')
        html = re.sub(r'<script src="js/', '<script src="../js/', html)
        html = html.replace('src="data/lessons-index.js"', 'src="../data/es/lessons-index.js"').replace('src="data/reference.js"', 'src="../data/es/reference.js"').replace('src="data/hardware.js"', 'src="../data/hardware.js"')
        html = html.replace('property="og:site_name"', 'property="og:locale" content="es_ES">\n  <meta property="og:site_name"')
        left = [t for t in visible_text(html) if t in visible_text(english[name]) and t not in KEEP]
        if left:
            raise SystemExit(f"{name}: English text left: {left}")
        (ROOT / "es" / f"{name}.html").write_text(html)
    print("built", len(PAGES), "pages")


main()
