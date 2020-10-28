<<<<<<< HEAD
// To string

// 1)

console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2)

console.log(typeof(5 + ''));

// To number

// 1

console.log(typeof(Namber(4)));

// 2 

console.log(typeof(+'5'));

// 3 

console.log(parseInt("15px", 10));

let answer = +("Hello", "");

// To boolean

// 1)

// 0, null, '', undefined, NaN; -- false

// let switcher = null;

// if (switcher) {
//     console.log('working');
// } else {
//     console.log('no working')
// }

// switcher = 1;

// if (switcher) {
//     console.log('working');
// } else {
//     console.log('no working')
// }

// 2)

// console.log(typeof(Boolean('4)))

// 3)

// console.log(typeof(!!'4'))
=======
"use strict"

const soldier = {
  chlen: '9m',
  health: 100,
  armor: 200
}


// const vaseeeeeek = {
//   chlen: '10m'
// }

// Object.setPrototypeOf(vaseeeeeek, soldier)

// console.log(vaseeeeeek);





const vaseeeeeek = Object.create(soldier);
console.log(vaseeeeeek.chlen);
>>>>>>> 79ec98b58a77dfa3ef473de4983dfb2efb7a8adb
