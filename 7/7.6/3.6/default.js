var obj1 = { name: "strick" };
var obj2 = Object.create(obj1);
obj2.age = { digit: 28 }; //属性值为对象
var obj3 = obj2.age;
//删除自有属性
delete obj2.age;
console.log(obj2.age); 		//undefined
//属性值中的属性并没有被删除
console.log(obj3.digit); 	//28
//删除继承属性
delete obj2.name;
console.log(obj2.name); 	//"strick"