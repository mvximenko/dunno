import React, { useState } from 'react';
import Backdrop from '../../assets/backdrop.png';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';
import { Poster, Img } from './TitlePosterStyles';

const TitlePoster = ({ title, backdropPath }: any) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Poster>
      <Img
        alt={title}
        src={
          backdropPath !== null
            ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdropPath}`
            : Backdrop
        }
        hide={loaded ? false : true}
        fade={loaded ? true : false}
        onLoad={() => setLoaded(true)}
      />
    </Poster>
  );
};

export default TitlePoster;
