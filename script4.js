$( document ).ready(function() {
    $('.ui-checkbox').on('click', function(){
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
