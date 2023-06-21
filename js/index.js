var swiper = new Swiper(".review-slide", {
  slidesPerView: "auto",
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const ham = document.querySelector(".ham_btn");
const ham_menu = document.querySelector(".nav_text");
const fun = document.querySelector(".menu-right");
const ham_close = document.querySelector(".close_btn");
const toggle_bg = document.querySelector(".toggle_bg");

ham.addEventListener("click", () => {
  ham_menu.classList.add("on");
  toggle_bg.classList.add("on");
  ham_close.classList.add("on");
});
ham_close.addEventListener("click", () => {
  ham_menu.classList.remove("on");
  toggle_bg.classList.remove("on");
  ham_close.classList.remove("on");
});
