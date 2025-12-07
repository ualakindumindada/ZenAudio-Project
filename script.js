const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelectorAll(".nav-links");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.forEach((menu) => menu.classList.toggle("active"));
});
