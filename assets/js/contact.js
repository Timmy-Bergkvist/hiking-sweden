
//I follwed this tutorial to make this contact form
//https://www.youtube.com/watch?v=WY4rvU4ImgE

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
   
   let template_params = {
    "from_name": contactForm.name.value,
    "from_email": contactForm.email.value,
    "message_html": contactForm.message.value
  }
  
  let service_id = "default_service";
  let template_id = "template_47gjBkEs";
  emailjs.send(service_id, template_id, template_params);
   
  alert("Thank you " + name + " for your message! We will contact you at " + email);
  /*document.getElementById("form").reset();*/
  return true;
   
}
/*
$(document).ready(function(){
  $("#errorMessage")
  let text;
  $("#form").submit(function(){
    if ($("#name input[name]").val()=='')
    {
      alert("Please enter a valid name");
      return false;
    }
    else if ($("#email input[email]").val()=='')
    {
      alert("Please enter a valid email");
      return false;
    }
    else if ($("#message input[message]").val()=='')
    {
      alert("Please enter some text");
      return false;
    }
    return true;
  });
});
*/

/*if(form.name.value == ''){
    text = "Please enter a valid name";
     error_message.innerHTML = text;
     return false;
  } else if (form.email.value.indexOf("@") == -1 || email.length < 5){
    text = "Please enter a valid email";
    error_message.innerHTML = text;
    return false;
  } else if (form.message.value == ''){
    text = "Please enter some text";
    error_message.innerHTML = text;
    return false;
  } */