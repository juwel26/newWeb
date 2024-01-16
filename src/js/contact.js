function SendMail(){
    var parms = {
    from_name: document.getElementById("Name").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value
   
  };
  
  emailjs.send('service_9ygswwv', 'template_ayr4gdd', parms)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
      //  document.getElementById("pp").innerHTML = " Your massage sent successfully Thank you."
      //  document.getElementById("pp").style.color = "green"
       document.querySelector(".sucss").style.display = " block"
       document.querySelector(".bgblr").style.display = " block"

       document.getElementById("Name").value = " "
       document.getElementById("email_id").value = " "
       document.getElementById("message").value = " "
        
  
       setTimeout(() => {
        // document.getElementById("pp").innerHTML = " "
        document.querySelector(".sucss").style.display = " none"
        document.querySelector(".bgblr").style.display = " none"

        
      }, 5000);
    }, function(error) {
       console.log('FAILED...', error);
       document.getElementById("pp").innerHTML = " Faild! Please try again."
       document.getElementById("pp").style.color = "red"
       
       
       setTimeout(() => {
        document.getElementById("pp").innerHTML = " "
      }, 5000);
  
  
    });
  
  }


 let ok =  document.querySelector(".ok")
 let photo =  document.querySelector(".img")

 ok.addEventListener("click",function(){
  document.querySelector(".bgblr").style.display = " none"
  document.querySelector(".sucss").style.display = " none"
 })