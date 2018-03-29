var input = document.getElementById("upload");
input.addEventListener("change", function() {
	var data = new FormData(),
	  input = document.getElementById("upload");
	data.append("id", 1);
	data.append("upload", input.files[0]);
	var xhr = new XMLHttpRequest();
	xhr.open("post", "server.php");
	xhr.send(data);
}, false);