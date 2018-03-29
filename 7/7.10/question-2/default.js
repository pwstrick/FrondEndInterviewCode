var result = Array(50).join("1").split("").map(function(value, index) {
    return index;
});
console.log(result);