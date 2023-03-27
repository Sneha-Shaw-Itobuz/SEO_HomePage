const nav_list = document.getElementById("nav_list");
const menu = document.getElementById("menu");

menu.addEventListener("click", () => {
  if (nav_list.classList.contains("hide")) {
    nav_list.classList.remove("hide");
    nav_list.classList.add("show");
  } else {
    nav_list.classList.add("hide");
    nav_list.classList.remove("show");
  }
});

const searchIcon = document.querySelector(".search-icon");
const searchBar = document.querySelector(".search-bar");
const close = document.querySelector(".close");

searchIcon.addEventListener("click", () => {
  if (searchBar.classList.contains("hide")) {
    searchBar.classList.remove("hide");
    searchBar.classList.add("show");
  } else {
    searchBar.classList.remove("show");
    searchBar.classList.add("hide");
  }
});

close.addEventListener("click", () => {
  if (searchBar.classList.contains("hide")) {
    searchBar.classList.remove("hide");
    searchBar.classList.add("show");
  } else {
    searchBar.classList.remove("show");
    searchBar.classList.add("hide");
  }
});

// slider

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  freeMode: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    650: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
