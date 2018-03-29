console.log("Infinity");
console.log(Infinity / 0); 			//Infinity
console.log(Infinity / Infinity); 	//NaN
console.log(1 / Infinity); 			//0
console.log(-1 / Infinity); 		//-0

console.log("isFinite()");
console.log(isFinite(Infinity));//false
console.log(isFinite(NaN));//false
console.log(isFinite(-Infinity));//false
console.log(isFinite(undefined));//false
console.log(isFinite(null));//true
console.log(isFinite(0));//true
console.log(isFinite("0"));//true