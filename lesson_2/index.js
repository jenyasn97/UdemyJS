(function () {
  "use strict";

  let numbersOfFilms = +prompt('Сколько фильмов вы уже посмортрели?', '');

  if (numbersOfFilms < 10) {
    alert(`Просмотрено довольно мало фильмов`);
  }
  else if (numbersOfFilms < 30) {
    alert(`Вы классивческий зритель`);
  }
  else {
    alert(`Вы киноман`);
  }

  const peronalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
  };

  let i = 0;
  while (i < 2) {
    console.log(i);
    let watchedFilm = prompt("Один из последних просмотренных фильмов?", "");
    let evaluation = +prompt("На сколько оценили?", "");

    if (watchedFilm != null && evaluation != null && watchedFilm != "" && watchedFilm.length < 50) {
      peronalMovieDB.movies[`${watchedFilm}`] = evaluation;
      i++;
    }
  }
  console.log(peronalMovieDB);
})();


