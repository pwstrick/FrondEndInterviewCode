var btn = document.getElementById("btn");
// btn.addEventListener("click", function(event) {
  // console.log("btn1");
  // event.stopPropagation();
// }, false);

btn.addEventListener("click", function(event) {
  console.log("btn1");
  event.stopImmediatePropagation();
}, false);


btn.addEventListener("click", function(event) {
  console.log("btn2");
}, false);
btn.parentNode.addEventListener("click", function(event) {
  console.log("div");
}, false);