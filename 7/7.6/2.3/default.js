console.log(Array.prototype.isPrototypeOf([1, 2])); 				//true
console.log(Object.prototype.isPrototypeOf(Function.prototype)); 	//true
var obj1 = {};
console.log(Object.getPrototypeOf(obj1)); 	//Object.prototype
var obj2 = Object.create(obj1);
console.log(Object.getPrototypeOf(obj2)); 	//{}