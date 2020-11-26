import React from 'react';
import List from './list/List';
import { MOVIES } from '../config';

const Movie = () => (
  <>
    {MOVIES.map((category) => (
      <List category={category} mediaType='movie' />
    ))}
  </>
);

export default Movie;
