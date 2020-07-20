import React, { useState } from 'react';
import { Link, Img } from './ListPosterStyles';

interface Props {
  id: number;
  type: string;
  title: string;
  posterPath: string;
}

const ListPoster: React.FC<Props> = ({ id, type, title, posterPath }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Link to={`${type}/${id}`}>
      <Img
        loading='lazy'
        alt={title}
        src={posterPath}
        fade={loaded}
        onLoad={() => setLoaded(true)}
      />
    </Link>
  );
};

export default ListPoster;
