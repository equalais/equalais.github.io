(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

//Face Changer
$("#dp").mouseover(function(){
   $(this).attr("src", 'img/Faces/pedraza_daniel_s.png');
});
$("#dp").mouseout(function(){
   $(this).attr("src", 'img/Faces/pedraza_daniel_s_p.png');
});

$("#da").mouseover(function(){
   $(this).attr("src", 'img/Faces/adjodah_dhaval_s.png');
});
$("#da").mouseout(function(){
   $(this).attr("src", 'img/Faces/adjodah_dhaval_s_p.png');
});

$("#gg").mouseover(function(){
   $(this).attr("src", 'img/Faces/greene_gretchen_s.png');
});
$("#gg").mouseout(function(){
   $(this).attr("src", 'img/Faces/greene_gretchen_s_p.png');
});

$("#jj").mouseover(function(){
   $(this).attr("src", 'img/Faces/joseph_josh_s.png');
});
$("#jj").mouseout(function(){
   $(this).attr("src", 'img/Faces/joseph_josh_s_p.png');
});

$("#tm").mouseover(function(){
   $(this).attr("src", 'img/Faces/miano_thom_s.png');
});
$("#tm").mouseout(function(){
   $(this).attr("src", 'img/Faces/miano_thom_s_p.png');
});

$("#f").mouseover(function(){
   $(this).attr("src", 'img/Faces/Francisco_s.png');
});
$("#f").mouseout(function(){
   $(this).attr("src", 'img/Faces/Francisco_s_p.png');
});
