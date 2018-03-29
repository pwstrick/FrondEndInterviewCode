function chain1() {
  //第一个对象
}
function chain2() {
  //第二个对象
}
chain2.prototype = {
  name: "strick"
};
//第一个对象关联第二个对象
chain1.prototype = chain2.prototype;
var chain = new chain1();
console.log(chain.name); //"strick"