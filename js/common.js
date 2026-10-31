/*
 * Blender Academy — shared runtime (loaded on every page).
 * Progress is stored in this browser only. Writes are verified: a success
 * message is shown only after localStorage.setItem returns without throwing.
 */
(function () {
  "use strict";

  var STORE_KEY = "blender_academy_progress_v2";
  var LEGACY_KEY = "blender_academy_user_progress_v1";
  var CORRUPT_KEY = "blender_academy_progress_v2_corrupt";
  var BACKUP_FORMAT = "blender-academy-backup";
  var MAX_NOTE_LENGTH = 10000;

  var LEVELS = [
    { level: 1, name: "Default Cube Survivor", minXP: 0 },
    { level: 2, name: "Donut Apprentice", minXP: 200 },
    { level: 3, name: "Topology Trainee", minXP: 500 },
    { level: 4, name: "Shader Alchemist", minXP: 900 },
    { level: 5, name: "Sculpt Titan", minXP: 1400 },
    { level: 6, name: "Rigging Puppeteer", minXP: 2000 },
    { level: 7, name: "Keyframe Virtuoso", minXP: 2800 },
    { level: 8, name: "Node Sorcerer", minXP: 3800 },
    { level: 9, name: "3D Grandmaster", minXP: 5000 }
  ];

  var HASH_REDIRECTS = {
    "#lessons": "lessons.html",
    "#rig": "rig.html",
    "#plugins": "plugins.html",
    "#vault": "vault.html",
    "#glossary": "glossary.html",
    "#shortcuts": "shortcuts.html"
  };

  function data() { return window.BLENDER_REFERENCE || { achievements: [] }; }
  function lessons() { return window.LESSONS_INDEX || []; }
  function tracks() { return window.LESSON_TRACKS || []; }
  function lessonById(id) {
    for (var i = 0; i < lessons().length; i++) if (lessons()[i].id === id) return lessons()[i];
    return null;
  }
  function trackById(id) {
    for (var i = 0; i < tracks().length; i++) if (tracks()[i].id === id) return tracks()[i];
    return null;
  }
  function achievementById(id) {
    var list = data().achievements || [];
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  }

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function emptyProgress() {
    return {
      xp: 0,
      completedLessons: [],
      bookmarkedLessons: [],
      unlockedAchievements: [],
      viewedTroubleshoots: [],
      notes: {},
      lastLessonId: null,
      cubeDestroyed: false,
      cubeRespawnCount: 0
    };
  }

  function isPlainObject(v) {
    return v !== null && typeof v === "object" && !Array.isArray(v);
  }

  function isWholeNumber(v) {
    return typeof v === "number" && isFinite(v) && Math.floor(v) === v && v >= 0;
  }

  /*
   * Validates a progress record (from storage or an import file).
   * Returns { ok, value, errors, skipped }. Unknown IDs are skipped and
   * reported; wrong types are errors and nothing is written for them.
   * keepUnknownIds is for reading storage: common.js runs before the data files
   * and most pages load only some of them, so IDs cannot be checked there.
   */
  function validateProgress(input, keepUnknownIds) {
    var errors = [];
    var skipped = [];
    if (!isPlainObject(input)) {
      return { ok: false, value: null, errors: ["The file does not contain a progress object."], skipped: skipped };
    }
    var out = emptyProgress();
    var lessonIds = {};
    lessons().forEach(function (l) { lessonIds[l.id] = true; });
    var achievementIds = {};
    (data().achievements || []).forEach(function (a) { achievementIds[a.id] = true; });

    if (input.xp !== undefined) {
      if (isWholeNumber(input.xp)) out.xp = input.xp;
      else errors.push("XP must be a whole number of 0 or more.");
    }

    function idList(key, known, label) {
      if (input[key] === undefined) return [];
      if (!Array.isArray(input[key])) {
        errors.push(label + " must be a list.");
        return [];
      }
      var seen = {};
      var result = [];
      input[key].forEach(function (item) {
        if (typeof item !== "string") {
          errors.push(label + " must contain only text IDs.");
          return;
        }
        if (!known(item)) {
          skipped.push(label + ": unknown ID “" + item.slice(0, 60) + "”");
          return;
        }
        if (!seen[item]) { seen[item] = true; result.push(item); }
      });
      return result;
    }

    out.completedLessons = idList("completedLessons", function (id) { return keepUnknownIds || !!lessonIds[id]; }, "Completed lessons");
    out.bookmarkedLessons = idList("bookmarkedLessons", function (id) { return keepUnknownIds || !!lessonIds[id]; }, "Bookmarks");
    out.unlockedAchievements = idList("unlockedAchievements", function (id) { return keepUnknownIds || !!achievementIds[id]; }, "Achievements");
    out.viewedTroubleshoots = idList("viewedTroubleshoots", function (id) {
      var lessonPart = id.split("_tb_")[0];
      return id.indexOf("_tb_") > 0 && (keepUnknownIds || !!lessonIds[lessonPart]);
    }, "Gotchas viewed");

    if (input.notes !== undefined) {
      if (!isPlainObject(input.notes)) {
        errors.push("Notes must be an object keyed by lesson ID.");
      } else {
        Object.keys(input.notes).forEach(function (id) {
          var text = input.notes[id];
          if (typeof text !== "string") {
            errors.push("Note for “" + id.slice(0, 40) + "” must be text.");
          } else if (!keepUnknownIds && !lessonIds[id]) {
            skipped.push("Note: unknown lesson “" + id.slice(0, 60) + "”");
          } else if (text.length > MAX_NOTE_LENGTH) {
            errors.push("Note for “" + id + "” is longer than " + MAX_NOTE_LENGTH + " characters.");
          } else if (text.trim().length > 0) {
            out.notes[id] = text;
          }
        });
      }
    }

    if (input.lastLessonId !== undefined && input.lastLessonId !== null) {
      if (typeof input.lastLessonId === "string" && (keepUnknownIds || lessonIds[input.lastLessonId])) out.lastLessonId = input.lastLessonId;
      else if (typeof input.lastLessonId === "string") skipped.push("Last lesson: unknown ID");
      else errors.push("Last lesson must be a lesson ID or empty.");
    }

    if (input.cubeDestroyed !== undefined) {
      if (typeof input.cubeDestroyed === "boolean") out.cubeDestroyed = input.cubeDestroyed;
      else errors.push("Cube state must be true or false.");
    }
    if (input.cubeRespawnCount !== undefined) {
      if (isWholeNumber(input.cubeRespawnCount)) out.cubeRespawnCount = input.cubeRespawnCount;
      else errors.push("Cube respawn count must be a whole number of 0 or more.");
    }

    return { ok: errors.length === 0, value: out, errors: errors, skipped: skipped };
  }

  /* ---------- Storage ---------- */

  var storageFailed = false;

  function writeRecord(progress) {
    try {
      var record = Object.assign({ version: 2 }, progress);
      localStorage.setItem(STORE_KEY, JSON.stringify(record));
      return true;
    } catch (e) {
      return false;
    }
  }

  function readRecord() {
    var raw;
    try {
      raw = localStorage.getItem(STORE_KEY);
    } catch (e) {
      storageFailed = true;
      return emptyProgress();
    }
    if (raw !== null) {
      try {
        var parsed = JSON.parse(raw);
        var checked = validateProgress(parsed, true);
        if (checked.ok) return checked.value;
      } catch (e) { /* fall through to corrupt handling */ }
      // Keep the unreadable copy so it can be recovered, then start clean.
      try { localStorage.setItem(CORRUPT_KEY, raw); } catch (e) { /* ignore */ }
      return emptyProgress();
    }
    // One-time migration from the v1 key. The v1 copy is removed only after v2 is written.
    try {
      var legacy = localStorage.getItem(LEGACY_KEY);
      if (legacy !== null) {
        var migrated = validateProgress(JSON.parse(legacy), true);
        if (migrated.ok && writeRecord(migrated.value)) {
          localStorage.removeItem(LEGACY_KEY);
          return migrated.value;
        }
      }
    } catch (e) { /* unreadable v1 data: start clean */ }
    return emptyProgress();
  }

  var progress = readRecord();

  function snapshot() { return JSON.parse(JSON.stringify(progress)); }

  /* ---------- Banner and toasts ---------- */

  function showStorageBanner() {
    var banner = document.getElementById("storage-banner");
    if (banner) banner.hidden = false;
  }
  function clearStorageBanner() {
    var banner = document.getElementById("storage-banner");
    if (banner) banner.hidden = true;
  }

  function toast(message, kind) {
    var region = document.getElementById("toasts");
    if (!region) return;
    var item = document.createElement("div");
    item.className = "toast" + (kind === "achievement" ? " achievement" : "");
    item.textContent = message;
    region.appendChild(item);
    window.setTimeout(function () {
      item.classList.add("is-leaving");
      window.setTimeout(function () { item.remove(); }, 260);
    }, 4000);
  }

  /*
   * Writes the current progress. Returns true only when the write succeeded.
   * On failure the banner stays visible and the caller must not announce success.
   */
  function persist() {
    var ok = writeRecord(progress);
    if (ok) clearStorageBanner();
    else showStorageBanner();
    return ok;
  }

  /*
   * Applies a change and persists it. If the write fails the change is rolled
   * back so the page never shows progress that is not saved.
   */
  function change(mutator, successMessage, kind) {
    var before = snapshot();
    mutator(progress);
    if (persist()) {
      if (successMessage) toast(successMessage, kind);
      return true;
    }
    progress = before;
    return false;
  }

  function hasStorageFailure() { return storageFailed; }

  /* ---------- Gameplay helpers ---------- */

  function levelFor(xp) {
    var current = LEVELS[0];
    LEVELS.forEach(function (l) { if (xp >= l.minXP) current = l; });
    var next = null;
    for (var i = 0; i < LEVELS.length; i++) if (LEVELS[i].level === current.level + 1) next = LEVELS[i];
    var percent = next ? Math.round(((xp - current.minXP) / (next.minXP - current.minXP)) * 100) : 100;
    return { current: current, next: next, percent: Math.min(100, Math.max(0, percent)) };
  }

  function unlock(id, silent) {
    var ach = achievementById(id);
    if (!ach || progress.unlockedAchievements.indexOf(id) !== -1) return false;
    return change(function (p) {
      p.unlockedAchievements.push(id);
      p.xp += ach.xp;
    }, silent ? "" : "Achievement unlocked: " + ach.title + " (+" + ach.xp + " XP)", "achievement");
  }

  function checkAchievements() {
    var n = progress.completedLessons.length;
    if (n >= 1) unlock("first-step");
    if (n >= 5) unlock("five-lessons");
    if (n >= 10) unlock("ten-lessons");
    if (n >= 15) unlock("render-addict");
    if (n >= 25) unlock("twenty-five-lessons");
    if (n >= lessons().length) unlock("grandmaster");
    var fundamentals = lessons().filter(function (l) { return l.trackId === "fundamentals"; });
    if (fundamentals.length && fundamentals.every(function (l) { return progress.completedLessons.indexOf(l.id) !== -1; })) {
      unlock("all-fundamentals");
    }
    var specific = { "fund-3": "donut-graduate", "fund-4": "modifier-master", "shade-1": "shader-alchemist", "sculpt-1": "sculptor", "anim-1": "bone-collector" };
    progress.completedLessons.forEach(function (id) { if (specific[id]) unlock(specific[id]); });
  }

  /* Local canvas burst. Skipped for reduced motion and in hidden tabs. */
  function celebrate() {
    if (document.hidden || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var canvas = document.createElement("canvas");
    canvas.className = "burst";
    canvas.setAttribute("aria-hidden", "true");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    var ctx = canvas.getContext("2d");
    var colors = ["#ea7600", "#00a2ff", "#ffd600", "#00e676", "#ffffff"];
    var bits = [];
    for (var i = 0; i < 70; i++) {
      bits.push({
        x: canvas.width / 2,
        y: canvas.height * 0.6,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.8) * 18,
        size: Math.random() * 8 + 4,
        color: colors[i % colors.length]
      });
    }
    var frame = 0;
    function step() {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = Math.max(0, 1 - frame / 70);
      bits.forEach(function (b) {
        b.x += b.vx;
        b.y += b.vy;
        b.vy += 0.4;
        ctx.fillStyle = b.color;
        ctx.fillRect(b.x, b.y, b.size, b.size);
      });
      if (frame < 70 && !document.hidden) window.requestAnimationFrame(step);
      else canvas.remove();
    }
    window.requestAnimationFrame(step);
  }

  function toggleComplete(lessonId) {
    var done = progress.completedLessons.indexOf(lessonId) !== -1;
    if (done) {
      return change(function (p) {
        p.completedLessons = p.completedLessons.filter(function (id) { return id !== lessonId; });
        p.xp = Math.max(0, p.xp - 100);
      }, "Lesson marked as not done (−100 XP)", "info");
    }
    var ok = change(function (p) {
      p.completedLessons.push(lessonId);
      p.xp += 100;
    }, "Lesson done (+100 XP)", "info");
    if (ok) {
      celebrate();
      checkAchievements();
    }
    return ok;
  }

  function toggleBookmark(lessonId) {
    var on = progress.bookmarkedLessons.indexOf(lessonId) !== -1;
    return change(function (p) {
      p.bookmarkedLessons = on
        ? p.bookmarkedLessons.filter(function (id) { return id !== lessonId; })
        : p.bookmarkedLessons.concat([lessonId]);
    }, on ? "Bookmark removed" : "Bookmarked", "info");
  }

  function saveNote(lessonId, text) {
    return change(function (p) {
      if (text.trim().length) p.notes[lessonId] = text;
      else delete p.notes[lessonId];
    });
  }

  function setLastLesson(lessonId) {
    if (progress.lastLessonId === lessonId) return;
    progress.lastLessonId = lessonId;
    persist();
  }

  function recordGotchaViewed(key) {
    if (progress.viewedTroubleshoots.indexOf(key) !== -1) return;
    change(function (p) { p.viewedTroubleshoots.push(key); });
    if (progress.viewedTroubleshoots.length >= 3) unlock("bug-squasher");
  }

  /* ---------- Backup, import and reset ---------- */

  function exportBackup() {
    return {
      format: BACKUP_FORMAT,
      version: 2,
      exportedAt: new Date().toISOString(),
      data: snapshot()
    };
  }

  /* Accepts our backup envelope, or a bare progress object from the v1 export. */
  function parseBackup(text) {
    var parsed;
    try {
      parsed = JSON.parse(text);
    } catch (e) {
      return { ok: false, errors: ["This file is not valid JSON."], skipped: [] };
    }
    if (!isPlainObject(parsed)) {
      return { ok: false, errors: ["This file is not a Blender Academy backup."], skipped: [] };
    }
    if (parsed.format !== undefined) {
      if (parsed.format !== BACKUP_FORMAT) return { ok: false, errors: ["This file is not a Blender Academy backup."], skipped: [] };
      if (parsed.version !== 2) return { ok: false, errors: ["Backup version " + parsed.version + " is not supported."], skipped: [] };
      if (!isPlainObject(parsed.data)) return { ok: false, errors: ["The backup has no data section."], skipped: [] };
      return validateProgress(parsed.data);
    }
    return validateProgress(parsed);
  }

  /* Writes an already-validated progress object. The caller has confirmed. */
  function replaceProgress(next) {
    var before = snapshot();
    progress = next;
    if (persist()) return true;
    progress = before;
    return false;
  }

  function resetAll() {
    var before = snapshot();
    progress = emptyProgress();
    try {
      localStorage.removeItem(STORE_KEY);
      localStorage.removeItem(LEGACY_KEY);
      return true;
    } catch (e) {
      progress = before;
      showStorageBanner();
      return false;
    }
  }

  /* ---------- Page chrome ---------- */

  function setupNav() {
    var toggle = document.getElementById("nav-toggle");
    var nav = document.getElementById("site-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", function () {
      var open = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", open ? "false" : "true");
      toggle.setAttribute("aria-expanded", open ? "false" : "true");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.getAttribute("data-open") === "true") {
        nav.setAttribute("data-open", "false");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  function redirectOldHash() {
    var target = HASH_REDIRECTS[window.location.hash];
    if (!target) return false;
    var here = window.location.pathname.split("/").pop() || "index.html";
    if (here === target) return false;
    window.location.replace(target);
    return true;
  }

  function markCurrentNav() {
    var here = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("[data-nav-href]").forEach(function (a) {
      if (a.getAttribute("data-nav-href") === here) a.setAttribute("aria-current", "page");
    });
  }

  function init() {
    if (redirectOldHash()) return;
    setupNav();
    markCurrentNav();
    if (storageFailed) showStorageBanner();
  }

  window.BlenderAcademy = {
    esc: esc,
    lessons: lessons,
    tracks: tracks,
    lessonById: lessonById,
    trackById: trackById,
    achievements: function () { return data().achievements || []; },
    achievementById: achievementById,
    state: function () { return progress; },
    levelFor: levelFor,
    toast: toast,
    persist: persist,
    change: change,
    toggleComplete: toggleComplete,
    toggleBookmark: toggleBookmark,
    saveNote: saveNote,
    setLastLesson: setLastLesson,
    recordGotchaViewed: recordGotchaViewed,
    unlock: unlock,
    exportBackup: exportBackup,
    parseBackup: parseBackup,
    replaceProgress: replaceProgress,
    resetAll: resetAll,
    emptyProgress: emptyProgress,
    validateProgress: validateProgress,
    hasStorageFailure: hasStorageFailure,
    showStorageBanner: showStorageBanner,
    clearStorageBanner: clearStorageBanner,
    STORE_KEY: STORE_KEY
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
