/**
 * Blender Academy Application Controller
 * Handles gamification, progress tracking, filtering, modals, achievements & interactivity.
 */

// State Management
const STATE_STORAGE_KEY = "blender_academy_user_progress_v1";

const AppState = {
  xp: 0,
  completedLessons: new Set(),
  unlockedAchievements: new Set(),
  bookmarkedLessons: new Set(),
  viewedTroubleshoots: new Set(),
  notes: {},
  cubeDestroyed: false,
  cubeRespawnCount: 0,
  activeTrack: "all",
  searchQuery: "",
  activeLevel: "all",
  activeStatus: "all",

  init() {
    this.load();
    this.checkTrackAchievements();
  },

  load() {
    try {
      const saved = localStorage.getItem(STATE_STORAGE_KEY);
      if (saved) {
        const data = JSON.parse(saved);
        this.xp = data.xp || 0;
        this.completedLessons = new Set(data.completedLessons || []);
        this.unlockedAchievements = new Set(data.unlockedAchievements || []);
        this.bookmarkedLessons = new Set(data.bookmarkedLessons || []);
        this.viewedTroubleshoots = new Set(data.viewedTroubleshoots || []);
        this.notes = data.notes || {};
        this.cubeDestroyed = !!data.cubeDestroyed;
        this.cubeRespawnCount = data.cubeRespawnCount || 0;
      }
    } catch (e) {
      console.warn("Could not load stored state, initializing fresh state.", e);
    }
  },

  save() {
    try {
      const data = {
        xp: this.xp,
        completedLessons: Array.from(this.completedLessons),
        unlockedAchievements: Array.from(this.unlockedAchievements),
        bookmarkedLessons: Array.from(this.bookmarkedLessons),
        viewedTroubleshoots: Array.from(this.viewedTroubleshoots),
        notes: this.notes,
        cubeDestroyed: this.cubeDestroyed,
        cubeRespawnCount: this.cubeRespawnCount
      };
      localStorage.setItem(STATE_STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error("Could not save state to localStorage", e);
    }
  },

  addXP(amount, reason = "Action completed") {
    this.xp += amount;
    this.save();
    UI.updateXPDisplay();
    UI.showToast(`+${amount} XP: ${reason}`, "xp");
  },

  toggleLessonComplete(lessonId) {
    const isCompleted = this.completedLessons.has(lessonId);
    if (isCompleted) {
      this.completedLessons.delete(lessonId);
      this.xp = Math.max(0, this.xp - 100);
      UI.showToast("Lesson marked as incomplete (-100 XP)", "info");
    } else {
      this.completedLessons.add(lessonId);
      this.addXP(100, "Lesson Completed!");
      triggerCelebration();

      // Check specific achievements
      this.checkLessonCountAchievements();
      this.checkSpecificLessonAchievements(lessonId);
      this.checkTrackAchievements();
    }
    this.save();
    UI.renderLessons();
    UI.updateStats();
    UI.updateModalIfOpen(lessonId);
  },

  toggleBookmark(lessonId) {
    if (this.bookmarkedLessons.has(lessonId)) {
      this.bookmarkedLessons.delete(lessonId);
      UI.showToast("Removed from bookmarks", "info");
    } else {
      this.bookmarkedLessons.add(lessonId);
      UI.showToast("Saved to bookmarks", "info");
    }
    this.save();
    UI.renderLessons();
  },

  saveNote(lessonId, text) {
    this.notes[lessonId] = text;
    this.save();
    if (text.trim().length > 0 && !this.unlockedAchievements.has("note-taker")) {
      this.unlockAchievement("note-taker");
    }
  },

  recordTroubleshootView(troubleId) {
    if (!this.viewedTroubleshoots.has(troubleId)) {
      this.viewedTroubleshoots.add(troubleId);
      this.addXP(15, "Troubleshooting Insight Examined");
      this.save();
      if (this.viewedTroubleshoots.size >= 3 && !this.unlockedAchievements.has("bug-squasher")) {
        this.unlockAchievement("bug-squasher");
      }
    }
  },

  unlockAchievement(achievementId) {
    if (this.unlockedAchievements.has(achievementId)) return;
    const ach = BLENDER_DATA.achievements.find(a => a.id === achievementId);
    if (!ach) return;

    this.unlockedAchievements.add(achievementId);
    this.xp += ach.xp;
    this.save();
    UI.updateXPDisplay();
    UI.updateStats();
    UI.renderAchievements();
    UI.showToast(`🏆 Achievement Unlocked: ${ach.title} (+${ach.xp} XP)`, "achievement");
    triggerCelebration();
  },

  checkLessonCountAchievements() {
    const count = this.completedLessons.size;
    if (count >= 1) this.unlockAchievement("first-step");
    if (count >= 5) this.unlockAchievement("five-lessons");
    if (count >= 10) this.unlockAchievement("ten-lessons");
    if (count >= 15) this.unlockAchievement("render-addict");
    if (count >= 25) this.unlockAchievement("twenty-five-lessons");
    if (count >= BLENDER_DATA.lessons.length) this.unlockAchievement("grandmaster");
  },


  checkSpecificLessonAchievements(lessonId) {
    if (lessonId === "fund-3") this.unlockAchievement("donut-graduate");
    if (lessonId === "fund-4") this.unlockAchievement("modifier-master");
    if (lessonId === "shade-1") this.unlockAchievement("shader-alchemist");
    if (lessonId === "sculpt-1") this.unlockAchievement("sculptor");
    if (lessonId === "anim-1") this.unlockAchievement("bone-collector");
  },

  checkTrackAchievements() {
    const fundamentalsLessons = BLENDER_DATA.lessons.filter(l => l.trackId === "fundamentals");
    const allFundCompleted = fundamentalsLessons.length > 0 && fundamentalsLessons.every(l => this.completedLessons.has(l.id));
    if (allFundCompleted) {
      this.unlockAchievement("all-fundamentals");
    }
  },

  resetAll() {
    if (confirm("Are you sure you want to reset all your progress, achievements, and notes? This cannot be undone.")) {
      localStorage.removeItem(STATE_STORAGE_KEY);
      this.xp = 0;
      this.completedLessons.clear();
      this.unlockedAchievements.clear();
      this.bookmarkedLessons.clear();
      this.viewedTroubleshoots.clear();
      this.notes = {};
      this.cubeDestroyed = false;
      this.cubeRespawnCount = 0;
      this.init();
      UI.init();
      UI.showToast("Progress has been reset.", "info");
    }
  }

};

// Gamification Calculation Engine
const Gamification = {
  levels: [
    { level: 1, name: "Default Cube Survivor", minXP: 0, maxXP: 200, icon: "📦" },
    { level: 2, name: "Donut Apprentice", minXP: 200, maxXP: 500, icon: "🍩" },
    { level: 3, name: "Topology Trainee", minXP: 500, maxXP: 900, icon: "📐" },
    { level: 4, name: "Shader Alchemist", minXP: 900, maxXP: 1400, icon: "🎨" },
    { level: 5, name: "Sculpt Titan", minXP: 1400, maxXP: 2000, icon: "🗿" },
    { level: 6, name: "Rigging Puppeteer", minXP: 2000, maxXP: 2800, icon: "🦴" },
    { level: 7, name: "Keyframe Virtuoso", minXP: 2800, maxXP: 3800, icon: "🏃" },
    { level: 8, name: "Node Sorcerer", minXP: 3800, maxXP: 5000, icon: "🔮" },
    { level: 9, name: "3D Grandmaster", minXP: 5000, maxXP: 999999, icon: "👑" }
  ],

  getCurrentLevel(xp) {
    for (let i = this.levels.length - 1; i >= 0; i--) {
      if (xp >= this.levels[i].minXP) {
        return this.levels[i];
      }
    }
    return this.levels[0];
  },

  getNextLevel(currentLevel) {
    const idx = this.levels.findIndex(l => l.level === currentLevel.level);
    return idx < this.levels.length - 1 ? this.levels[idx + 1] : null;
  },

  getProgressPercentage(xp) {
    const current = this.getCurrentLevel(xp);
    const next = this.getNextLevel(current);
    if (!next) return 100;
    const progress = (xp - current.minXP) / (next.minXP - current.minXP);
    return Math.min(100, Math.max(0, Math.round(progress * 100)));
  }
};

// UI Rendering and DOM Interactions
const UI = {
  currentModalLessonId: null,

  init() {
    this.initTabRouter();
    this.renderTrackPills();
    this.renderLessons();
    this.initHardwareChecker();
    this.renderAddons();
    this.renderVault();
    this.renderGlossary();
    this.renderAchievements();
    this.renderShortcuts();
    this.updateXPDisplay();
    this.updateStats();
    this.setupEventListeners();
    this.setupCubeEasterEgg();
    this.setupEasterEggs();
  },

  renderTrackPills() {
    const container = document.getElementById("track-pills-container");
    if (!container) return;

    let html = `
      <button class="track-pill px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 ${AppState.activeTrack === 'all' ? 'active' : ''}" data-track="all">
        <span>🌐</span> All (${BLENDER_DATA.lessons.length})
      </button>
    `;

    BLENDER_DATA.tracks.forEach(track => {
      const count = BLENDER_DATA.lessons.filter(l => l.trackId === track.id).length;
      const completedCount = BLENDER_DATA.lessons.filter(l => l.trackId === track.id && AppState.completedLessons.has(l.id)).length;
      const isActive = AppState.activeTrack === track.id;

      html += `
        <button class="track-pill px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 ${isActive ? 'active' : ''}" data-track="${track.id}">
          <span>${track.icon}</span>
          <span>${track.name}</span>
          <span class="text-[10px] opacity-75">${completedCount}/${count}</span>
        </button>
      `;
    });

    container.innerHTML = html;

    // Attach pill events
    container.querySelectorAll(".track-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        AppState.activeTrack = pill.getAttribute("data-track");
        this.renderTrackPills();
        this.renderLessons();
      });
    });
  },

  renderLessons() {
    const grid = document.getElementById("lessons-grid");
    const emptyState = document.getElementById("no-lessons-found");
    if (!grid) return;

    // Filter lessons
    let filtered = BLENDER_DATA.lessons.filter(lesson => {
      // Track filter
      if (AppState.activeTrack !== "all" && lesson.trackId !== AppState.activeTrack) {
        return false;
      }
      // Level filter
      if (AppState.activeLevel !== "all" && lesson.level.toLowerCase().indexOf(AppState.activeLevel.toLowerCase()) === -1) {
        return false;
      }
      // Status filter
      if (AppState.activeStatus === "completed" && !AppState.completedLessons.has(lesson.id)) return false;
      if (AppState.activeStatus === "incomplete" && AppState.completedLessons.has(lesson.id)) return false;
      if (AppState.activeStatus === "bookmarked" && !AppState.bookmarkedLessons.has(lesson.id)) return false;

      // Search query
      if (AppState.searchQuery.trim() !== "") {
        const q = AppState.searchQuery.toLowerCase();
        const matchesTitle = lesson.title.toLowerCase().includes(q);
        const matchesAuthor = lesson.author.toLowerCase().includes(q);
        const matchesTags = lesson.tags.some(t => t.toLowerCase().includes(q));
        const matchesOverview = lesson.overview.toLowerCase().includes(q);
        const matchesTrouble = lesson.troubleshooting.some(tb => 
          tb.problem.toLowerCase().includes(q) || tb.solution.toLowerCase().includes(q)
        );
        if (!matchesTitle && !matchesAuthor && !matchesTags && !matchesOverview && !matchesTrouble) {
          return false;
        }
      }

      return true;
    });

    const countDisplay = document.getElementById("lessons-count-label");
    if (countDisplay) {
      countDisplay.textContent = `Showing ${filtered.length} of ${BLENDER_DATA.lessons.length} lessons`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = "";
      if (emptyState) emptyState.classList.remove("hidden");
      return;
    }

    if (emptyState) emptyState.classList.add("hidden");

    grid.innerHTML = filtered.map(lesson => {
      const isCompleted = AppState.completedLessons.has(lesson.id);
      const isBookmarked = AppState.bookmarkedLessons.has(lesson.id);
      const track = BLENDER_DATA.tracks.find(t => t.id === lesson.trackId) || {};
      const hasNotes = !!AppState.notes[lesson.id] && AppState.notes[lesson.id].trim().length > 0;
      const svgIllustration = typeof BLENDER_VISUALS !== "undefined" ? BLENDER_VISUALS.getLessonSvg(lesson.id) : "";

      return `
        <div class="lesson-card overflow-hidden rounded-xl border border-white/5 bg-[#181a1f] cursor-pointer group flex flex-col justify-between hover:border-orange-500/40 transition" data-lesson-id="${lesson.id}">
          <!-- Vector Illustration Header -->
          <div class="h-28 w-full bg-[#121418] relative overflow-hidden flex items-center justify-center border-b border-white/5 group-hover:scale-[1.02] transition-transform duration-300">
            ${svgIllustration}
            <!-- Duration Badge -->
            <span class="absolute top-2 right-2 text-[10px] font-mono text-zinc-300 bg-black/70 backdrop-blur-sm px-1.5 py-0.5 rounded border border-white/10">
              ${lesson.duration}
            </span>
            <!-- Bookmark Star -->
            <button class="bookmark-btn absolute top-2 left-2 text-zinc-400 hover:text-amber-400 p-1 bg-black/50 backdrop-blur-sm rounded transition" title="Save bookmark" data-bookmark-id="${lesson.id}">
              ${isBookmarked ? '⭐' : '☆'}
            </button>
          </div>

          <!-- Card Content Body -->
          <div class="p-3.5 flex flex-col flex-grow justify-between">
            <div>
              <div class="flex items-center justify-between gap-1 mb-1.5">
                <span class="text-[11px] font-semibold text-orange-400 flex items-center gap-1 truncate">
                  <span>${track.icon || '🎬'}</span>
                  <span>${track.name}</span>
                </span>
                <span class="text-[10px] text-zinc-400 bg-zinc-800/60 px-1.5 py-0.5 rounded font-medium">${lesson.level}</span>
              </div>

              <!-- Title -->
              <h3 class="text-sm font-bold text-white group-hover:text-orange-400 transition leading-snug mb-3 line-clamp-2">
                ${lesson.title}
              </h3>
            </div>

            <!-- Footer Meta & Actions -->
            <div class="pt-2.5 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400 mt-auto">
              <div class="flex items-center gap-2 text-[11px] truncate mr-2">
                <span class="truncate text-zinc-300 font-medium">${lesson.author}</span>
                <span>•</span>
                <span class="text-red-400/90 font-medium flex items-center gap-0.5 flex-shrink-0" title="${lesson.troubleshooting.length} Common Gotchas Solved">
                  <span>🚨</span> ${lesson.troubleshooting.length}
                </span>
                ${hasNotes ? '<span class="text-amber-400" title="Has study notes">📝</span>' : ''}
              </div>

              <button class="toggle-complete-btn flex-shrink-0 text-xs px-2 py-0.5 rounded font-medium transition ${isCompleted ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-zinc-800/80 text-zinc-400 hover:text-white border border-white/5'}" data-complete-id="${lesson.id}">
                ${isCompleted ? '✓ Done' : '○'}
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");

    // Clicking anywhere on card opens modal
    grid.querySelectorAll(".lesson-card").forEach(card => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-lesson-id");
        this.openLessonModal(id);
      });
    });

    grid.querySelectorAll(".toggle-complete-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = btn.getAttribute("data-complete-id");
        AppState.toggleLessonComplete(id);
      });
    });

    grid.querySelectorAll(".bookmark-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = btn.getAttribute("data-bookmark-id");
        AppState.toggleBookmark(id);
      });
    });
  },

  openLessonModal(lessonId) {
    const lesson = BLENDER_DATA.lessons.find(l => l.id === lessonId);
    if (!lesson) return;

    this.currentModalLessonId = lessonId;
    const modal = document.getElementById("lesson-modal");
    const container = document.getElementById("lesson-modal-content");
    const isCompleted = AppState.completedLessons.has(lessonId);
    const track = BLENDER_DATA.tracks.find(t => t.id === lesson.trackId) || {};
    const noteText = AppState.notes[lessonId] || "";

    container.innerHTML = `
      <div class="p-6 md:p-8 space-y-6">
        <!-- Top Title Bar -->
        <div class="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <div class="flex flex-wrap items-center gap-2 mb-2">
              <span class="text-xs font-semibold px-2.5 py-1 rounded-md bg-orange-500/10 text-orange-400 border border-orange-500/30">
                ${track.icon || '🎬'} ${track.name || 'Curriculum'}
              </span>
              <span class="text-xs px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300 font-mono">
                ${lesson.duration}
              </span>
              <span class="text-xs px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300">
                ${lesson.level}
              </span>
            </div>
            <h2 class="text-2xl md:text-3xl font-bold text-white tracking-tight">${lesson.title}</h2>
            <p class="text-sm text-zinc-400 mt-1">Instructor / Source: <strong class="text-zinc-200">${lesson.author}</strong></p>
          </div>

          <div class="flex items-center gap-3 flex-shrink-0">
            <button id="modal-mark-done-btn" class="btn-primary text-sm py-2 px-4 shadow-lg ${isCompleted ? 'bg-emerald-600 hover:bg-emerald-500' : ''}">
              ${isCompleted ? '✓ Completed (+100 XP)' : 'Mark as Complete (+100 XP)'}
            </button>
            <button id="modal-close-x-btn" class="text-zinc-400 hover:text-white p-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 transition">
              ✕
            </button>
          </div>
        </div>

        <!-- 3D Concept Vector Visualization Banner -->
        <div class="h-28 sm:h-36 w-full bg-[#111317] rounded-xl overflow-hidden border border-white/5 flex items-center justify-center relative shadow-inner">
          ${typeof BLENDER_VISUALS !== "undefined" ? BLENDER_VISUALS.getLessonSvg(lesson.id) : ""}
          <span class="absolute bottom-2 right-2 text-[10px] text-zinc-400 bg-black/60 px-2 py-0.5 rounded font-mono border border-white/5">
            Technique Visualization
          </span>
        </div>

        <!-- Video Player / External Tutorial Link -->
        <div class="bg-black/60 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
          <div class="aspect-video w-full bg-zinc-950 flex flex-col items-center justify-center relative">
            <iframe 
              class="w-full h-full" 
              src="https://www.youtube-nocookie.com/embed/${lesson.youtubeId}?rel=0" 
              title="${lesson.title}" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
          <div class="p-3 bg-zinc-900/90 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span class="text-zinc-400">Can't play embedded video? Open directly on YouTube:</span>
            <a href="${lesson.videoUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary text-xs py-1 px-3 text-orange-400 hover:text-orange-300 flex items-center gap-1">
              <span>↗ Open Original Video on YouTube</span>
            </a>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-2 text-xs">
          <span class="text-zinc-400">Using Blender 5.2 LTS?</span>
          <a href="https://docs.blender.org/manual/en/5.2/" target="_blank" rel="noopener noreferrer" class="btn-secondary text-xs py-1 px-3 text-cyan-300 hover:text-cyan-200">↗ Blender 5.2 Manual</a>
          <a href="https://www.blender.org/releases/5-2/" target="_blank" rel="noopener noreferrer" class="btn-secondary text-xs py-1 px-3 text-cyan-300 hover:text-cyan-200">↗ What's New in 5.2</a>
          ${lesson.resourceUrl ? `<a href="${lesson.resourceUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary text-xs py-1 px-3 text-orange-300 hover:text-orange-200">↗ Course notes & resources</a>` : ""}
          <span class="text-zinc-500">Older lessons may use earlier UI labels; the manual is versioned for 5.2.</span>
        </div>

        <!-- Lesson Text Overview -->
        <div>
          <h3 class="text-lg font-bold text-white mb-2 flex items-center gap-2">
            <span>📖</span> Lesson Overview & Preparation
          </h3>
          <div class="text-zinc-300 leading-relaxed text-sm bg-zinc-800/40 p-4 rounded-xl border border-white/5">
            ${lesson.overview}
          </div>
        </div>

        <!-- Summary & Key Shortcuts -->
        <div>
          <h3 class="text-lg font-bold text-white mb-2 flex items-center gap-2">
            <span>⚡</span> Summary & Essential Takeaways
          </h3>
          <ul class="space-y-2 bg-zinc-800/40 p-4 rounded-xl border border-white/5 text-sm text-zinc-300">
            ${lesson.summary.map(item => `
              <li class="flex items-start gap-2.5">
                <span class="text-orange-400 font-bold mt-0.5">•</span>
                <span>${item}</span>
              </li>
            `).join("")}
          </ul>
        </div>

        <!-- Troubleshooting & Common Gotchas Box -->
        <div class="trouble-box p-5">
          <div class="flex items-center justify-between gap-2 mb-3">
            <div class="flex items-center gap-2">
              <span class="text-xl">🚨</span>
              <h3 class="text-lg font-bold text-red-400">Common Gotchas & Troubleshooting</h3>
            </div>
            <span class="text-xs px-2.5 py-1 rounded bg-red-950/60 text-red-300 font-mono">
              ${lesson.troubleshooting.length} Issues Diagnosed
            </span>
          </div>
          <p class="text-xs text-zinc-400 mb-4">
            Did something look weird or not work like the video? Don't panic! Here are the exact solutions for the most frequent beginner roadblocks:
          </p>

          <div class="space-y-3">
            ${lesson.troubleshooting.map((tb, idx) => `
              <div class="bg-zinc-900/90 rounded-lg border border-red-500/20 overflow-hidden">
                <div class="trouble-header p-3.5 flex items-start justify-between gap-3 cursor-pointer hover:bg-zinc-800/60 transition" data-trouble-idx="${idx}">
                  <div class="flex items-start gap-2.5">
                    <span class="text-amber-400 font-bold text-sm">Q${idx + 1}:</span>
                    <h4 class="font-bold text-sm text-zinc-100">${tb.problem}</h4>
                  </div>
                  <span class="text-zinc-500 text-xs mt-1">Click to view fix ▼</span>
                </div>
                <div class="p-4 pt-1 border-t border-white/5 text-xs text-zinc-300 space-y-2 bg-black/20">
                  <p><strong class="text-red-400">Why it happens:</strong> ${tb.cause}</p>
                  <p class="bg-emerald-950/20 text-emerald-300 p-2.5 rounded border border-emerald-500/20">
                    <strong class="text-emerald-400">Quick Fix:</strong> ${tb.solution}
                  </p>
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Personal Study Notepad -->
        <div class="bg-zinc-800/50 p-5 rounded-xl border border-white/5">
          <div class="flex items-center justify-between gap-2 mb-2">
            <h3 class="text-base font-bold text-white flex items-center gap-2">
              <span>📝</span> Personal Study Notepad
            </h3>
            <span id="note-save-status" class="text-xs text-zinc-400 font-mono">Auto-saved</span>
          </div>
          <p class="text-xs text-zinc-400 mb-3">
            Jot down shortcuts, project ideas, or custom reminders for this lesson. Notes are permanently saved in your browser!
          </p>
          <textarea 
            id="modal-lesson-note-input" 
            class="w-full bg-zinc-900 border border-zinc-700/80 rounded-lg p-3 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-orange-500 h-28 resize-y"
            placeholder="e.g. Remember to press Shift+N to fix normals! Torus minor radius set to 0.2m..."
          >${noteText}</textarea>
        </div>

        <!-- Modal Footer Actions -->
        <div class="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
          <div class="flex items-center gap-2 text-xs text-zinc-400">
            <span>Tags:</span>
            ${lesson.tags.map(t => `<span class="bg-zinc-800 px-2 py-0.5 rounded text-zinc-300">#${t}</span>`).join(" ")}
          </div>

          <div class="flex items-center gap-3">
            <button id="modal-bottom-close-btn" class="btn-secondary text-sm">
              Close
            </button>
            <button id="modal-bottom-done-btn" class="btn-primary text-sm">
              ${isCompleted ? '✓ Completed' : 'Mark as Done (+100 XP)'}
            </button>
          </div>
        </div>
      </div>
    `;

    // Modal Events
    modal.classList.add("active");
    document.body.style.overflow = "hidden";

    // Bind mark done
    const markDone = () => {
      AppState.toggleLessonComplete(lessonId);
      this.updateModalIfOpen(lessonId);
    };
    document.getElementById("modal-mark-done-btn")?.addEventListener("click", markDone);
    document.getElementById("modal-bottom-done-btn")?.addEventListener("click", markDone);

    // Bind close
    const closeModal = () => {
      modal.classList.remove("active");
      document.body.style.overflow = "";
      this.currentModalLessonId = null;
    };
    document.getElementById("modal-close-x-btn")?.addEventListener("click", closeModal);
    document.getElementById("modal-bottom-close-btn")?.addEventListener("click", closeModal);

    // Note autosave
    const noteInput = document.getElementById("modal-lesson-note-input");
    const saveStatus = document.getElementById("note-save-status");
    if (noteInput && saveStatus) {
      let timeout = null;
      noteInput.addEventListener("input", () => {
        saveStatus.textContent = "Typing...";
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          AppState.saveNote(lessonId, noteInput.value);
          saveStatus.textContent = "Saved to storage ✓";
        }, 500);
      });
    }

    // Troubleshooting click tracking
    container.querySelectorAll(".trouble-header").forEach(header => {
      header.addEventListener("click", () => {
        const idx = header.getAttribute("data-trouble-idx");
        AppState.recordTroubleshootView(`${lessonId}_tb_${idx}`);
      });
    });
  },

  updateModalIfOpen(lessonId) {
    if (this.currentModalLessonId === lessonId) {
      const isCompleted = AppState.completedLessons.has(lessonId);
      const topBtn = document.getElementById("modal-mark-done-btn");
      const btmBtn = document.getElementById("modal-bottom-done-btn");
      if (topBtn) {
        topBtn.textContent = isCompleted ? '✓ Completed (+100 XP)' : 'Mark as Complete (+100 XP)';
        if (isCompleted) topBtn.classList.add("bg-emerald-600"); else topBtn.classList.remove("bg-emerald-600");
      }
      if (btmBtn) {
        btmBtn.textContent = isCompleted ? '✓ Completed' : 'Mark as Done (+100 XP)';
      }
    }
  },

  renderAddons() {
    const grid = document.getElementById("addons-grid");
    if (!grid) return;

    grid.innerHTML = BLENDER_DATA.addons.map(addon => {
      const isBuiltIn = addon.type.includes("Built-in");
      const addonSvg = typeof BLENDER_VISUALS !== "undefined" ? BLENDER_VISUALS.getAddonSvg(addon.id) : "";

      return `
        <div class="bg-[#181a1f] border border-white/5 rounded-xl p-3 hover:border-zinc-700 transition flex items-start gap-3">
          <!-- Vector Illustration Thumbnail -->
          <div class="w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden bg-black/40 border border-white/5 flex items-center justify-center p-0.5">
            ${addonSvg}
          </div>
          <div class="flex-grow flex flex-col justify-between min-w-0">
            <div class="flex items-center justify-between gap-1 mb-1">
              <h3 class="font-bold text-xs text-white truncate">${addon.name}</h3>
              <span class="text-[9px] px-1.5 py-0.5 rounded font-medium flex-shrink-0 ${isBuiltIn ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-500/20' : 'bg-blue-950/40 text-blue-400 border border-blue-500/20'}">
                ${isBuiltIn ? 'Built-in' : 'Free'}
              </span>
            </div>
            <p class="text-xs text-zinc-300 line-clamp-2 mb-2 leading-relaxed">
              ${addon.whyYouNeedIt}
            </p>
            <div class="pt-1.5 border-t border-white/5 flex items-center justify-between text-[11px]">
              <span class="text-zinc-500 text-[10px] truncate max-w-[150px] font-mono" title="${addon.howToEnable}">
                ${addon.howToEnable.split('->').pop().trim()}
              </span>
              ${addon.docUrl ? `
                <a href="${addon.docUrl}" target="_blank" rel="noopener noreferrer" class="text-orange-400 hover:text-orange-300 font-medium flex-shrink-0">
                  Guide →
                </a>
              ` : ''}
            </div>
          </div>
        </div>
      `;
    }).join("");
  },

  renderAchievements() {
    const grid = document.getElementById("achievements-grid");
    if (!grid) return;

    const totalCount = BLENDER_DATA.achievements.length;
    const unlockedCount = AppState.unlockedAchievements.size;

    const progressHeader = document.getElementById("achievements-counter-label");
    if (progressHeader) {
      progressHeader.textContent = `${unlockedCount} / ${totalCount} Unlocked`;
    }

    grid.innerHTML = BLENDER_DATA.achievements.map(ach => {
      const isUnlocked = AppState.unlockedAchievements.has(ach.id);
      return `
        <div class="badge-card p-2 rounded-xl flex flex-col items-center text-center group relative cursor-help ${isUnlocked ? 'unlocked' : 'locked'}" title="${ach.title}: ${ach.description}">
          <div class="text-xl mb-1 transition-transform group-hover:scale-110">
            ${ach.icon}
          </div>
          <h4 class="font-bold text-[10px] text-white truncate w-full leading-tight mb-0.5">${ach.title}</h4>
          <span class="text-[9px] font-mono font-semibold ${isUnlocked ? 'text-amber-400' : 'text-zinc-500'}">
            +${ach.xp} XP
          </span>
        </div>
      `;
    }).join("");
  },

  initTabRouter() {
    const tabs = document.querySelectorAll(".nav-tab-btn[data-view]");
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const view = tab.getAttribute("data-view");
        this.switchView(view);
      });
    });

    // Check hash on load
    const hash = window.location.hash.replace("#", "");
    if (hash && ["lessons", "rig", "plugins", "vault", "glossary", "shortcuts"].includes(hash)) {
      this.switchView(hash);
    }
  },

  switchView(viewName) {
    const views = {
      lessons: document.getElementById("view-lessons"),
      rig: document.getElementById("view-rig"),
      plugins: document.getElementById("view-plugins"),
      vault: document.getElementById("view-vault"),
      glossary: document.getElementById("view-glossary"),
      shortcuts: document.getElementById("view-shortcuts")
    };

    // Update active tab buttons
    document.querySelectorAll(".nav-tab-btn[data-view]").forEach(btn => {
      if (btn.getAttribute("data-view") === viewName) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // Toggle views
    Object.keys(views).forEach(key => {
      if (views[key]) {
        if (key === viewName) {
          views[key].classList.remove("hidden");
        } else {
          views[key].classList.add("hidden");
        }
      }
    });

    // Trigger achievements for viewing tools
    if (viewName === "vault") AppState.unlockAchievement("vault-looter");
    if (viewName === "glossary") AppState.unlockAchievement("glossary-scholar");
    if (viewName === "shortcuts") AppState.unlockAchievement("shortcut-master");
    if (viewName === "rig") AppState.unlockAchievement("hardware-tester");
    if (viewName === "plugins") AppState.unlockAchievement("tool-collector");

    window.location.hash = viewName;
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  renderVault(selectedCategory = "all") {
    const grid = document.getElementById("vault-grid");
    if (!grid || typeof BLENDER_VAULT === "undefined") return;

    const filtered = BLENDER_VAULT.resources.filter(r => {
      if (selectedCategory === "all") return true;
      return r.category === selectedCategory;
    });

    grid.innerHTML = filtered.map(item => `
      <div class="bg-[#181a1f] border border-white/5 rounded-xl p-3.5 hover:border-zinc-700 transition flex flex-col justify-between">
        <div>
          <div class="flex items-start justify-between gap-2 mb-2">
            <div class="flex items-center gap-2">
              <span class="text-2xl p-1.5 rounded-lg bg-zinc-800/80 border border-white/5">${item.icon}</span>
              <div>
                <h3 class="font-bold text-xs text-white leading-tight">${item.name}</h3>
                <span class="text-[10px] text-zinc-400 font-mono">${item.categoryName}</span>
              </div>
            </div>
            <span class="text-[9px] px-1.5 py-0.5 rounded font-medium bg-emerald-950/40 text-emerald-400 border border-emerald-500/20">
              ${item.badge}
            </span>
          </div>

          <p class="text-xs text-zinc-300 line-clamp-2 mb-2 leading-relaxed">
            ${item.description}
          </p>

          <p class="text-[11px] text-zinc-400 bg-black/30 p-2 rounded-lg border border-white/5 mb-3 leading-normal">
            <strong class="text-orange-400">Why it's top tier:</strong> ${item.whyTopTier}
          </p>
        </div>

        <div class="pt-2 border-t border-white/5 flex items-center justify-between text-[11px]">
          <span class="text-zinc-500 text-[10px]">100% Free & Curated</span>
          <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="text-orange-400 hover:text-orange-300 font-medium flex items-center gap-1">
            <span>Visit Site ↗</span>
          </a>
        </div>
      </div>
    `).join("");

    // Hook up vault filter pills
    document.querySelectorAll(".vault-pill").forEach(pill => {
      pill.onclick = () => {
        document.querySelectorAll(".vault-pill").forEach(p => {
          p.classList.remove("bg-orange-500", "text-white");
          p.classList.add("bg-zinc-800", "text-zinc-400");
        });
        pill.classList.remove("bg-zinc-800", "text-zinc-400");
        pill.classList.add("bg-orange-500", "text-white");
        this.renderVault(pill.getAttribute("data-cat"));
      };
    });
  },

  renderGlossary(searchQuery = "") {
    const grid = document.getElementById("glossary-grid");
    if (!grid || typeof BLENDER_GLOSSARY === "undefined") return;

    const filtered = BLENDER_GLOSSARY.terms.filter(t => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return t.term.toLowerCase().includes(q) || t.summary.toLowerCase().includes(q) || t.explanation.toLowerCase().includes(q);
    });

    grid.innerHTML = filtered.map(item => `
      <div class="bg-[#181a1f] border border-white/5 rounded-xl p-3.5 hover:border-zinc-700 transition flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between gap-2 mb-1.5">
            <h3 class="font-bold text-xs text-white">${item.term}</h3>
            <span class="text-[9px] px-1.5 py-0.5 rounded font-medium bg-blue-950/40 text-blue-400 border border-blue-500/20">
              ${item.category}
            </span>
          </div>

          <p class="text-xs text-orange-300/90 font-medium mb-1.5 leading-snug">
            ${item.summary}
          </p>

          <p class="text-[11px] text-zinc-300 leading-relaxed mb-3">
            ${item.explanation}
          </p>
        </div>

        <div class="pt-2 border-t border-white/5 text-[10px] text-zinc-400 font-mono flex items-center justify-between">
          <span class="text-zinc-500">Action / Hotkey:</span>
          <span class="text-emerald-400 font-semibold truncate max-w-[170px]">${item.hotkey}</span>
        </div>
      </div>
    `).join("");

    // Search input listener
    const searchInput = document.getElementById("glossary-search-input");
    if (searchInput && !searchInput.dataset.listening) {
      searchInput.dataset.listening = "true";
      searchInput.addEventListener("input", (e) => {
        this.renderGlossary(e.target.value);
        if (e.target.value.trim().length > 2) {
          AppState.unlockAchievement("glossary-scholar");
        }
      });
    }
  },

  renderShortcuts() {
    const container = document.getElementById("shortcuts-container");
    if (!container) return;

    container.innerHTML = BLENDER_DATA.shortcuts.map(cat => `
      <div class="bg-zinc-900/60 p-4 rounded-xl border border-white/5 space-y-3">
        <h4 class="font-bold text-sm text-orange-400 flex items-center gap-2">
          <span>⌨️</span> ${cat.category}
        </h4>
        <div class="space-y-2">
          ${cat.items.map(item => `
            <div class="flex items-center justify-between gap-3 text-xs py-1 border-b border-white/5 last:border-0">
              <kbd class="text-zinc-100 font-mono text-[11px]">${item.key}</kbd>
              <span class="text-zinc-300 text-right">${item.desc}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `).join("");
  },

  initHardwareChecker() {
    const cpuSelect = document.getElementById("hw-cpu-select");
    const gpuSelect = document.getElementById("hw-gpu-select");
    const ramSelect = document.getElementById("hw-ram-select");
    if (!cpuSelect || !gpuSelect || !ramSelect || typeof BLENDER_HARDWARE === "undefined") return;

    // Populate CPU options
    cpuSelect.innerHTML = BLENDER_HARDWARE.cpus.map(c => `
      <option value="${c.id}" ${c.id === 'cpu-mid' ? 'selected' : ''}>${c.name}</option>
    `).join("");

    // Populate GPU options
    gpuSelect.innerHTML = BLENDER_HARDWARE.gpus.map(g => `
      <option value="${g.id}" ${g.id === 'gpu-mid' ? 'selected' : ''}>${g.name}</option>
    `).join("");

    // Populate RAM options
    ramSelect.innerHTML = BLENDER_HARDWARE.rams.map(r => `
      <option value="${r.id}" ${r.id === 'ram-16' ? 'selected' : ''}>${r.name}</option>
    `).join("");

    const update = () => {
      this.renderHardwareEvaluation(cpuSelect.value, gpuSelect.value, ramSelect.value);
    };

    cpuSelect.addEventListener("change", update);
    gpuSelect.addEventListener("change", update);
    ramSelect.addEventListener("change", update);

    update();
  },

  renderHardwareEvaluation(cpuId, gpuId, ramId) {
    const container = document.getElementById("hw-result-container");
    if (!container || typeof BLENDER_HARDWARE === "undefined") return;

    const res = BLENDER_HARDWARE.evaluate(cpuId, gpuId, ramId);

    container.innerHTML = `
      <!-- Top Tier & Score Row -->
      <div class="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/5">
        <div class="flex items-center gap-2.5">
          <span class="text-xl font-black font-mono px-2.5 py-1 rounded-lg bg-zinc-800 border border-white/10 ${res.tier.color}">
            ${res.score}<span class="text-xs text-zinc-500 font-normal">/10</span>
          </span>
          <div>
            <div class="text-xs font-bold text-white flex items-center gap-2">
              <span>${res.tier.label}</span>
              <span class="text-[10px] px-2 py-0.5 rounded-full border ${res.tier.badgeBg} ${res.tier.color} font-mono">Verdict</span>
            </div>
            <p class="text-[11px] text-zinc-400 mt-0.5 leading-snug">${res.tier.description}</p>
          </div>
        </div>
      </div>

      <!-- 4 Capabilities Breakdown Chips -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs">
        ${res.capabilities.map(cap => `
          <div class="bg-black/30 p-2 rounded-lg border border-white/5">
            <span class="text-[10px] text-zinc-400 block truncate">${cap.task}</span>
            <span class="font-bold text-[11px] ${cap.color}">${cap.status}</span>
          </div>
        `).join("")}
      </div>

      <!-- Next Upgrade Priority Box with Question Mark (?) -->
      <div class="mt-3 p-3 rounded-lg bg-orange-950/20 border border-orange-500/30">
        <div class="flex items-start justify-between gap-3">
          <div class="flex items-start gap-2">
            <span class="text-base mt-0.5">⚡</span>
            <div>
              <div class="text-xs font-bold text-white flex items-center gap-1.5">
                <span>Next Upgrade Priority:</span>
                <span class="text-orange-400 underline decoration-orange-500/40">${res.upgrade.component}</span>
              </div>
              <p class="text-xs text-zinc-300 mt-0.5 leading-relaxed">${res.upgrade.recommendation}</p>
            </div>
          </div>

          <!-- Question Mark Button -->
          <button id="hw-why-toggle-btn" class="w-6 h-6 rounded-full bg-orange-500/20 hover:bg-orange-500 text-orange-400 hover:text-white border border-orange-500/40 flex items-center justify-center text-xs font-bold transition flex-shrink-0" title="Click to see why this is your bottleneck">
            ?
          </button>
        </div>

        <!-- Expandable "Why" Explainer -->
        <div id="hw-why-explainer" class="hidden mt-3 pt-3 border-t border-orange-500/20 text-xs text-zinc-300 space-y-1">
          <h4 class="font-bold text-orange-300 flex items-center gap-1.5">
            <span>💡</span> ${res.upgrade.whyTitle}
          </h4>
          <p class="text-zinc-300 leading-relaxed text-[11px]">
            ${res.upgrade.whyText}
          </p>
        </div>
      </div>
    `;

    // Toggle Why box
    const toggleBtn = document.getElementById("hw-why-toggle-btn");
    const explainer = document.getElementById("hw-why-explainer");
    if (toggleBtn && explainer) {
      toggleBtn.addEventListener("click", () => {
        explainer.classList.toggle("hidden");
        toggleBtn.classList.toggle("bg-orange-500");
        toggleBtn.classList.toggle("text-white");
      });
    }
  },

  updateXPDisplay() {
    const xp = AppState.xp;
    const currentLevel = Gamification.getCurrentLevel(xp);
    const nextLevel = Gamification.getNextLevel(currentLevel);
    const progressPercent = Gamification.getProgressPercentage(xp);

    // Update Top Header
    const levelLabel = document.getElementById("header-level-name");
    const levelNumber = document.getElementById("header-level-number");
    const xpLabel = document.getElementById("header-xp-label");
    const xpFill = document.getElementById("header-xp-fill");

    if (levelLabel) levelLabel.textContent = currentLevel.name;
    if (levelNumber) levelNumber.textContent = `Lvl ${currentLevel.level}`;
    if (xpLabel) {
      if (nextLevel) {
        xpLabel.textContent = `${xp} / ${nextLevel.minXP} XP`;
      } else {
        xpLabel.textContent = `${xp} XP (MAX)`;
      }
    }
    if (xpFill) {
      xpFill.style.width = `${progressPercent}%`;
    }
  },

  updateStats() {
    const completedCount = AppState.completedLessons.size;
    const totalLessons = BLENDER_DATA.lessons.length;
    const percent = Math.round((completedCount / totalLessons) * 100);

    const overallCountEl = document.getElementById("stat-completed-count");
    const overallPercentEl = document.getElementById("stat-completed-percent");
    const overallBarEl = document.getElementById("stat-completed-bar");

    if (overallCountEl) overallCountEl.textContent = `${completedCount}/${totalLessons}`;
    if (overallPercentEl) overallPercentEl.textContent = `${percent}%`;
    if (overallBarEl) overallBarEl.style.width = `${percent}%`;

    this.renderTrackPills();
  },

  setupCubeEasterEgg() {
    const cubeBtn = document.getElementById("delete-cube-btn");
    const cubeBox = document.getElementById("hero-cube-mesh");

    if (!cubeBtn || !cubeBox) return;

    if (AppState.cubeDestroyed) {
      cubeBox.style.display = "none";
      cubeBtn.textContent = "Respawn (Shift+A)";
    }

    cubeBtn.addEventListener("click", () => {
      if (!AppState.cubeDestroyed) {
        // Destroy cube
        cubeBox.classList.add("shattering");
        setTimeout(() => {
          cubeBox.style.display = "none";
          cubeBox.classList.remove("shattering");
          AppState.cubeDestroyed = true;
          AppState.save();
          AppState.unlockAchievement("cube-slayer");
          cubeBtn.textContent = "Respawn (Shift+A)";
        }, 500);
      } else {
        // Respawn — track count for Cube Necromancer achievement
        cubeBox.style.display = "block";
        AppState.cubeDestroyed = false;
        AppState.cubeRespawnCount++;
        AppState.save();
        cubeBtn.textContent = "Delete Cube (Press X) →";
        UI.showToast("Default Cube restored from the void", "info");

        if (AppState.cubeRespawnCount >= 3) {
          AppState.unlockAchievement("cube-necromancer");
        }
      }
    });
  },

  setupEasterEggs() {
    // ── 1. Suzanne Floating Button ──────────────────────────────────────
    const suzanneBtn = document.getElementById("suzanne-fab-btn");
    const suzanneModal = document.getElementById("suzanne-modal");
    const closeSuzanneBtn = document.getElementById("close-suzanne-btn");

    if (suzanneBtn && suzanneModal) {
      let suzanneGreeted = false;
      suzanneBtn.addEventListener("click", () => {
        suzanneModal.classList.add("active");
        document.body.style.overflow = "hidden";
        triggerCelebration();
        AppState.unlockAchievement("suzanne-disciple");
        suzanneGreeted = true;
      });

      const closeSuzanne = () => {
        suzanneModal.classList.remove("active");
        document.body.style.overflow = "";
        if (suzanneGreeted) {
          suzanneGreeted = false;
          AppState.addXP(100, "Greeted Suzanne the monkey mascot!");
        }
      };

      closeSuzanneBtn?.addEventListener("click", closeSuzanne);
      suzanneModal.addEventListener("click", (e) => {
        if (e.target === suzanneModal) closeSuzanne();
      });
    }


    // ── 2. Shift + A → Add Primitive Pie Menu ──────────────────────────
    const shiftAModal = document.getElementById("shift-a-modal");
    const closeShiftABtn = document.getElementById("close-shift-a-btn");

    document.addEventListener("keydown", (e) => {
      const tag = document.activeElement?.tagName?.toLowerCase();
      if (tag === "input" || tag === "textarea") return; // don't hijack typing
      if (e.shiftKey && e.key === "A") {
        e.preventDefault();
        if (shiftAModal) {
          shiftAModal.classList.add("active");
          document.body.style.overflow = "hidden";
          AppState.unlockAchievement("shortcut-master");
        }
      }

      // ── 3. G / R / S single-key toast easter eggs ───────────────────
      if (!e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
        if (e.key === "G") UI.showToast("🖱️ G — Grab mode! Move your mesh.", "info");
        if (e.key === "R") UI.showToast("🔄 R — Rotate mode activated!", "info");
        if (e.key === "S") UI.showToast("📏 S — Scale mode activated!", "info");
      }
    });

    if (shiftAModal) {
      const closeShiftA = () => {
        shiftAModal.classList.remove("active");
        document.body.style.overflow = "";
      };
      closeShiftABtn?.addEventListener("click", closeShiftA);
      shiftAModal.addEventListener("click", (e) => {
        if (e.target === shiftAModal) closeShiftA();
      });

      // Pick a primitive item
      shiftAModal.querySelectorAll(".shift-a-item").forEach(btn => {
        btn.addEventListener("click", () => {
          const obj = btn.getAttribute("data-obj");
          const msgs = {
            cube: "📦 Default Cube added — your destiny awaits!",
            donut: "🍩 Torus spawned — the Donut Tutorial calls to you!",
            suzanne: "🐵 Suzanne appeared! She looks judgy.",
            sphere: "🌐 UV Sphere added — smooth as a mirror ball."
          };
          closeShiftA();
          UI.showToast(msgs[obj] || "Object spawned!", "xp");
          triggerCelebration();
          AppState.unlockAchievement("shortcut-master");
        });
      });
    }

    // ── 4. Achievements Rollout Toggle (click) ────────────────────────
    const rolloutBtn = document.getElementById("achievements-rollout-btn");
    const rolloutPopover = document.getElementById("achievements-rollout-popover");

    if (rolloutBtn && rolloutPopover) {
      rolloutBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        rolloutPopover.classList.toggle("active");
      });

      // Close when clicking outside
      document.addEventListener("click", (e) => {
        if (!rolloutPopover.contains(e.target) && e.target !== rolloutBtn) {
          rolloutPopover.classList.remove("active");
        }
      });
    }

    // ── 6. Konami Code: ↑↑↓↓←→←→BA ─────────────────────────────────
    const KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
    let konamiIdx = 0;
    document.addEventListener("keydown", (e) => {
      if (e.key === KONAMI[konamiIdx]) {
        konamiIdx++;
        if (konamiIdx === KONAMI.length) {
          konamiIdx = 0;
          const konamiModal = document.getElementById("konami-modal");
          if (konamiModal) {
            konamiModal.classList.add("active");
            document.body.style.overflow = "hidden";
            triggerCelebration();
            AppState.unlockAchievement("konami-master");
          }
        }
      } else {
        konamiIdx = 0;
      }
    });

    const konamiModal = document.getElementById("konami-modal");
    const closeKonamiBtn = document.getElementById("close-konami-btn");
    if (konamiModal) {
      let konamiClaimed = false;
      const closeKonami = () => {
        konamiModal.classList.remove("active");
        document.body.style.overflow = "";
        if (konamiClaimed) {
          konamiClaimed = false;
          AppState.addXP(200, "Konami Code Master!");
        }
      };
      // The unlock happens in the keydown listener above — track it here
      const origUnlock = AppState.unlockAchievement.bind(AppState);
      closeKonamiBtn?.addEventListener("click", () => {
        konamiClaimed = true;
        closeKonami();
      });
      konamiModal.addEventListener("click", (e) => {
        if (e.target === konamiModal) closeKonami();
      });
    }


    // ── 7. Night Owl: visit at midnight (system clock 00:00–04:59) ────
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 5) {
      setTimeout(() => {
        AppState.unlockAchievement("night-owl");
        UI.showToast("🦉 Night Owl unlocked — coding past midnight!", "achievement");
      }, 3000);
    }

    // ── 8. Logo Click Egg — fast-click 5× to trigger easter egg ──────
    let logoClicks = 0;
    let logoClickTimer = null;
    document.querySelector("header a")?.addEventListener("click", (e) => {
      e.preventDefault();
      logoClicks++;
      clearTimeout(logoClickTimer);
      logoClickTimer = setTimeout(() => { logoClicks = 0; }, 2000);
      if (logoClicks >= 5) {
        logoClicks = 0;
        UI.showToast("🔮 You found the logo secret! Blender was first called Traces.", "xp");
        triggerCelebration();
        AppState.unlockAchievement("lore-keeper");
      }
    });
  },

  setupEventListeners() {
    // Search input
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        AppState.searchQuery = e.target.value;
        this.renderLessons();
      });
    }

    // Filter selects
    const levelFilter = document.getElementById("filter-level-select");
    if (levelFilter) {
      levelFilter.addEventListener("change", (e) => {
        AppState.activeLevel = e.target.value;
        this.renderLessons();
      });
    }

    const statusFilter = document.getElementById("filter-status-select");
    if (statusFilter) {
      statusFilter.addEventListener("change", (e) => {
        AppState.activeStatus = e.target.value;
        this.renderLessons();
      });
    }

    // Clear filters button
    document.getElementById("clear-filters-btn")?.addEventListener("click", () => {
      AppState.searchQuery = "";
      AppState.activeLevel = "all";
      AppState.activeStatus = "all";
      AppState.activeTrack = "all";
      if (searchInput) searchInput.value = "";
      if (levelFilter) levelFilter.value = "all";
      if (statusFilter) statusFilter.value = "all";
      this.renderTrackPills();
      this.renderLessons();
    });

    // Reset Progress Button
    document.getElementById("reset-progress-btn")?.addEventListener("click", () => {
      AppState.resetAll();
    });

    // Export Progress
    document.getElementById("export-progress-btn")?.addEventListener("click", () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(localStorage.getItem(STATE_STORAGE_KEY) || "{}");
      const downloadAnchor = document.createElement("a");
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `blender_academy_backup_${new Date().toISOString().slice(0, 10)}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      UI.showToast("Progress backup downloaded!", "info");
    });

    // Import Progress
    const fileInput = document.getElementById("import-file-input");
    document.getElementById("import-progress-btn")?.addEventListener("click", () => {
      fileInput?.click();
    });
    fileInput?.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const imported = JSON.parse(event.target.result);
          localStorage.setItem(STATE_STORAGE_KEY, JSON.stringify(imported));
          AppState.init();
          UI.init();
          UI.showToast("Progress restored successfully!", "achievement");
        } catch (err) {
          alert("Invalid backup file: " + err.message);
        }
      };
      reader.readAsText(file);
    });

    // Addons trigger achievement on tab scroll or view
    const addonTab = document.getElementById("addons-nav-link");
    if (addonTab) {
      addonTab.addEventListener("click", () => {
        AppState.unlockAchievement("tool-collector");
      });
    }

    // Modal background click to close
    const modal = document.getElementById("lesson-modal");
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.classList.remove("active");
          document.body.style.overflow = "";
          this.currentModalLessonId = null;
        }
      });
    }

    // Escape key to close modal
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal && modal.classList.contains("active")) {
        modal.classList.remove("active");
        document.body.style.overflow = "";
        this.currentModalLessonId = null;
      }
    });
  },

  showToast(message, type = "info") {
    let container = document.getElementById("toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      container.className = "toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = `toast-msg ${type === 'achievement' ? 'achievement' : ''}`;
    
    let icon = "💡";
    if (type === "xp") icon = "⚡";
    if (type === "achievement") icon = "🏆";
    if (type === "info") icon = "ℹ️";

    toast.innerHTML = `
      <span class="text-xl flex-shrink-0">${icon}</span>
      <div class="text-xs md:text-sm font-medium">${message}</div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(100%)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }
};

// Canvas Confetti Celebration Engine (with built-in fallback)
function triggerCelebration() {
  if (typeof confetti === "function") {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ea7600", "#00a2ff", "#ffd600", "#00e676", "#ffffff"]
    });
  } else {
    // Simple inline Canvas Confetti fallback if offline
    createCanvasBurst();
  }
}

function createCanvasBurst() {
  const canvas = document.createElement("canvas");
  canvas.style.position = "fixed";
  canvas.style.inset = "0";
  canvas.style.width = "100vw";
  canvas.style.height = "100vh";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "9999";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ["#ea7600", "#00a2ff", "#ffd600", "#00e676", "#ffffff"];

  for (let i = 0; i < 70; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height * 0.6,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.8) * 18,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
      rotation: Math.random() * 360,
      vr: (Math.random() - 0.5) * 10
    });
  }

  let frames = 0;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.4; // gravity
      p.rotation += p.vr;
      p.alpha -= 0.015;

      if (p.alpha > 0) {
        alive = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }
    });

    frames++;
    if (alive && frames < 120) {
      requestAnimationFrame(animate);
    } else {
      canvas.remove();
    }
  }
  requestAnimationFrame(animate);
}

// Global Startup
window.addEventListener("DOMContentLoaded", () => {
  AppState.init();
  UI.init();
});

