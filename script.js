const header = document.querySelector(".site-header");

const updateHeaderTone = () => {
  if (!header) return;
  header.dataset.scrolled = window.scrollY > 80 ? "true" : "false";
};

window.addEventListener("scroll", updateHeaderTone, { passive: true });
updateHeaderTone();

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href");
    if (!targetId || targetId === "#") return;
    const target = document.querySelector(targetId);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
