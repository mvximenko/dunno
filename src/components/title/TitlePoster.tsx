import React, { useState } from 'react';
import Backdrop from '../../assets/backdrop.png';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';
import { Poster, Img } from './TitlePosterStyles';

interface Props {
  title: string;
  backdropPath: string | null;
}

const TitlePoster: React.FC<Props> = ({ title, backdropPath }) => {
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
        hide={!loaded}
        fade={loaded}
        onLoad={() => setLoaded(true)}
      />
    </Poster>
  );
};

export default TitlePoster;
