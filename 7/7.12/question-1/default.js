var name = "freedom"; 	//全局变量
var obj = {
    name: "justice",
    getName: function() {
        return this.name;
    },
    child: {
        name: "strick",
        getName: function() {
            return this.name;
        }
    }
};
console.log(obj.getName());
console.log(obj.child.getName());

var childName = obj.getName;
console.log(childName());