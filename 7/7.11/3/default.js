var name = "strick";
function outer() {
    var name = "freedom";
    function inner() {
        return name;
    }
    return inner;
}
var func = outer(),
    result = func();
console.log(result);    //"freedom"