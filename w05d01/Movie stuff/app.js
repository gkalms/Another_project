
console.log("App running");
const onFormSubmit = (event) => {
  event.preventDefault();
  console.log("event", event);
  console.log("form");
  const $movie = $('input[name="movie"]');
  console.log("$movie", $movie);
  const movieName = $movie.val();
  const genre = $('input[name="genre"]').val();
  console.log("movieName", genre);
  $.ajax('http://www.omdbapi.com/?apikey=53aa2cd6&t=${movieName}')
};
$("#movie-form").on("submit", onFormSubmit);