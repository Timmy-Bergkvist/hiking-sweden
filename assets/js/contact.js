/*I obtained information for this contact from here*/
/*https://www.youtube.com/watch?v=WY4rvU4ImgE */

function validation(contactForm){
  
   let name = document.getElementById("name").value;
   let email = document.getElementById("email").value;
   let message = document.getElementById("message").value;
   let error_message = document.getElementById("errorMessage");

   error_message.style.padding = "10px";
   
   //Name needs to contain more than 1 letter
   let text;
   if(name.length < 1){
     text = "Please enter a valid name";
     error_message.innerHTML = text;
     return false;
   }

   //Email needs to contains @ and more than 5 letters
   if(email.indexOf("@") == -1 || email.length < 5){
     text = "Please enter a valid email";
     error_message.innerHTML = text;
     return false;
   }
   //Message needs to contain more than 1 letter
   if(message.length <= 1){
     text = "Please enter some text";
     error_message.innerHTML = text;
     return false;
   } 
   
   var template_params = {
    "from_name": contactForm.name.value,
    "from_email": contactForm.email.value,
    "message_html": contactForm.message.value
  }
  
  var service_id = "default_service";
  var template_id = "template_47gjBkEs";
  emailjs.send(service_id, template_id, template_params);
   
  alert("Thank you " + name + " for your message! We will contact you at " + email);

  return true;
   
}