import React, { useState } from 'react';
import PosterPng from '../../assets/backdrop.png';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import { Poster, Img } from './TitlePosterDesktopStyles';

interface Props {
  title: string;
  posterPath: string;
}

const TitlePosterDesktop: React.FC<Props> = ({ title, posterPath }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Poster>
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
    </Poster>
  );
};

export default TitlePosterDesktop;
