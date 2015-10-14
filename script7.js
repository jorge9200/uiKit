$( document ).ready(function() {
    $('.ui-alignment-btn').on('click', function(){
      var object = $(this);
      if(!object.hasClass('inactive')){
        $('.ui-alignment-btn.active').removeClass('active');
        object.addClass('active');
      }
  });
});
