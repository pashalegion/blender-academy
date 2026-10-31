/* Home: "Start lesson 1", and "Continue" once there is progress to continue from. */
(function () {
  "use strict";
  var BA = window.BlenderAcademy;
  var state = BA.state();
  var total = BA.lessons().length;
  var done = state.completedLessons.length;

  var summary = document.getElementById("home-progress");
  if (summary && done > 0) {
    summary.textContent = BA.t("{done} of {total} lessons done.", { done: done, total: total });
  }

  var list = document.getElementById("home-tracks");
  if (list) {
    list.innerHTML = BA.tracks().map(function (track) {
      var inTrack = BA.lessons().filter(function (l) { return l.trackId === track.id; });
      var finished = inTrack.filter(function (l) { return state.completedLessons.indexOf(l.id) !== -1; }).length;
      var fraction = inTrack.length ? finished / inTrack.length : 0;
      return '<li><a class="tile" style="--track:' + BA.esc(track.color) + '" href="lessons.html?track=' + encodeURIComponent(track.id) + '">' +
        '<span class="tile-icon" aria-hidden="true">' + BA.esc(track.icon) + '</span>' +
        '<span class="tile-title">' + BA.esc(track.name) + '</span>' +
        '<span class="tile-text">' + BA.t("{done} of {total} lessons done", { done: finished, total: inTrack.length }) + '</span>' +
        '<span class="progress" aria-hidden="true" style="display:block"><span style="--p:' + fraction.toFixed(3) + '"></span></span>' +
      '</a></li>';
    }).join("");
  }

  var last = state.lastLessonId ? BA.lessonById(state.lastLessonId) : null;
  var link = document.getElementById("continue-link");
  if (last && link) {
    link.hidden = false;
    link.href = "lesson.html?id=" + encodeURIComponent(last.id);
    link.textContent = BA.t("Continue: {title}", { title: last.title });
  }
})();
