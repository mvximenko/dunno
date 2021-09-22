import { useState } from 'react';
import { StyledLink, Img } from './ListPosterStyles';

interface Props {
  id: number;
  title: string;
  mediaType: string;
  posterPath: string;
}

const ListPoster: React.VFC<Props> = ({ id, mediaType, title, posterPath }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <StyledLink to={`/${mediaType}/${id}`} aria-label={title}>
      <Img
        alt={title}
        className='lazy'
        data-src={posterPath}
        fade={loaded}
        onLoad={() => setLoaded(true)}
      />
    </StyledLink>
  );
};

export default ListPoster;
