var txt = document.getElementById("txt"),
  login = document.getElementById("login");
txt.disabled = false;
txt.value = "freedom";
txt.name = "pwd";
txt.type = "password";
console.log(txt.form == login); 	//true