$( document ).ready(function() {
  $('.ui-close').on('click', function(){
    $('.alert').show();
  });
  $('.ui-btn-cancel, .ui-btn-gray, .ui-btn-accept').on('click', function(){
    $('.alert').hide();
  });
});
