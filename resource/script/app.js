var flkty = new Flickity(".spa-user-commend .main-carousel", {
  cellAlign: "left",
  contain: true,
  autoPlay: 5000,
  wrapAround: true,
});

const navLinks = document.querySelectorAll(".nav__links-link");
const nav = document.querySelector(".nav");

if (window.innerWidth < 992) {
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove("nav__link-hover");
  }
}

const subMenus = document.querySelectorAll(".nav__sub-menu");

for (let i = 0; i < subMenus.length; i++) {
  let subMenu = subMenus[i];

  // let nav =
  //   subMenu.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
  //     .parentElement;

  let nav = subMenu.closest(".relative-block");
  let width = nav.clientWidth;
  console.log(width);
  subMenu.style.width = width + "px";
}

const toTopButton = document.querySelector(".btn-to-top");

window.addEventListener("scroll", () => {
  if (pageYOffset == 0) {
    nav.classList.remove("nav-sticky");
    nav.classList.remove("nav-static");
    toTopButton.classList.remove("btn-to-top-show");

    document.querySelector(".nav__logo").innerHTML = ` <a href="index.html">
    <img class="full-percent" src="./resource/lib/logo/logo-white.png" alt="logo" />
  </a>`;
  }

  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    toTopButton.classList.add("btn-to-top-show");
  } else {
    toTopButton.classList.remove("btn-to-top-show");
  }
});

toTopButton.addEventListener("click", scrollTop);

function scrollTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
