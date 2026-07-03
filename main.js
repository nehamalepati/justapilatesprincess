/* just a pilates princess — site behavior */

// ---------- mobile nav ----------
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
}

// ---------- scroll reveals ----------
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealEls = document.querySelectorAll(".reveal");
if (prefersReducedMotion) {
  revealEls.forEach((el) => el.classList.add("in"));
} else if (revealEls.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => io.observe(el));
}

// ---------- exercise library ----------
const grid = document.getElementById("exercise-grid");

if (grid && typeof EXERCISES !== "undefined") {
  const searchInput = document.getElementById("exercise-search");
  const filtersBox = document.getElementById("filters");
  const noResults = document.getElementById("no-results");

  const backdrop = document.getElementById("modal-backdrop");
  const modalClose = document.getElementById("modal-close");

  const categories = ["All", ...new Set(EXERCISES.map((e) => e.category))];
  let activeCategory = "All";
  let query = "";
  let lastFocused = null;

  // honor ?cat=… links from the homepage program cards
  const params = new URLSearchParams(window.location.search);
  const catParam = params.get("cat");
  if (catParam && categories.includes(catParam)) activeCategory = catParam;

  categories.forEach((cat) => {
    const chip = document.createElement("button");
    chip.className = "filter-chip" + (cat === activeCategory ? " active" : "");
    chip.textContent = cat;
    chip.addEventListener("click", () => {
      activeCategory = cat;
      filtersBox.querySelectorAll(".filter-chip").forEach((c) => c.classList.toggle("active", c.textContent === cat));
      render();
    });
    filtersBox.appendChild(chip);
  });

  searchInput.addEventListener("input", () => {
    query = searchInput.value.trim().toLowerCase();
    render();
  });

  function matches(ex) {
    if (activeCategory !== "All" && ex.category !== activeCategory) return false;
    if (!query) return true;
    const haystack = [ex.name, ex.nickname, ex.category, ex.focus, ex.level, ex.cue, ...ex.steps].join(" ").toLowerCase();
    return query.split(/\s+/).every((word) => haystack.includes(word));
  }

  function render() {
    grid.innerHTML = "";
    const shown = EXERCISES.filter(matches);
    noResults.style.display = shown.length ? "none" : "block";

    shown.forEach((ex) => {
      const card = document.createElement("button");
      card.className = "exercise-card";
      card.innerHTML = `
        <span class="cat">${ex.category}</span>
        <h3>${ex.name}</h3>
        <p>${ex.focus}</p>
        <span class="meta">${ex.level} · ${ex.duration}</span>
      `;
      card.addEventListener("click", () => openModal(ex));
      grid.appendChild(card);
    });
  }

  function openModal(ex) {
    lastFocused = document.activeElement;
    document.getElementById("modal-cat").textContent = ex.category;
    document.getElementById("modal-title").textContent = ex.name;
    document.getElementById("modal-nickname").textContent = ex.nickname;

    const videoSlot = document.getElementById("modal-video");
    if (ex.videoId) {
      videoSlot.innerHTML = `<iframe src="https://www.youtube.com/embed/${ex.videoId}" title="${ex.name} — video demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    } else {
      videoSlot.innerHTML = `<span>🎥 Video demo coming soon —<br>the written steps below have you covered for now.</span>`;
    }

    const steps = document.getElementById("modal-steps");
    steps.innerHTML = "";
    ex.steps.forEach((step) => {
      const li = document.createElement("li");
      li.textContent = step;
      steps.appendChild(li);
    });

    document.getElementById("modal-cue").innerHTML = `<strong>“${ex.cue}”</strong>`;

    backdrop.classList.add("open");
    document.body.style.overflow = "hidden";
    modalClose.focus();
  }

  function closeModal() {
    backdrop.classList.remove("open");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  modalClose.addEventListener("click", closeModal);
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && backdrop.classList.contains("open")) closeModal();
  });

  render();
}
