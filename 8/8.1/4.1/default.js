var btn = document.getElementById("btn");
btn.onclick = function() {
	location.hash = "#freedom";
	console.log(history.length); 	//3	
};
console.log(history.length); 		//2
//location.hash = "#strick";
//console.log(history.length); 		//3