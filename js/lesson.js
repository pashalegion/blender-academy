/*
 * Lesson page. Metadata comes from data/lessons-index.js. The body is loaded
 * with a classic script tag for this lesson only. The YouTube embed is created
 * only after the reader presses the button.
 */
(function () {
  "use strict";
  var BA = window.BlenderAcademy;
  var esc = BA.esc;
  var root = document.getElementById("lesson-root");
  var params = new URLSearchParams(window.location.search);
  var id = params.get("id");
  var lesson = id ? BA.lessonById(id) : null;

  function notFound() {
    document.title = "Lesson not found — Blender Academy";
    root.innerHTML =
      '<div class="card"><h1>Lesson not found</h1>' +
      '<p class="muted">That lesson ID does not exist. Choose one from the list.</p>' +
      '<p style="margin-top:12px"><a class="btn btn-primary" href="lessons.html">All lessons</a></p></div>';
  }

  function loadFailed() {
    root.innerHTML =
      '<div class="alert" role="alert"><p>The lesson text could not be loaded. Reload the page to try again.</p></div>';
  }

  function versionBadge(version) {
    if (!version) return '<span class="badge badge-muted">Video version not recorded</span>';
    if (version === "5.2") return '<span class="badge badge-ok">Recorded for Blender 5.2</span>';
    return '<span class="badge badge-warn">Video recorded in Blender ' + esc(version) + ' · check the UI against the 5.2 manual</span>';
  }

  function neighbour(offset) {
    var all = BA.lessons();
    var index = all.indexOf(lesson);
    return all[index + offset] || null;
  }

  function render(body) {
    var track = BA.trackById(lesson.trackId) || { name: "", icon: "" };
    var state = BA.state();
    var done = state.completedLessons.indexOf(lesson.id) !== -1;
    var bookmarked = state.bookmarkedLessons.indexOf(lesson.id) !== -1;
    var poster = typeof BLENDER_VISUALS !== "undefined" ? BLENDER_VISUALS.getLessonSvg(lesson.id) : "";
    var prev = neighbour(-1);
    var next = neighbour(1);

    document.title = lesson.title + " — Blender Academy";

    var gotchas = (body.troubleshooting || []).map(function (tb, i) {
      var key = lesson.id + "_tb_" + i;
      var panel = "gotcha-" + lesson.id + "-" + i;
      var button = "gotcha-btn-" + lesson.id + "-" + i;
      return '<div class="gotcha">' +
        '<h3><button type="button" class="gotcha-toggle" id="' + button + '" aria-expanded="false" aria-controls="' + panel + '" data-gotcha="' + key + '">' +
          '<span>Q' + (i + 1) + '. ' + tb.problem + '</span>' +
          '<span class="chev" aria-hidden="true">▼</span>' +
        '</button></h3>' +
        '<div class="gotcha-body" id="' + panel + '" role="region" aria-labelledby="' + button + '" hidden>' +
          '<p><strong>Why it happens:</strong> ' + tb.cause + '</p>' +
          '<p class="fix"><strong>Quick fix:</strong> ' + tb.solution + '</p>' +
        '</div>' +
      '</div>';
    }).join("");

    var summary = (body.summary || []).map(function (item) { return '<li>' + item + '</li>'; }).join("");

    root.innerHTML =
      '<nav class="crumbs" aria-label="Breadcrumb"><a href="lessons.html">Lessons</a> › <a href="lessons.html?track=' + esc(lesson.trackId) + '">' + esc(track.icon) + ' ' + esc(track.name) + '</a></nav>' +
      '<header class="lesson-head section" style="margin-top:12px">' +
        '<div class="lesson-meta">' +
          '<span class="chip">' + esc(lesson.level) + '</span>' +
          '<span class="chip">' + esc(lesson.duration) + '</span>' +
          versionBadge(lesson.videoVersion) +
        '</div>' +
        '<h1>' + esc(lesson.title) + '</h1>' +
        '<div class="credits">' +
          '<span>Lesson author: <strong>' + esc(lesson.author) + '</strong></span>' +
          '<span>Video channel: ' + (lesson.videoChannel ? '<strong>' + esc(lesson.videoChannel) + '</strong>' : 'not checked yet') + '</span>' +
          '<span class="small muted">Video ID checked ' + esc(lesson.checkedOn) + '.</span>' +
        '</div>' +
        '<div class="lesson-actions">' +
          '<button type="button" class="btn btn-primary" id="done-btn" aria-pressed="' + done + '">' + (done ? '✓ Done (undo)' : 'Mark done (+100 XP)') + '</button>' +
          '<button type="button" class="btn" id="bookmark-btn" aria-pressed="' + bookmarked + '">' + (bookmarked ? '★ Bookmarked' : '☆ Bookmark') + '</button>' +
        '</div>' +
      '</header>' +

      '<section class="section" aria-labelledby="video-h">' +
        '<h2 id="video-h">Video</h2>' +
        '<div class="video-box" id="video-box">' +
          '<div class="video-poster" id="video-poster">' +
            poster +
            '<button type="button" class="btn btn-primary video-poster-btn" id="load-video">Load video from YouTube</button>' +
          '</div>' +
        '</div>' +
        '<div class="video-note">' +
          '<span>The video loads from YouTube only when you press the button.</span>' +
          '<a class="btn btn-small" href="' + esc(lesson.videoUrl) + '" target="_blank" rel="noopener noreferrer">Watch on YouTube ↗</a>' +
        '</div>' +
      '</section>' +

      '<section class="section" aria-labelledby="overview-h">' +
        '<h2 id="overview-h">Overview and preparation</h2>' +
        '<div class="prose">' + body.overview + '</div>' +
      '</section>' +

      '<section class="section" aria-labelledby="summary-h">' +
        '<h2 id="summary-h">Key takeaways</h2>' +
        '<ul class="summary-list">' + summary + '</ul>' +
      '</section>' +

      '<section class="section" aria-labelledby="gotcha-h">' +
        '<h2 id="gotcha-h">Common gotchas</h2>' +
        '<p class="muted small">Select a problem to see its cause and fix. Nothing opens on its own.</p>' +
        gotchas +
      '</section>' +

      '<section class="section" aria-labelledby="notes-h">' +
        '<h2 id="notes-h">Your study notes</h2>' +
        '<div class="field">' +
          '<label for="note">Notes for this lesson (saved in this browser)</label>' +
          '<textarea class="textarea" id="note" rows="5"></textarea>' +
        '</div>' +
        '<p class="note-status" id="note-status" role="status" aria-live="polite">Saved in this browser</p>' +
      '</section>' +

      '<section class="section" aria-labelledby="resources-h">' +
        '<h2 id="resources-h">Blender resources</h2>' +
        '<ul class="link-list">' +
          '<li><a href="https://docs.blender.org/manual/en/5.2/" target="_blank" rel="noopener noreferrer">Blender 5.2 manual ↗</a></li>' +
          '<li><a href="https://www.blender.org/releases/5-2/" target="_blank" rel="noopener noreferrer">What is new in Blender 5.2 ↗</a></li>' +
          (lesson.resourceUrl ? '<li><a href="' + esc(lesson.resourceUrl) + '" target="_blank" rel="noopener noreferrer">Course notes and resources ↗</a></li>' : '') +
        '</ul>' +
      '</section>' +

      '<nav class="section" aria-label="Lesson navigation" style="margin-top:32px">' +
        '<ul class="grid-cards">' +
          (prev ? '<li><a class="card" href="lesson.html?id=' + encodeURIComponent(prev.id) + '">← Previous<br><strong>' + esc(prev.title) + '</strong></a></li>' : '<li></li>') +
          '<li><a class="card" href="lessons.html">All lessons</a></li>' +
          (next ? '<li><a class="card" href="lesson.html?id=' + encodeURIComponent(next.id) + '">Next →<br><strong>' + esc(next.title) + '</strong></a></li>' : '<li></li>') +
        '</ul>' +
      '</nav>';

    // Study note: write only on input. The status shows what actually happened.
    var note = document.getElementById("note");
    var noteStatus = document.getElementById("note-status");
    note.value = state.notes[lesson.id] || "";
    var timer = null;
    note.addEventListener("input", function () {
      noteStatus.textContent = "Saving…";
      noteStatus.removeAttribute("data-state");
      window.clearTimeout(timer);
      timer = window.setTimeout(function () {
        if (BA.saveNote(lesson.id, note.value)) {
          noteStatus.textContent = "Saved in this browser";
        } else {
          noteStatus.textContent = "Not saved. Your note is still on this page, but it will be lost when you leave.";
          noteStatus.setAttribute("data-state", "error");
        }
      }, 600);
    });

    // Done and bookmark buttons only change their own label, so focus stays put.
    var doneBtn = document.getElementById("done-btn");
    doneBtn.addEventListener("click", function () {
      if (!BA.toggleComplete(lesson.id)) return;
      var nowDone = BA.state().completedLessons.indexOf(lesson.id) !== -1;
      doneBtn.setAttribute("aria-pressed", String(nowDone));
      doneBtn.textContent = nowDone ? "✓ Done (undo)" : "Mark done (+100 XP)";
    });
    var bookmarkBtn = document.getElementById("bookmark-btn");
    bookmarkBtn.addEventListener("click", function () {
      if (!BA.toggleBookmark(lesson.id)) return;
      var nowMarked = BA.state().bookmarkedLessons.indexOf(lesson.id) !== -1;
      bookmarkBtn.setAttribute("aria-pressed", String(nowMarked));
      bookmarkBtn.textContent = nowMarked ? "★ Bookmarked" : "☆ Bookmark";
    });

    // Click-to-load video. The iframe is created only on this click.
    document.getElementById("load-video").addEventListener("click", function () {
      var box = document.getElementById("video-box");
      var frame = document.createElement("iframe");
      frame.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(lesson.youtubeId) + "?rel=0";
      frame.title = lesson.title + " (video)";
      frame.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
      frame.setAttribute("allowfullscreen", "");
      frame.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
      box.innerHTML = "";
      box.appendChild(frame);
      frame.focus();
    });

    // Gotcha disclosures: keyboard-operable buttons. Viewing a fix counts toward an achievement, not XP.
    root.addEventListener("click", function (e) {
      var toggle = e.target.closest(".gotcha-toggle");
      if (!toggle) return;
      var panel = document.getElementById(toggle.getAttribute("aria-controls"));
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      panel.hidden = open;
      if (!open) BA.recordGotchaViewed(toggle.getAttribute("data-gotcha"));
    });

    BA.setLastLesson(lesson.id);
  }

  if (!lesson) {
    notFound();
    return;
  }

  var script = document.createElement("script");
  script.src = "data/lessons/" + encodeURIComponent(lesson.id) + ".js";
  script.onload = function () {
    var body = window.LESSON_BODIES && window.LESSON_BODIES[lesson.id];
    if (body) render(body);
    else loadFailed();
  };
  script.onerror = loadFailed;
  document.body.appendChild(script);
})();
