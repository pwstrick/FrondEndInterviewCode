console.log("Number()规则一");
console.log(Number(true)); 	//1
console.log(Number(false)); //0

console.log("Number()规则二");
console.log(Number(10)); 	//十进制的10
console.log(Number(012)); 	//八进制的10
console.log(Number(0xa)); 	//十六进制的10

console.log("Number()规则三");
console.log(Number(null)); 			//0
console.log(Number(undefined)); 	//NaN

console.log("Number()规则四");
console.log(Number("01")); 		//1
console.log(Number("01.25")); 	//1.25
console.log(Number("0xA")); 	//10
console.log(Number("")); 		//0
console.log(Number("\n")); 		//0

console.log("Number()规则五");
var numberObj = {
  valueOf: function() {
    return {};
  },
  toString: function() {
    return "10";
  }
};
console.log(Number(numberObj)); //10