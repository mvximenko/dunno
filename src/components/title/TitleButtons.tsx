import React from 'react';
import TitleSvgPlus from './TitleSvgPlus';
import TitleSvgPlay from './TitleSvgPlay';
import { Row, Button } from './TitleButtonsStyles';

interface Props {
  video: string;
  toggleModal: () => void;
}

const TitleButtons: React.FC<Props> = ({ video, toggleModal }) => (
  <Row>
    <Button>
      <TitleSvgPlus />
      My List
    </Button>

    {video && (
      <Button onClick={toggleModal}>
        <TitleSvgPlay />
        Watch Trailer
      </Button>
    )}
  </Row>
);

export default TitleButtons;
