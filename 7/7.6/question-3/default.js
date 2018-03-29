function Super(age) {
	this.names = [];
	this.age = age;
}
function Sub(age) {
	Super.call(this, age);
}
//Sub.prototype = Super.prototype;
function create(object) {
	function F() {}
	F.prototype = object;
	return new F();
}
Sub.prototype = create(Super.prototype);

Sub.prototype.getShool = function() {
	return "university";
};

var parent = new Super(30);
//console.log(parent.getShool()); //"university"