var obj1 = { name: "strick" },
  obj2 = obj1;
obj2.name = "pingwen";
console.log(obj1); //{name: "pingwen"}
console.log(obj2); //{name: "pingwen"}