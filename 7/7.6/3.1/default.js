var obj = { name: "strick", 姓名: "平文" };
obj.name; 		//用标识符表示的属性名
obj.姓名; 		//用中文表示的属性名
//obj.name is; 	//抛出语法异常


obj["name is"]; 	//用字符串表示的属性名
for (var i = 0; i < 5; i++) {
  obj["name" + i]; 	//用表达式表示的属性名
}

obj.age; 		//undefined
//null.age; 		//抛出无法读取属性的异常
//undefined.age; 	//抛出无法读取属性的异常