import React from 'react';
import List from './list/List';
import { categories } from '../redux/reducers/movieReducer';

const Movie = () => (
  <>
    {categories.map((category) => (
      <List category={category} mediaType='movie' />
    ))}
  </>
);

export default Movie;
