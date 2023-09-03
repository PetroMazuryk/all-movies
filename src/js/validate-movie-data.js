import ApiTheMovies from './fetch-service';
export const apiTheMovies = new ApiTheMovies();

// Валідація року, обрізаємо до 2023
export function makeValidatesReleaseDate(data) {
  return data.slice(0, 4);
}
export function makeShortReleaseDate(object) {
  object.results.forEach(movie => {
    movie.release_date = movie.release_date
      ? makeValidatesReleaseDate(movie.release_date)
      : '';
  });
  return object;
}

// putting movie genres list into Local Storage
let genres;
const saveGenres = genres => {
  let genresList = genres;
  localStorage.setItem('genres', JSON.stringify(genresList));
};

export function makeGenresList() {
  apiTheMovies.fetchAllgenres().then(saveGenres);
}
// makeGenresList();

// Make validate genre names
export function makeValidatesGenreName(response) {
  genres = JSON.parse(localStorage.getItem('genres'));
  if (!genres) {
    return;
  }

  response.results.forEach(movieEl => {
    if (movieEl.genre_ids) {
      movieEl.genre_ids.forEach((idGenre, indexGenre) => {
        genres.forEach(objectNames => {
          if (objectNames.id === idGenre) {
            movieEl.genre_ids.splice(indexGenre, 1, objectNames['name']);
          }
        });
      });
      if (movieEl.genre_ids.length > 3) {
        movieEl.genre_ids = movieEl.genre_ids.slice(0, 2);
        movieEl.genre_ids.push('Other...');
      }
    } else {
      movieEl.genre_ids = '';
    }
  });

  return response;
}
