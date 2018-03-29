console.log(!{}[true]); 	//true
console.log(+[1, 2]);		//NaN
console.log([] == 0);		//true
console.log([] == false);	//true
console.log([] == ![]);		//true
console.log([] + {});		//"[object Object]"
{} + [];					//0 用console.log()输出的结果为"[object Object]"
