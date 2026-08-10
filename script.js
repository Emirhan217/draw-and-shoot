const button = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

button.addEventListener("click", () => {
  menu.classList.toggle("open");
});

document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
  });
});
