var str = "p12w34s";
var result1 = str.split(/\d+/); 	//["p", "w", "s"]
console.log(result1);
var result2 = str.split(/\d+/, 2); 	//["p", "w"]
console.log(result2);
var result3 = str.split(/(\d+)/);   //["p", "12", "w", "34", "s"]
console.log(result3);