import React, { useState } from 'react';
import { Link, Img } from './ListPosterStyles';

interface Props {
  id: number;
  title: string;
  mediaType: string;
  posterPath: string;
}

const ListPoster: React.FC<Props> = ({ id, mediaType, title, posterPath }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Link to={`/${mediaType}/${id}`}>
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
