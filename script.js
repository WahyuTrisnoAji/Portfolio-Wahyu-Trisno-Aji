// navbar section
const hamburgerMenu = document.getElementById("humburger-menu");
const navbarNavMobile = document.querySelector(".navbar-nav-mobile");

hamburgerMenu.addEventListener("click", () => {
  navbarNavMobile.classList.toggle("translate-x-full");
  navbarNavMobile.classList.toggle("translate-x-0");
});

document.addEventListener("click", (e) => {
  if (
    !hamburgerMenu.contains(e.target) &&
    !navbarNavMobile.contains(e.target)
  ) {
    navbarNavMobile.classList.add("translate-x-full");
    navbarNavMobile.classList.remove("translate-x-0");
  }
});

// contact section
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
