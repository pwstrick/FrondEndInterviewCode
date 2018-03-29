var btn = document.getElementById("btnCustom"),
  type = "onclick";
var event = document.createEventObject();
event.view = window;
event.bubbles = true;
//注册自定义事件
btn.attachEvent(type, function() {
  console.log("自定义");
});
//触发事件
btn.fireEvent(type, event);