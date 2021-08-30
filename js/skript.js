
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", "");
const personalMovieDB =
  {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
  };
let lastFilm = prompt("Один из последних просмотреных фильмов?", "");
let HowLike = +prompt("Насколько оценете его ?", "1-5") ;
let lastFilm1 = prompt("Один из последних просмотреных фильмов?", "");
let HowLike1 = +prompt("Насколько оценете его ?", "1-5") ;

//не дбавлять данніе в обьект через точку , может призвести к багам 
personalMovieDB.movies[lastFilm] = HowLike; 
personalMovieDB.movies[lastFilm1] = HowLike1;

console.log(personalMovieDB);