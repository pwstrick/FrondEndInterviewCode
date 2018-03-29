var $btn = $("#btnEvent");
$btn.on("custom", function(event) {
  console.log("自定义事件");
});
$btn.trigger("custom");