function loadScript(src, fn) {
  var script = document.createElement("script");
  script.src = src;
  document.body.appendChild(script);
  script.onload = function() {
    fn.call(this);
  };
}
loadScript("demo.js", function() {
	console.log("onload");
});