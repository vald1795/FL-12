// eslint-disable-next-line no-unused-vars
function makeNumber (a) {
    let newStr = ''
    for (let i = 0; i < a.length; i++) {
        if (+a[i]) {
            newStr += a[i];
        }
    }
    return newStr;
}