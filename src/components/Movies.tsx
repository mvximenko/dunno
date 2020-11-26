import React from 'react';
import List from './list/List';
import SimpleList from './list/SimpleList';
import { MOVIES, COMPANIES } from '../config';

const Movie = () => (
  <>
    {MOVIES.map((category) => (
      <List category={category} mediaType='movie' />
    ))}

    {COMPANIES.map((company) => (
      <SimpleList id={company.id} mediaType='movie' company={company.name} />
    ))}
  </>
);

export default Movie;
