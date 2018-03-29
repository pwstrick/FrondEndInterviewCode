var $btn = $("#btnEvent");
$btn.click(function(event) {
  console.log("onclick");
  return false;
});

$btn.on("click", function(event) {
  console.log("onclick");
});

var $container = $("#container");
// $container.on("click", "button", function(event) {
  // console.log("onclick");
// });

$btn.off("click");