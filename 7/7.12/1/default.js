function func1() {
    console.log(this); 	//window
}
func1();
function func2() {
    "use strict";
    console.log(this); 	//undefined
}
func2();