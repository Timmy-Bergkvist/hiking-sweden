
/*
$("#noteBody").on("keyup",function(e){

    if(e.keyCode == 13 && $("#noteBody").val() !="")
    {
    var noteDisplay = $("<div class='noteDisplay'></div>").text($("#noteBody").val());
    var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
        var p = $(this).parent();
        p.fadeOut(function(){
            p.remove();
        });
    });

    task.append(del);
    $("#read_form").append(noteDisplay);
    //clear the input
    $("#noteBody").val("");
    }
});*/

$("#btnSave").click(function(){
    ("#noteBody").keyup();
});
