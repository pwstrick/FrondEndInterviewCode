function operate() {
	eval(1); 	//1
	var str = "var total=100;console.log(total)";
	eval(str);	//100
}

// function sum() {
  // var digit = 1;
  // console.log(total); 		//抛出未定义的异常
  // eval("var total=100;"); 	//定义变量
  // console.log(total); 		//total和digit的作用域相同
// }
// sum();

function sum() {
  "use strict";
  eval("var total=100;"); 	//定义变量
  console.log(total); 		//抛出未定义的异常
}
sum();