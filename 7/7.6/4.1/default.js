var obj1 = { age: 28 };
obj2 = Object.create(obj1);
//将对象设为不可扩展
Object.preventExtensions(obj2);
//设置自有属性
obj2.name = "strick";
console.log(obj2.name); 	//undefined
//设置继承属性
obj1.school = "university";
console.log(obj2.school); 	//"university"
//判断对象是否可扩展
console.log(Object.isExtensible(obj2)); 	//false