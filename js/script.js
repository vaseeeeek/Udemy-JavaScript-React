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