var arr = [1, 2, 3, 4, 5];
arr.length = 3; 	//[1, 2, 3]
arr.length = 0; 	//[] 清空数组

var arr = [1, 2, 3, 4, 5];
console.log(2 in arr); 		//true
delete arr[2]; 	//[1, 2, , 4, 5]
console.log(arr);
console.log(2 in arr); 		//false
console.log(3 in arr); 		//true