var form = document.getElementById("register");
form.addEventListener("submit", function() {
  console.log("onsubmit");
}, false);
var btn = document.getElementById("btn");
btn.addEventListener("click", function() {
  form.submit();
}, false);