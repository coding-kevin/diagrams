function classToggle() {
  const navs = document.querySelectorAll(".nav-items");
  navs.forEach((nav) => nav.classList.toggle("navbar-show"));
}

document
  .querySelector(".hamburger-icon")
  .addEventListener("click", classToggle);

//https://www.freecodecamp.org/news/how-to-build-a-responsive-navbar-with-a-toggle-menu-using-flexbox-3438e1d08783/
