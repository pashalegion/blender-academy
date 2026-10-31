// Cuerpo de la lección post-4. Solo lo carga es/lesson.html.
window.LESSON_BODIES = window.LESSON_BODIES || {};
window.LESSON_BODIES["post-4"] = {
  "overview": "Casi todo Blender se puede controlar con Python, incluida la creación de objetos, la animación, el render y la importación y exportación. No necesitas ser programador para empezar. Un script pequeño puede convertir una tarea repetitiva en un solo clic.",
  "summary": [
    "El workspace Scripting reúne Text Editor, Python Console e Info Editor.",
    "Escribe scripts en el Text Editor y pulsa Run Script para ejecutarlos.",
    "El Info Editor registra las acciones como Python, lo que ayuda a descubrir comandos.",
    "Empieza los scripts con import bpy, que da acceso a los datos y herramientas de Blender.",
    "La documentación oficial de la API de Python es la referencia principal. Los complementos son scripts empaquetados para ampliar Blender."
  ],
  "troubleshooting": [
    {
      "problem": "Mi script ha fallado, pero no veo por qué.",
      "cause": "Los errores de los scripts aparecen en la consola del sistema.",
      "solution": "Usa Window ‣ Toggle System Console en Windows, o inicia Blender desde una terminal en Linux y macOS."
    },
    {
      "problem": "Un comando de un tutorial antiguo ya no existe.",
      "cause": "La API de Python cambia entre versiones de Blender.",
      "solution": "Busca el comando actual en la documentación de la API de Python."
    },
    {
      "problem": "Un comando falla con un error de contexto.",
      "cause": "Muchos operadores necesitan un modo, una selección o un objeto activo concretos.",
      "solution": "Comprueba que el objeto esté activo y en el modo correcto, o edita sus datos directamente con bpy.data."
    }
  ]
};
