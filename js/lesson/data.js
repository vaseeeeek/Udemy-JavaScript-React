const now  = new Date(); // текущая дата
console.log(now);

const now  = new Date(2020-11-09); // получить дату 
console.log(now);

const now  = new Date(2020, 5, 1, 20) // получить дату и время 20 часов (без вычета GMT)
console.log(now);

const now  = new Date(0); // 1980 г
console.log(now);

console.log(now.getFullYear()); // год

console.log(now.getMonth()); // месяц и тд
console.log(now.setMonth()); // утсановить месяц и тд

let start = new Date();

for (let i = 0; i < 1000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Отработал за ${end - start} миллесекунд`);