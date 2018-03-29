function operate1() {
	var obj = {};
	Object.defineProperty(obj, "age", {
	  configurable: true,
	  enumerable: true,
	  get: function() {
		return this._age * 2;
	  },
	  set: function(value) {
		this._age = value;
	  }
	});
	//调用方法set()
	obj.age = 28;
	//调用方法get()
	console.log(obj.age); //56
}
//operate1();

function operate2() {
	var obj = {
	  get age() {
		return this._age * 2;
	  },
	  set age(value) {
		this._age = value;
	  }
	};
	//调用方法set()
	obj.age = 28;
	//调用方法get()
	console.log(obj.age); //56
	
	var obj2 = Object.create(obj);
	obj2.age = 10;
	console.log(obj2.age); //20
}
operate2();