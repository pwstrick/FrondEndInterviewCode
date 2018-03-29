var obj = {
    name: "strick",
    getName: function() {
        return this.name;
    },
    getThis: function() {
        return this;
    }
};
var name = "freedom",
    result;
result = obj.getName.apply(null); 		//"freedom"
console.log(result);
result = obj.getName.apply(undefined); 	//"freedom"
console.log(result);
result = obj.getThis.apply(true); 		//new Boolean(true)
console.log(result);