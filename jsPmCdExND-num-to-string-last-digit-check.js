// №1

let inputNum = 2380;
let stringNum = String(inputNum);

if (stringNum[stringNum.length - 1] == 0) {
    console.log("The number ends with 0");
} else {
    console.log("The number doesn't end with 0");
}

// №2

let userNumber = 1234378;
let strNumber = String(userNumber);
let numberLength = strNumber.length;
let lastDigit = strNumber[numberLength - 1];

if (lastDigit == 0 || lastDigit == 2 || lastDigit == 4 || lastDigit == 6 || lastDigit == 8) {
    console.log('That looks like an even number.');
} else {
    console.log('That doesn\'t look like an even number');
}