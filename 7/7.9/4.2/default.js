var str = "p12w34",
    pattern1 = /(\d)(\d)/,
    pattern2 = /(\d)(\d)/g;
//["12", "1", "2", index: 1, input: "p12w34"]
var result1 = pattern1.exec(str);
console.log(result1);

//["12", "1", "2", index: 1, input: "p12w34"]
var result2 = pattern1.exec(str);
console.log(result2);

//["12", "1", "2", index: 1, input: "p12w34"]
var result3 = pattern2.exec(str);
console.log(result3);

//["34", "3", "4", index: 4, input: "p12w34"]
var result4 = pattern2.exec(str);
console.log(result4);

