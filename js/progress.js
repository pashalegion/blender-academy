/*
 * Progress page: stats, achievements, backup export, and import with a preview.
 * Listeners are bound once at load. Reset and import each ask for one confirmation.
 */
(function () {
  "use strict";
  var BA = window.BlenderAcademy;
  var esc = BA.esc;
  var total = BA.lessons().length;

  function $(id) { return document.getElementById(id); }
  var preview = $("import-preview");
  var actions = $("import-actions");
  var errorBox = $("import-error");
  var fileInput = $("import-file");
  var pending = null;

  function renderStats() {
    var state = BA.state();
    var done = state.completedLessons.length;
    var achievements = BA.achievements();
    var unlocked = achievements.filter(function (a) { return state.unlockedAchievements.indexOf(a.id) !== -1; }).length;
    var level = BA.levelFor(state.xp);

    $("stat-done").textContent = done + "/" + total;
    $("stat-xp").textContent = state.xp + " XP";
    $("stat-level").textContent = BA.t("Level {level}: {name}", { level: level.current.level, name: BA.t(level.current.name) });
    $("stat-trophies").textContent = unlocked + "/" + achievements.length;
    $("stat-notes").textContent = Object.keys(state.notes).length;
    $("stat-bar").style.setProperty("--p", (done / total).toFixed(3));
    $("trophy-count").textContent = BA.t("{done} of {total} achievements unlocked.", { done: unlocked, total: achievements.length });

    $("trophy-list").innerHTML = achievements.map(function (a) {
      var got = state.unlockedAchievements.indexOf(a.id) !== -1;
      var hidden = a.secret && !got;
      return '<li class="trophy' + (got ? ' unlocked' : '') + '">' +
        '<span class="trophy-icon" aria-hidden="true">' + (hidden ? '🔒' : esc(a.icon)) + '</span>' +
        '<h3 class="card-title">' + (hidden ? BA.t('Secret achievement') : esc(a.title)) + '</h3>' +
        '<p class="ref-meta">' + (hidden ? BA.t('Unlock it to see what it is.') : esc(a.description)) + '</p>' +
        '<span class="trophy-xp">' + (got ? BA.t('Unlocked') : BA.t('Locked')) + ' · +' + a.xp + ' XP</span>' +
        '</li>';
    }).join("");
  }

  function clearImport() {
    pending = null;
    preview.hidden = true;
    preview.innerHTML = "";
    actions.hidden = true;
    errorBox.hidden = true;
    errorBox.textContent = "";
  }

  function showError(messages) {
    errorBox.hidden = false;
    errorBox.innerHTML = "<strong>" + BA.t("This file was not imported.") + "</strong><ul>" + messages.map(function (m) {
      return "<li>" + esc(m) + "</li>";
    }).join("") + "</ul>";
  }

  function showPreview(value, skipped) {
    preview.hidden = false;
    preview.innerHTML =
      "<p><strong>" + BA.t("Preview of this backup") + "</strong></p><ul>" +
      "<li>XP: " + value.xp + "</li>" +
      "<li>" + BA.t("Lessons done: {done} of {total}", { done: value.completedLessons.length, total: total }) + "</li>" +
      "<li>" + BA.t("Bookmarks") + ": " + value.bookmarkedLessons.length + "</li>" +
      "<li>" + BA.t("Notes") + ": " + Object.keys(value.notes).length + "</li>" +
      "<li>" + BA.t("Achievements") + ": " + value.unlockedAchievements.length + "</li>" +
      "</ul>" +
      (skipped.length ? "<p>" + BA.t("Skipped:") + "</p><ul>" + skipped.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ul>" : "") +
      '<p class="hint">' + BA.t("Importing replaces the progress in this browser.") + '</p>';
    actions.hidden = false;
  }

  fileInput.addEventListener("change", function () {
    clearImport();
    var file = fileInput.files && fileInput.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function () {
      var result = BA.parseBackup(String(reader.result));
      if (!result.ok) {
        showError(result.errors);
        return;
      }
      pending = result.value;
      showPreview(result.value, result.skipped);
    };
    reader.onerror = function () { showError([BA.t("The file could not be read.")]); };
    reader.readAsText(file);
  });

  $("import-cancel").addEventListener("click", function () {
    clearImport();
    fileInput.value = "";
    fileInput.focus();
  });

  $("import-apply").addEventListener("click", function () {
    if (!pending) return;
    if (!window.confirm(BA.t("Replace the progress in this browser with this backup?"))) return;
    if (BA.replaceProgress(pending)) {
      clearImport();
      fileInput.value = "";
      renderStats();
      BA.toast(BA.t("Backup imported"), "info");
    }
  });

  $("export-btn").addEventListener("click", function () {
    var blob = new Blob([JSON.stringify(BA.exportBackup(), null, 2)], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var link = document.createElement("a");
    link.href = url;
    link.download = "blender-academy-backup-" + new Date().toISOString().slice(0, 10) + ".json";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    BA.toast(BA.t("Backup downloaded"), "info");
  });

  $("reset-btn").addEventListener("click", function () {
    if (!window.confirm(BA.t("Reset all progress, notes and achievements in this browser? This cannot be undone."))) return;
    if (BA.resetAll()) {
      clearImport();
      renderStats();
      BA.toast(BA.t("Progress reset"), "info");
    }
  });

  renderStats();
})();
