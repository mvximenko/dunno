import React, { useState } from 'react';
import PosterPng from '../../assets/poster.png';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import { Img } from './TitlePosterDesktopStyles';

interface Props {
  title: string;
  posterPath: string | null;
}

const TitlePosterDesktop: React.FC<Props> = ({ title, posterPath }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div>
      <Img
        alt={title}
        src={
          posterPath !== null
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${posterPath}`
            : PosterPng
        }
        hide={!loaded}
        fade={loaded}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default TitlePosterDesktop;
