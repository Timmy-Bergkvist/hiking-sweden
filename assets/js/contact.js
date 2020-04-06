/*I obtained information for this contact from here*/
/*https://www.youtube.com/watch?v=WY4rvU4ImgE */


function validation(){
    
   var name = document.getElementById("name").value;
   var email = document.getElementById("email").value;
   var message = document.getElementById("message").value;
   var error_message = document.getElementById("error_message");
   
   error_message.style.padding = "10px";
   
   var text;
   if(name.length < 1){
     text = "Please enter a valid name";
     error_message.innerHTML = text;
     return false;
   }
   
   if(email.indexOf("@") == -1 || email.length < 5){
     text = "Please enter a valid email";
     error_message.innerHTML = text;
     return false;
   }
   if(message.length <= 1){
     text = "Please enter some text";
     error_message.innerHTML = text;
     return false;
   }
   alert("Thanks for your message!");
   return true;
}
