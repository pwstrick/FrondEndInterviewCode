var upload = document.getElementById("upload");
upload.addEventListener("change", function() {
  var file = this.files[0]; 		//获得文件对象
  var reader = new FileReader(); 	//创建FileReader实例
  reader.readAsDataURL(file);
  reader.onload = function(e) {
    //Data URI格式的文件内容
    console.log(this.result);
  };
}, false);