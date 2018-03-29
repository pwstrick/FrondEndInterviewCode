function func(name) {
    return function(age) {
        return { name: name, age: age };
    };
}
var result = func("strick")(28); 	//{name: "strick", age: 28}
console.log(result);