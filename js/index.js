const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 15,
  loop: true,
  navigation: {
    nextEl: ".work_control_next",
    prevEl: ".work_control_prev",
  },
  breakpoints: {
    768: {
      spaceBetween: 25,
    },
  },
});
