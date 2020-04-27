
// Function to reset radio buttons,
  // maps info and category selector.
  $("#reset").on('click', function() {
    $('input[name="type"]').prop('checked', false);
    $("#category").val('select');
    $("#infowindowContent").val('');
});