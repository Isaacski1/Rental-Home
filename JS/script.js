// Sticky Navbar Section
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 90);
});

// Hamburger Section
const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".navmenu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navmenu.classList.toggle("active");
});
