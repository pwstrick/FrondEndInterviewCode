(function(global, undefined) {
  function calendar() {}
  global.calendar = calendar; 	//暴露到全局作用域中
})(window);


(function(factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = factory(window); //CommonJS
  } else if (typeof define === "function" && define.amd) {
    define(factory(window)); //AMD
  } else {
    factory(window);
  }
})(function(global, undefined) {
  //省略类库代码
});