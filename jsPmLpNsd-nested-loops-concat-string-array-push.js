// №1

result1 = '';

for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 3; j++) {
        result1 = String(i).concat(result1);
    }
}
let finalResult1 = result1.split('').reverse().join('');
console.log(finalResult1);

// №2 (using concat + string)

let result2A = '';

for (let k = 3; k >= 1; k--) {
    for (let l = 3; l >= 1; l--) {
        num = String(k).concat(String(l));
        result2A = num.concat(' ', result2A);
    }
}

console.log(result2A);

// №2 (alt - using join + array)

let result2B = [];

for (let m = 1; m <= 3; m++) {
    for (let n = 1; n <= 3; n++) {
        newNum = String(m).concat(String(n));
        result2B.push(newNum);
    }
}

let finalResult2B = result2B.join(' ');
console.log(finalResult2B);