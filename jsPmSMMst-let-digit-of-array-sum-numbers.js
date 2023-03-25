// №1

// let num = 12345;
// let arr = num.split(''); -> split() method only works for strings!

// let sum = 0;
// for (let digit of arr) {
// 	sum += digit; -> need to convert strings to numbers using Number() method or unary plus (+)
// }

// console.log(sum);

let num = 12345;
let str = String(num);
let arr = str.split('');
console.log('Number converted to array of: ' + arr);

let sum = 0;
for (let digit of arr) {
	sum += +digit;
}

console.log(sum);

// №2

//let num = 12345;
// let arr = String(num).split('');

// let sum = 0;
// for (let digit of arr) {
// 	sum += digit; -> need to convert strings to numbers using Number() method or unary plus (+)
// }

// console.log(sum);

let num2 = 12345;
let arr2 = String(num).split('');

let sum2 = 0;
for (let digit of arr2) {
	sum2 += Number(digit);
}

console.log(sum2);

// №3

// let num = 12345;
// let arr = String(num).split('');

// let sum = 0;
// for (let digit of arr) {
// 	sum = Number(digit); -> only returns the last value assigned to sum
// }

// console.log(sum); // почему-то выводит 5, а не 15

let num3 = 12345;
let arr3 = String(num3).split('');

let sum3 = 0;
for (let digit of arr3) {
	sum3 += Number(digit);
}

console.log(sum3);

// №4

// let num = 12345;
// let arr = String(num).split('');

// let sum = ''; -> string + number = string, string + undefined = NaN => sum must be a number for the code to work.
// for (let digit of arr) {
// 	sum += Number(digit);
// }

// console.log(sum);

let num4 = 12345;
let arr4 = String(num).split('');

let sum4 = 0;
for (let digit of arr4) {
	sum4 += Number(digit);
}

console.log(sum4);

// №5

// let num = 12345;
// let arr = String(num).split('');

// let prod = 0; -> multiplication by 0 results in 0
// for (let digit of arr) {
// 	prod *= digit;
// }

// console.log(prod);

let num5 = 12345;
let arr5 = String(num).split('');

let prod5 = 1;
for (let digit of arr5) {
	prod5 *= digit;
}

console.log(prod5);