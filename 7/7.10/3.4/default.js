var arr1 = [1, 2, 3, 4, 5];
var result1 = arr1.reverse();
console.log(result1);		//[5, 4, 3, 2, 1]
console.log(arr1); 			//[5, 4, 3, 2, 1]

var arr2 = [4, 1, 5, 2, 3];
var result2 = arr2.sort(function(a, b) {
    return a > b;
});
console.log(result2); 		//[1, 2, 3, 4, 5]
console.log(arr2); 			//[1, 2, 3, 4, 5]