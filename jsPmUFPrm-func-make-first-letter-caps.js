// №5

// Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву этой строки.

function makeFirstLetterCaps(string) {

    let capStr = string[0].toUpperCase() + string.slice(1);

    return capStr;
}

let strToCap1 = "laura";
let strToCap2 = "palmer";
console.log(makeFirstLetterCaps(strToCap1), makeFirstLetterCaps(strToCap2));