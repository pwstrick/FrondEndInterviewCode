// var xhr = new XMLHttpRequest();
// xhr.open("post", "server.php");
// xhr.onabort = function() {
	// console.log(xhr.readyState); 	//4
	// setTimeout(function() {
	  // console.log(xhr.readyState); 	//0
	// }, 500);
// };
// xhr.send(null);
// setTimeout(function() {
  // xhr.abort();
// }, 1000);

var xhr = new XMLHttpRequest();
xhr.open("post", "server.php");
xhr.timeout = 1000;		//设置超时时间为1000毫秒，即1秒
xhr.ontimeout = function() {
  console.log("ontimeout");
};
xhr.send(null);