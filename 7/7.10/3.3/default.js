var arr = ["w", "s", "t", "r"],
    result;
result = arr.shift();
console.log(result);    //"w"
console.log(arr); 		//["s", "t", "r"]

result = arr.unshift("p", "w");
console.log(result);    //5
console.log(arr); 		//["p", "w", "s", "t", "r"]