var arr = [1, 2, 3, 4, 5];
//任意参数为负数
console.log(arr.slice(-2));		//[4, 5]
console.log(arr.slice(-2, -1));	//[4]
console.log(arr.slice(1, -1));	//[2, 3, 4]
//任意参数为NaN
console.log(arr.slice(NaN, 1));	//[1]
console.log(arr.slice(1, NaN));	//[]
//start > end
console.log(arr.slice(2, 1));	//[]

//start为负数
var arr = [1, 2, 3, 4, 5];
console.log(arr.splice(-2));			//[4, 5]
//start或deleteCount为NaN
arr = [1, 2, 3, 4, 5];
console.log(arr.splice(NaN, 1));		//[1]
console.log(arr.splice(1, NaN));		//[]
//deleteCount > arr.length
arr = [1, 2, 3, 4, 5];
console.log(arr.splice(0, 8));		//[1, 2, 3, 4, 5]