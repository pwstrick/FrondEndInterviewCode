$("[name=btnCopy]").on("click", function() {
  console.log("复制");
});

//$(".copy").clone(true, false).appendTo("body");

$(".copy").clone(true, true).appendTo("body");