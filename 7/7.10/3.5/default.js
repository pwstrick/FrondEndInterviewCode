var arr = [1, 2, 3, 4, 5],
    result;
result = arr.forEach(function(value, index, array) {
    return value;
});
console.log(result);    //undefined
result = arr.every(function(value, index, array) {
    return value == 2;
});
console.log(result);    //false
result = arr.some(function(value, index, array) {
    return value == 2;
});
console.log(result);    //true
result = arr.map(function(value, index, array) {
    return value * 2;
});
console.log(result);    //[2, 4, 6, 8, 10]

result = arr.filter(function(value, index, array) {
    return value > 2;
});
console.log(result);    //[3, 4, 5]
console.log(arr); 		//[1, 2, 3, 4, 5]