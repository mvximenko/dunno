import React, { useState } from 'react';
import { Link, Img } from './TitlePosterStyles';

interface Props {
  type: string;
  titleId: number | undefined;
  posterPath: string | undefined;
  titleName: string | undefined;
}

const TitlePoster: React.FC<Props> = ({
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
          fade={loaded ? true : false}
          hide={loaded ? false : true}
          onLoad={() => setLoaded(true)}
        />
      )}
    </Link>
  );
};

export default TitlePoster;
