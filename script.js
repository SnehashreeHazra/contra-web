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

// const swiper2 = new Swiper(".swiper-container", {
//   effect: "slide",
//   loop: true,
//   slidesPerView: 5,
//   autoplay: {delay: 4000}
// });


// const swiper3 = new Swiper(".brand-swiper", {
//   effect: "slide",
//   loop: true,
//   slidesPerView: 5,
//   autoplay: {delay: 4000}
// })


const swiper4 = new Swiper(".swiper-container2", {
  effect: "slide",
  slidesPerView: 3,
  

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
})






document.addEventListener("DOMContentLoaded", () => {
  const filters = document.querySelectorAll(".filter1");
  const residentialSlider = document.querySelector(".slider_1");
  const commercialSlider = document.querySelector(".slider_2");

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      // Remove 'active' class from all filters
      filters.forEach((btn) => btn.classList.remove("active"));

      // Add 'active' class to the clicked filter
      filter.classList.add("active");

      // Get the filter type from the data attribute
      const filterType = filter.getAttribute("data-filter");

      // Toggle sliders based on the filter type
      if (filterType === "residential") {
        residentialSlider.classList.add("active");
        commercialSlider.classList.remove("active");
      } else if (filterType === "commercial") {
        commercialSlider.classList.add("active");
        residentialSlider.classList.remove("active");
      }
    });
  });
});








