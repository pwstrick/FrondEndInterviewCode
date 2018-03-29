var container = document.getElementById("container")
var shallow = container.cloneNode(),
  deep = container.cloneNode(true);
console.log(shallow); 	//无后代节点
console.log(deep); 		//有后代节点