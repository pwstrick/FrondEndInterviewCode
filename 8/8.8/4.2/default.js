var $btn = $("#btnEvent");
$btn.click(function(event, name, age) {
  console.log(name); 	//"strick"
  console.log(age); 	//28
});
$btn.trigger("click", ["strick", 28]);