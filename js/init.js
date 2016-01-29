$(document).ready(function(){
  $('.parallax').parallax();
  $('.slider').slider({full_width: true, indicators: true, height: 620, interval:10000});
  $(".button-collapse").sideNav();
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();
    var target = this.hash;
    $target = $(target);
    $('html, body').stop().animate({
       'scrollTop':  $target.offset().top - $('nav').height()//no need of parseInt here

    }, 900, 'swing', function () {
       window.location.hash = target;
    });
  });
});
