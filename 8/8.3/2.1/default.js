console.log(window.innerWidth);		//533
console.log(window.innerHeight); 	//680
console.log(window.outerWidth); 	//1231
console.log(window.outerHeight); 	//777

var width = document.documentElement.clientWidth || document.body.clientWidth;
var height = document.documentElement.clientHeight || document.body.clientHeight;
console.log(width, height);
