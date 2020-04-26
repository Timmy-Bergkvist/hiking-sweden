
/*-----I follwed this tutorial to make this notepad list-----*/
/*--------https://www.youtube.com/watch?v=Gp2bUX7_WIg-------*/

const noteContainer = document.querySelector('.noteContainer');
let inputValue = document.querySelector('.input');
const btnSave = document.querySelector('.btnSave');

if(window.localStorage.getItem("note") == undefined){
     let note = [];
     window.localStorage.setItem("note", JSON.stringify(note));
}

let noteEX = window.localStorage.getItem("note");
let note = JSON.parse(noteEX);


class item{
	constructor(name){
		this.createItem(name);
	}
    createItem(name){
    	let itemBox = document.createElement('div');
        itemBox.classList.add('item');

    	let input = document.createElement('input');
    	input.type = "text";
    	input.disabled = true;
    	input.value = name;
    	input.classList.add('item_input');
      
    	let remove = document.createElement('button');
    	remove.classList.add('remove');
    	remove.innerHTML = "<i class='fas fa-trash-alt'></i>";
    	remove.addEventListener('click', () => this.remove(itemBox, name));

    	noteContainer.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(remove);
      
    }

    remove(itemBox, name){
        itemBox.parentNode.removeChild(itemBox);
        let index = note.indexOf(name);
        note.splice(index, 1);
        window.localStorage.setItem("note", JSON.stringify(note));
    }
}

btnSave.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
	if(e.which == 13){
		check();
	}
})

function check(){
	if(inputValue.value != ""){
		new item(inputValue.value);
        note.push(inputValue.value);
        window.localStorage.setItem("note", JSON.stringify(note));
		inputValue.value = "";
	}
}


for (let v = 0 ; v < note.length ; v++){
    new item(note[v]);
}

