
// Click function that will display and hide the chosen links.

$(document).ready(function () {
  // Hide displayed paragraphs
  $("#search-header").click(function () {
    $("#div2").hide();
    $("#div3").hide();
  });
  $("#notes-header").click(function () {
    $("#div1").hide();
    $("#div3").hide();
  });
  $("#contact-header").click(function () {
    $("#div1").hide();
    $("#div2").hide();
  });

  // Show hidden paragraphs
  $("#search-header").click(function () {
    $("#div1").show();
  });
  $("#notes-header").click(function () {
    $("#div2").show();
  });
  $("#contact-header").click(function () {
    $("#div3").show();
  });
});


// Picture click slide function.
// Information obtain from:
// https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp
let slideIndex = [1,1];
let slideId = ["mySlides1"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}