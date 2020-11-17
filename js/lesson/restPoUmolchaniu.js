const log = function (a, b, ...rest) { // rest собирерает переданные данные после основный (a b) и собирает их в массив
    console.log(a, b, rest);
}

log('bas', 'rest', '1', '2', '3');

function calcOrDouble(number, basis = 2){ // дать переменной basis значение 2 по умолчанию
    console.log(number*basis);
}

calcOrDouble(3, 5);