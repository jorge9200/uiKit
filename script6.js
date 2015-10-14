$( document ).ready(function() {
    $('.ui-text-alignment figure').on('click', function(){
      $('.ui-text-alignment .active').removeClass('active');
      $(this).addClass('active');
  });
});
