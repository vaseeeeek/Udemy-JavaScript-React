//"use strict";

//const obg = { // объект
//     name: 'John',
//     age: '25',
//     isMarried: 'false'
// };

// console.log(obg.age); // вывод возвраста 

// let arr = ['plum.png', 'orange', 6, 'apple.bmp']  //массив

// console.log(arr[2])


// const answers = [];

// answers[1] = prompt('Имя');
// answers[2] = prompt('Фамилия');
// answers[3] = prompt('Возвраст');




// <<<<<<<< OBG & DISCTICTURIZACIA >>>>>>>>>>


// const options = {
//     name: "test",
//     width: 1024,
//     height: 1024,
//     colors: {
//       border: 'black',
//       bg: 'red'
//     },
//     makeTest: function () {
//       console.log('test');
//     }
//   };
  
//   const {border, bg} = options.colors; // деструкторизация
//   console.log(border);
  
//   options.makeTest();
  
//   console.log(options['name']); // вывод данных обьекта
  
//   delete options.name; // удалить name из обьекта
  
//   console.log(options);
  
//   for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//       for (let i in options[key]){
//         console.log(`Своейство ${i} имеет значение ${options[key][i]}`);
//       } 
//     } else {
//       console.log(`Своейство ${key} имеет значение ${options[key]}`);
//     }
//   }
  
//   console.log(Object.keys(options)); // ключи массива
  
  
//   console.log(Object.keys(options).length); // колва элементов