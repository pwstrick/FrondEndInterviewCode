var name = "strick";
function func1() {
    console.log(name);
}
function func2() {
    var name = "freedom";
    function inner() {
        func1();
    }
    inner();
}
func2();