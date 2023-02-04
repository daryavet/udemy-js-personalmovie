let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели? ","");

    while (numberOfFilms == "" || numberOfFilms==null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели? ",""); 
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actor: {},
    genres: [],
    privat: false

};

function rememberMyFilms(){
    for(let i=0; i<2;i++){
        const lastFilm = prompt("Один из последних просмотренных фильмов?", ""),
        range = prompt("На сколько вы его оцените?","");
        if (lastFilm != null && range !=null && lastFilm != "" && range !="" && lastFilm.length < 50 && range.length <50 ){
         personalMovieDB.movies[lastFilm]=range;
        } else {
         i--;
        }
   }

};

rememberMyFilms();


function detectePersonalLevel(){
    if (personalMovieDB.count < 10 ){
        alert("Просмотрено довольно мало фильмов");
    }else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        alert("Вы классический зритель!");
    } else if (personalMovieDB.count >= 30) {
        alert("Вы киноман!");
    } else {
        alert("Произошла ошибка");
    }
   

}

detectePersonalLevel();


function showMyDB(hidden){
    if (!hidden) {
        console.log(personalMovieDB);  
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres(){
    for(let i=1;i<=3;i++){ 

        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}?`);
        
    }
}
writeYourGenres();



//
