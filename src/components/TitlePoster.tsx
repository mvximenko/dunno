import React from 'react';
import { Link, Img } from './TitlePosterStyles';

interface Props {
  type: string;
  titleId: number | undefined;
  posterPath: string | undefined;
  titleName: string | undefined;
}

const TitlePoster: React.FC<Props> = ({
  type,
  titleId,
  posterPath,
  titleName,
}) => {
  return (
    <Link to={`${type}/${titleId}`}>
      {posterPath && <Img alt={titleName} src={posterPath} />}
    </Link>
  );
};

export default TitlePoster;
