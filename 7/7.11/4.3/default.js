function prime(number) {
    if (!prime.digits) {
        prime.digits = {}; 	//缓存对象
    }
    if (prime.digits[number] !== undefined) {
        return prime.digits[number];
    }
    var isPrime = false;
    for (var i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (i == number) {
        isPrime = true;
    }
    return (prime.digits[number] = isPrime);
}
prime(87);
prime(17);
console.log(prime.digits[87]); 	//false
console.log(prime.digits[17]); 	//true