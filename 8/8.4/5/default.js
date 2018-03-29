var info = document.getElementById("info");
var style = window.getComputedStyle(info);
console.log(style.width); 			//"84px"
console.log(style.padding); 		//""或"168px"
console.log(style.paddingLeft); 	//"168px"
var pseudo = window.getComputedStyle(info, "::after");
console.log(pseudo.width); 		//"300px"或auto
console.log(pseudo.content); 	//"strick"

// info.currentStyle["width"];
// info.currentStyle["padding-left"];