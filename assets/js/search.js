


/*
// function for Whole Sweden radio button
$("#changetype-all").click(function(){
    $("#category").mouseup(function(){
      let open = $(this).data("isopen");
      if (open)display content from {
        alert("all")
      }
      $(this).data("isopen", !open);
    });
  });
  
  // function for north radio button
  $("#changetype-north").click(function(){
    alert("test north");
    $("#category").mouseup(function(){
      let open = $(this).data("isopen");
      if (open){
      }
      $(this).data("isopen", !open);
    });
  });

// function for south radio button
$("#changetype-south").click(function(){
    alert("test south")
    $("#category").mouseup(function(){
      let open = $(this).data("isopen");
      $(this).data("isopen", !open);
    });
  });*/
  
  // Function to reset radio buttons,
  // maps info and category selector.
  $("#reset").on('click', function() {
    $('input[name="type"]').prop('checked', false);
    $("#category").val('select');
    $("#infowindowContent").val('');
});
