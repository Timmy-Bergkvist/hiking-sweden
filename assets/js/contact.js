
// I follwed this tutorial to make this contact form:
// https://www.youtube.com/watch?v=WY4rvU4ImgE
// I follwed Codeinstitute tutorial to set up this mail function:
// Email services used: https://www.emailjs.com/


(function () {
  emailjs.init("user_06t3L909DoJC4YF37CSuP");
})();

function submitInfo(){
  
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
     return ;
   } 

   //Email needs to contains @ and more than 5 letters
   if(email.indexOf("@") == -1 || email.length < 5){
     text = "Please enter a valid email";
     error_message.innerHTML = text;
     return ;
   }
   //Message needs to contain more than 1 letter
   if(message.length <= 1){
     text = "Please enter some text";
     error_message.innerHTML = text;
     return ;
   } 
   
   let template_params = {
    "from_name": name,
    "from_email": email,
    "message_html": message
  }
  
  let service_id = "default_service";
  let template_id = "template_47gjBkEs";
  emailjs.send(service_id, template_id, template_params);
   
  alert("Thank you " + name + " for your message! We will contact you at " + email);
  document.getElementById("form").reset(); 
  
  error_message.innerHTML = "";
  error_message.style.padding = "";
  return ;
   
}