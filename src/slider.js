// var slideIndex = 1;
// showDivs(slideIndex);

// function currentDiv(n) {
//   showDivs((slideIndex = n));
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName('mySlides');
//   var dots = document.getElementsByClassName('demo');
//   if (n > x.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = x.length;
//   }
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = 'none';
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(' slider__item--active', '');
//   }
//   x[slideIndex - 1].style.display = 'flex';
//   dots[slideIndex - 1].className += ' slider__item--active';
// }

// // import Swiper JS
// import Swiper from 'swiper';
// // import Swiper styles
// import 'swiper/swiper-bundle.css';

// // core version + navigation, pagination modules:
// import SwiperCore, { Navigation, Pagination } from 'swiper/core';

// // configure Swiper to use modules
// SwiperCore.use([Navigation, Pagination]);

// var swiper = new Swiper('.swiper-container', {
//   spaceBetween: 30,
//   effect: 'fade',
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

var swiper = new Swiper('.swiper', {
  effect: 'flip',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
});
