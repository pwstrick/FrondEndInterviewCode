var date = new Date();
console.log(Date.parse(date)); 				//1484881865000
console.log(Date.parse(date.toString())); 	//1484881865000
console.log(Date.parse(date.toUTCString())); //1484881865000
console.log(Date.parse(date.toISOString())); //1484881865008