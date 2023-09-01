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
