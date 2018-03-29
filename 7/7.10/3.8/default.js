var arr = [1, 2, 3], result;
result = arr.concat([4,5], 6);
console.log(result);            //[1, 2, 3, 4, 5, 6]
result = arr.join(".");
console.log(result);            //1.2.3
result = arr.slice(0, 2);
console.log(result);            //[1, 2]
console.log(arr);				//[1, 2, 3]
result = arr.splice(0, 2, 6, 7);
console.log(result);            //[1, 2]
console.log(arr);				//[6, 7, 3]

