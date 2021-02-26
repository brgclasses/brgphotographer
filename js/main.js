/*Custom JavaScript*/

$(function(){
  // Activate wow.js
  new WOW().init();

  // typed text
  var typed = new Typed(".typed", {
    strings: ["beautiful moments digitally."],
    typeSpeed: 40,
    startDelay: 500,
    backSpeed: 50
  });

  // Closes the sidebar menu
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    // $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

  // work image gallery
  new SimpleLightbox('.work-gallery a');

  // page top
  $(document).scroll(function () {
    var $nav = $(".masthead");
    if ($(this).scrollTop() > $nav.height() + 200) {
      $('#toTop').css('display', 'block');
    } else {
      $('#toTop').css('display', '');
    }
  });

});
