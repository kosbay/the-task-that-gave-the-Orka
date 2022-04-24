"use sctrict";

const namberOfFilms = +prompt('скоько фильмов смотрел эээ?',"");

const personalMovieDB = {
    cont: namberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat:false
};

const a = prompt('Последниии фильм ээээ?'),
      b = prompt('канша коясын эээ?'),
      c = prompt('Последниии фильм ээээ?'),
      d = prompt('канша коясын эээ?');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d; 

console.log(personalMovieDB);
console.log(a, c); 


