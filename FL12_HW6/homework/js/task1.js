let a = prompt('Введите а:'),
    b = prompt('Введите b:'),
    c = prompt('Введите c:');

if (isNaN(a) || a === '0' || a === '' || isNaN(b) || b === '' || isNaN(c) || c === '') {
    console.log('Invalid input data');
} else {
    let d = b * b - 4 * a * c;
    if (d < 0) {
        console.log('корней нет')
    } else if (d === 0) {
        let x = -b / (2 * a)
        console.log('корень один')
        console.log('x = ' + x)
    } else {
        let x1 = (-b + Math.sqrt(d)) / (2 * a),
            x2 = (-b - Math.sqrt(d)) / (2 * a);
        console.log('два корня')
        console.log('x1 = ' + Math.round(x1) + ', x2 = ' + Math.round(x2));
    }
}