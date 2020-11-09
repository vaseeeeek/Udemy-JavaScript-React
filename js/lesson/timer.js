const tiemerId = setTimeout(function () {
    console.log('hello');
}, 2000);

const tiemerId2 = setTimeout(function (text) {
    console.log(text);
}, 2000, 'hello');

function logger () {
    console.log('text');
}

const tiemerId3 = setTimeout(logger, 2000); // установить таймер

clearInterval(tiemerId3);


const tiemerId3 = setInterval(logger, 2000); // установить интервал