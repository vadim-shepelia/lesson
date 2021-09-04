"user strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for (let i = 1; i <= 2; i++) {
  let lastFilm = prompt("Один из последних просмотреных фильмов?", "");
  let HowLike = prompt("Насколько оценете его ?", "");
  if (lastFilm != "" && HowLike != "" && lastFilm != null && HowLike != null && lastFilm.length) {
    personalMovieDB.movies[lastFilm] = HowLike;
  } else {
    --i;
  }
}


if (personalMovieDB.count < 10) {
  alert("просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  alert("вы класический зритель");
} else if (personalMovieDB.count > 30) {
  alert("вы киноман");
} else {
  alert("Произошла ошибка");
}