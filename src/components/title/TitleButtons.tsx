import { connect } from 'react-redux';
import { addTitle } from '../../redux/user/userActions';
import { ButtonsProps } from '../../redux/title/titleTypes';
import { RootState } from '../../redux/rootReducer';
import PlusIcon from '../assets/PlusIcon';
import PlayIcon from '../assets/PlayIcon';
import { Row, Button, Link, IconWrapper } from './TitleButtonsStyles';

const TitleButtons: React.FC<ButtonsProps> = ({
  id,
  title,
  mediaType,
  posterPath,
  video,
  addTitle,
  user: { userId },
}) => (
  <Row>
    <Button
      onClick={() =>
        userId && addTitle(userId, id, mediaType, posterPath, title)
      }
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

const mapStateToProps = (state: RootState) => ({ user: state.user });

export default connect(mapStateToProps, { addTitle })(TitleButtons);
