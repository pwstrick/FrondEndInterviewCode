var json = {
    "name": "pingwen",
    "age": 28,
    "colors": ["red", "yellow", "blue"],
    "school": function() {
        //函数会被忽略
    }
};
var result = JSON.stringify(json, function(key, value) {
    if (key == "name")
        return undefined;
    if (key === "0")
        return undefined; //数组中的第一个值将变为null
    return value;
});
console.log(result);

var result2 = JSON.stringify(json, ["name", "age"]);
console.log(result2);