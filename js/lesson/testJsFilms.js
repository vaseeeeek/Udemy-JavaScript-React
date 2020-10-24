'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 11) {
    console.log('Просмотрено довольно мало фильмов');
}   else if (personalMovieDB.count > 10 && personalMovieDB.count < 31 ) {
    console.log('Вы классический зритель');
}   else if (personalMovieDB.count > 30 ) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

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

console.log(personalMovieDB);