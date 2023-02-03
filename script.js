let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели? ","");
   

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actor: {},
    genres: [],
    privat: false

};

let  lastFilm1 = prompt("Один из последних просмотренных фильмов?", ""),
    rangeOfLastFilm1 = prompt("На сколько вы его оцените?",""),
    lastFilm2 = prompt("Один из последних просмотренных фильмов?", ""),
    rangeOfLastFilm2 = prompt("На сколько вы его оцените?","");

personalMovieDB.movies[lastFilm1] = rangeOfLastFilm1;
personalMovieDB.movies[lastFilm2] = rangeOfLastFilm2;

console.log(personalMovieDB);
//
