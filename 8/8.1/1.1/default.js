//第一个参数是字符串
setTimeout("console.log('strick');", 100);
//第一个参数是函数
setTimeout(function() {
  console.log("strick");
}, 100);

var timeout = setInterval(function() {
  console.log("strick");
}, 100);
console.log(timeout); 		//1
clearInterval(timeout); 	//取消定时器

console.log(1);
//延迟时间为0毫秒
setTimeout(function() {
  console.log(2);
}, 0);
console.log(3);