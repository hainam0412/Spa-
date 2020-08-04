$(".nav__burger-button").click(function () {
  if (!$(".nav__links").hasClass("nav__links-show")) {
    $(".nav__links").slideDown();
    $(".nav__links").addClass("nav__links-show");
    $(".nav__burger-button").addClass("nav__burger-button-clicked");
  } else {
    $(".nav__links").slideUp();
    $(".nav__links").removeClass("nav__links-show");
    $(".nav__burger-button").removeClass("nav__burger-button-clicked");
  }
});

var navSubMenu = $("div.nav__sub-menu");
var down = $(".drop-down-button");

$("li.nav__links-link").each(function (index) {
  $(this).click(function () {
    if (!$(navSubMenu[index]).hasClass("check-show")) {
      $(navSubMenu[index]).slideDown();
      $(navSubMenu[index]).addClass("check-show");
      $(down[index]).html(`<i class="fas fa-angle-up"></i>`);
    } else {
      $(navSubMenu[index]).slideUp();
      $(navSubMenu[index]).removeClass("check-show");
      $(down[index]).html(`<i class="fas fa-angle-down"></i>`);
    }
  });
});

var lastScrollTop = 0,
  delta = 5;
$(window).scroll(function (event) {
  var st = $(this).scrollTop();

  if (Math.abs(lastScrollTop - st) <= delta) return;

  if (st > lastScrollTop) {
    // down scroll code
    $(".nav__logo").html(` <a href="index.html">
      <img class="full-percent" src="./resource/lib/logo/logo-white.png" alt="logo" />
    </a>`);
    nav.classList.remove("nav-sticky");
    nav.classList.add("nav-static");
  } else {
    // up scroll code

    $(".nav__logo").html(` <a href="index.html">
      <img class="full-percent" src="./resource/lib/logo/logo-light.png" alt="logo" />
    </a>`);
    nav.classList.add("nav-sticky");
    nav.classList.remove("nav-static");
  }
  lastScrollTop = st;
});

let spaLink = $(".spa__treatment-item");
isOpen = 0;

let spaBlock = $(".spa__treatment-item-block");

spaLink.each(function () {
  $(this).click(function () {
    let item = $(this).find(".spa__treatment-item-block");
    let icon = $(this).find(".spa__treatment-icon");
    let label = $(this).find(".spa__treatment-item-label span:first");
    if (isOpen === 0) {
      item.slideUp();
      icon.text("+");
      isOpen = 0;
      label.css({
        color: "#767676",
      });
      isOpen = 1;
    } else {
      item.slideDown();
      icon.text("-");
      label.css({
        color: "#000",
      });
      isOpen = 0;
    }
  });
});
