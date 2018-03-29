var classNames = document.getElementsByClassName("container"),
  selectors = document.querySelectorAll(".container");
console.log(classNames); 	//[div]
console.log(selectors); 	//[div]
//创建一个CSS类为container的<ul>元素
var ul = document.createElement("ul");
ul.className = "container";
//将新创建的元素插入到<body>元素中
document.body.appendChild(ul);
//打印两个方法的查询结果
console.log(classNames); 	//[div, ul] 自动更新
console.log(selectors); 	//[div] 未更新

