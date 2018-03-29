console.log("检测number");
console.log(typeof 1); 			//整数
console.log(typeof 1.5); 		//浮点数
console.log(typeof Infinity); 	//无穷大
console.log(typeof NaN); 		//不是数字的数值
console.log(typeof Number("1")); //类型转换
console.log("检测string");
console.log(typeof "1"); 		//字符串字面量
console.log(typeof ""); 			//空字符串
console.log(typeof String(1)); 	//类型转换
console.log("检测boolean");
console.log(typeof true); 		//真值
console.log(typeof false); 		//假值
console.log(typeof Boolean(1)); //类型转换
console.log("检测undefined");
console.log(typeof undefined); 	//返回"undefined"
console.log("检测null");
console.log(typeof null); 		//返回"object"
console.log("检测function");
function func() {}
console.log(typeof func); 		//返回"function"
console.log("检测object");
console.log(typeof {name:"strick"}); //对象字面量
console.log(typeof [1, 2]); 			//数组字面量
console.log(typeof /\s/); 			//正则表达式字面量
console.log(typeof new Date()); 		//日期对象
console.log(typeof new Number("1")); //数字对象
console.log(typeof new String(1)); 	//字符串对象
console.log(typeof new Boolean(1)); 	//布尔值对象