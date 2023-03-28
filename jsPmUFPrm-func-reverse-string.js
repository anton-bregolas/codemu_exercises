// №4

// Сделайте функцию, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.

function reverseYourString(str) {

    // using in-built methods:
    
    // let revStr = String(str).split('').reverse().join('');

    // using for loop:

    let revStr = '';

    if (typeof str !== 'string') {
        str = String(str);
    }

    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }

    return revStr;
}

let strToRev = "Hello Agent Cooper";
console.log(reverseYourString(strToRev));
console.log(reverseYourString(430));