import { release } from 'process';
import {
  fetchPopular,
  fetchPopularDay,
  fetchGenre,
  fetchMoivesByGenre,
  fetchQuery,
} from './api-service';

export const homeGallery = document.querySelector('.gallery');
const searchForm = document.querySelector('.search-form');

let receivedFilmList;

initGalery();

async function initGalery() {
  receivedFilmList = await fetchGenre();
}
