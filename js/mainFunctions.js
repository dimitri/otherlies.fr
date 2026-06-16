/* =========================================================================
   Other Lies — vanilla JS (no jQuery / GSAP / ScrollMagic / Rellax)
   Handles: sticky header, mobile drawer, scroll-reveal, back-to-top,
   email obfuscation. Degrades gracefully and respects reduced motion.
   ========================================================================= */
(function () {
  "use strict";

  var header   = document.getElementById("header");
  var toggle   = document.getElementById("navToggle");
  var drawer   = document.getElementById("mobileNav");
  var toTop     = document.getElementById("toTop");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- sticky header + back-to-top (single scroll handler) ----------- */
  function onScroll() {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    if (header) header.classList.toggle("scrolled", y > 40);
    if (toTop)  toTop.classList.toggle("show", y > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- mobile drawer ------------------------------------------------- */
  function setMenu(open) {
    if (!drawer || !toggle) return;
    drawer.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.style.overflow = open ? "hidden" : "";
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });
  }
  if (drawer) {
    drawer.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { setMenu(false); });
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setMenu(false);
  });

  /* ---- back to top --------------------------------------------------- */
  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  /* ---- scroll reveal (IntersectionObserver) -------------------------- */
  var revealEls = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---- email obfuscation -------------------------------------------- */
  var mailHost = document.getElementById("insertMail");
  if (mailHost) {
    var user = "contact", domain = "otherlies.fr";
    var a = document.createElement("a");
    a.href = "mailto:" + user + "@" + domain;
    a.textContent = user + "@" + domain;
    mailHost.appendChild(a);
  }
})();
