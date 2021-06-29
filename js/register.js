const form = document.getElementById("register-form");

form.onsubmit = function (e) {
  e.preventDefault();
  window.location.href = "home.html";
};
