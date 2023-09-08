import ApiTheMovies from './fetch-service';
// import { markupTrending } from './murkup/murkup-all-movies';
// import { items } from './genres-btn';

const apiTheMovie = new ApiTheMovies();
// console.log(apiTheMovie);//ApiTheMovies {page: 1, searchQuery: ''}
const refs = {
  searchForm: document.querySelector('.search-form'),
  galleryContainer: document.querySelector('.gallery'),
};

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  apiTheMovie.searchQuery = e.currentTarget.elements.query.value;
  apiTheMovie.fetchBySearch();
}
