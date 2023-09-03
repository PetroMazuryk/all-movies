import Notiflix from 'notiflix';
import allCollections from '../templates/all-collections.hbs';
import { apiTheMovies } from './render-collections';
import { makeShortReleaseDate } from './validate-movie-data';
import { makeValidatesGenreName } from './validate-movie-data';

const form = document.querySelector('.search-form');
const warning = document.querySelector('.error-text');
const gallery = document.querySelector('.gallery');
const input = document.querySelector('.search-form__input');

form.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  apiTheMovies.searchValue = input.value.trim();

  if (!apiTheMovies.searchValue) {
    Notiflix.Notify.info('Enter the name movie');
    warning.style.color = '#FF001B';
    warning.style.textAlign = 'center';
    warning.style.marginBottom = '10px';
    warning.removeAttribute('hidden');
    setTimeout(() => {
      warning.setAttribute('hidden', '');
    }, 3000);
    return;
  }
  apiTheMovies.resetPage();
  apiTheMovies
    .fetchBySearch(apiTheMovies.searchValue)
    .then(makeValidatesGenreName)
    .then(makeShortReleaseDate)
    .then(showMovie);

  form.elements.searchQuery.value = '';
}

function showMovie(resultSearch) {
  if (resultSearch.total_results == 0) {
    warning.style.color = '#FF001B';
    warning.style.textAlign = 'center';
    warning.style.marginBottom = '10px';
    warning.removeAttribute('hidden');
    setTimeout(() => {
      warning.setAttribute('hidden', '');
    }, 3000);
    return;
  }
  const markupSearch = allCollections(resultSearch);
  gallery.innerHTML = markupSearch;
}
