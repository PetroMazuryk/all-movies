import axios from 'axios';
import { Notify } from 'notiflix';

const URL = 'https://api.themoviedb.org/3';
const API_KEY = 'ba520957137ad46ba4502dabb5237445';

export default class ApiTheMovies {
  constructor() {
    this.page = 1;
    this.searchValue = null;
  }

  resetPage() {
    this.page = 1;
  }

  // список всех популярных фільмів
  fetchAllFilms() {
    return axios(`${URL}/discover/movie?api_key=${API_KEY}&page=${this.page}`)
      .then(response => response.data)
      .catch(this.onError);
  }

  // список жанрів
  fetchAllgenres() {
    return axios(`${URL}/genre/movie/list?api_key=${API_KEY}`)
      .then(response => response.data.genres)
      .catch(this.onError);
  }

  // список в пошуку по назві
  fetchBySearch() {
    return axios
      .get(
        `${URL}/search/movie?api_key=${API_KEY}&query=${this.searchValue}&page=${this.page}`
      )
      .then(response => response.data)
      .catch(this.onError);
  }

  onError() {
    return Notify.failure('Sorry this is error');
  }
}
