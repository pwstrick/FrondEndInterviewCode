$.ajax("server.php", {
  dataType: "json",
  success: function(data) {
    console.log(data);
  }
});