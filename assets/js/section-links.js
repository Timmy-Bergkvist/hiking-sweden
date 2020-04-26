
/* when you click on one of the links that link will be displayed in the section frame */
$(function() {
  $('.showSingle').on( "click", function() {
    $('.targetDiv').hide();
    $('#div' + $(this).attr('target')).show();
  });
});
