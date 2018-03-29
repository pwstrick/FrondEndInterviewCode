//匹配数字之后是单词的字符串
console.log(/\d+(?=\w)/.test("123pw")); //true

//匹配数字之后非单词的字符串
console.log(/\d+(?!\w)/.test("123pw")); //false
