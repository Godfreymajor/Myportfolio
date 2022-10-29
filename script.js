function msgVal(){
  
 var name = document.getElementById("fname").value;
 var message = document.getElementById("msg").value;
 var e = document.getElementById("email").value;
 var atposition = e.indexOf("@");
 var dotposition = e.indexOf(".");
 
 if(name == "" & e == "" & message=="" 
  || name == "" || e == "" || message==""){
alert(" All input must be filled");
}

  else if(atposition<1 || dotposition<atposition+2 || dotposition+2>=e.lenght ){
   alert("Email not valid");
  }

else{
 alert("Your message has been sent☑️");
document.getElementById("reset").reset();
 }
}

 function myVideo(){
  alert("Videos will be  uploaded very soon.");
}
function myCv(){
  alert("Click ok to finish loading cv.....");
  
}
function myGallery(){
  alert("pictures will be uploaded very soon .");
}
 function printCv(){
  window.print();
 }
