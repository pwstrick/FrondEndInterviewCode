var input = document.getElementById("upload");
input.addEventListener("change", function() {
  var file = this.files[0];
  var xhr = new XMLHttpRequest();
  xhr.upload.onprogress = function(event) {
    //四舍五入第1位小数
    var per = Math.round(event.loaded / event.total * 100);
    console.log(per);
  };
  xhr.open("post", "server.php");
  xhr.send(file);
}, false);