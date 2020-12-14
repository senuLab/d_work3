/* var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  }) */

$(document).ready(function() {
    $('.drawer').drawer();
  }); 

  var swiper = new Swiper('.swiper-container', {

    pagination: {
        el: '.swiper-pagination',
      },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

new WOW().init();

