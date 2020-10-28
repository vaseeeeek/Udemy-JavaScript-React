// "use strict";

// let a = 5,
//     b = a;

//     b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//   a: 5,
//   b: 1
// };

// const copy = obj; // Ссылка COPY на обьект OBJ

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj){ // поверхостная копия обьектов
//   let objCopy = {};

//   let key;
//   for (key in mainObj){
//     objCopy[key] = mainObj[key];
//   }

//   return objCopy;
// }

// const numbers = {
//     a: 5,
//     b: 1,
//     c: {
//       x: 7,
//       z:34
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(numbers);
// console.log(newNumbers);

// const add = {
//   v: 5,
//   h: 6254
// }

// console.log(Object.assign(numbers, add))  // создание копии обьекта с добавлением адд в намберс
// console.log(Object.assign({}, add))  // создание копии обьекта с добавлением адд в пустой обьект

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice(); //создание копии массива

// const video = ['qqqqq', 'wwwwww', 'xxxxxx'],
//       blocks = ['aaaaaa', 'ssssss', 'dddddd'],
//       internet = [...video, ...blocks, 'vk', 'facebook']; //склеивание массива и добавление соих элементов в internet

//       console.log(internet);

      
// const num = [2, 5, 7];
// const newnum = [...num]; //создание копии массива

// const numObj = {
//   one: 1,
//   two: 2,
//   three: 3
// };
// const newnumObj = {...num};  //создание копии обьекта

// console.log(newnumObj);
// console.log(newnum);