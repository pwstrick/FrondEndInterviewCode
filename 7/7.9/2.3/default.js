var str1 = "<p>123</p>"; 		//有内容
var str2 = "<p>pwstrick</p>"; 	//有内容
var str3 = "<p></p>"; 			//无内容
var result1 = /<p>.*<\/p>/.test(str1);		//正则表达式
var result2 = /<p>.*<\/p>/.test(str2);		//正则表达式
var result3 = /<p>.*<\/p>/.test(str3);		//正则表达式
console.log(result1);
console.log(result2);
console.log(result3);

var str4 = "<p>123</p><p>456</p>"; 	//待匹配的字符串
var greedy = /<p>.*<\/p>/; 	//"<p>123</p><p>456</p>"
var lazy = /<p>.*?<\/p>/;  	//"<p>123</p>"
console.log(str4.match(greedy));
console.log(str4.match(lazy));