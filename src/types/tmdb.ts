export interface ListTitle {
  id: number;
  name: string;
  title: string;
  poster_path: string;
}

export interface List {
  key: string;
  results: ListTitle[];
  totalPages: number;
}

export type GetList = (
  category: string,
  mediaType: string,
  page: number,
  id?: number
) => Promise<List>;

export interface PersonTitle {
  id: number;
  name: string;
  title: string;
  media_type: string;
  poster_path: string;
}

export interface Person {
  name: string;
  titles: PersonTitle[];
}

export type GetPerson = (personId: string) => Promise<Person>;

export interface Genres {
  [key: string]: { id: number; name: string }[];
}

export type GetGenres = () => Promise<Genres>;

export interface RandomTitle {
  id: number;
  name: string;
  title: string;
  poster_path: string;
  backdrop_path: string;
}

export type GetRandomTitle = (
  mediaType: string,
  genres: Genres
) => Promise<RandomTitle>;

export interface Titles {
  id: number;
  name: string;
  media_type: string;
  original_title: string;
  poster_path?: string;
  profile_path?: string;
  title?: string;
}

export type GetTitles = (value: string) => Promise<Titles[]>;

export interface TitleInfo {
  title: string;
  name: string;
  backdrop_path: string | null;
  poster_path: string;
  overview: string;
  vote_average: number;
}

export interface Cast {
  profile_path: string;
  name: string;
  id: number;
  credit_id: number;
}

export interface Video {
  key: string;
}

export interface Title {
  title: TitleInfo;
  cast: Cast[];
  results: Video[];
}

export type GetTitle = (mediaType: string, titleId: string) => Promise<Title>;
