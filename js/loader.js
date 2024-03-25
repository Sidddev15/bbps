// To load header in different HTML Files
$(function () {
  $("#commonContent").load("./header.html");
});

// To load Footer
$(function () {
  $("#footer-section").load("./footer.html");
});

// Initializing AOS
AOS.init();


Loader
$(document).ready(function() {
  // Show loader and fade in the screen when the page starts loading
  $(window).on('load', function() {
    $('.image-upload-loader').fadeIn('slow', function() {
      // Fade out the loader after it has been shown
      $(this).fadeOut('slow');
    });
    $('body').css('opacity', '1'); // Fade in the screen
  });
});