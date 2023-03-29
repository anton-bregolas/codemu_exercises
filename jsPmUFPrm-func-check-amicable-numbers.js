// №10

// Сделайте функцию, которая будет проверять пару чисел на дружественность. 
// Дружественные числа - два числа, для которых сумма 
// всех собственных делителей первого числа равна второму числу 
// и наоборот, сумма всех собственных делителей второго числа равна первому числу.

function checkAmicableNumbers(num1, num2) {

    let arrDiv1 = makeArrayFromProperDivisors(num1);
    let arrDiv2 = makeArrayFromProperDivisors(num2);

    if (getSumOfArray(arrDiv1) === num2 && getSumOfArray(arrDiv2) === num1) {
        console.log(`Numbers ${num1} and ${num2} are amicable numbers.\n`);
        return true;
    }

    //console.log(`Numbers ${num1} and ${num2} are not amicable numbers.\n`);
    return false;
}

function makeArrayFromProperDivisors(num) {
    let arrDiv = [];

    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            arrDiv.push(i);
        }
    }

    //console.log(String(arrDiv).split(',').join(', '));
    return arrDiv;
}

function getSumOfArray(arr) {
    let sumArr = 0;

    for (let elem of arr) {
        sumArr += elem;
    }
    
    //console.log(sumArr);
    return sumArr;
}

// checkAmicableNumbers(220, 284);
// checkAmicableNumbers(220, -284);
// checkAmicableNumbers(17296, 18416);

// №11

// Используя созданную вами функцию из предыдущей задачи 
// найдите все пары дружественных чисел в промежутке от 1 до 1000.

// Works but EXTREMELY SLOWLY:

function getAmicableNumbers(num1, num2) {

let amicArr = [];

    for (let i = num1; i <= num2; i++) {
        for (let j = num2; j > i; j--) {
            if (checkAmicableNumbers(i, j) == true) {
                amicArr.push(i + ' & ' + j);
            }
        }
    }

    let amicList = String(amicArr).split(',').join(', ');
    console.log(amicList);
    return;
}

getAmicableNumbers(1, 1000);


