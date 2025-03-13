const swiper = new Swiper(".card-wrapper", {
  // Optional parameters
  //   direction: "vertical",
  //   direction: "horisontal",
  loop: true,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },

  // If we need pagination **
  //   pagmiation bullets
  pagination: {
    el: ".swiper-pagination",
    //   to let the dots to work
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //   resposive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    300: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    3810: {
      slidesPerView: 4,
    },
  },

  // And if we need scrollbar
  //   scrollbar: {
  //     el: ".swiper-scrollbar",
  //   },
});
