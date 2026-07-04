/* just a pilates princess — site behavior */

// ---------- dark mode toggle ----------
// initial theme is stamped on <html> by the inline script in each page's head
const themeToggle = document.querySelector(".theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
}

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

// ---------- testimonials rotator ----------
const testimonialQuote = document.getElementById("testimonial-quote");
if (testimonialQuote) {
  const TESTIMONIALS = [
    "neha is such a great instructor! she has such a soothing voice and gives great cues. the pace of her class feels super intentional and the ab series is killer!!",
    "neha is so sweet! her class is great for someone who wants to understand more about the “why” behind movements",
    "neha was so warm and welcoming. i really enjoyed this class and will definitely do it again :)",
    "visiting boston for a few days and absolutely loved the class! tysm for such a cute, inclusive, and welcoming space!",
    "loved the class! neha was so welcoming, kind, and encouraging!",
    "loved her class, it was challenging, and neha had great energy!",
    "neha was kind and bubbly and explained proper technique well through a classical pilates mat sequence. exactly what i came for—challenging and thorough!"
  ];

  const counter = document.getElementById("testimonial-counter");
  const prevBtn = document.getElementById("testimonial-prev");
  const nextBtn = document.getElementById("testimonial-next");
  let current = 0;
  let timer = null;

  function show(n, instant) {
    current = (n + TESTIMONIALS.length) % TESTIMONIALS.length;
    const swap = () => {
      testimonialQuote.textContent = "“" + TESTIMONIALS[current] + "”";
      counter.textContent = (current + 1) + " / " + TESTIMONIALS.length;
      testimonialQuote.classList.remove("fading");
    };
    if (instant || prefersReducedMotion) {
      swap();
    } else {
      testimonialQuote.classList.add("fading");
      setTimeout(swap, 250);
    }
  }

  function restartAuto() {
    if (timer) clearInterval(timer);
    if (!prefersReducedMotion) timer = setInterval(() => show(current + 1), 7000);
  }

  prevBtn.addEventListener("click", () => { show(current - 1); restartAuto(); });
  nextBtn.addEventListener("click", () => { show(current + 1); restartAuto(); });

  show(0, true);
  restartAuto();
}

// ---------- discount codes ----------
// add or retire codes here — key is the code, value is what it gets you.
// (codes are honor-system: they're applied when you invoice, not on the site.)
const DISCOUNT_CODES = {
  princess10: "10% off your first private session 👑",
  desilates15: "15% off your first desi-lates class",
  moonlight20: "20% off moonlight stretch when you bring a friend 🌙"
};

const codeInput = document.getElementById("f-code");
if (codeInput) {
  const codeBtn = document.getElementById("apply-code");
  const codeMsg = document.getElementById("code-msg");

  function applyCode() {
    const raw = codeInput.value.trim().toLowerCase();
    if (!raw) {
      codeMsg.textContent = "";
      codeMsg.className = "code-msg";
      return;
    }
    if (DISCOUNT_CODES[raw]) {
      codeInput.value = raw;
      codeMsg.textContent = "✨ code applied — " + DISCOUNT_CODES[raw];
      codeMsg.className = "code-msg ok";
    } else {
      codeMsg.textContent = "hmm, that code isn't working — double-check the spelling?";
      codeMsg.className = "code-msg err";
    }
  }

  codeBtn.addEventListener("click", applyCode);
  codeInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      applyCode();
    }
  });
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
      videoSlot.innerHTML = `<span><img class="slot-logo" src="images/logo.jpg" alt="" onerror="this.remove()">🎥 video demo coming soon —<br>the written steps below have you covered for now.</span>`;
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
