var btn = document.getElementById("btn");
btn.attachEvent("onclick", function() {
  console.log(window.event);
});

var submit = document.getElementById("btnSubmit");
submit.attachEvent("onclick", function() {
  window.event.returnValue = false;
});