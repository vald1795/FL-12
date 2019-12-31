// eslint-disable-next-line no-unused-vars
function getMin() {
    let numberMin = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < numberMin) {
            numberMin = arguments[i];
        }
    }
    return numberMin
}