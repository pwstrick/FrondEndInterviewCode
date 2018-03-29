var $label = $("#label");
console.log($label.attr("for")); 	//"input"
console.log($label.attr("class")); 	//"title"

//一个对象参数
$label.attr({ for: "btn", class: "info" });
//两个参数，第一个是属性名，第二个是属性值
//$label.attr("for", "btn");
//两个参数，第一个是属性名，第二个是回调函数
// $label.attr("for", function(index, oldValue) {
  // if (oldValue == "input") 
    // return "btn";
  // return "select";
// });


console.log($label.prop("htmlFor"));
console.log($label.prop("className"));


//$label.removeAttr("for");
$label.removeProp("htmlFor");