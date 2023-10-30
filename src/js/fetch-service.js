import axios from 'axios';
import { Notify } from 'notiflix';

const URL = 'https://api.themoviedb.org/3';
const API_KEY = 'ba520957137ad46ba4502dabb5237445';

export default class ApiTheMovies {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
  }

  // список всіх популярних фільмів
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
    // console.log('До запиту', this); //До запиту ApiTheMovies {page: 1, searchQuery: 'cat'}
    return axios(
      `${URL}/search/movie?api_key=${API_KEY}&query=${this.searchQuery}&page=${this.page}`
    )
      .then(response => {
        // response.data;
        this.incrementPage();
        // console.log('Після запиту, якщо все ОК', this);
        //Після запиту, якщо все ОК ApiTheMovies {page: 2, searchQuery: 'cat'}}
        return response.data;
      })
      .catch(this.onError);
  }

  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  onError() {
    return Notify.failure('Sorry this is error');
  }
}
