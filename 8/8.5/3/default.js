var btn = document.getElementById("propagation"),
  capture = false;
// btn.addEventListener("click", function(event) {
  // console.log("button", event.eventPhase);	//2
// }, capture);
// btn.parentNode.addEventListener("click", function(event) {
  // console.log("div", event.eventPhase);		//3
// }, capture);
// document.body.addEventListener("click", function(event) {
  // console.log("body", event.eventPhase); 	//3
// }, capture);
// document.documentElement.addEventListener("click", function(event) {
  // console.log("html", event.eventPhase); 	//3
// }, capture);
// document.addEventListener("click", function(event) {
  // console.log("Document", event.eventPhase); 	//3
// }, capture);
// window.addEventListener("click", function(event) {
  // console.log("Window", event.eventPhase); 	//3
// }, capture);

btn.parentNode.addEventListener("click", function(event) {
  //可能是<button>元素，也可能是<div>元素
  console.log("target", event.target);
  console.log("currentTarget", event.currentTarget);
}, false);