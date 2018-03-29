var btn = document.getElementById("btn");
btn.onclick = function(event) {
  event = event || window.event; //兼容处理
  console.log("onclick");
};
//btn.onclick = null;

var submit = document.getElementById("btnSubmit");
submit.onclick = function () {
  return false;
};

// btn.onclick = function () {
  // console.log("onclick1");
// };
// btn.onclick = function () {
  // console.log("onclick2");
// };