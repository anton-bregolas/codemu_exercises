// №7

// Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.

function makeNumberedArrayUpTo(num) {

    let numArr = [];

    for (let i = 1; i <= num; i++) {
        numArr.push(i);
    }

    return numArr;

}

const numberedArray = makeNumberedArrayUpTo(18);

console.log(numberedArray);

// №8

// Сделайте функцию, которая будет возвращать случайный элемент из массива.

function getRandomElemFromArray(arr) {
    let randomElemIndex = Math.floor(Math.random() * arr.length);
    return arr[randomElemIndex];
}

let randomEpisodeNo = getRandomElemFromArray(numberedArray);
console.log(randomEpisodeNo);