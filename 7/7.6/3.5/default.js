var obj1 = { name: "strick" };
var obj2 = Object.create(obj1);
//将age属性配置为不可枚举
Object.defineProperty(obj2, "age", {
  enumerable: false
});
obj2.age = 28;
//name为继承属性，age为自有属性
console.log("age" in obj2); 	//true
console.log("name" in obj2); 	//true
console.log(obj2.hasOwnProperty("age")); 		//true
console.log(obj2.hasOwnProperty("name")); 		//false
console.log(obj2.propertyIsEnumerable("age")); 	//false
console.log(obj2.propertyIsEnumerable("name")); //false