import { Notify } from 'notiflix';
import ApiTheMovies from './fetch-service';
import allCollections from '../templates/all-collections.hbs';
import { makeShortReleaseDate } from './validate-movie-data';

export const apiTheMovies = new ApiTheMovies();
const gallery = document.querySelector('.gallery');

function renderMarkupAllMovieCard(responseAll) {
  const markup = allCollections(responseAll);
  gallery.insertAdjacentHTML('beforeend', markup);
  if (!markup) {
    Notiflix.Notify.warning(
      "We're sorry, but you've reached the end of search results."
    );
  }
}

function onLoadAllMovies() {
  apiTheMovies
    .fetchAllFilms(apiTheMovies.page)
    .then(makeShortReleaseDate)
    .then(renderMarkupAllMovieCard);
}
onLoadAllMovies();
