import React from 'react';
import List from './list/List';
import { TV, NETWORKS } from '../config';

const Tv = () => (
  <>
    {TV.map((category) => (
      <List category={category} mediaType='tv' key={category} />
    ))}

    {NETWORKS.map((network) => (
      <List
        id={network.id}
        mediaType='tv'
        category={network.name}
        key={network.name}
      />
    ))}
  </>
);

export default Tv;
