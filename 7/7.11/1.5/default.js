name = "strick"; 		//全局变量
function func1() {
    function func2() {
        console.log(name);	//"strick"
    }
    func2();
}
func1();