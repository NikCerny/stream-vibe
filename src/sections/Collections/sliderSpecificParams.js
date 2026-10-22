const sliderParamsTwoFive = {
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 16,
      allowTouchMove: true,
    },
    768: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20,
      allowTouchMove: true,
    },
    1250: {
      slidesPerView: 5,
      slidesPerGroup: 5,
      spaceBetween: 20,
      allowTouchMove: false,
    },
  },
};

const sliderParamsOneHalfFour = {
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1.5,
      slidesPerGroup: 1,
      spaceBetween: 16,
      allowTouchMove: true,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
      allowTouchMove: true,
    },
    1250: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      allowTouchMove: false,
      spaceBetween: 30,
    },
  },
};


export { sliderParamsTwoFive, sliderParamsOneHalfFour };
