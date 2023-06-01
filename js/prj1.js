var swiper = new Swiper(".reviewSwiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

const $gnb = document.querySelector(".gnb");
const $ham = document.querySelector(".bar1");
$ham.addEventListener("click", () => {
  $gnb.classList.toggle("on");
});
let texxt = "test";
