var obj = { name: "strick" };
obj.name = "pingwen"; 		//用点号给属性赋值
obj["name"] = "pingwen"; 	//用方括号给属性赋值


var obj1 = { name: "strick", age: 28 };
//将age设为只读属性
Object.defineProperty(obj1, "age", { writable: false });
obj1.age = 30;
console.log(obj1.age); 		//28
//继承obj1中的属性
var obj2 = Object.create(obj1);
obj2.name = "freedom";
console.log(obj1.name); 	//"strick"
console.log(obj2.name); 	//"freedom"