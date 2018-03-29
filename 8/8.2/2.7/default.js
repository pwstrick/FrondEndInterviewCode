var container = document.getElementById("text");
console.log(container.textContent);


var container2 = document.getElementById("text2");
console.log("innerText", container2.innerText);
console.log("textContent", container2.textContent);
var table = document.getElementById("table");
console.log("innerText", table.innerText);
console.log("textContent", table.textContent);


var container = document.getElementById("text");
container.outerText = "strick";
//相当于
//var text = document.createTextNode("strick");
//container.parentNode.replaceChild(text, container);
