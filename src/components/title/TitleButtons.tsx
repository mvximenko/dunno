import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { addTitleFB } from '../../firebase/firebaseUtils';
import PlusIcon from '../assets/PlusIcon';
import PlayIcon from '../assets/PlayIcon';
import { Row, Button, Link, IconWrapper } from './TitleButtonsStyles';

interface Props {
  [x: string]: string;
}

const TitleButtons: React.VFC<Props> = ({
  id,
  title,
  mediaType,
  posterPath,
}) => {
  const userId = useSelector((state: RootState) => state.user.userId);
  const videos = useSelector((state: RootState) => state.title.videos);
  return (
    <Row>
      <Button
        onClick={() => addTitleFB(userId, id, mediaType, posterPath, title)}
      >
        <IconWrapper>
          <PlusIcon />
        </IconWrapper>
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
