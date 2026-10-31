/* Shortcuts reference. Visiting this page counts toward an achievement. */
(function () {
  "use strict";
  var BA = window.BlenderAcademy;
  var esc = BA.esc;
  var groups = window.BLENDER_REFERENCE.shortcuts;

  document.getElementById("shortcut-groups").innerHTML = groups.map(function (group) {
    var rows = group.items.map(function (item) {
      return '<div class="shortcut-row"><dt><kbd>' + esc(item.key) + '</kbd></dt><dd>' + esc(item.desc) + '</dd></div>';
    }).join("");
    return '<section class="card"><h2 style="font-size:1.05rem">' + esc(group.category) + '</h2>' +
      '<dl class="shortcut-list">' + rows + '</dl></section>';
  }).join("");

  BA.unlock("shortcut-master");
})();
