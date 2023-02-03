'use strict';

import Swiper, { Navigation } from 'swiper';

export const sliderBottom = () => {

    const swiper = new Swiper('.swiper__bottom', {
        slidesPerView: 1,
        spaceBetween: 8,
        slidesPerGroup: 1,
        loop: false,
        loopFillGroupWithBlank: true,
        modules: [Navigation],
        navigation: {
            nextEl: ".swiper-arrow-right",
            prevEl: ".swiper-arrow-left",
        },
    });
}