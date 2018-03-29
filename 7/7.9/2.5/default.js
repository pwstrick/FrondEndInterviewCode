var pattern1 = /pw(strick)?/; //分组
var pattern2 = /pw(strick)?\1/; //引用
console.log(pattern1.test("pw"));
console.log(pattern1.test("pwstrick"));
console.log(pattern2.test("pw"));
console.log(pattern2.test("pwstrick"));
console.log(pattern2.test("pwstrickstrick"));