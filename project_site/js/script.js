(function () {
    'use strict';
    document.addEventListener("DOMContentLoaded", () => {

        const movieDB = {
            movies: [
                "Логан",
                "Лига справедливости",
                "Ла-ла лэнд",
                "Одержимость",
                "Скотт Пилигрим против..."
            ]
        };

        const form = document.querySelector('.add'),
            listFilm = document.querySelector('.promo__interactive-list'),
            advertising = document.querySelector('.promo__adv');

        function removeAdvertising() {
            advertising.querySelectorAll('img').forEach(e => {
                e.remove();
            });
        }

        function renameGenre() {
            document.querySelector('.promo__genre').textContent = "Драма";
        }

        function editBG() {
            document.querySelector('.promo__bg').style.background = 'url(img/bg.jpg)';
        }

        function getListFilms() {
            movieDB.movies.sort();
            listFilm.querySelectorAll('.promo__interactive-item').forEach(e => {
                e.remove();
            });
            for (let i = 0; i < movieDB.movies.length; i++) {
                if (movieDB.movies[i].length > 21) {
                    listFilm.innerHTML += `<li class="promo__interactive-item">
                    #${i + 1} ${movieDB.movies[i].substring(0, 22)}... 
                    <div class="delete"></div> </li>`;
                }
                else {
                    listFilm.innerHTML += `<li class="promo__interactive-item">#${i + 1} ${movieDB.movies[i]}
                    <div class="delete"></div> </li>`;
                }
            }
            document.querySelectorAll('.delete').forEach((btn, i) => {
                btn.addEventListener('click', () => {
                    btn.parentElement.remove();
                    movieDB.movies.splice(i, 1);
                    getListFilms();
                });
            });
        }

        function addFilm() {
            const inputText = form.querySelector('.adding__input');
            const formBtn = form.querySelector('button');
            const checbox = form.querySelector('[type="checkbox"]');

            formBtn.addEventListener('click', event => {
                event.preventDefault();

                if (inputText.value) {
                    if (checbox.checked) {
                        console.log('Добавляем любимый фильм');
                    }
                    movieDB.movies.push(inputText.value);
                    getListFilms();
                    inputText.value = '';
                }
            });

        }
        removeAdvertising();
        renameGenre();
        editBG();
        getListFilms();
        addFilm();
    });
})();
