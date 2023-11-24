class Movie{
    constructor(title,studio,rating ="PG"){
     this.title = title
     this.studio = studio
     this.rating = rating
    }
    getPG(arr){
        return arr.filter(movie => movie.rating === "PG");
    }
}

var objMovie = new Movie("Casino Royale", "Eon Productions", "PG13");
console.log("Title:", objMovie.title);
console.log("Studio:", objMovie.studio);
console.log("Rating:", objMovie.rating);

var Moviearr = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "PG13"),
    new Movie("Movie3", "Studio3"),
    new Movie("Movie4", "Studio4","PG14"),
  ];

console.log(objMovie.getPG(Moviearr)); 