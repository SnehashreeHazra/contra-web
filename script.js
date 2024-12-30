const swiper = new Swiper(".slider-container", {
  effect: "fade",
  speed: 1300,
  autoplay: {delay: 5000}
});

const sliderTabs = document.querySelectorAll(".right_prev_div, .right_next_div");

sliderTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    if (tab.classList.contains("right_prev_div")) {
      // Navigate to the previous slide
      swiper.slidePrev();
    } else if (tab.classList.contains("right_next_div")) {
      // Navigate to the next slide
      swiper.slideNext();
    }
  });
});

// const swiper1 = new Swiper(".swiper", {
//   effect: "slide",
//   loop: true,
//   slidesPerView: 2,
//   spaceBetween: 20,
//   autoplay: {delay: 2000}
// })

const swiper2 = new Swiper(".swiper-container", {
  effect: "slide",
  loop: true,
  slidesPerView: 5,
  autoplay: {delay: 4000}
})

// const swiper3 = new Swiper(".brand-swiper", {
//   effect: "slide",
//   loop: true,
//   slidesPerView: 5,
//   autoplay: {delay: 4000}
// })







