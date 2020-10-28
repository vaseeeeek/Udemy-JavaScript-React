<<<<<<< HEAD
'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            } 
            
            // Альтернативный вариант из урока
            
            // let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

            // if (genres === '' || genres == null) {
            //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
            //     i--;
            // } else {
            //     personalMovieDB.genres = genres.split(', ');
            //     personalMovieDB.genres.sort();
            // } 
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};
=======
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// 'use strict';

// let numberOfFilms;

// function start(){
//   numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

//   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
//   }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     const lastFilms = prompt('Один из последних просмотренных фильмов?', ''),
//           ratingFilms = prompt('На сколько оцените его?', '');

//     if (lastFilms != null && ratingFilms != null && lastFilms != '' && ratingFilms != '' && lastFilms.length < 50) {
//         personalMovieDB.movies[lastFilms] = ratingFilms;
//         console.log('done');
//     }   else    {
//         console.log('error');
//         i--;
//     } 
//   } 
// }

// rememberMyFilms();

// function detectedPeronalLvl() {
//   if (personalMovieDB.count < 11) {
//     console.log('Просмотрено довольно мало фильмов');
//     }   else if (personalMovieDB.count > 10 && personalMovieDB.count < 31 ) {
//         console.log('Вы классический зритель');
//     }   else if (personalMovieDB.count > 30 ) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Произошла ошибка');
//     }
// }

// detectedPeronalLvl();

// function checkdPrivat (){
//   if (personalMovieDB['privat'] == false) {
//     console.log('главный объект программы');
//   }
// }

// checkdPrivat ();

// function writeYourGenres() {
//   for (let i = 1; i<4; i++){
//     genres = +prompt(`Ваш любимый жанр под номером  ${i}`, '');
//     personalMovieDB['genres'][i -1] = genre;
//   } 
// }

// writeYourGenres();

// function showMyDB(hidden) {
//   if (!hidden){
//     console.log(personalMovieDB);
//   }
// }

// showMyDB(personalMovieDB.privat);
>>>>>>> 79ec98b58a77dfa3ef473de4983dfb2efb7a8adb
