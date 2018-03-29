var container = document.getElementById("container")
//删除第一个子节点
container.removeChild(container.firstElementChild);

container.innerHTML = ""; 	//删除所有子节点
container.outerHTML = ""; 	//删除元素