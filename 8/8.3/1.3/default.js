var link = document.getElementById("redirect");
console.log(link.getAttribute("href")); 	//"demo.html"
console.log(link.href); 					//"http://localhost/demo.html"

var txt = document.getElementById("txt");
console.log(txt.getAttribute("maxlength")); 	//10
console.log(txt.maxLength); 					//"10"
console.log(txt.getAttribute("style")); 		//"width:100px"
console.log(txt.style); 						//CSSStyleDeclaration对象