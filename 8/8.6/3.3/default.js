var names = document.getElementById("names");
console.log(names.options[names.selectedIndex]);

var colors = document.getElementById("colors"),
  options = [].slice.call(colors.options),
  selecteds = []; 	//选中项集合
options.forEach(function(option, key) {
  if (option.selected) 
    selecteds.push(option);
});
console.log(selecteds);