//call()和apply()
// function func(name) {
//     console.log(name);
//     console.log(this.age);
// }
// func.length; 	//1
// func.call({ age: 28 }, "freedom"); 		//age为28
// func.apply({ age: 30 }, ["freedom"]); 	//age为30


//bind()
function partial(age) {
    console.log(this.name); 	//"strick"
    console.log(age); 		//28
}
var func = partial.bind({ name: "strick" }, 28);
func(30);

// function partial(age) {
//     return function() {
//         console.log(this.name);
//         console.log(age);
//     };
// }
// partial(28).call({ name: "strick" }, 30);
