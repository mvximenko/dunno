import React, { useState } from 'react';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';
import { Background } from '../TitleStyles';

interface Props {
  title: string;
  backdropPath: string;
}

const TitleBackground: React.FC<Props> = ({ title, backdropPath }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {backdropPath && (
        <Background
          src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdropPath}`}
          alt={title}
          hide={!loaded}
          fade={loaded}
          onLoad={() => setLoaded(true)}
        />
      )}
    </>
  );
};

export default TitleBackground;
