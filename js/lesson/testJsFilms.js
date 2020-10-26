/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const lastFilms = prompt('Один из последних просмотренных фильмов?', ''),
          ratingFilms = prompt('На сколько оцените его?', '');

    if (lastFilms != null && ratingFilms != null && lastFilms != '' && ratingFilms != '' && lastFilms.length < 50) {
        personalMovieDB.movies[lastFilms] = ratingFilms;
        console.log('done');
    }   else    {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 11) {
    console.log('Просмотрено довольно мало фильмов');
}   else if (personalMovieDB.count > 10 && personalMovieDB.count < 31 ) {
    console.log('Вы классический зритель');
}   else if (personalMovieDB.count > 30 ) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);