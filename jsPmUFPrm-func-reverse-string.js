// №5

// Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву этой строки.

function makeFirstLetterCaps(string) {

    let capStr = string[0].toUpperCase() + string.slice(1);

    return capStr;
}

let strToCap = "laura";
console.log(makeFirstLetterCaps(strToCap));