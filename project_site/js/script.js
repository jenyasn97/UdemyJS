/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

(function () {
    'use strict';
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    function removeAdvertising() {
        let advertising = document.querySelector('.promo__adv');
        advertising.querySelectorAll('img').forEach(e => {
            e.remove();
        });
    }
    removeAdvertising();

    function renameGenre() {
        document.querySelector('.promo__genre').textContent = "Драма";
    }
    renameGenre();

    function editBG() {
        document.querySelector('.promo__bg').style.background = 'url(img/bg.jpg)';
    }
    editBG();

    function listFilm() {
        movieDB.movies.sort();
        let listFilm = document.querySelectorAll('.promo__interactive-item');
        listFilm.forEach((item, index) => {
            item.textContent = `#${index + 1} ${movieDB.movies[index]}`;
        });
    }
    listFilm();
})();
