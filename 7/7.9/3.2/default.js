var pattern1 = /\d/;
var result1 = "pw123".replace(pattern1, "0"); //pw023
console.log(result1);

var pattern2 = /\d/g;
var result2 = "pw123".replace(pattern2, "0"); //pw000
console.log(result2);

var str = "p12w";
var result3 = str.replace(/(\d)(\d)/, "($1)($2)"); //p(1)(2)w
console.log(result3);