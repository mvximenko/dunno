import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import { Heading, TitleListContainer, InitialSpace } from './TitleListStyles';

interface titleProps {
  poster_path?: string;
}

interface Props {
  titles: titleProps[];
  category: string;
  type: string;
}

const TitleList: React.FC<Props> = ({ titles, category, type }) => {
  return (
    <>
      <Heading>{category}</Heading>
      <TitleListContainer>
        <InitialSpace>
          {titles &&
            titles.map((title) => (
              <img
                src={`${IMAGE_BASE_URL}${POSTER_SIZE}${title.poster_path}`}
              />
            ))}
        </InitialSpace>
      </TitleListContainer>
    </>
  );
};

export default TitleList;
