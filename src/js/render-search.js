import { Notify } from 'notiflix';
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
  // apiTheMovies.searchValue = e.currentTarget.elements.searchQuery.value;
  // console.log(apiTheMovies.searchValue); // cat

  if (apiTheMovies.searchValue == 0) {
    Notify.info('Enter the name movie');
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
  Notify.info(`Good ${apiTheMovies.searchValue}`);
  form.elements.searchQuery.value = '';
}

function showMovie(resultSearch) {
  // console.log(resultSearch.total_results); // 3079
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
  Notify.success(`Find result  ${resultSearch.total_results}`);
  const markupSearch = allCollections(resultSearch);
  gallery.innerHTML = markupSearch;
}
