/*
 * Lesson list: search, track, difficulty and status filters. The filter state
 * lives in the query string and is written with replaceState, so Back returns
 * to the previous page with the same filters still in place.
 */
(function () {
  "use strict";
  var BA = window.BlenderAcademy;
  var esc = BA.esc;
  var lessons = BA.lessons();

  function $(id) { return document.getElementById(id); }
  var els = {
    q: $("q"),
    track: $("track"),
    level: $("level"),
    status: $("status"),
    list: $("lesson-list"),
    count: $("count"),
    empty: $("empty"),
    clear: $("clear-btn")
  };

  function readQuery() {
    var p = new URLSearchParams(window.location.search);
    return {
      q: p.get("q") || "",
      track: p.get("track") || "all",
      level: p.get("level") || "all",
      status: p.get("status") || "all"
    };
  }

  function writeQuery(s) {
    var p = new URLSearchParams();
    if (s.q) p.set("q", s.q);
    if (s.track !== "all") p.set("track", s.track);
    if (s.level !== "all") p.set("level", s.level);
    if (s.status !== "all") p.set("status", s.status);
    var qs = p.toString();
    window.history.replaceState(null, "", window.location.pathname + (qs ? "?" + qs : ""));
  }

  function setControls(s) {
    els.q.value = s.q;
    els.track.value = s.track;
    els.level.value = s.level;
    els.status.value = s.status;
  }

  function currentState() {
    return {
      q: els.q.value.trim(),
      track: els.track.value,
      level: els.level.value,
      status: els.status.value
    };
  }

  function matches(lesson, s, state) {
    if (s.track !== "all" && lesson.trackId !== s.track) return false;
    if (s.level !== "all" && lesson.level.toLowerCase().indexOf(s.level) === -1) return false;
    var done = state.completedLessons.indexOf(lesson.id) !== -1;
    var bookmarked = state.bookmarkedLessons.indexOf(lesson.id) !== -1;
    if (s.status === "completed" && !done) return false;
    if (s.status === "incomplete" && done) return false;
    if (s.status === "bookmarked" && !bookmarked) return false;
    if (s.q) {
      var q = s.q.toLowerCase();
      var track = BA.trackById(lesson.trackId);
      var haystack = [lesson.title, lesson.author, track ? track.name : ""].concat(lesson.tags || []).join(" ").toLowerCase();
      if (haystack.indexOf(q) === -1) return false;
    }
    return true;
  }

  function cardHtml(lesson, state) {
    var done = state.completedLessons.indexOf(lesson.id) !== -1;
    var bookmarked = state.bookmarkedLessons.indexOf(lesson.id) !== -1;
    var track = BA.trackById(lesson.trackId) || { name: "", icon: "", color: "#ea7600" };
    var thumb = typeof BLENDER_VISUALS !== "undefined" ? BLENDER_VISUALS.getLessonSvg(lesson.id) : "";
    var id = esc(lesson.id);
    var title = esc(lesson.title);
    return '<li>' +
      '<article class="lesson-card' + (done ? ' is-done' : '') + '" style="--track:' + esc(track.color) + '" data-lesson-id="' + id + '">' +
        '<a class="lesson-card-link" href="lesson.html?id=' + encodeURIComponent(lesson.id) + '">' +
          '<div class="lesson-thumb"><span aria-hidden="true">' + thumb + '</span><span class="lesson-duration">' + esc(lesson.duration) + '</span></div>' +
          '<div class="lesson-meta">' +
            '<span class="track-label">' + esc(track.icon) + ' ' + esc(track.name) + '</span>' +
            '<span>' + esc(lesson.level) + '</span>' +
          '</div>' +
          '<h3 class="lesson-title">' + title + '</h3>' +
        '</a>' +
        '<div class="lesson-card-actions">' +
          '<span class="lesson-card-buttons">' +
            '<button type="button" class="btn btn-small" data-complete-id="' + id + '" aria-pressed="' + done + '">' + (done ? '✓ Done' : 'Mark done') + '</button> ' +
            '<button type="button" class="btn btn-small" data-bookmark-id="' + id + '" aria-pressed="' + bookmarked + '">' + (bookmarked ? '★ Saved' : '☆ Bookmark') + '</button>' +
          '</span>' +
        '</div>' +
      '</article>' +
    '</li>';
  }

  function render() {
    var s = currentState();
    var state = BA.state();
    var shown = lessons.filter(function (l) { return matches(l, s, state); });
    els.list.innerHTML = shown.map(function (l) { return cardHtml(l, state); }).join("");
    els.count.textContent = "Showing " + shown.length + " of " + lessons.length + " lessons";
    els.empty.hidden = shown.length !== 0;
    writeQuery(s);
  }

  /* One delegated listener, bound once. Focus is restored after a re-render. */
  els.list.addEventListener("click", function (e) {
    var complete = e.target.closest("[data-complete-id]");
    var bookmark = e.target.closest("[data-bookmark-id]");
    var button = complete || bookmark;
    if (!button) return;
    var id = button.getAttribute(complete ? "data-complete-id" : "data-bookmark-id");
    if (complete) BA.toggleComplete(id);
    else BA.toggleBookmark(id);
    var attr = complete ? "data-complete-id" : "data-bookmark-id";
    render();
    var again = els.list.querySelector("[" + attr + "=\"" + id + "\"]");
    if (again) again.focus();
  });

  function populateTracks() {
    var options = ['<option value="all">All tracks</option>'];
    BA.tracks().forEach(function (t) {
      options.push('<option value="' + esc(t.id) + '">' + esc(t.icon) + ' ' + esc(t.name) + '</option>');
    });
    els.track.innerHTML = options.join("");
  }

  els.q.addEventListener("input", render);
  [els.track, els.level, els.status].forEach(function (sel) {
    sel.addEventListener("change", render);
  });
  els.clear.addEventListener("click", function () {
    setControls({ q: "", track: "all", level: "all", status: "all" });
    render();
    els.q.focus();
  });

  populateTracks();
  var initial = readQuery();
  setControls(initial);
  // Phones keep the filters folded so the first lesson is on screen.
  document.getElementById("filter-box").open = window.matchMedia("(min-width: 640px)").matches ||
    initial.track !== "all" || initial.level !== "all" || initial.status !== "all";
  render();
  window.addEventListener("popstate", function () { setControls(readQuery()); render(); });
})();
