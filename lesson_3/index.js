(function () {
  "use strict";

  let numbersOfFilms;

  function start() {
    numbersOfFilms = +prompt('Сколько фильмов вы уже посмортрели?', '');

    while (numbersOfFilms == "" || numbersOfFilms == null || isNaN(numbersOfFilms)) {
      numbersOfFilms = +prompt('Сколько фильмов вы уже посмортрели?', '');
    }
  }

  start();


  const peronalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
  };


  function rememberMyFilms() {
    let i = 0;
    while (i < 2) {
      let watchedFilm = prompt("Один из последних просмотренных фильмов?", "");
      let evaluation = +prompt("На сколько оценили?", "");

      if (watchedFilm != null && evaluation != null && watchedFilm != "" && watchedFilm.length < 50) {
        peronalMovieDB.movies[`${watchedFilm}`] = evaluation;
        i++;
      }
    }
  }
  rememberMyFilms();

  function detectPersonalLevel() {
    if (numbersOfFilms < 10) {
      console.log(`Просмотрено довольно мало фильмов`);
    }
    else if (numbersOfFilms < 30) {
      console.log(`Вы классивческий зритель`);
    }
    else {
      console.log(`Вы киноман`);
    }
  }
  detectPersonalLevel();


  function showMyDB() {

    if (peronalMovieDB.privat == false) {
      console.log(peronalMovieDB);
    }
  }
  showMyDB();

  function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
      peronalMovieDB.genres[i] = prompt(`Ваш любимый жанр по номером ${i + 1}`);
    }
  }

})();


