let navBtn = document.getElementById("navbar-toggler");
const navBar = document.getElementById("blurNavbar");

function expandNavbar() {
  navBar.classList.add("nav-show");
  navBar.classList.remove("nav-hide");
  setTimeout(function () {
    navBtn.setAttribute("aria-expanded", true);
  }, 500);
}
function hideNavbar() {
  navBar.classList.add("nav-hide");
  navBar.classList.remove("nav-show");
  navBtn.setAttribute("aria-expanded", false);
}

navBtn.addEventListener("click", () => {
  if (navBtn.ariaExpanded === "false") {
    expandNavbar();
  } else {
    hideNavbar();
  }
});

const navbar = document.getElementById("blurNavbar");
document.addEventListener("click", function (event) {
  const target = event.target;
  const isClickInsideNavbar = navbar.contains(target);
  const isNavbarOpen = navBtn.ariaExpanded === "true";
  if (!isNavbarOpen) {
    return;
  }
  if (!isClickInsideNavbar && isNavbarOpen) {
    hideNavbar();
  }
});
