"user strict";

let numberOfFilms;

function start() {
  let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", "");
  }
}
start();

function lastFilmHowLike() {
  for (let i = 1; i <= 2; i++) {
    let lastFilm = prompt("Один из последних просмотреных фильмов?", "");
    let HowLike = prompt("Насколько оценете его ?", "");
    if (
      lastFilm != "" &&
      HowLike != "" &&
      lastFilm != null &&
      HowLike != null &&
      lastFilm.length
    ) {
      personalMovieDB.movies[lastFilm] = HowLike;
    } else {
      --i;
    }
  }
}
lastFilmHowLike();

function check() {
  if (personalMovieDB.count < 10) {
    alert("просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("вы класический зритель");
  } else if (personalMovieDB.count > 30) {
    alert("вы киноман");
  } else {
    alert("Произошла ошибка");
  }
}
check();

const personalMovieDB = {
  //count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const YourGenres = prompt(`Ваш любимый жанр под номером ${i}`, "");
    personalMovieDB.genres[i - 1] = YourGenres;
  }
}
writeYourGenres();

function showMyBD() {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  }
}
showMyBD();

const str = "some text black";
console.log(str.length);

console.log(str.slice(5, 15));
