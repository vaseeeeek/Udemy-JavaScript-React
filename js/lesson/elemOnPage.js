const box = document.getElementById('box');

console.log(box); // 1 элемент с id box

box.style.backgroundColor = 'blue'; //-- старый способ
box.style.width = '599px'; //-- старый способ

///////////////////

const num = 300;

box.style.cssText = 'background:#000; width: ${num}px;';

////////////////////////

const btns = document.getElementsByTagName('button');

console.log(btns); // массив с всеми элементами button 

//////////////////////////

const circles = document.getElementsByClassName('circle');

console.log(circles); //массив с всеми элеменами класса circle

//////////////////////////

const hearts = document.querySelectorAll('.heart');

console.log(hearts); // массив элементов с классом heart

hearts.forEach(item => {
    console.log(item);
});

///////////////////////////

const hearts = document.querySelector('.heart');

console.log(hearts); //вывод первый элемент .heart

hearts.forEach(item => {
    item.style.cssText = 'background: #333';
});

const div = document.createElement('div'); // Создать элемент
document.createTextNode('Тут был я'); // Задать элементу текст

div.classList.add('black');

document.body.append(div); // добавить в конец body div 

const wrapper = document.querySelector('.wrapper');
document.querySelector('.wrapper').append(div); // добавить элемент див в wrapper конекц

document.querySelector('.wrapper').prepend(div); // добавить элемент див в wrapper в начало 

hearts[0].before(div); // перед 1 сердцем див
hearts[0].after(div); // после 1 сердцем див

wrapper.insertBefore(div, hearts[0]); // в родителе враппер втавить div перед hearts[0 ]  -- старый способ

circles[0].remove; //удалить 1 кружечек (элемент) 
wrapper.removeChild(hearts[1]);  //-- старый способ // удалить hearts[1] из wrapper


hearts[0].replaceWith(circles[0]);  // заменить hearts[0] на circles[0]
wrapper.replaceChild(circles[0], hearts[0]); // заменть сирклес на хеартс в враппере

div.innerHTML = "<h1>hello world<h1>" // в див добавить html

div.insertAdjacentElement('before', '<h2>hello world</h2>'); // вставить до после элемениа 'div' - <h2>hello world</h2>


