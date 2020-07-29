import React from 'react';
import { addTitle } from '../../firebase/firebaseUtils';
import TitleSvgPlus from './TitleSvgPlus';
import TitleSvgPlay from './TitleSvgPlay';
import { Row, Button } from './TitleButtonsStyles';

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
      <TitleSvgPlus />
      My List
    </Button>

    {video && (
      <a
        rel='noopener noreferrer'
        href={`https://www.youtube.com/watch?v=${video}`}
        target='_blank'
      >
        <Button>
          <TitleSvgPlay />
          Watch Trailer
        </Button>
      </a>
    )}
  </Row>
);

export default TitleButtons;
