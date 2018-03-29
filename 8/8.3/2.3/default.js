var div = document.getElementById("size");
console.log(div.clientWidth); 	//110
console.log(div.clientHeight); 	//70
console.log(div.offsetWidth); 	//112
console.log(div.offsetHeight); 	//72

var span = document.getElementById("name");
console.log(span.clientWidth); 	//0
console.log(span.clientHeight); 	//0
console.log(span.offsetWidth); 	//63 
console.log(span.offsetHeight); 	//44 因浏览器而异