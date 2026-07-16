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

// ---------- custom form validation ----------
document.querySelectorAll("form").forEach((form) => {
  const MESSAGES = {
    text: "this field needs your name, princess",
    email: "we'll need a valid email to reach you",
    select: "pick one from the list",
    textarea: "tell us a little more",
    checkbox: "please accept before continuing",
  };

  function getMessage(el) {
    if (el.type === "checkbox") return MESSAGES.checkbox;
    if (el.tagName === "SELECT") return MESSAGES.select;
    if (el.tagName === "TEXTAREA") return MESSAGES.textarea;
    if (el.type === "email" && el.value) return "that doesn't look like an email — double-check?";
    if (el.type === "email") return MESSAGES.email;
    return MESSAGES.text;
  }

  function clearMsg(el) {
    var wrap = el.closest(".field") || el.closest(".consent");
    if (!wrap) return;
    var existing = wrap.querySelector(".validation-msg");
    if (existing) existing.remove();
  }

  function showMsg(el) {
    clearMsg(el);
    if (el.validity.valid) return;
    var wrap = el.closest(".field") || el.closest(".consent");
    if (!wrap) return;
    if (!wrap.classList.contains("field-wrap")) wrap.classList.add("field-wrap");
    var msg = document.createElement("span");
    msg.className = "validation-msg";
    msg.textContent = getMessage(el);
    wrap.appendChild(msg);
    setTimeout(function () { if (msg.parentNode) msg.remove(); }, 3500);
  }

  form.addEventListener("invalid", function (e) {
    e.preventDefault();
    showMsg(e.target);
    e.target.classList.add("touched");
  }, true);

  form.addEventListener("input", function (e) {
    if (e.target.classList.contains("touched")) {
      clearMsg(e.target);
      if (e.target.validity.valid) e.target.classList.remove("touched");
    }
  });

  form.addEventListener("change", function (e) {
    if (e.target.classList.contains("touched")) {
      clearMsg(e.target);
      if (e.target.validity.valid) e.target.classList.remove("touched");
    }
  });
});

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

// ---------- "coming soon" dialog (exercise library + merch) ----------
// those pages are saved for later — links keep their real hrefs and are
// marked data-coming-soon="exercise library" / "merch". re-enabling later
// is just deleting the data attributes.
(function () {
  if (!document.querySelector("[data-coming-soon]")) return;

  const COMING_SOON_COPY = {
    "exercise library":
      "the exercise library is almost ready — sign up for my mailing list and i'll tell you the moment it opens 👑",
    "merch":
      "the merch is still being lovingly made — sign up for my mailing list and you'll be the first to know when it drops 👑"
  };

  let csBackdrop = null;
  let csLastFocused = null;

  function buildComingSoon() {
    csBackdrop = document.createElement("div");
    csBackdrop.className = "modal-backdrop coming-soon-backdrop";
    csBackdrop.innerHTML = `
      <div class="modal coming-soon" role="dialog" aria-modal="true" aria-labelledby="coming-soon-title">
        <button class="modal-close" id="coming-soon-close" aria-label="close">✕</button>
        <span class="coming-soon-crown" aria-hidden="true">
          <svg width="40" height="28" viewBox="0 0 44 30" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M4 22 L2 6 L12 14 L22 2 L32 14 L42 6 L40 22 Z"/><line x1="7" y1="27" x2="37" y2="27" stroke-linecap="round"/></svg>
        </span>
        <span class="cat" id="coming-soon-what"></span>
        <h2 id="coming-soon-title">coming soon</h2>
        <p class="coming-soon-msg" id="coming-soon-msg"></p>
        <a class="btn btn-solid" href="contact.html">book a session</a>
      </div>`;
    document.body.appendChild(csBackdrop);

    csBackdrop.querySelector("#coming-soon-close").addEventListener("click", closeComingSoon);
    csBackdrop.addEventListener("click", (e) => {
      if (e.target === csBackdrop) closeComingSoon();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && csBackdrop.classList.contains("open")) closeComingSoon();
    });
  }

  function openComingSoon(what) {
    if (!csBackdrop) buildComingSoon();
    csLastFocused = document.activeElement;
    csBackdrop.querySelector("#coming-soon-what").textContent = what;
    csBackdrop.querySelector("#coming-soon-msg").textContent =
      COMING_SOON_COPY[what] || "this corner of the site is almost ready — check back soon, princess. 👑";
    csBackdrop.classList.add("open");
    document.body.style.overflow = "hidden";
    csBackdrop.querySelector("#coming-soon-close").focus();
  }

  function closeComingSoon() {
    csBackdrop.classList.remove("open");
    document.body.style.overflow = "";
    if (csLastFocused) csLastFocused.focus();
  }

  document.addEventListener("click", (e) => {
    const link = e.target.closest("[data-coming-soon]");
    if (!link) return;
    e.preventDefault();
    openComingSoon(link.getAttribute("data-coming-soon"));
  });
})();

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

  // honor ?cat=…&q=… links from the flows page cards
  const params = new URLSearchParams(window.location.search);
  const catParam = params.get("cat");
  if (catParam && categories.includes(catParam)) activeCategory = catParam;
  const qParam = params.get("q");
  if (qParam) {
    searchInput.value = qParam;
    query = qParam.trim().toLowerCase();
  }

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
