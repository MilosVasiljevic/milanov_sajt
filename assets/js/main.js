// document.addEventListener("DOMContentLoaded", () => {
//   const links = document.querySelectorAll("[data-page]");
//   const pages = document.querySelectorAll(".page");

//   function showPage(pageId) {
//     pages.forEach(page => {
//       page.classList.toggle("active", page.id === pageId);
//     });
//   }

//   links.forEach(link => {
//     link.addEventListener("click", (e) => {
//       e.preventDefault();
//       showPage(link.dataset.page);
//     });
//   });
// });



document.addEventListener("click", function (e) {
  const link = e.target.closest("[data-page]");
  if (!link) return;

  e.preventDefault();

  const pageId = link.dataset.page;

  // 1. PRIKAŽI STRANICU
  document.querySelectorAll(".page").forEach(page => {
    page.classList.toggle("active", page.id === pageId);
  });

  // 2. AKTIVNI LINK SAMO U HEADER NAVIGACIJI
  const nav = document.getElementById("nav-links");
  if (nav) {
    nav.querySelectorAll(".nav-link").forEach(navLink => {
      navLink.classList.toggle(
        "active",
        navLink.dataset.page === pageId
      );
    });
  }
});
