// изначальный this = window или undifind
// контекст у методов обьекта - сам обьект
// this в конструкторах и классах это новый экземпляр обьекта
// ручная привязка this: clal apply bind

function sayName(surname){
    console.log(this);
    console.log(this.name + surname);
};

const user = {
    name: 'John'
};

sayName.call(user, 'Smith'); // sayName заработать на обьекте user 
sayName.apply(user, ['Smith']); // sayName заработать на обьекте user 

/////////////////

function count(num) {
    return this*num;
}

const double = count.bind(2); // установить на this функции count значение 2
console.log(double(3)); // 2*3 = 6 
console.log(double(13)); // 2*13 = 26 

////////////// 
const btn = document.querySelector('button');

btn.addEventListener('click', function() { 
    console.log(this); // this = btn
})

// у стрелочной функции this является this родителя 