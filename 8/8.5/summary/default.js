var link = document.getElementById("redirect");
link.addEventListener("click", function(event) {
	this.className = "ui-btn";
	event.preventDefault();
}, false);