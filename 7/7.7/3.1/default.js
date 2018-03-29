var jsonStr = '{"name":"pingwen","age":28,"colors":["red","yellow","blue"]}';
var result = JSON.parse(jsonStr, function(key, value) {
    if (key == "age")
        return undefined;
    return value;
});
console.log(result);