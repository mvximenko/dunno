import { useState } from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE } from '@/src/config';
import { StyledLink, Img } from '../my-list/MyListPosterStyles';

interface Props {
  id: number;
  title: string;
  mediaType: string;
  posterPath: string;
}

const SearchPoster: React.VFC<Props> = ({
  id,
  title,
  mediaType,
  posterPath,
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <StyledLink to={`/${mediaType}/${id}`}>
      <Img
        onLoad={() => setLoaded(true)}
        alt={title}
        src={`${IMAGE_BASE_URL}${POSTER_SIZE}${posterPath}`}
        fade={loaded}
      />
    </StyledLink>
  );
};

export default SearchPoster;
