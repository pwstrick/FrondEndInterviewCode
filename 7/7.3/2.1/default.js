console.log("不可变");
var str1 = "xyz",
  str2 = str1.toUpperCase();
console.log(str2 === str1); //false

console.log("字符串和数组之间的区别");
var str = "xyz";
str[0] = "a";
console.log(str[0]);		//"x"
console.log(str);			//"xyz"

var arr = ["x", "y", "z"];
arr[0] = "a";
console.log(arr[0]);		//"a"
console.log(arr);			//["a","y","z"]