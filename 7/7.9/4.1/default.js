var str = "pw1",
    pattern1 = /\d/,
    pattern2 = /\d/g;
console.log(pattern1.test(str)); 	//true
console.log(pattern2.test(str)); 	//true
console.log(pattern2.test(str)); 	//false

