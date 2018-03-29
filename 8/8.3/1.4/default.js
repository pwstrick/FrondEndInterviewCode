var txt = document.getElementById("txt");
delete txt.maxLength;
console.log(txt.getAttribute("maxlength")); 	//"10"
console.log(txt.maxLength); 					//10
delete txt.style;
console.log(txt.getAttribute("style")); 		//"width:100px"
console.log(txt.style); 						//CSSStyleDeclaration对象

txt.removeAttribute("maxlength");
console.log(txt.getAttribute("maxlength")); 	//null
console.log(txt.maxLength); 					//-1
txt.removeAttribute("style");
console.log(txt.getAttribute("style")); 		//null
console.log(txt.style); 						//空的CSSStyleDeclaration对象