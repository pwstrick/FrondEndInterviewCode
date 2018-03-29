var obj = { age: 28 };
Object.seal(obj);
//删除自有属性
delete obj.age;
console.log(obj.age); 	//28
console.log(Object.getOwnPropertyDescriptor(obj, "age")); //{configurable: false}
//判断对象是否封闭
console.log(Object.isSealed(obj)); 	//true