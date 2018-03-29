var names = document.getElementById("names");
//DOM方法
var option1 = document.createElement("option");
option1.value = 5;
option1.text = "star";
names.appendChild(option1);
//元素方法
var option2 = new Option("star", 5);
names.add(option2);