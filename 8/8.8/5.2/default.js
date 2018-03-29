$.ajax("server.php")
 .done(function() { console.log("success"); })
 .fail(function() { console.log("error"); })
 .always(function() { console.log("complete"); })
 .then(
   function() { console.log("success"); }, 
   function() { console.log("error"); }
 );