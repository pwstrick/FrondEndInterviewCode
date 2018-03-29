var input = document.getElementById("upload");
input.addEventListener("change", function() {
  var file = this.files[0];
  var xhr = new XMLHttpRequest();
  xhr.open("post", "server.php");
  xhr.send(file);
}, false);