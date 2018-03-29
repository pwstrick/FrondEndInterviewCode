function child() {}
function ancestor() {}
child.prototype = ancestor; 	//原型指向构造函数
var obj = new child();
console.log(ancestor.isPrototypeOf(obj)); 	//true
console.log(obj instanceof ancestor); 		//false
