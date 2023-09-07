import axios from 'axios';
const API_KEY = 'ba520957137ad46ba4502dabb5237445';
const URL = 'https://api.themoviedb.org/3';

export default class ApiTheMovies {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  // список всех популярных фільмів
  async fetchAllFilms() {
    const url = `${URL}/discover/movie?api_key=${API_KEY}&page=${this.page}`;
    try {
      const response = await axios(url);
      const movieArray = response.data;
      this.page += 1;
      return movieArray;
    } catch (error) {
      console.error(error);
    }
  }
}
