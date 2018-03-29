var name = "freedom";
function func() {
    this.name = "strick";
    this.getName = function() {
        return this.name;
    };
}
var obj = new func();
var result = obj.getName(); 	//"strick"
console.log(result);