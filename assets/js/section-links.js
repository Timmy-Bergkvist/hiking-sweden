/* this section is for the section links */
/* when you click on one of the links that link will be displayed in the section frame */

$(function() {
  $('.showSingle').click(function() {
    $('.targetDiv').hide();
    $('#div' + $(this).attr('target')).show();
  });
});