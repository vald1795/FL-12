// eslint-disable-next-line no-unused-vars
function pipe(a) { 
    let res = a;
    for (let i = 1; i < arguments.length; i++) {
        let arg = arguments[i];
        res = arg(res);
    }
    return res 
}