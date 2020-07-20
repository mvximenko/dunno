import React, { useState } from 'react';
import Backdrop from '../../assets/backdrop.png';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';
import { Placeholder, Img, Background } from './TitleBackdropStyles';

interface Props {
  title: string;
  backdropPath: string | null;
}

const TitleBackdrop: React.FC<Props> = ({ title, backdropPath }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <Placeholder>
        <Img
          alt={title}
          src={
            backdropPath
              ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdropPath}`
              : Backdrop
          }
          fade={loaded}
          onLoad={() => setLoaded(true)}
        />
      </Placeholder>

      <Background
        alt={title}
        src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdropPath}`}
        fade={loaded}
        onLoad={() => setLoaded(true)}
      />
    </>
  );
};

export default TitleBackdrop;
