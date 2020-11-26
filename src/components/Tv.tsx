import React from 'react';
import List from './list/List';
import SimpleList from './list/SimpleList';
import { TV, NETWORKS } from '../config';

const Tv = () => (
  <>
    {TV.map((category) => (
      <List category={category} mediaType='tv' />
    ))}

    {NETWORKS.map((network) => (
      <SimpleList id={network.id} mediaType='tv' company={network.name} />
    ))}
  </>
);

export default Tv;
