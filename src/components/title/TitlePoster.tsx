import React from 'react';
import useLoaded from '../../hooks/useLoaded';
import PosterPng from '../../assets/poster.png';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import { Img } from './TitlePosterStyles';

interface Props {
  title: string;
  posterPath: string | null;
}

const TitlePosterDesktop: React.FC<Props> = ({ title, posterPath }) => {
  const [loaded, setLoaded] = useLoaded(posterPath);
  return (
    <div>
      <Img
        alt={title}
        src={
          posterPath
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${posterPath}`
            : PosterPng
        }
        fade={loaded}
        onLoad={setLoaded}
      />
    </div>
  );
};

export default TitlePosterDesktop;
