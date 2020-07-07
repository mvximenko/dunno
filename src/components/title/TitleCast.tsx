import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import Poster from '../../assets/poster.png';
import { Column, Photo, Img, Name } from './TitleCastStyles';

interface Props {
  profile_path: string;
  name: string;
  id: number;
}

const TitleCast: React.FC<Props> = ({ profile_path, name, id }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Column>
      <Link to={`/person/${id}`}>
        <Photo>
          <Img
            src={
              profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${profile_path}`
                : Poster
            }
            alt={name}
            hide={loaded ? false : true}
            fade={loaded ? true : false}
            onLoad={() => setLoaded(true)}
          />
        </Photo>
        <Name>{name}</Name>
      </Link>
    </Column>
  );
};

export default TitleCast;
