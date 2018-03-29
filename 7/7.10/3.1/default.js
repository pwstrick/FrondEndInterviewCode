var arr1 = [1, 2, 3, 4, 5];
console.log(arr1.toString()); 		//"1,2,3,4,5"
console.log(arr1.toLocaleString()); 	//"1,2,3,4,5"
console.log(arr1.valueOf()); 		//[1, 2, 3, 4, 5]

//带null和undefined的数组
var arr2 = [1, null, undefined, 4, 5];
console.log(arr2.toString()); 		//"1,,,4,5"
console.log(arr2.toLocaleString()); 	//"1,,,4,5"
console.log(arr2.valueOf()); 		//[1, null, undefined, 4, 5]
