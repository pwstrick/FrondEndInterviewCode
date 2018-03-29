var list = document.getElementById("list"),
  children = list.children; //返回HTMLCollection对象
console.log(children[0]); 				//第一个子元素
console.log(children.first); 			//id或name为first的子元素
console.log(children.second); 			//id或name为second的子元素