import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from '@/redux/store';
import { checkTitle, toggle } from '@/redux/slices/titleSlice';
import { ReactComponent as PlusIcon } from '@/icons/plus.svg';
import { ReactComponent as SuccessIcon } from '@/icons/success.svg';
import { ReactComponent as PlayIcon } from '@/icons/play.svg';
import { Row, Button, Link, IconWrapper } from './TitleButtonsStyles';

const TitleButtons: React.VFC<{ [key: string]: string }> = ({
  id,
  title,
  mediaType,
  posterPath,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.userId);
  const videos = useSelector((state) => state.title.videos);
  const fbId = useSelector((state) => state.title.firebaseId);

  useEffect(() => {
    if (userId && !fbId) dispatch(checkTitle(userId, id, mediaType));
  }, [userId, fbId, id, mediaType, dispatch]);

  return (
    <Row>
      <Button
        onClick={() =>
          userId
            ? dispatch(toggle(userId, id, mediaType, posterPath, title, fbId))
            : history.push('/signin')
        }
      >
        <IconWrapper>{fbId ? <SuccessIcon /> : <PlusIcon />}</IconWrapper>
        My List
      </Button>

      {videos.length > 0 && (
        <Link
          rel='noopener noreferrer'
          href={`https://www.youtube.com/watch?v=${videos[0].key}`}
          target='_blank'
        >
          <IconWrapper>
            <PlayIcon />
          </IconWrapper>
          Watch Trailer
        </Link>
      )}
    </Row>
  );
};

export default TitleButtons;
