function func() {
    //能在函数声明之前调用
    name1();
    function name1() {}
    //不能在函数表达式之前调用
    console.log(typeof name2); 	//"undefined"
    var name2 = function() {};
}
func();