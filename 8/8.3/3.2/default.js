var parent = document.getElementById("parent"),
  child = document.getElementById("child");
console.log(child.offsetLeft); 		//29
console.log(child.offsetTop); 		//29
console.log(child.offsetParent); 	//<body>元素

// console.log(child.offsetLeft); 		//20
// console.log(child.offsetTop); 		//20
// console.log(child.offsetParent); 	//id为parent的<div>元素

//不包含边框宽度
function offsetSum(node) {
  var top = 0, left = 0;
  while (node) {
    top += node.offsetTop;
    left += node.offsetLeft;
    node = node.offsetParent;
  }
  return { top: top, left: left };
}
var result = offsetSum(child);
console.log(result);


//包含边框宽度
function offsetSum2(node) {
  var top = 0, left = 0;
  while (node) {
    top += node.offsetTop;
    left += node.offsetLeft;
    node = node.offsetParent;
    if (node) {
      top += node.clientTop; 	//上边框的宽度
      left += node.clientLeft; 	//左边框的宽度
    }
  }
  return { top: top, left: left };
}
result = offsetSum2(child);
console.log(result);
