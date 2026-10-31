/* Tracks: one card per track with lesson count and progress. */
(function () {
  "use strict";
  var BA = window.BlenderAcademy;
  var esc = BA.esc;
  var state = BA.state();
  var lessons = BA.lessons();

  document.getElementById("track-list").innerHTML = BA.tracks().map(function (track) {
    var inTrack = lessons.filter(function (l) { return l.trackId === track.id; });
    var done = inTrack.filter(function (l) { return state.completedLessons.indexOf(l.id) !== -1; }).length;
    var fraction = inTrack.length ? done / inTrack.length : 0;
    return '<li><article class="tile" style="--track:' + esc(track.color) + '">' +
      '<span class="tile-icon" aria-hidden="true">' + esc(track.icon) + '</span>' +
      '<h2 class="tile-title" style="font-size:1.1rem;margin:0">' + esc(track.name) + '</h2>' +
      '<p class="tile-text">' + inTrack.length + ' lessons · ' + done + ' done</p>' +
      '<div class="progress" aria-hidden="true"><span style="--p:' + fraction.toFixed(3) + '"></span></div>' +
      '<div class="ref-foot" style="margin-top:10px"><span class="muted small">' + Math.round(fraction * 100) + '% done</span>' +
      '<a class="btn btn-small" href="lessons.html?track=' + encodeURIComponent(track.id) + '">View lessons<span class="visually-hidden"> in ' + esc(track.name) + '</span></a></div>' +
      '</article></li>';
  }).join("");
})();
