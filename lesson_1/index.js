(function () {
  "use strict";

  let numbersOfFilms = +prompt('Сколько фильмов вы уже посмортрели?', '');

  const peronalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
  };


  for (let i = 0; i < 2; i++) {
    let watchedFilm = prompt("Один из последних просмотренных фильмов?");
    let evaluation = +prompt("На сколько оценили?");
    peronalMovieDB.movies[`${watchedFilm}`] = evaluation;
  }

  console.log(peronalMovieDB);
})();


