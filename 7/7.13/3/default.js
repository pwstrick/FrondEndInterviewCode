(function(global) {
  //...
})(window);

function func() {
  var undefined = true;
  console.log(undefined); 	//true
  //省略使用undefined的代码
}
func();

(function(undefined) {
  //...
})();