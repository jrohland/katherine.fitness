$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('#header').addClass('shrink');
    $('#header-spacer').addClass('shrink');
  } else {
    $('#header').removeClass('shrink');
    $('#header-spacer').removeClass('shrink');
  }
});

$("#header a[href^='#']").on('click', function(e) {
   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(this.hash).offset().top - 60
     }, 500, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

$('body').scrollspy({
   offset: 60
});