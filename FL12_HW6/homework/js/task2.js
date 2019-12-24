let a = prompt('Введите а:'),
    b = prompt('Введите b:'),
    c = prompt('Введите c:');

if (isNaN(a) || a === '' || isNaN(b) ||a === '' || isNaN(b) || a === '' ) {
    alert('input values should be ONLY numbers');
} else if (+a <= 0 || +b <= 0 || +c <= 0) {
    alert('A triangle must have 3 sides with a positive definite length');
} else {
  a = +a;
  b = +b;
  c = +c;
  if (a + b > c & a + c > b & b + c > a) {
    if (a === b & b === c) {
      console.log('Equilateral triangle');
    } else if (a === b || a === c || b === c) {
      console.log('Isosceles triangle');
    } else if (a !== b & b !== c) {
      console.log('Scalene triangle');
    }
  } else {
    alert('Triangle doesn’t exist');
    console.log('Triangle doesn’t exist');
  }
}


