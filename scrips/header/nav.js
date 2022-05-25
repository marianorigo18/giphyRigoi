const navToggle = document.querySelector(".nav__toggle");
const navBar = document.querySelector(".navbar");

navToggle.addEventListener("click", () => {
    navBar.classList.toggle("nav__menu--visible");
});
