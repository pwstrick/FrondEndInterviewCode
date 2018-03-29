var btn = document.getElementById("order");
btn.onclick = function() {
  console.log("onclick1");
};
btn.addEventListener("click", function() {
  console.log("onclick3");
}, false);