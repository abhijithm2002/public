
    // js

function displayname(){
    var name=document.getElementById("inputText4").value;
    var error=document.getElementById("error1");
    var namestatus =/^[a-zA-Z]+$/;

    if(name.length===0){
        error.innerHTML="please Enter the name"
        error.style.color="red"
    }else if(!name.match(namestatus)){
        error.innerHTML="Enter valid input"
        error.style.color="red"

    }
    else if(name.length<4){
        error.innerHTML="Enter minimum 4 characters"
        error.style.color="red"
    }
    else{
        error.innerHTML=''
    }
}
function displaynumber(){
    var subject=document.getElementById("inputnumber4").value;
    var error2=document.getElementById("error2");
    var subjectstatus =/^[0-9]+$/;

    if(subject.length===0){
        error2.innerHTML="please Enter the number"
        error2.style.color="red"
    }else if(!subject.match(subjectstatus)){
        error2.innerHTML="Enter valid input"
        error2.style.color="red"

    }
    else if(subject.length<10){
        error2.innerHTML="Enter minimum 10 characters"
        error2.style.color="red"
    }
    else{
        error2.innerHTML=""
    }
}
function displayemail(){
    var email=document.getElementById("email").value;
    var error3=document.getElementById("error3");
    var emailstatus =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$$/
  
  
    if(email.length===0){
        error3.innerHTML="please Enter the email"
        error3.style.color="red"
    }else if(!email.match(emailstatus)){
        error3.innerHTML="Enter valid input"
        error3.style.color="red"
    }else if(email.length<12){
      error3.innerHTML="Enter minimum characters"
      error3.style.color="red"
    }
    else{
        error3.innerHTML=''
    }
  }
  function displaymessage(){
    var message=document.getElementById("message").value;
    var error4=document.getElementById("error4");
    var messagestatus =/^[a-zA-Z]+$/;
  
  
    if(message.length===0){
        error4.innerHTML="please enter the details"
        error4.style.color="red"
    }else if(!message.match(messagestatus)){
        error4.innerHTML="Enter valid input"
        error4.style.color="red"
    }else if(message.length<15){
      error4.innerHTML="Enter valid input"
      error4.style.color="red"
  
    }
    else{
        error4.innerHTML=''
    }
  }
  