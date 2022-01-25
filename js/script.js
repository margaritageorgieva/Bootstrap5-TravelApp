const signUp = (e) => {
  let fname = document.getElementById("fname").value,
    lname = document.getElementById("lname").value,
    email = document.getElementById("email").value,
    pwd = document.getElementById("pwd").value;

  let formData = JSON.parse(localStorage.getItem("formData")) || [];

  let exist =
    formData.length &&
    JSON.parse(localStorage.getItem("formData")).some(
      (data) => data.email == email
      // data.fname.toLowerCase() == fname.toLowerCase() &&
      // data.lname.toLowerCase() == lname.toLowerCase()
    );

  if (!exist) {
    formData.push({ fname, lname, email, pwd });
    localStorage.setItem("formData", JSON.stringify(formData));
    document.querySelector("form").reset();
    document.getElementById("fname").focus();
    alert("Account Created!\nPlease Sign In.");
    location.href = "./sign-in.html";
  } else {
    alert("This email is already being used!");
  }
  e.preventDefault();
};

function signIn(e) {
  let email = document.getElementById("email").value,
    pwd = document.getElementById("pwd").value;
  let formData = JSON.parse(localStorage.getItem("formData")) || [];
  let exist =
    formData.length &&
    JSON.parse(localStorage.getItem("formData")).some(
      (data) =>
        data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd
    );
  if (!exist) {
    alert("Incorrect login credentials!");
  } else {
    location.href = "./index.html";
  }
  e.preventDefault();
}
