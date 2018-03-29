// var func = new Function("a", "b", "return a+b;");
// //相当于下面的函数表达式
// var func = function(a, b) {
//     return a + b;
// };

var name = "freedom";
function func() {
    var name = "strick";
    return new Function("return name;");
}
var result = func()(); 	//"freedom"
console.log(result);