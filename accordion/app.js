$('.heading').on('click', function(e) {
  $('.sublist').slideUp();
  $(this).next('.sublist').slideToggle('slow');

});
