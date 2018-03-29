console.log("构造函数Object()");
console.log([] instanceof Object); 			//true
console.log(/\s/ instanceof Object); 		//true
console.log(new Date() instanceof Object); 	//true
console.log("基本类型");
console.log(1 instanceof Object); 			//false
console.log("" instanceof Object); 			//false
console.log(true instanceof Object); 		//false
console.log(null instanceof Object); 		//false
console.log(undefined instanceof Object); 	//false
console.log("右操作数");
//{} instanceof 1; 				//抛出语法异常
//{} instanceof null; 			//抛出语法异常
//{} instanceof undefined; 		//抛出语法异常
//{} instanceof new Date(); 		//抛出语法异常

console.log("常规用法");
function child() {}
function ancestor() {}
var obj1 = new child();
console.log(obj1 instanceof child); 		//true
console.log(obj1 instanceof ancestor); 	//false

child.prototype = {}; 		//重置原型
var obj2 = new child();
console.log(obj2 instanceof child); 		//true
console.log(obj1 instanceof child); 		//false

child.prototype = new ancestor(); 	//原型式继承
var obj3 = new child();
console.log(obj3 instanceof child); 				//true
console.log(obj3 instanceof ancestor); 			//true