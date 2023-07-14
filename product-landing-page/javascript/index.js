document.addEventListener("DOMContentLoaded", () => {
  burger();
});

function burger() {
  const burger = document.querySelector(".navbar-burger");
  const navlinks = document.querySelector(".navbar-menu");

  burger.onclick = () => {
    burger.classList.toggle("is-active");
    navlinks.classList.toggle("is-active");
  };
}
