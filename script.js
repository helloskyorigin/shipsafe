(() => {
  "use strict";
  const header = document.querySelector(".header");
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-nav");
  const dialog = document.getElementById("assessment-dialog");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function closeMenu() {
    toggle?.setAttribute("aria-expanded", "false");
    toggle?.setAttribute("aria-label", "Open navigation");
    menu?.setAttribute("inert", "");
  }

  toggle?.addEventListener("click", () => {
    const opening = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(opening));
    toggle.setAttribute("aria-label", opening ? "Close navigation" : "Open navigation");
    if (opening) menu?.removeAttribute("inert");
    else menu?.setAttribute("inert", "");
  });

  menu?.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });
  document.addEventListener("click", event => {
    if (header && !header.contains(event.target)) closeMenu();
  });
  window.matchMedia("(min-width: 851px)").addEventListener?.("change", event => {
    if (event.matches) closeMenu();
  });

  function updateHeader() {
    header?.classList.toggle("scrolled", window.scrollY > 12);
  }
  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !prefersReducedMotion) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -25px 0px" });
    reveals.forEach(node => observer.observe(node));
  } else {
    reveals.forEach(node => node.classList.add("visible"));
  }

  document.querySelectorAll("[data-start]").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      closeMenu();
      if (dialog && typeof dialog.showModal === "function") {
        dialog.showModal();
      }
    });
  });
  dialog?.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();