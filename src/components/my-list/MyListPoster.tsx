import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTitle } from '../../redux/slices/myListSlice';
import XMark from '../assets/XMark';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import { Link, Img, Button } from './MyListPosterStyles';

const MyListPoster: React.VFC<{
  [key: string]: string;
}> = ({ mediaType, id, title, posterPath, firebaseId, userId }) => {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  return (
    <Link to={`/${mediaType}/${id}`} key={firebaseId}>
      <Img
        onLoad={() => setLoaded(true)}
        alt={title}
        src={`${IMAGE_BASE_URL}${POSTER_SIZE}${posterPath}`}
        fade={loaded}
      />
      <Button
        onClick={(e) => {
          e.preventDefault();
          dispatch(removeTitle(userId, firebaseId));
        }}
      >
        <XMark />
      </Button>
    </Link>
  );
};

export default MyListPoster;
