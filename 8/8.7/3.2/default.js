function handle() {
  console.log("回调函数");
}
var script = document.createElement("script");
script.src = "jsonp.php?jsonp=handle"; 	//传递回调函数的名称
document.body.appendChild(script);

var img = new Image();
img.src = "http://www.pwstrick.com/b.gif?cc=0&ck=1&cl=24";