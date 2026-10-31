/* Free resource vault: category filter (buttons with aria-pressed) and cards. */
(function () {
  "use strict";
  var BA = window.BlenderAcademy;
  var esc = BA.esc;
  var resources = window.BLENDER_REFERENCE.vault;
  var categories = [
    { id: "all", label: "All" },
    { id: "textures", label: "Textures" },
    { id: "models", label: "Models" },
    { id: "tools", label: "Tools" },
    { id: "hdris", label: "HDRIs" }
  ];

  var filters = document.getElementById("vault-filters");
  var list = document.getElementById("vault-list");
  var active = "all";

  function render() {
    Array.prototype.forEach.call(filters.children, function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-cat") === active));
    });
    list.innerHTML = resources.filter(function (r) {
      return active === "all" || r.category === active;
    }).map(function (r) {
      return '<li><article class="card ref-card">' +
        '<div class="ref-head"><div><h2 class="card-title">' + esc(r.name) + '</h2>' +
        '<p class="ref-meta">' + esc(r.categoryName) + '</p></div>' +
        '<span class="badge badge-ok">' + esc(r.badge) + '</span></div>' +
        '<p class="ref-body">' + esc(r.description) + '</p>' +
        '<p class="ref-body"><strong>Why it is useful:</strong> ' + esc(r.whyTopTier) + '</p>' +
        '<div class="ref-foot"><span class="muted small">Check the licence on the site</span>' +
        '<a href="' + esc(r.url) + '" rel="noopener noreferrer" target="_blank">Visit<span class="visually-hidden"> ' + esc(r.name) + '</span> ↗</a></div>' +
        '</article></li>';
    }).join("");
  }

  filters.innerHTML = categories.map(function (c) {
    return '<button type="button" class="btn btn-small" aria-pressed="false" data-cat="' + c.id + '">' + esc(c.label) + '</button>';
  }).join("");

  filters.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-cat]");
    if (!btn) return;
    active = btn.getAttribute("data-cat");
    render();
  });

  render();
  BA.unlock("vault-looter");
})();
