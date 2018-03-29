var colors = document.getElementsByName("color"),
  values = []; 	//选中的值
colors = [].slice.call(colors); //将类数组对象转换为数组
colors.forEach(function(element, key) {
  if(element.checked) 
    values.push(element.value);
});
console.log(values);