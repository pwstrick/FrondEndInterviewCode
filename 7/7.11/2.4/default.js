//arguments
// func("strick", 28);
// function func(name) {
//     console.log(name); 			 //"strick"
//     console.log(arguments[1]); 	 //28
//     console.log(arguments[2]); 	 //undefined
//     console.log(arguments.length); //2
// }

//按值传递
var name = "strick", //基本类型的值
    obj = { 			 //对象
        name: "strick"
    };
function func(name, obj) {
    name = "freedom";
    obj.name = "freedom";
    console.log(name); 	//"freedom"
    console.log(obj); 	//{name: "freedom"}
}
func(name, obj);
console.log(name); 		//"strick"
console.log(obj); 		//{name: "freedom"}

//callee和caller
function func1() {
    console.log(arguments.callee); 	//func1()
    console.log(func1.caller); 		//func2()
}
function func2() {
    func1();
}
func2();