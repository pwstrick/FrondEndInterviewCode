function operate1() {
	var obj = {};
	Object.defineProperty(obj, "name", {
	  configurable: true,
	  writable: true,
	  enumerable: false,
	  value: "strick"
	});
	console.log(obj.name); 	//"strick"
	//读取可枚举的自有属性
	console.log(Object.keys(obj)); 		//[]
	//读取自有属性
	console.log(Object.getOwnPropertyNames(obj)); 	//["name"]
	//判断自有属性是否可枚举
	console.log(obj.propertyIsEnumerable("name")); 	//false
	//读取自有属性的属性描述符
	//{value: "strick", writable: true, enumerable: false, configurable: true}
	Object.getOwnPropertyDescriptor(obj, "name");
}

function operate2() {
	var obj = { name: "strick" };
	Object.defineProperty(obj, "name", {
	  configurable: false,
	  writable: false
	});
	delete obj.name; 		//删除属性
	console.log(obj.name); 	//"strick"
	//Uncaught TypeError
	Object.defineProperty(obj, "name", {
	  configurable: true,
	  enumerable: false,
	  writable: true
	});
}
//operate2();

function operate3() {
	var obj = {};
	Object.defineProperties(obj, {
	  name: { writable: true, value: "strick" },
	  age: { configurable: false, value: 28 }
	});
}
operate3();