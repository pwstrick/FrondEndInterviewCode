var btn = document.getElementById("btn");
// btn.addEventListener("click", function(event) {
  // console.log("onclick");
// }, false);

// btn.addEventListener("click", function(event) {
  // console.log("onclick1");
// }, false);
// btn.addEventListener("click", function(event) {
  // console.log("onclick2");
// }, false);

// var submit = document.getElementById("btnSubmit");
// submit.addEventListener("click", function(event) {
  // event.preventDefault();
// }, false);

// btn.addEventListener("click", function(event) {
  // console.log("onclick");
// }, false);
// btn.removeEventListener("click", function(event) {
  // console.log("onclick");
// }, false);

function remove() {
  console.log("onclick");
}
btn.addEventListener("click", remove, false);
btn.removeEventListener("click", remove, false);