var str = "p12w34";
//["12", "34"]
var result1 = str.match(/\d+/g);
console.log(result1);

//["12", index: 1, input: "p12w34"]
var result2 = str.match(/\d+/);
console.log(result2);

//["12", "1", "2", index: 1, input: "p12w34"]
var result3 = str.match(/(\d)(\d)/);
console.log(result3);
