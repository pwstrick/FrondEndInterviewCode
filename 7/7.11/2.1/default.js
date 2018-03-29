//函数声明
function func(length) {
    return length > 10;
}
func(10); 	//调用函数

function func() {
    for (var i = 0; i < 10; i++) {
        //错误
        function inner() { }
    }
}

//函数表达式
var func = function(length) {
    return length > 10;
};
function func(length) {
    var name;
    if (length > 10) {
        name = function() {};
    } else {
        name = function() {};
    }
    name();
}
var func = function name() {
    typeof name; 	//"function"
};
typeof func; 	//"function"
typeof name; 	//"undefined"