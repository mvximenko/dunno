import React from 'react';
import List from './list/List';
import { TV } from '../config';

const Tv = () => (
  <>
    {TV.map((category) => (
      <List category={category} mediaType='tv' />
    ))}
  </>
);

export default Tv;
