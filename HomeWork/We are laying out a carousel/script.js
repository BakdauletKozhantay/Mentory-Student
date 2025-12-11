const swiperTestimonials = new Swiper('.mySwiper', {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 1,
  speed: 600,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    700: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1100: {
      slidesPerView: 2,
      spaceBetween: 28,
    }
  }
});

const swiperCards = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination-cards',
    clickable: true
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    }
  }
});
