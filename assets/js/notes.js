
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
/*
$("#btnSave").click(function(){
    
});
*/

const note_button = document.querySelector('.note_button');
let noteBody = document.querySelector('.noteBody');
const read_form = document.querySelector('.read_form');

class note_display{

    constructor(itemName){
        //create the item div
        this.createDiv(itemName);
    }
    createDiv(itemName){
        let noteBody = document.createElement('noteBody');
        noteBody.value = itemName;
        noteBody.disabled = true;
        noteBody.classList.add('item_input');
        noteBody.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('read_form');

        let removeBtn = document.createElement('button');
        removeBtn.innerHTML = ("<i class='fas fa-trash-alt'></i>");
        removeBtn.classList.add('removeBtn');

        read_form.appendChild(itemBox);

        itemBox.appendChild(noteBody);
        itemBox.appendChild(removeBtn);

        removeBtn.addEventListener('click', () => this.remove(itemBox));
    }

    remove(item){
        noteBody.removeChild(item);
    }

}


note_button.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
	if(e.which == 13){
		check();
	}
})

function check(){
    if(noteBody.value != ""){
        new note_display(noteBody.value);
        noteBody.value = "";
    }
}


