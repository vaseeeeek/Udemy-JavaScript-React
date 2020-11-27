const persone = {
    name: 'Alex',
    Age: '25',
    parents: {
        mom: 'Tatiana',
        dad: 'Victor'
    }
};



console.log(JSON.stringify(persone)); // перевод persone в форма JSON который поддерживается сервером для принятия данных -JSON.stringify

console.log(JSON.parse(JSON.stringify(persone))); // перевод с JSON формата в обычный - JSON.parsse

const clone = JSON.parse(JSON.stringify(persone)); // создание клона переменной persone