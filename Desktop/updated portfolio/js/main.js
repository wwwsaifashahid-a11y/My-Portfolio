// ============================================================
// CONFIG — edit these two lines to point at your real files/links
// ============================================================
const RESUME_URL = "assets/resume/your-cv.pdf"; // put your CV here, or replace with a link
document.getElementById("year").textContent = new Date().getFullYear();
["resumeBtn", "resumeCardBtn"].forEach((id) => {
  const el = document.getElementById(id);
  if (el) el.href = RESUME_URL;
});

// ============================================================
// NAVBAR — scroll state + mobile toggle
// ============================================================
const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("navToggle");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("is-scrolled", window.scrollY > 8);
});

navToggle.addEventListener("click", () => {
  const isOpen = navbar.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// ============================================================
// PROJECT CARDS — rendered from PROJECTS (js/data.js)
// ============================================================
const PLATFORM_LABEL = { make: "Make.com", n8n: "n8n", zapier: "Zapier" };

const grid = document.getElementById("projectsGrid");

function renderCard(project) {
  const card = document.createElement("article");
  card.className = "project-card";
  card.dataset.platform = project.platform;
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `View details for ${project.name}`);

  card.innerHTML = `
    <div class="project-card-top">
      <h3>${project.name}</h3>
      <span class="project-platform-badge">${PLATFORM_LABEL[project.platform]}</span>
    </div>
    <p class="tagline">${project.tagline}</p>
    <div class="project-flow">
      ${project.workflow
        .map(
          (step, i) =>
            `<span class="step">${step}</span>${i < project.workflow.length - 1 ? '<span class="arrow">→</span>' : ""}`
        )
        .join("")}
    </div>
    <div class="project-tech">
      ${project.tech.map((t) => `<span class="tech-pill">${t}</span>`).join("")}
    </div>
    <span class="project-card-cta">View Case Study →</span>
  `;

  card.addEventListener("click", () => openModal(project));
  card.addEventListener("keypress", (e) => {
    if (e.key === "Enter" || e.key === " ") openModal(project);
  });

  return card;
}

function renderProjects(filter = "all") {
  grid.innerHTML = "";
  const list = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.platform === filter);
  list.forEach((p) => grid.appendChild(renderCard(p)));
}

renderProjects();

// ============================================================
// FILTER BAR
// ============================================================
document.getElementById("filterBar").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("is-active"));
  btn.classList.add("is-active");
  renderProjects(btn.dataset.filter);
});

// ============================================================
// PROJECT MODAL
// ============================================================
const overlay = document.getElementById("modalOverlay");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");
let lastFocused = null;

function openModal(project) {
  lastFocused = document.activeElement;

  modalBody.innerHTML = `
    <span class="modal-badge">${PLATFORM_LABEL[project.platform]}</span>
    <h2 id="modalTitle">${project.name}</h2>
    <p class="modal-tagline">${project.tagline}</p>

    <div class="modal-shot">
      ${
        project.screenshot
          ? `<img src="${project.screenshot}" alt="${project.name} workflow screenshot" style="width:100%;height:100%;object-fit:cover;border-radius:8px;">`
          : "Screenshot placeholder — add a workflow screenshot in js/data.js"
      }
    </div>

    <div class="modal-section">
      <h4>Problem</h4>
      <p>${project.problem}</p>
    </div>

    <div class="modal-section">
      <h4>Solution</h4>
      <p>${project.solution}</p>
    </div>

    <div class="modal-section">
      <h4>Automation Workflow</h4>
      <div class="modal-workflow">
        ${project.workflow
          .map(
            (step, i) =>
              `<span class="step">${step}</span>${i < project.workflow.length - 1 ? '<span class="arrow">→</span>' : ""}`
          )
          .join("")}
      </div>
    </div>

    <div class="modal-section">
      <h4>Key Features</h4>
      <ul>${project.features.map((f) => `<li>${f}</li>`).join("")}</ul>
    </div>

    <div class="modal-section">
      <h4>Business Value</h4>
      <ul>${project.businessValue.map((v) => `<li>${v}</li>`).join("")}</ul>
    </div>

    <div class="modal-section">
      <h4>Tools Used</h4>
      <div class="project-tech">${project.tech.map((t) => `<span class="tech-pill">${t}</span>`).join("")}</div>
    </div>

    <div class="modal-links">
      ${project.links.github ? `<a class="btn btn-outline btn-sm" href="${project.links.github}" target="_blank" rel="noopener">View on GitHub</a>` : ""}
      ${project.links.live ? `<a class="btn btn-solid btn-sm" href="${project.links.live}" target="_blank" rel="noopener">View Workflow</a>` : ""}
      ${!project.links.github && !project.links.live ? `<span class="modal-tagline">Add a GitHub or live workflow link in js/data.js to show buttons here.</span>` : ""}
    </div>
  `;

  overlay.classList.add("is-open");
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function closeModal() {
  overlay.classList.remove("is-open");
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}

modalClose.addEventListener("click", closeModal);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay.classList.contains("is-open")) closeModal();
});

// ============================================================
// SCROLL REVEAL — subtle, restrained, respects reduced motion
// ============================================================
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion && "IntersectionObserver" in window) {
  const revealTargets = document.querySelectorAll(
    ".info-card, .platform-card, .project-card, .fact-card, .contact-card"
  );
  revealTargets.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(14px)";
    el.style.transition = "opacity .5s ease, transform .5s ease";
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealTargets.forEach((el) => io.observe(el));
}
