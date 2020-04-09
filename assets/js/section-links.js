/* this section is for the section links */
/* when you click on one of the links that link will be displayed in the section frame */

function searchFunction() {
    var x = document.getElementsByClassName("search_wrapper");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function notesFunction() {
    var x = document.getElementsByClassName("notes_wrapper");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function contactFunction() {
    var x = document.getElementsByClassName("contact_wrapper");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }