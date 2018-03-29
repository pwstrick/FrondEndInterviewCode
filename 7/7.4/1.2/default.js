console.log(parseInt("0xA", 16)); 	//10
console.log(parseInt("1010", 2)); 	//10
console.log(parseInt("10", 1)); 	//NaN

console.log("parseInt()规则一");
console.log(parseInt(" B10")); 	//NaN
console.log(parseInt("+10")); 	//10
console.log(parseInt("-10")); 	//-10
console.log(parseInt("01")); 	//1

console.log("parseInt()规则二");
console.log(parseInt("01.25")); //1
console.log(parseInt("1e5")); 	//1
console.log(parseInt("0xA")); 	//10
console.log(parseInt("")); 		//NaN
