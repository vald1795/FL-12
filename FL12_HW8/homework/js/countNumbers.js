// eslint-disable-next-line no-unused-vars
function countNumber(a) {
    let obj = {};
    for (let i = 0; i < a.length; i++) {
        if (+a[i] || a[i] === '0') {
            if (obj[a[i]]) {
                obj[a[i]] += 1
            } else {
                obj[a[i]] = 1
            }
        }
    }
    return obj
}