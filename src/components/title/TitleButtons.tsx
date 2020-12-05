import { addTitle } from '../../firebase/firebaseUtils';
import PlusIcon from '../assets/PlusIcon';
import PlayIcon from '../assets/PlayIcon';
import { Row, Button, IconWrapper } from './TitleButtonsStyles';

interface Props {
  id: string;
  title: string;
  mediaType: string;
  video: string | null;
  userId: string | null;
  posterPath: string | null;
}

const TitleButtons: React.FC<Props> = ({
  id,
  title,
  mediaType,
  video,
  userId,
  posterPath,
}) => (
  <Row>
    <Button onClick={() => addTitle(userId, id, mediaType, posterPath, title)}>
      <IconWrapper>
        <PlusIcon />
      </IconWrapper>
      My List
    </Button>

    {video && (
      <a
        rel='noopener noreferrer'
        href={`https://www.youtube.com/watch?v=${video}`}
        target='_blank'
      >
        <Button>
          <IconWrapper>
            <PlayIcon />
          </IconWrapper>
          Watch Trailer
        </Button>
      </a>
    )}
  </Row>
);

export default TitleButtons;
