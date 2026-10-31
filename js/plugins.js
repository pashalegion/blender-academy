/* Add-ons: each one labelled by where it comes from. */
(function () {
  "use strict";
  var BA = window.BlenderAcademy;
  var esc = BA.esc;

  var SOURCE_BADGE = {
    Bundled: "badge-ok",
    Extensions: "badge-info",
    Community: "badge-muted",
    Unconfirmed: "badge-warn"
  };

  var addons = window.BLENDER_REFERENCE.addons;
  document.getElementById("addon-list").innerHTML = addons.map(function (addon) {
    var thumb = typeof BLENDER_VISUALS !== "undefined" ? BLENDER_VISUALS.getAddonSvg(addon.id) : "";
    var badgeClass = SOURCE_BADGE[addon.source] || "badge-muted";
    var links = [];
    if (addon.docUrl) links.push('<a href="' + esc(addon.docUrl) + '" rel="noopener noreferrer" target="_blank">' + BA.t("Guide ↗") + '</a>');
    if (addon.downloadUrl) links.push('<a href="' + esc(addon.downloadUrl) + '" rel="noopener noreferrer" target="_blank">' + BA.t("Download ↗") + '</a>');
    return '<li><article class="card ref-card">' +
      '<div class="ref-head"><div style="display:flex;gap:10px;align-items:center">' +
        '<span class="lesson-thumb" style="width:48px;height:48px;flex-shrink:0" aria-hidden="true">' + thumb + '</span>' +
        '<h2 style="font-size:1rem">' + esc(addon.name) + '</h2></div>' +
        '<span class="badge ' + badgeClass + '">' + esc(BA.t(addon.source)) + '</span></div>' +
      '<p class="ref-body">' + esc(addon.whyYouNeedIt) + '</p>' +
      '<p class="ref-meta">' + BA.t("Enable:") + ' ' + esc(addon.howToEnable) + '</p>' +
      (addon.sourceNote ? '<p class="hint">' + esc(addon.sourceNote) + '</p>' : '') +
      '<div class="ref-foot">' + links.join(" · ") + '</div>' +
      '</article></li>';
  }).join("");

  BA.unlock("tool-collector");
})();
