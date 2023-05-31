$(function () {

  $('.hero__slider').slick({
    infinite: true,
    speed: 1000,
    fade: true,
    arrows: false,
    cssEase: 'linear',
    autoplay: true, 
    autoplaySpeed: 2000,
  });

  
  var mixer = mixitup('.works__content');

});