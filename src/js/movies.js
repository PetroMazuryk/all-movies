import ApiTheMovies from './fetch-service';
import moviesTpl from '../templates/all-collections.hbs';

const apiTheMovies = new ApiTheMovies();
// console.log(apiTheMovie);//ApiTheMovies {page: 1, searchQuery: ''}
const refs = {
  searchForm: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
};

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  apiTheMovies.query = e.currentTarget.elements.query.value.trim();

  apiTheMovies.fetchBySearch().then(showMovies);
}

function showMovies(resultSearch) {
  const markupSearch = moviesTpl(resultSearch);
  refs.gallery.innerHTML = markupSearch;
  // refs.gallery.insertAdjacentHTML('beforeend', moviesTpl(resultSearch));
}
