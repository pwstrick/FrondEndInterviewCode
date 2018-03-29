var $form = $("#form");
//获取
console.log($form.find("select").val()); 	//"3"
console.log($form.find(":text").val()); 		//"strick"
//设置
$form.find("select").val("1");
$form.find(":text").val("freedom");


console.log($form.find(":radio:checked").val()); //"2"