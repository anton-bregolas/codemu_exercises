// №3

// Сделайте функцию, которая параметром будет принимать строку и возвращать массив ее символов.

function makeArrayFromString(str) {

    let strArray = String(str).split('');

    return strArray;

}

console.log(makeArrayFromString(12345));
console.log(makeArrayFromString("asdfg"));