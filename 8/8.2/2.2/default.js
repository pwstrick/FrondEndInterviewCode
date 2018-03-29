var dd = document.createElement("dd"),
  dl = document.getElementById("numbers");
dd.innerHTML = 4;
dl.appendChild(dd);

var dd = document.createElement("dd"),
  third = document.getElementById("third");
dd.innerHTML = 5;
dl.insertBefore(dd, third);


var container = document.getElementById("container");
//"
//	<span>name</span>
//"
//console.log(container.innerHTML); 	//带换行和缩进的内容
//container.innerHTML = "<p>pw&strick</p>";
//"<p>pw&amp;strick</p>"
//console.log(container.innerHTML);

//"<div id=\"container\">
//	<span>name</span>
//</div>"
//console.log(container.outerHTML);
//container.outerHTML = "<p>pw&strick</p>"; 	//替换元素

var html = "<p>pw&strick</p>";
container.insertAdjacentHTML("beforebegin", html);	//前一个兄弟元素处
container.insertAdjacentHTML("afterbegin", html);	//第一个子元素处
container.insertAdjacentHTML("beforeend", html);	//最后一个子元素处
container.insertAdjacentHTML("afterend", html);		//后一个兄弟元素处