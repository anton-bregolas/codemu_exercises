// №9

// Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.

function convertToInt(num) {
    convNum = parseInt(+num);
    console.log(`Converted ${typeof(num)} "${num}" to "${convNum}".`);
    return convNum;
}

function checkPrimeNumber(num) {

    // Strict mode - returns false if not an integer, suggests using convertToInt() first.

    if (isNaN(num) || !Number.isInteger(num)) {
        console.log(`Integer required, ${typeof(num)} "${num}" is invalid. Try using convertToInt() first.`);
        return false;
    }

    // Smart mode - converts to integer first, then checks if it's a prime number.

    // if (!isNaN(num) && !Number.isInteger(num)) {
    //     num = convertToInt(num);
    // }

    let checkNum = Math.abs(num);

    if (checkNum === 0 || checkNum === 1 || isNaN(checkNum)) {
        console.log(`"${num}" is not a prime number.`);
        return false;
    }

    for (let i = 2; i <= Math.sqrt(checkNum); i++) {

        if (checkNum % i == 0) {
            console.log(`"${checkNum}" is not a prime number.`);
            return false;
        }
    }

    console.log(`"${checkNum}" is a prime number.`);
    return true;
}

console.log(checkPrimeNumber(0));
console.log(checkPrimeNumber(1));
console.log(checkPrimeNumber(2));
console.log(checkPrimeNumber(-12));
console.log(checkPrimeNumber("013"));
console.log(checkPrimeNumber(convertToInt("013")));
console.log(checkPrimeNumber(NaN));
console.log(checkPrimeNumber("two"));
console.log(checkPrimeNumber(null));
console.log(checkPrimeNumber(convertToInt(null)));
console.log(checkPrimeNumber(true));
console.log(checkPrimeNumber(convertToInt(true)));
console.log(checkPrimeNumber(131.99));
console.log(checkPrimeNumber(convertToInt(131.99)));
console.log(checkPrimeNumber(997.0));