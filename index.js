const submitbtn=document.getElementById('submitbtn');
const req1=document.getElementById('req1');
const req2=document.getElementById('req2');
const req3=document.getElementById('req3');


submitbtn.addEventListener('click',(e)=>{
e.preventDefault();
  if(validatename()==true){
    alert("form submitted successfully");
  }
  if(validateemail()){
    alert('form submitted successfully');
  }
  if(validatepassword()){
    alert('form submitted successfully');
  }

});

function validatename(){
    let name=document.getElementById('name').value;
     if(name.length==0){
        req1.innerHTML="Name is required";
        return false;
     }
     else{
        req1.innerHTML="";
     }
     return true;
}

function validateemail(){
  let email=document.getElementById('email').value;
  if(email.length==0){
    req2.innerHTML="Email is required";
    return false;
  }
  else{
    req2.innerHTML="";
 }
  return true;
}
function validatepassword(){
    let pass=document.getElementById('password').value;
    if(pass.length==0){
        req3.innerHTML="password is required";
        return false;
    }
    else{
        req3.innerHTML="";
     }
    return true;
}
