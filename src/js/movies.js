import ApiTheMovies from './fetch-service';
import moviesTpl from '../templates/all-collections.hbs';
import { items } from './genres-btn';
const apiTheMovies = new ApiTheMovies();
// console.log(apiTheMovies); //ApiTheMovies {page: 1, searchQuery: ''}
const refs = {
  searchForm: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
  input: document.querySelector('.search-form__input'),
};

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  apiTheMovies.query = e.currentTarget.elements.query.value;

  apiTheMovies.resetPage();
  apiTheMovies.fetchBySearch().then(showMoviesMarkup);
}

function showMoviesMarkup(resultSearch) {
  const markupSearch = moviesTpl(resultSearch);
  refs.gallery.innerHTML = markupSearch;
  // refs.gallery.insertAdjacentHTML('beforeend', moviesTpl(resultSearch));
}
