var arr = ["p", "w", "s"],
    result;
result = arr.push("t", "r");
console.log(result);    //5
console.log(arr); 		//["p", "w", "s", "t", "r"]

result = arr.pop();
console.log(result);    //"r"
console.log(arr); 		//["p", "w", "s", "t"]