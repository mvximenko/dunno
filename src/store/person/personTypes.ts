export const SET_DATA = 'SET_DATA';
export const SET_LOADING = 'SET_LOADING';

interface Person {
  profile_path: string;
  name: string;
  biography: string;
}

interface Titles {
  id: number;
  name: string;
  title: string;
  media_type: string;
}

export interface FetchPerson {
  personId: number;
  person: Person;
  titles: Titles[];
  loading: boolean;
}

interface FetchPersonAction {
  type: typeof SET_DATA;
  person: Person;
  titles: Titles[];
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
  loading: boolean;
}

export type PersonActionTypes = FetchPersonAction | SetLoadingAction;
