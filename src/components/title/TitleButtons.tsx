import React from 'react';
import TitleSvgPlus from './TitleSvgPlus';
import TitleSvgPlay from './TitleSvgPlay';
import { Row, Button } from './TitleButtonsStyles';

interface Props {
  video: string | false;
}

const TitleButtons: React.FC<Props> = ({ video }) => (
  <Row>
    <Button>
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
