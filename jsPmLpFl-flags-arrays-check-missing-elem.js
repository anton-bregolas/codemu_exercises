//№1 (using a flag)

let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;

for (let elem of arr) {
    if (elem == 'c') {
        flag = true;
        break;
    }
}
if (flag === true) {
    console.log('+++');
} else {
    console.log('---');
}

//№1 alternative (using else, but it works)

let arrAlt = ['a', 'b', 'c', 'd', 'e'];

for (let j = 0; j < arrAlt.length; j++) {
    if (arrAlt[j] == 'c') {
        console.log('+++');
        break;
    } else if ((arrAlt[j] != 'c') && j == (arrAlt.length - 1)) {
        console.log('---');
    }
}

