var obj = {
	name: "strick",
	get gender() {
		return this._gender;
	},
	set gender(value){
		this._gender = value;
	}
};
obj.gender = "男";
Object.freeze(obj);
obj.name = "freedom";
console.log(obj.name);	 //"strick"
Object.getOwnPropertyDescriptor(obj, "name");//{configurable: false, writable: false}
//为访问器属性赋值
obj.gender = "女";
console.log(obj.gender); //"男"
//判断对象是否冻结
console.log(Object.isFrozen(obj));	 //true