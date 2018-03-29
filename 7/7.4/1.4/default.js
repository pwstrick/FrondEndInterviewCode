console.log(~null); 		//-1
console.log(~undefined); 	//-1
console.log(~"pw"); 		//-1
console.log(~{}); 			//-1
console.log(1.25); 			//-2

if ("pwstrick".indexOf("str") == -1) {
  //没有找到匹配
}
if (!~"pwstrick".indexOf("str")) {
  //没有找到匹配
}