import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { addTitleFB } from '../../firebase/firebaseUtils';
import PlusIcon from '../assets/PlusIcon';
import PlayIcon from '../assets/PlayIcon';
import { Row, Button, Link, IconWrapper } from './TitleButtonsStyles';

export interface Props {
  id: string;
  title: string;
  mediaType: string;
  video: string | null;
  posterPath: string;
}

const TitleButtons: React.VFC<Props> = ({
  id,
  title,
  mediaType,
  posterPath,
  video,
}) => {
  const userId = useSelector((state: RootState) => state.user.userId);

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

      {video && (
        <Link
          rel='noopener noreferrer'
          href={`https://www.youtube.com/watch?v=${video}`}
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
