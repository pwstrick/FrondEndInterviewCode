for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 0);
}

for (var i = 0; i < 3; i++) {
  (function(n) {
    setTimeout(function() {
      console.log(n);
    }, 0);
  })(i);
}