const hamButton = document.querySelector(".hamburger-icon");
const hamSluitButton = document.querySelector(".hamburger-menu button");

const hamMenu = document.querySelector(".hamburger-menu");

hamButton.addEventListener("click", () => {
  hamButton.classList.toggle("active");
  hamMenu.classList.add("is-open");
});

hamSluitButton.addEventListener("click", () => {
  hamButton.classList.toggle("is-open");
  hamMenu.classList.remove("is-open");
});

if (hamMenu.classList.contains("is-open")) {
  document.body.style.opacity = "0.5";
} else {
  document.body.style.opacity = "1";
}
