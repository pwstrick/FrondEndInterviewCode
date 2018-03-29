var info = document.getElementById("info");
console.log(info.className); 	//"primary danger"
//info.className = "warning"; 	//新的CSS类

var list = info.classList
console.log(list.length);	//2
list.add("warning");		//添加
//检测 如果存在就返回true，否则返回false
console.log(list.contains("warning"));	//true
list.remove("warning");		//移除