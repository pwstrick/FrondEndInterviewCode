function nest(fn) {
  var xhr = new XMLHttpRequest();
  xhr.open("post", "server.php");
  xhr.onload = function() {
    fn.call(this);
  };
  xhr.send(null);
}
nest(function() {
  console.log("nest1");
  nest(function() {
    console.log("nest2");
    nest(function() {
      console.log("nest3");
    });
  });
});


var promise = new Promise(function(fulfilled) {
  var xhr = new XMLHttpRequest();
  xhr.open("post", "server.php");
  xhr.onload = function() {
    fulfilled.call(this);
  };
  xhr.send(null);
});
promise.then(function() {
  console.log("promise nest1");
}).then(function() {
  console.log("promise nest2");
}).then(function() {
  console.log("promise nest3");
});