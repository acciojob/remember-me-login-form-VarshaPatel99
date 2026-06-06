const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

// Show existing user button on page load
document.addEventListener("DOMContentLoaded", function () {
  const savedUser = localStorage.getItem("username");

  if (savedUser) {
    existingBtn.style.display = "block";
  }
});

// Form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = usernameInput.value;

  alert("Logged in as " + username);

  if (checkbox.checked) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", passwordInput.value);
    existingBtn.style.display = "block";
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    existingBtn.style.display = "none";
  }
});

// Existing user login
existingBtn.addEventListener("click", function () {
  const savedUser = localStorage.getItem("username");

  if (savedUser) {
    alert("Logged in as " + savedUser);
  }
});