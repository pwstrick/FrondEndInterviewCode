var arr = [1, 2, 3, 4, 5], result;
result = arr.reduce(function(accumulator, current, index, array) {
    return accumulator + current;
});
console.log(result);	//15