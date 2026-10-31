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
    var q = input.value.trim().toLowerCase();
    var shown = terms.filter(function (t) {
      return !q || [t.term, t.summary, t.explanation].join(" ").toLowerCase().indexOf(q) !== -1;
    });
    list.innerHTML = shown.map(function (t) {
      var hotkey = t.unverified
        ? '<span class="unverified" title="Not confirmed in the Blender 5.2 manual keymap yet">' + esc(t.hotkey) + ' (unverified)</span>'
        : esc(t.hotkey);
      return '<li><article class="card ref-card">' +
        '<div class="ref-head"><h2 class="card-title">' + esc(t.term) + '</h2>' +
        '<span class="badge badge-info">' + esc(t.category) + '</span></div>' +
        '<p class="term-summary">' + esc(t.summary) + '</p>' +
        '<p class="ref-body">' + esc(t.explanation) + '</p>' +
        '<div class="ref-foot"><span class="muted small">Action or hotkey</span><span class="mono small">' + hotkey + '</span></div>' +
        '</article></li>';
    }).join("");
    count.textContent = shown.length + " of " + terms.length + " terms";
  }

  input.addEventListener("input", render);
  render();
  BA.unlock("glossary-scholar");
})();
