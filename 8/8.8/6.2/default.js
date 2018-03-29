var $container = $("#container");
// $container.animate(
  // { height: "50px" },
  // {
    // duration: 400,
    // easing: "swing",
    // complete: function() {
      // console.log("complete");
    // }
  // }
// );

// $container.animate({ height: "50px" }, 400, "swing", function() {
  // console.log("complete");
// });

$container
  .delay(200)
  .animate({ height: "50px" })
  .stop(true);