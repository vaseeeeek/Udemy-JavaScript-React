'use stripct';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => { // введение значения в инпут
    const request = new XMLHttpRequest();

    //request.open(method, url, async, login, password);  шаблон
    request.open('GET', 'current.json'); // get - запрос на сервер, post отправление данных
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8') // описание запроса
    request.send(); // послать HTTP запрос на сервер и получить ответ.
    
    request.addEventListener('readystatechange', () => {  // отслеживает статус запроса (его изменения) (также можно получать выбрать событие load)
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response); // получение ответа от сервера 
            const data = JSON.parse(request.response); // перевод в обыный формат ответа от сервера 
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'Что-то пошло не так';
        }
    });

    // status 200 400 0 и т.д.
    // statusText текстовое описание ответа от сервера
    // response ответ от сервера
    // readyState текущее состояние нашего запроса

});