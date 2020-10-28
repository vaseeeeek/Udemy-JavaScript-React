// const arr = [1, 2, 3, 6, 8];
// arr.pop(); // удаляет последний элемент массива
// arr.push(10); // добавить элемент со значением 10
// for ( let i = 0; i < arr.length; i++){ // перебор массива
//   console.log([i]);
// }
// for (let value of arr) { // перебор массива ---------- можно использовать break/contin
//   console.log(value);
// }
// arr.forEach(function (item, i, arr) { // item - переменная элементов массива i - номер элемента arr - перебираемый массив  ---------- нельзя использовать break/contin
//   console.log(`${i} элеменит - ${item}, внутри массива ${arr}`)
// });
// const productsText = 'яМолоко, вода, лимон, пенис короля';
// const productsArr = productsText.split(", "); // сделать из строки массив ", " - является разделителем
// const productsStr = productsArr.join("; "); // сделать из массива строку 
// productsArr.sort(); // сортировка массива с СТРОКАМИ
// productsArr.sort(compareNum); // сортировка массива с цифрами
// function compareNum (a, b) {
//   return a - b;
// }
// console.log(productsArr.sort());