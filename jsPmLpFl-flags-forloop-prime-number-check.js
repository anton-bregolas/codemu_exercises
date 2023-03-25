//№2 (for loop solution)

let userInteger = 997; // +prompt("Enter an integer to check if it's a prime number.");
//Need a positive integer for it to work.
let checkInt = Math.abs(userInteger);
let checkIntSquareRoot = Math.sqrt(checkInt);
let checkPrimeNumber = true;

//Check if 0 or 1 - not prime numbers. Non-integers also return false.
if (checkInt == 0 || checkInt == 1 || checkInt % 1 != 0) {
    checkPrimeNumber = false;
//Check if divisible by any integer other than itself and 1.
//Limit search by square root of the number to optimize.
} else {
    for (let i = 2; i <= checkIntSquareRoot; i++) {
        if (checkInt % i == 0) {
            console.log(checkInt + " is divisible by " + i);
            checkPrimeNumber = false;
            break;
        }
    }
}

if (checkPrimeNumber === true) {
    console.log(checkInt + " is a prime number.");
} else {
    console.log(checkInt + " is not a prime number");
}