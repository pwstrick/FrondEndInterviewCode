document.body.addEventListener("click", function() {
	console.log("body click");
}, false);

var event = new MouseEvent("click", {
  bubbles: true,
  cancelable: true,
  view: window,
  clientX: 35,
  clientY: 190
});
//派发事件
document.body.dispatchEvent(event);

var btn = document.getElementById("btnCustom"),
  type = "custom";
var event = new Event(type, {
  bubbles: true,
  cancelable: true,
  view: window
});
//注册自定义事件
btn.addEventListener(type, function(event) {
  console.log("自定义");
}, false);
//派发事件
btn.dispatchEvent(event);