(function () {
  "use strict";


  const peronalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
      this.count = +prompt('Сколько фильмов вы уже посмортрели?', '');
      while (this.count == "" || this.count == null || isNaN(this.count)) {
        this.count = +prompt('Сколько фильмов вы уже посмортрели?', '');
      }
    },
    rememberMyFilms: function () {
      let i = 0;
      while (i < 2) {
        let watchedFilm = prompt("Один из последних просмотренных фильмов?", "");
        let evaluation = +prompt("На сколько оценили?", "");

        if (watchedFilm != null && evaluation != null && watchedFilm != "" && watchedFilm.length < 50) {
          this.movies[`${watchedFilm}`] = evaluation;
          i++;
        }
      }
    },
    detectPersonalLevel: function () {
      if (this.count < 10) {
        console.log(`Просмотрено довольно мало фильмов`);
      }
      else if (this.count < 30) {
        console.log(`Вы классивческий зритель`);
      }
      else {
        console.log(`Вы киноман`);
      }
    },
    showMyDB: function () {

      if (this.privat == false) {
        console.log(peronalMovieDB);
      }
    },
    writeYourGenres: function () {
      for (let i = 0; i < 3; i++) {
        this.genres[i] = prompt(`Ваш любимый жанр по номером ${i + 1}`);
        if (this.genres[i] != null && this.genres[i] !== "") {
          this.genres[i] = this.genres[i];
        }
        else {
          i--;
        }
      }
      this.genres.forEach((item, index) => {
        console.log(`Любимый жанр #${index + 1} - это ${item}`);
      });
    },
    toggleVisibleMyDB: function () {
      if (this.privat) {
        this.privat = false;
      }
      else {
        this.privat = true;
      }
    }
  };
  peronalMovieDB.writeYourGenres();
})();


