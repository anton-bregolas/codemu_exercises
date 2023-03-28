// №2

// Сделайте функцию, которая параметром будет принимать число и возвращать массив его делителей.

function makeArrayFromDivisors(num) {
    let arrDiv = [];

    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            arrDiv.push(i);
        }
    }

    return arrDiv;
}

let yourNumber = 360;
console.log(makeArrayFromDivisors(yourNumber));