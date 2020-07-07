import React, { useState } from 'react';
import { Link, Img } from './ListPosterStyles';

interface Props {
  type: string;
  titleId: number | undefined;
  posterPath: string | undefined;
  titleName: string | undefined;
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
      {posterPath && (
        <Img
          alt={titleName}
          className='lazy'
          data-src={posterPath}
          hide={!loaded}
          fade={loaded}
          onLoad={() => setLoaded(true)}
        />
      )}
    </Link>
  );
};

export default ListPoster;
