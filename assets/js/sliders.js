const swiper = new Swiper('.hero__slider', {
  loop: true,
  autoplay: {
   delay: 4000,
  },

  pagination: {
    el: '.swiper-pagination',
  },
});

const sellersSlider = new Swiper('.best-sellers__slider', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    425: {
      slidesPerView: 1,
    },

    700: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    1300: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  }
})