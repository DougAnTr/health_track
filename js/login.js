const form = document.getElementById("login-form");

form.onsubmit = function (e) {
  e.preventDefault();
  window.location.href = "home.html";
};
