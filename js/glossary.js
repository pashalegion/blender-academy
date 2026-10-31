/* 3D glossary with search. Visiting this page counts toward an achievement. */
(function () {
  "use strict";
  var BA = window.BlenderAcademy;
  var esc = BA.esc;
  var terms = window.BLENDER_REFERENCE.glossary;
  var input = document.getElementById("gq");
  var list = document.getElementById("glossary-list");
  var count = document.getElementById("gcount");

  function render() {
    var q = BA.fold(input.value.trim());
    var shown = terms.filter(function (t) {
      return !q || BA.fold([t.term, t.summary, t.explanation].join(" ")).indexOf(q) !== -1;
    });
    list.innerHTML = shown.map(function (t) {
      var hotkey = t.unverified
        ? '<span class="unverified" title="' + BA.t("Not confirmed in the Blender 5.2 manual keymap yet") + '">' + esc(t.hotkey) + ' (' + BA.t("unverified") + ')</span>'
        : esc(t.hotkey);
      return '<li><article class="card ref-card">' +
        '<div class="ref-head"><h2 class="card-title">' + esc(t.term) + '</h2>' +
        '<span class="badge badge-info">' + esc(t.category) + '</span></div>' +
        '<p class="term-summary">' + esc(t.summary) + '</p>' +
        '<p class="ref-body">' + esc(t.explanation) + '</p>' +
        '<div class="ref-foot"><span class="muted small">' + BA.t("Action or hotkey") + '</span><span class="mono small">' + hotkey + '</span></div>' +
        '</article></li>';
    }).join("");
    count.textContent = BA.t("{shown} of {total} terms", { shown: shown.length, total: terms.length });
  }

  input.addEventListener("input", render);
  render();
  BA.unlock("glossary-scholar");
})();
