import { API_URL, API_KEY } from '@/root/config';
import { Genres } from '@/redux/slices/randomizerSlice';

export const getList = async (
  category: string,
  mediaType: string,
  page: number,
  id?: number
) => {
  const key = `${mediaType}_${category}_${page}_${id}`;
  const index = `${category}_${mediaType}`;
  if (sessionStorage.getItem(key)) {
    const { results, totalPages } = JSON.parse(sessionStorage.getItem(key)!);
    return { key: index, results, totalPages };
  } else {
    const endpoint = id
      ? mediaType === 'tv'
        ? `${API_URL}discover/tv?api_key=${API_KEY}&language=en-US&with_networks=${id}&page=${page}`
        : `${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&with_companies=${id}&page=${page}`
      : `${API_URL}${mediaType}/${category}?api_key=${API_KEY}&language=en-US&page=${page}`;

    const res = await fetch(endpoint);
    const { results, total_pages: totalPages } = await res.json();
    sessionStorage.setItem(key, JSON.stringify({ results, totalPages }));
    return { key: index, results, totalPages };
  }
};

export const getPerson = async (personId: string) => {
  const key = `person_${personId}`;
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key)!);
  } else {
    const endpoint = `${API_URL}person/${personId}?api_key=${API_KEY}&language=en-US&append_to_response=combined_credits`;
    const res = await fetch(endpoint);
    const { status_message, ...rest } = await res.json();

    if (status_message) throw status_message;

    const {
      name,
      combined_credits: { cast: titles },
    } = rest;

    localStorage.setItem(key, JSON.stringify({ name, titles }));
    return { name, titles };
  }
};

export const getGenres = async () => {
  const tvEndpoint = `${API_URL}genre/tv/list?api_key=${API_KEY}&language=en-US`;
  const res = await fetch(tvEndpoint);
  const { genres: tv } = await res.json();

  const movieEndpoint = `${API_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`;
  const response = await fetch(movieEndpoint);
  const { genres: movie } = await response.json();

  return { tv, movie };
};

export const getRandomTitle = async (mediaType: string, genres: Genres) => {
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

export const getTitles = async (value: string) => {
  const endpoint = `${API_URL}search/multi?api_key=${API_KEY}&language=en-US&query=${value}`;
  const res = await fetch(endpoint);
  const { results: titles } = await res.json();
  return titles;
};

export const getTitle = async (mediaType: string, titleId: string) => {
  const key = `${mediaType}_${titleId}`;
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key)!);
  } else {
    const endpoint = `${API_URL}${mediaType}/${titleId}?api_key=${API_KEY}&append_to_response=videos,credits`;
    const res = await fetch(endpoint);
    const { status_message, ...rest } = await res.json();

    if (status_message) throw status_message;

    const {
      credits: { cast },
      videos: { results },
      ...title
    } = rest;

    const data = { title, cast, results };
    localStorage.setItem(key, JSON.stringify(data));
    return data;
  }
};
