// №1

// Сделайте функцию, которая параметром будет принимать массив и возвращать сумму его элементов.

function getSumOfArray(arr) {
    let sumArr = 0;

    for (let elem of arr) {
        sumArr += elem;
    }

    return sumArr;
}

let yourArray = [1, 3, 5, 7, 9];
console.log(getSumOfArray(yourArray));