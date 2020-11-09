const btn = document.querySelectorAll('button');
const wrap = document.querySelector('.wrap');
// console.log(btn[0].classList.length); // количество классов
console.log(btn[0].classList.item(0)); // Первы класс
console.log(btn[0].classList.add("class", 'davasdvasdvsd')); // дать класс элементу
console.log(btn[0].classList.remove("class")); // удалить класс элементу
console.log(btn[0].classList.toggle("class")); // toggle класса

if (btn[2].classList.contains('red')) { // проверить наличие класса
    console.log('red');
}

wrap.addEventListener('click', (e) => {
    if (e.target && e.target.tagName == 'BUTTON') { //Проверка что клик был по button

    }
    if (e.target && e.target.mathces('button.red')) { // Проверка что клик был по элементу который совпадает с классом button.red
        
    }
})