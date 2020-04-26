
/* when you click on one of the links that link will be displayed in the section frame */
/*
$(function() {
  $('.showSingle').on( "click", function() {
    $('.targetDiv').hide();
    $('#div' + $(this).attr('target')).show();
  });
});
*/

let a = document.getElementById('div1');
let b = document.getElementById('div2');
let c = document.getElementById('div3');

$(".showSingle").on("click", function(){
  let idName = $(this).attr("div1").split(" ");
  let idBox = idName[0];
  let idName = idName[1];
  if ($(this).html()){

  }
});


/*
function myFunction() {
  var a = document.getElementById('search-header').click();
  var b = document.getElementById('notes-header').click();
  var c = document.getElementById('contact-header').click();
  if (a.style.visibility === 'visible') {
    b.style.visibility = 'hidden';
    c.style.visibility = 'hidden';
  } else if (b.style.visibility === 'visible'){
    a.style.visibility = 'hidden';
    c.style.visibility ='hidden';
  } else if (c.style.visibility === 'visible'){
    b.style.visibility = 'hidden';
    a.style.visibility = 'hidden';
  }
}
*/