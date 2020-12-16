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

$(window).on("scroll", function() {
    if ($(this).scrollTop() > 100) {
      $('.floating').show();
    } else {
      $('.floating').hide();
    }
});
  
  $('.floating').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });



  $('.drawer-menu-item').click(function () {

    let header = $(".header").innerHeight(); 
    /* let speed = 300; */
    let id = $(this).attr("href");
    let position = $(id).offset().top - header;

    $('body,html').animate({
      scrollTop: position
    }, 300);
    return false;
  });

  $('.nav-item a').click(function () {


    $('.nav-item a').removeClass('is-active');
    $(this).addClass("is-active");

    let header = $(".header").innerHeight(); 
    /* let speed = 300; */
    let id = $(this).attr("href");
    let position = $(id).offset().top - header;

    $('body,html').animate({
      scrollTop: position
    }, 300);
    return false;
  });

  $(".qa-head").click(function(){
    $(this).next().slideToggle();
    $(this).toggleClass("is-active");
  });

  $(".qa-plus_head").click(function(){
    $(this).next().slideToggle();
    $(this).toggleClass("is-active");
  });

  $(".modal-open").click(function(e){
    e.preventDefault();
    $(".modal-background").addClass("is-show");
    $(".modal").addClass("is-show");
  });

  $(".modal-close").click(function(){
    $(".modal-background").removeClass("is-show");
    $(".modal").removeClass("is-show");
  });