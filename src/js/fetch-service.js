import axios from 'axios';
import { Notify } from 'notiflix';

const URL = 'https://api.themoviedb.org/3';
const API_KEY = 'ba520957137ad46ba4502dabb5237445';

export default class ApiTheMovies {
  constructor() {
    this.page = 1;
  }
  // список всех популярных фільмів

  fetchAllFilms() {
    return axios(`${URL}/discover/movie?api_key=${API_KEY}&page=${this.page}`)
      .then(response => response.data)
      .catch(this.onError);
  }
  onError() {
    return Notify.failure('Sorry this is error');
  }
}
