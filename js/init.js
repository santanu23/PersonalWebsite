$(document).ready(function(){
  console.log('%c HIRE ME! ', 'background: #222; color: #33cc33; font-size:150px');
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
  var options = [
    {selector: '#About', offset: 200, callback: 'Materialize.fadeInImage("#faceImage")'},
    {selector: '#About', offset: 200, callback: 'Materialize.fadeInImage("#programImage")'},
    {selector: '#About', offset: 200, callback: 'Materialize.fadeInImage("#universityImage")'},
  ];
  Materialize.scrollFire(options);
});
