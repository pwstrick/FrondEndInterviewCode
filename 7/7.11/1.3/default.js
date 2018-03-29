name = "strick"; 		//全局变量
function func() {
    var name = "freedom"; //局部变量
    console.log(name); 	//"freedom"
}
func();
console.log(name); 		//"strick"