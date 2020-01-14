function convert() {
    let array = [];
    for (let i = 0; i < arguments.length; i++) {
        if (!isNaN(arguments[i])) {
            if (typeof arguments[i] === 'number') {
                arguments[i] = String(arguments[i]);
            } else if (typeof arguments[i] === 'string') {
                arguments[i] = +arguments[i];
            }
            array.push(arguments[i]);
        }
    }
    return array;
}

function executeforEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

function mapArray(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(parseInt(arr[i]));
    }
    return arr;
}

function filterArray(arr, func) {
    let array2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            array2.push(arr[i]);
        }
    }
    return array2;
}

function flipOver(str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    str = newStr;
    return str;
}

function makeListFromRange(array) {
    let newArray = [];
    for (let i = array[0]; i <= array[array.length - 1]; i++) {
        newArray.push(i);
    }
    console.log(newArray);
    return newArray;
}



function getArrayOfKeys(arr, key) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][key]) {
            newArr.push(arr[i][key]);
        }
    }
    return newArr;
}

function substitute(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 30) {
            arr[i] = '*';
        }
    }
    console.log(arr);
    return arr
}


function getPastDay(date, amountDay) {
    let ms = date.getTime();
    let dayPassed = amountDay * 86400000;
    let newMS = ms - dayPassed;
    let newDate = new Date(newMS);
    let neededDay = newDate.getDate();
    return neededDay;
}


function formatDate(date) {
    let emptyStr = '';
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let min = date.getMinutes();
    let newStr = emptyStr + year + '/' + month + '/' + day + ' ' + hours + ':' + min;
    return newStr;
}