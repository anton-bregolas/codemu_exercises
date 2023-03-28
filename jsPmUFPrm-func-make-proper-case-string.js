// №6

// Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву каждого слова этой строки.

// using split + slice + join (Proper Case):

function makeProperCase(str) {
    
    let strToArr = str.split(' ');

    for (let i = 0; i < strToArr.length; i++) {
        strToArr[i] = strToArr[i][0].toUpperCase() + strToArr[i].slice(1).toLowerCase();
    }

    let arrToNewStr = strToArr.join(' ');

    return arrToNewStr;
}

let strToProperCase = "ThIs iS a forMIca taBle. GrEEn is iTs cOloR.";
console.log(makeProperCase(strToProperCase));

// using split + map + join (Proper Case):

function makeProperCaseViaMap(str) {

    let strToMap = str.split(' ');

    let newString = strToMap.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');

    return newString;
}

let str2ToProperCase = "I HAVE THE FURY OF MY OWN MOMENTUM!";
console.log(makeProperCaseViaMap(str2ToProperCase));