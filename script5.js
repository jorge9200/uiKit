$( document ).ready(function() {
    $('.ui-radio-button').on('click', function(){
    var object = $(this);
    if(!object.hasClass('inactive')){
      if(object.hasClass('active')){
        object.removeClass('active');
      }else{
        object.addClass('active');
      }
    }
  });
});
