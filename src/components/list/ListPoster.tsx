import React, { useState } from 'react';
import { Link, Img } from './ListPosterStyles';

interface Props {
  type: string;
  titleId: number;
  posterPath: string;
  titleName: string;
}

const ListPoster: React.FC<Props> = ({
  type,
  titleId,
  posterPath,
  titleName,
}) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Link to={`${type}/${titleId}`}>
      <Img
        alt={titleName}
        className='lazy'
        data-src={posterPath}
        hide={!loaded}
        fade={loaded}
        onLoad={() => setLoaded(true)}
      />
    </Link>
  );
};

export default ListPoster;
