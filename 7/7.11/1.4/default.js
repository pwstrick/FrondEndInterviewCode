function func(name) {
    if (name == "strick") {
        var age = 28;
    }
}
//相当于
function func(name) {
    var age;
    if (name == "strick") {
        age = 28;
    }
}

function func(name) {
    for (var i = 0; i < 10; i++) { }
}
//相当于
function func(name) {
    var i;
    for (i = 0; i < 10; i++) { }
}