console.log(document.info); 			//<form>元素的name属性为info
console.log(document.register); 		//undefined

console.log(document.forms); 		//<form>元素集合
console.log(document.forms[0]); 		//数字索引
console.log(document.forms.register);//<form>元素的id属性
console.log(document.forms.info); 	//<form>元素的name属性

console.log(document.forms[0].btn);	//控件的id属性
console.log(document.forms[0].txt); 	//控件的name属性

console.log(document.forms[0].elements[0]); 	//数字索引
console.log(document.forms[0].elements.btn); //控件的id属性
console.log(document.forms[0].elements.txt); //控件的name属性