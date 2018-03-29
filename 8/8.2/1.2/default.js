//"[object HTMLDocument]"
console.log(Object.prototype.toString.call(document));


console.log(document.readyState); 	//loading
document.addEventListener("DOMContentLoaded", function() {
  console.log(document.readyState); 	//interactive
}, false);
window.onload = function() {
  console.log(document.readyState); 	//complete
};