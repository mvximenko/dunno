import { API_URL, API_KEY } from '@/root/config';
import {
  GetList,
  GetPerson,
  GetGenres,
  GetRandomTitle,
  GetTitles,
  GetTitle,
} from '@/types/tmdb';

export const getList: GetList = async (category, mediaType, page, id?) => {
  const key = `${mediaType}_${category}_${page}_${id}`;
  const index = `${category}_${mediaType}`;

  if (sessionStorage.getItem(key)) {
    const { results, totalPages } = JSON.parse(sessionStorage.getItem(key)!);
    return {
      key: index,
      results,
      totalPages,
    };
  }

  const endpoint = id
    ? mediaType === 'tv'
      ? `${API_URL}discover/tv?api_key=${API_KEY}&language=en-US&with_networks=${id}&page=${page}`
      : `${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&with_companies=${id}&page=${page}`
    : `${API_URL}${mediaType}/${category}?api_key=${API_KEY}&language=en-US&page=${page}`;

  const res = await fetch(endpoint);
  const { results, total_pages: totalPages } = await res.json();
  sessionStorage.setItem(key, JSON.stringify({ results, totalPages }));

  return {
    key: index,
    results,
    totalPages,
  };
};

export const getPerson: GetPerson = async (personId) => {
  const key = `person_${personId}`;
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key)!);
  }

  const endpoint = `${API_URL}person/${personId}?api_key=${API_KEY}&language=en-US&append_to_response=combined_credits`;
  const res = await fetch(endpoint);
  const {
    name,
    combined_credits: { cast: titles },
  } = await res.json();

  localStorage.setItem(key, JSON.stringify({ name, titles }));
  return { name, titles };
};

export const getGenres: GetGenres = async () => {
  const tvEndpoint = `${API_URL}genre/tv/list?api_key=${API_KEY}&language=en-US`;
  const res = await fetch(tvEndpoint);
  const { genres: tv } = await res.json();

  const movieEndpoint = `${API_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`;
  const response = await fetch(movieEndpoint);
  const { genres: movie } = await response.json();

  return { tv, movie };
};

export const getRandomTitle: GetRandomTitle = async (mediaType, genres) => {
  const page = Math.floor(Math.random() * 5) + 1;
  const random = Math.floor(Math.random() * genres[mediaType].length);
  const genre = genres[mediaType][random].id;

  const endpoint = `${API_URL}discover/${mediaType}?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=${page}&with_genres=${genre}`;
  const res = await fetch(endpoint);
  const { results } = await res.json();

  let title = results[Math.floor(Math.random() * results.length)];
  if (!title.poster_path || !title.backdrop_path) {
    while (!title.poster_path || !title.backdrop_path) {
      title = results[Math.floor(Math.random() * results.length)];
    }
  }
  return title;
};

export const getTitles: GetTitles = async (value) => {
  const endpoint = `${API_URL}search/multi?api_key=${API_KEY}&language=en-US&query=${value}`;
  const res = await fetch(endpoint);
  const { results: titles } = await res.json();
  return titles;
};

export const getTitle: GetTitle = async (mediaType, titleId) => {
  const key = `${mediaType}_${titleId}`;
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key)!);
  }

  const endpoint = `${API_URL}${mediaType}/${titleId}?api_key=${API_KEY}&append_to_response=videos,credits`;
  const res = await fetch(endpoint);
  const {
    credits: { cast },
    videos: { results },
    ...title
  } = await res.json();

  localStorage.setItem(key, JSON.stringify({ title, cast, results }));
  return { title, cast, results };
};
