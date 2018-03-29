var digit = 1;
//按钮每次点击保存自增的数字
var btnState = document.getElementById("btnState");
btnState.addEventListener("click", function() {
  //获取容器
  var container = document.getElementById("container");
  container.innerHTML = ++digit;
  history.pushState(
    { count: digit },
    "最新状态",
    "?state=" + digit 	//设置新状态的URL
  );
});

window.onpopstate = function(e) {
  //获取容器
  var container = document.getElementById("container");
  container.innerHTML = e.state ? e.state.count : 1;
};