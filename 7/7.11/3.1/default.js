function func() {
    //私有变量
    var name;
    //设置私有变量
    this.setName = function(value) {
        name = value;
    };
    //访问私有变量
    this.getName = function() {
        return name;
    };
}
var obj = new func();
obj.setName("strick");
console.log(obj.getName()); 	//strick