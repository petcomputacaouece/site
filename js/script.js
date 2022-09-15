$(function () {
  //fixar header
  $(window).scroll(function () {
    if ($(this).scrollTop() > 680) {
      $('.navbar').addClass('fixed');
    } else {
      $('.navbar').removeClass('fixed');
    }
  });
})