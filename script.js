function loginCheck(){

let user=document.getElementById("user").value;
let pass=document.getElementById("pass").value;

if(user=="" || pass==""){
alert("Enter username and password");
return false;
}

window.location="products.html";
return false;

}


function registerCheck(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let phone=document.getElementById("phone").value;
let password=document.getElementById("password").value;
let confirmPassword=document.getElementById("confirmPassword").value;
let pincode=document.getElementById("pincode").value;
let address=document.getElementById("address").value;

let passPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,}$/;
let pinPattern=/^[0-9]{6}$/;

if(name=="" || email=="" || phone=="" || password=="" || confirmPassword=="" || pincode=="" || address==""){
alert("Fill all fields");
return false;
}

if(!passPattern.test(password)){
alert("Password must contain Capital, Small letter and Special character");
return false;
}

if(password!=confirmPassword){
alert("Passwords do not match");
return false;
}

if(!pinPattern.test(pincode)){
alert("Pincode must be exactly 6 digits");
return false;
}

alert("Registration Successful");

window.location="products.html";

return false;

}


function orderCheck(){

let product=document.getElementById("product").value;
let qty=document.getElementById("qty").value;
let pin=document.getElementById("pincode").value;

let pinPattern=/^[0-9]{6}$/;

if(product==""){
alert("Select product");
return false;
}

if(qty<=0){
alert("Enter quantity");
return false;
}

if(!pinPattern.test(pin)){
alert("Pincode must be 6 digits");
return false;
}

alert("Order placed successfully");

// feedback page open
window.location="feedback.html";

return false;

}


function feedbackSubmit(){

alert("Thank you for your feedback");

// feedback ke baad wapas products
window.location="products.html";

return false;

}