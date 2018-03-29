function operate1() {
	var str = "abc";
	str.length; 		//长度
	str.toUpperCase(); 	//大写
}

function operate2() {
	var str = "abc";
	//隐式封装
	var str = new String("abc");
}

function operate3() {
	var str = "abc";
	str.length = 2; 			//修改已有属性
	str.word = "ABC";			//定义新属性
	console.log(str.length);	//3
	console.log(str.word);		//undefined
}

function operate4() {
	var num = new Number(1);
	var truth = new Boolean(true);
	//null.length; //抛出异常
}
operate4();