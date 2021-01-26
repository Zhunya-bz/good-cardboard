$(document).ready(function(){
  $('.slider-top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-bottom'
  });
  $('.slider-bottom').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-top',
    //centerMode: true,
    //focusOnSelect: true,
    prevArrow: '<div class="slider-arrow slider-arrow_prev"></div>',
    nextArrow: '<div class="slider-arrow slider-arrow_next"></div>'
  });
});