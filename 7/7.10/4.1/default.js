var arr = { 0: 1, 1: 2, 2: 3, length: 3 },
    ArrayProto = Array.prototype;
var result1 = ArrayProto.join.call(arr, "."); //1.2.3
console.log(result1);
//使用简写的字面量形式
var result2 = [].slice.call(arr); 			//[1, 2, 3]
console.log(result2);