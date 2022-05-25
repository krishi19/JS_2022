// Wrapper div
var wrapper = document.createElement("div");
wrapper.classList = "wrapper";

// Create heading
var heading = document.createElement("h1");
heading.innerHTML = "Password";
heading.id = "h1";
wrapper.appendChild(heading);

// Create Input field
var divForInput = document.createElement("div");
document.body.appendChild(divForInput);
divForInput.classList = "inputclass";
var userNameInput = document.createElement("input");
userNameInput.type = "password";
// userNameInput.className = "userNameInput";
userNameInput.id = "userNameInput";
userNameInput.placeholder = " Enter Your Password Here";
divForInput.appendChild(userNameInput);
wrapper.appendChild(divForInput);

// Create icon
var eyeSlashIcon = document.createElement("i");
eyeSlashIcon.className = "fa fa-eye-slash";
eyeSlashIcon.id = "eyeToggle";
divForInput.appendChild(eyeSlashIcon);

// Logic for hiding and showing password
eyeSlashIcon.addEventListener("click", function () {
  if (userNameInput.type === "password") {
    userNameInput.type = "text";
    eyeSlashIcon.className = "fa fa-eye";
  } else {
    userNameInput.type = "password";
    eyeSlashIcon.className = "fa fa-eye-slash";
  }
});

//  Forgot Password
var forgotAndNext = document.createElement("div");
wrapper.appendChild(forgotAndNext);

var forgotPassword = document.createElement("a");
forgotPassword.innerHTML = "Forgot Password?";
forgotPassword.id = "forgot";
forgotAndNext.appendChild(forgotPassword);
forgotPassword.addEventListener("mouseover", function (event) {
  forgotPassword.style.color = "#FFFFE0 ";
});
forgotPassword.addEventListener("mouseout", function (event) {
  forgotPassword.style.color = "#2196F3";
});

var next = document.createElement("button");
next.innerHTML = "Next";
forgotAndNext.appendChild(next);
next.id = "next";
next.addEventListener("mouseover", function (event) {
  next.style.background = "#2196F3";
  next.style.borderColor = "1px solid #fff";
  console.log("Your Password is:" + userNameInput.value);
});
next.addEventListener("mouseout", function (event) {
  next.style.backgroundColor = "transparent";
});
document.body.appendChild(wrapper);