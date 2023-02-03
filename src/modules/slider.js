'use strict';

import Swiper, { Navigation } from 'swiper';

export const slider = () => {

    const swiper = new Swiper('.swiper', {
      slidesPerView: 3,
      spaceBetween: 0,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      modules: [Navigation],
      navigation: {
          nextEl: ".coaching__top-right",
          prevEl: ".coaching__top-left",
      },
  });
}




