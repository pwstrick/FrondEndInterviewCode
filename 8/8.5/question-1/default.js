function addHandler(element, type, handler) {
	if (element.addEventListener) {
		element.addEventListener(type, handler, false);
	}else if (element.attachEvent) {
		element.attachEvent('on' + type, handler);
	}else {
		element['on' + type] = handler;
	}
}

var btn = document.getElementById("btn");
addHandler(btn, "click", function() {
	console.log("onclick");
});