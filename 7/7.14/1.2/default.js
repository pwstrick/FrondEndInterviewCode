var toString = Object.prototype.toString;
console.log(toString.call({})); 	//"[object Object]"

console.log("检测包装对象");
console.log(toString.call(1)); 		//"[object Number]"
console.log(toString.call("1")); 	//"[object String]"
console.log(toString.call(true)); 	//"[object Boolean]"
console.log("检测null");
console.log(toString.call(null)); 	//"[object Null]"
console.log("检测undefined");
console.log(toString.call(undefined)); 	//"[object Undefined]"
console.log("检测对象");
function func() {}
console.log(toString.call(func)); 				//"[object Function]"
console.log(toString.call({ name: "strick" })); 	//"[object Object]"
console.log(toString.call([1, 2])); 				//"[object Array]"
console.log(toString.call(/\s/)); 				//"[object RegExp]"
console.log(toString.call(new Date())); 			//"[object Date]"
console.log(toString.call(new TypeError())); 	//"[object Error]"