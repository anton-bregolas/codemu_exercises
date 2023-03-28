// №1

function func1() {
    return 3;
}
function func2() {
    return 5;
}

console.log(func1() + func2());

// №2

function getArrSum(arr) {
    let res = 0;

    for (let elem of arr) {
        res += elem;
    }

    return res;
}

console.log(getArrSum([1, 2, 3, 4, 5]));

// №3

let arr = [1, 2, 3, 4, 5];

function getSumOfArr(arr) {
    let res = 0;

    for (let elem of arr) {
        res += elem;
    }

    console.log(res);
}

getSumOfArr(arr);

// №4

function func1() {
    return 3;
}
function func2() {
    return 5;
}

console.log(func1() + func2());


// №5

let sumArr = getArraySum([1, 2, 3, 4, 5]);
console.log(sumArr);

function getArraySum(arr) {
    let sum = 0;

    for (let elem of arr) {
        sum += elem;
    }

    return sum;
}

// №6

let res = getSumOfArray([1, 2, 3, 4, 5]);
console.log(res);

function getSumOfArray(arr) {
    let sum = 0;

    for (let elem of arr) {
        sum += elem;
    }

    return sum;
}

// №7
// Функция добавляет ноль к числу от 1 до 9, а числа больше 9 возвращает без изменений:


function addZero(num) {
    if (num <= 9) {
        return '0' + num;
    }

    return num;
}

console.log(`${addZero(1)}, ${addZero(9)}, ${addZero(10)}`);

// №8

let yourArray = [1, 2, 3, 4, 5];
let sum = getSumOfYourArray(yourArray);
console.log(sum);

function getSumOfYourArray(arr) {
    let res = 0;

    for (let elem of arr) {
        res += elem;
    }

    return res;
}

// №9

let yourNumber = 12345;
let yourResult = getDigitsSum(yourNumber);
console.log(yourResult);

function getDigitsSum(num) {
    let arr = String(num).split('');
    let sum = 0;

    for (let elem of arr) {
        sum += +elem;
    }

    return sum;
}

// №10

console.log(isPrimeNumber(13)); // должен вывести true

function isPrimeNumber(num) {

    if (num === 0 || num === 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
}