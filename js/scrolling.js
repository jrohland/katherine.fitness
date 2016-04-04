$(document).ready(function(){
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
     
        $(window).scroll(function() {
            var yPos = $bgobj.data('offset')-($(window).scrollTop() / $bgobj.data('speed')); 
             
            // Put together our final background position
            var coords = $bgobj.data('position') + ' '+ yPos + 'px';
 
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); 
    });    

    $("#nav ul li a[href^='#']").on('click', function(e) {

       // prevent default anchor click behavior
       e.preventDefault();

       // store hash
       var hash = this.hash;

       // animate
       $('html, body').animate({
           scrollTop: $(this.hash).offset().top
         }, 500, function(){

           // when done, add hash to url
           // (default click behaviour)
           window.location.hash = hash;
         });

    });

    $(window).scroll(function() {
      if ($(document).scrollTop() > 50) {
        $('#nav').addClass('shrink');
      } else {
        $('#nav').removeClass('shrink');
      }
    });

});

