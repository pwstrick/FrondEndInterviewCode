var pattern = /pw\b/;
console.log(pattern.test("pw1"));
console.log(pattern.test("pw_"));
console.log(pattern.test("pwstrick"));
console.log(pattern.test("pw strick"));