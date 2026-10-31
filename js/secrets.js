/* Opt-in easter eggs. All keyboard listeners live on this page only. */
(function () {
  "use strict";
  var BA = window.BlenderAcademy;
  var esc = BA.esc;

  function $(id) { return document.getElementById(id); }

  /* Dialogs: showModal handles Escape and keeps focus inside. Focus returns to the opener. */
  var opener = null;
  function openDialog(dialog) {
    opener = document.activeElement;
    dialog.showModal();
  }
  Array.prototype.forEach.call(document.querySelectorAll("dialog"), function (dialog) {
    dialog.addEventListener("close", function () {
      if (opener && opener.focus) opener.focus();
      opener = null;
    });
    dialog.addEventListener("click", function (e) {
      if (e.target.closest("[data-close]")) dialog.close();
    });
  });

  /* Default cube */
  var cubeBtn = $("cube-btn");
  var cubeStatus = $("cube-status");
  function renderCube() {
    var gone = BA.state().cubeDestroyed;
    cubeBtn.textContent = gone ? BA.t("Respawn cube") : BA.t("Delete cube");
    cubeStatus.textContent = gone ? BA.t("The cube is gone.") : BA.t("The cube is in the scene.");
  }
  cubeBtn.addEventListener("click", function () {
    var gone = BA.state().cubeDestroyed;
    var ok = BA.change(function (p) {
      p.cubeDestroyed = !gone;
      if (gone) p.cubeRespawnCount += 1;
    });
    if (!ok) return;
    if (!gone) BA.unlock("cube-slayer");
    if (BA.state().cubeRespawnCount >= 3) BA.unlock("cube-necromancer");
    renderCube();
  });
  renderCube();

  $("monkey-btn").addEventListener("click", function () {
    if (!BA.unlock("suzanne-disciple")) BA.toast(BA.t("Suzanne says hello again."), "info");
  });

  $("lore-btn").addEventListener("click", function () {
    $("lore-text").hidden = false;
    BA.unlock("lore-keeper");
  });

  /* Add menu */
  var addDialog = $("add-dialog");
  var primitives = { Cube: "📦", Torus: "🍩", Monkey: "🐵", "UV Sphere": "🌐" };
  $("add-options").innerHTML = Object.keys(primitives).map(function (name) {
    return '<button type="button" class="btn" data-primitive="' + esc(name) + '">' + primitives[name] + ' ' + esc(BA.t(name)) + '</button>';
  }).join("");
  $("add-options").addEventListener("click", function (e) {
    var btn = e.target.closest("[data-primitive]");
    if (!btn) return;
    addDialog.close();
    BA.toast(BA.t("{name} added (only on this page).", { name: BA.t(btn.getAttribute("data-primitive")) }), "info");
  });
  $("add-btn").addEventListener("click", function () { openDialog(addDialog); });

  /* Keyboard: Shift + A and the Konami code */
  var KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
  var position = 0;
  document.addEventListener("keydown", function (e) {
    if (document.querySelector("dialog[open]")) return;
    if (e.shiftKey && e.key === "A") {
      e.preventDefault();
      openDialog(addDialog);
      return;
    }
    position = e.key === KONAMI[position] ? position + 1 : (e.key === KONAMI[0] ? 1 : 0);
    if (position === KONAMI.length) {
      position = 0;
      openDialog($("konami-dialog"));
      BA.unlock("konami-master");
    }
  });

  var hour = new Date().getHours();
  if (hour < 5) BA.unlock("night-owl");
})();
