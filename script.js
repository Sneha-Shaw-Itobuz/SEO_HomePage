const nav_list = document.getElementById("nav_list");
const menu = document.getElementById("menu");
const circle = document.querySelectorAll(".circles div");
const cards = document.querySelectorAll(".slider-card");
const plans_cards = document.querySelectorAll(".hover-card");

menu.addEventListener("click", () => {
  if (nav_list.classList.contains("hide")) {
    nav_list.classList.remove("hide");
    nav_list.classList.add("show");
  } else {
    nav_list.classList.add("hide");
    nav_list.classList.remove("show");
  }
});

plans_cards.forEach((plan) => {
  plan.addEventListener("mouseover", () => {
    plan.firstElementChild.style.color = "white";
    plan.lastElementChild.style.background = "#FAD725";
    plan.lastElementChild.classList.remove("border-secondary");
  });
});

plans_cards.forEach((plan) => {
  plan.addEventListener("mouseout", () => {
    plan.firstElementChild.style.color = "#6f77f1";
    plan.lastElementChild.style.background = "none";
    plan.lastElementChild.classList.add("border-secondary");
  });
});

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
