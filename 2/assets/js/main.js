"use strict"
AOS.init();
let swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-nextt",
      prevEl: ".swiper-button-prevv",
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      950: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
    },
  });

  let swiperTwo = new Swiper(".slide-contentTwo", {
    slidesPerView: 4,
    spaceBetween: 50,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-nextt",
      prevEl: ".swiper-button-prevv",
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      950: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });
  

  $(document).ready(function(){
	
    $('ul.tabs li').click(function(){
      var tab_id = $(this).attr('data-tab');
  
      $('ul.tabs li').removeClass('current');
      $('.tab-content').removeClass('current');
  
      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
    })
  
  })