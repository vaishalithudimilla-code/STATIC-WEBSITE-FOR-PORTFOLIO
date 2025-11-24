// Theme toggle with persistent setting
const toggle = document.getElementById("themeToggle");
const stored = localStorage.getItem("theme");
if (stored === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  toggle.setAttribute("aria-pressed", "true");
}
toggle.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  if (isDark) {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    toggle.setAttribute("aria-pressed", "false");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggle.setAttribute("aria-pressed", "true");
  }
});

// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    if (href === "#" || href === "") return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Simple contact form demo
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value
      ? document.getElementById("message").value.trim()
      : "";
    if (!name || !email) {
      msg.textContent = "Please enter name and email.";
      return;
    }
    msg.textContent =
      "Thanks! This form is a demo — integrate a backend (or use Formspree) to receive messages.";
    form.reset();
  });
}

// animate skill bars on load
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelectorAll(".skill .bar > i").forEach((el) => {
      const target = el.getAttribute("data-width") || el.style.width || "70%";
      el.style.width = "0";
      requestAnimationFrame(() => {
        el.style.width = target;
      });
    });
  }, 200);
});

// header shadow when user scrolls
const headerEl = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 6) {
    headerEl.style.boxShadow = "0 6px 20px rgba(16,24,40,0.06)";
  } else {
    headerEl.style.boxShadow = "none";
  }
});
