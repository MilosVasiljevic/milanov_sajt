(() => {
  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const links = document.getElementById("nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu when clicking a link (mobile)
    links.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Simple filter on resources page
  const filter = document.getElementById("filter");
  const grid = document.getElementById("resourceGrid");

  if (filter && grid) {
    const items = Array.from(grid.querySelectorAll(".resource"));
    filter.addEventListener("input", () => {
      const q = filter.value.trim().toLowerCase();
      items.forEach(card => {
        const hay = (card.innerText + " " + (card.dataset.tags || "")).toLowerCase();
        card.style.display = hay.includes(q) ? "" : "none";
      });
    });
  }
})();
