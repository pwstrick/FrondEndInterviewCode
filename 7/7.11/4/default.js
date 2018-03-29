var arr = [4, 1, 5, 2, 3];
arr = arr.sort(function(a, b) {
    return a > b;
}).filter(function(value, index, array) {
    return value > 2;
});
console.log(arr); 	//[3, 4, 5]