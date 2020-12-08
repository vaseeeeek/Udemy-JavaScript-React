'use strict';

// последовательность выполнения действий в случае успешной отработки кода

console.log('Запрос данных...');

const req = new Promise(function(resolve, reject) { // если все пошло правильно то вызываем resolve, если нет reject
    setTimeout(() => {
        console.log('Подготовка данных');
    
        const product = {
            name: 'tv',
            price: 2000
        };

        resolve(product); // добавить в resolve значение переменной product
    }, 2000);
});

// req.then((product) => { // описание resolve, и забрать product
//     setTimeout(()=> {
//         product.status = 'order';
//         console.log(product);
//     }, 2000);
// });

req.then((product) => { //вариант без ошибки
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            product.status = 'order';
            resolve(product); // передача product в вызове resolve(все гуд)
        }, 2000);
    });
}).then(data => { // есть product
    data.modify = true; // пройти модификацию 
    return data; // вернуть дальше по цепочке product
}).then(data => { // есть product
    console.log(data); // вывод product
});

req.then((product) => { // вариант с ошибкой
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            product.status = 'order';
            reject(); // reject - вызов ошибки
        }, 2000);
    });
}).then(data => { // data = product 
    data.modify = true; // пройти модификацию 
    return data; // вернуть дальше по цепочке product
}).then(data => { // data = product
    console.log(data); // вывод product
}).catch(() => { // В случае ошибки
    console.error('Произошла ошибка');
}).finally( () => {// в любом случае выведит при ошибке или нет
    console.log('finally');
});




