// Works only for one user || first user from collection
let data = JSON.parse(localStorage.getItem("formData")) || [];

let fname = document.getElementById("first-name");
fname.textContent= data[0].fname

let lname = document.getElementById("last-name");
lname.textContent= data[0].lname

let email = document.getElementById("email");
email.textContent= data[0].email
 
