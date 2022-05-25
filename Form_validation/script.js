var form = document.createElement("form");
form.id = "form";
form.style.width = "300px";
form.style.margin = "90px auto";
form.style.padding = "40px";
form.style.backgroundColor = "white";
form.style.borderRadius = "5px";
form.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.3)";
document.body.appendChild(form);

var heading = document.createElement("h1");
heading.innerHTML = "Register With Us";
heading.style.fontSize = "22px";
heading.style.padding = "20px";
heading.style.fontStyle = "normal";
heading.style.background = "linear-gradient(to left, #673ab7, #03a9f4)";
heading.style.color = "#ffffff";
form.appendChild(heading);
var breakLine = document.createElement("br");
form.appendChild(breakLine);

var labelname = document.createElement("label");
labelname.innerHTML = "Username";
form.appendChild(labelname);

var username = document.createElement("input");
username.setAttribute("id", "username");
username.setAttribute("placeholder", "Enter Your Username");
username.setAttribute("type", "text");
username.setAttribute("required", "");
form.appendChild(username);
username.style.padding = "15px";
username.style.width = "88%";
username.style.marginBottom = "10px";
username.style.borderRadius = "4px";
username.style.border = "2px solid #f0f0f0";

var error = document.createElement("span");
error.setAttribute("id", "userError");
error.style.visibility = "hidden";
error.innerHTML = "User name must be of at least 4 characters.";
error.style.fontSize = "14px";
form.appendChild(error);

var breakLine = document.createElement("br");
form.appendChild(breakLine);

var labelname = document.createElement("label");
labelname.innerHTML = "Email";
form.appendChild(labelname);

var email = document.createElement("input");
email.setAttribute("placeholder", "Enter your email-address");
email.setAttribute("type", "text");
email.setAttribute("id", "email");
email.setAttribute("required", "");
form.appendChild(email);
email.style.padding = "15px";
email.style.width = "90.6%";
email.style.marginBottom = "10px";
email.style.borderRadius = "4px";
email.style.border = "2px solid #f0f0f0";

var errorEmail = document.createElement("span");
errorEmail.style.visibility = "hidden";
errorEmail.setAttribute("id", "errorEmail");
errorEmail.innerHTML = "Enter verified email address";
errorEmail.style.fontSize = "14px";
form.appendChild(errorEmail);

var breakLine = document.createElement("br");
form.appendChild(breakLine);

var labelname = document.createElement("label");
labelname.innerHTML = "Password";
form.appendChild(labelname);

var password = document.createElement("input");
password.setAttribute("placeholder", "Enter your password");
password.setAttribute("type", "password");
password.setAttribute("required", "");
password.setAttribute("id", "password");
form.appendChild(password);
password.style.padding = "15px";
password.style.width = "90.6%";
password.style.marginBottom = "10px";
password.style.borderRadius = "4px";
password.style.border = "2px solid #f0f0f0";
var errorMessage = document.createElement("span");
errorMessage.style.visibility = "hidden";
errorMessage.setAttribute("id", "errorPassword");
errorMessage.innerHTML = "Password must contain 6 characters.";
errorMessage.style.fontSize = "14px";
form.appendChild(errorMessage);

var breakLine = document.createElement("br");
form.appendChild(breakLine);

var labelname = document.createElement("label");
labelname.innerHTML = "Confirm Password";
form.appendChild(labelname);

var confirmPassword = document.createElement("input");
confirmPassword.setAttribute("placeholder", "Confirm your password");
confirmPassword.setAttribute("type", "password");
confirmPassword.setAttribute("required", "");
confirmPassword.setAttribute("id", "confirmPassword");
form.appendChild(confirmPassword);
confirmPassword.style.padding = "15px";
confirmPassword.style.width = "90.6%";
confirmPassword.style.marginBottom = "10px";
confirmPassword.style.borderRadius = "4px";
confirmPassword.style.border = "2px solid #f0f0f0";
var errorMessage2 = document.createElement("span");
errorMessage2.style.visibility = "hidden";
errorMessage2.setAttribute("id", "errorPassword2");
errorMessage2.innerHTML = "Password doesnt match.";
errorMessage2.style.fontSize = "14px";
form.appendChild(errorMessage2);


var showPassword = document.createElement("input");
showPassword.setAttribute("type", "checkbox");
form.appendChild(showPassword);
showPassword.style.marginBottom = "20px";
showPassword.style.marginLeft = "195px";
showPassword.addEventListener("change", function (event) {
  if (this.checked) {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
  }
  if (this.checked) {
    confirmPassword.setAttribute("type", "text");
  } else {
    confirmPassword.setAttribute("type", "password");
  }
});

var showLabel = document.createElement("label");
showLabel.innerHTML = "Show password";
showLabel.style.fontSize = "14px";
form.appendChild(showLabel);
var button = document.createElement("button");
button.className = "btn";
button.textContent = "Submit";
button.style.fontSize = "18px";
button.style.padding = "18px 28px";
button.style.color = "#ffffff";
button.style.borderRadius = "10px";
button.style.marginBottom = "20px";
button.style.border = "none";
button.style.width = "100%";
button.setAttribute("type", "button");
button.style.background = "linear-gradient(to left, #673ab7, #03a9f4)";
form.appendChild(button);


// form validation
var username = document.getElementById("username");
var error = document.getElementById("userError");
var email = document.getElementById("email");
var errorEmail = document.getElementById("errorEmail");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirmPassword");
var errorPassword = document.getElementById("errorPassword");
var errorPassword2 = document.getElementById("errorPassword2");
var errorMessage = document.getElementById("errorPassword");
var errorMessage = document.getElementById("errorPassword");
button.addEventListener("click", function (event) {
  event.preventDefault();
  const user_value = username.value;
  const email_value = email.value;
  const passwordValue = password.value;
  const confirmPasswordValue = confirmPassword.value;

  if (user_value.length < 3) {
    username.style.border = "1px solid #cc2e39";
    error.style.visibility = "visible";
    error.style.color = "#cc2e39";
  } else {
    username.style.border = "1px solid #2ecc8d";
    error.style.visibility = "hidden";
    error.style.color = "#2ecc8d";
  }
  if (email_value === "") {
    email.style.border = "1px solid #cc2e39";
    errorEmail.style.visibility = "visible";
    errorEmail.style.color = "#cc2e39";
  } else if (!validate(email_value)) {
    email.style.border = "1px solid #cc2e39";
    errorEmail.style.visibility = "visible";
    errorEmail.style.color = "#cc2e39";
  } else {
    email.style.border = "1px solid #2ecc8d";
    errorEmail.style.visibility = "hidden";
    errorEmail.style.color = "#2ecc8d";
  }

  function validate(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  }

  if (passwordValue === "" || passwordValue.length <= 6) {
    password.style.border = "1px solid #cc2e39";
    errorPassword.style.visibility = "visible";
    errorPassword.style.color = "#cc2e39";
  } else {
    password.style.border = "1px solid #2ecc8d";
    errorPassword.style.visibility = "hidden";
    errorPassword.style.color = "#2ecc8d";
  }

  if (confirmPasswordValue === "" || confirmPasswordValue.length <= 6) {
    confirmPassword.style.border = "1px solid #cc2e39";
    errorPassword2.style.visibility = "visible";
    errorPassword2.style.color = "#cc2e39";
  } else if (passwordValue !== confirmPasswordValue) {
    confirmPassword.style.border = "1px solid #cc2e39";
    errorPassword2.style.visibility = "visible";
    errorPassword2.style.color = "#cc2e39";
  } else {
    confirmPassword.style.border = "1px solid #2ecc8d";
    errorPassword2.style.visibility = "hidden";
    errorPassword2.style.color = "#2ecc8d";
  }
});
