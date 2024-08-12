const eyeIcon = document.getElementById("eyeIcon");
const password = document.getElementById("password");

eyeIcon.addEventListener("click", () => {
  if (password.type === "password") {
    eyeIcon.src = "eye-open.png";
    password.type = "text";
  } else {
    eyeIcon.src = "eye-close.png";
    password.type = "password";
  }
});
