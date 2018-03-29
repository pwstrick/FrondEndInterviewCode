var pattern1 = /pw$/,
    pattern2 = /^strick/;
var wrapStr = "pw\rstrick";
console.log(pattern1.test(wrapStr)); //false
console.log(pattern2.test(wrapStr)); //false

var pattern1 = /pw$/m,
    pattern2 = /^strick/m;
var wrapStr = "pw\rstrick";
console.log(pattern1.test(wrapStr)); 	//true
console.log(pattern2.test(wrapStr)); 	//true