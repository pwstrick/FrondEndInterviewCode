var info = document.getElementById("info");
console.log(info.style); 	//{fontSize:"16px", width:"10%"}
console.log(info.getAttribute("style"));	//"font-size:16px;width:10%;"
console.log(info.style.cssText);	//"font-size: 16px; width: 10%;"

var info2 = document.getElementById("info2");
console.log(info2.getAttribute("style"));	//"font-size:16px;width:10%;width:20%;"
console.log(info2.style.cssText);	//"font-size:16px;width:20%;"