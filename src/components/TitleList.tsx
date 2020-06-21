import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

interface titleProps {
  poster_path?: string;
}

interface Props {
  titles: titleProps[];
  category: string;
  type: string;
}

const TitleList: React.FC<Props> = ({ titles, category, type }) => {
  console.log(titles);
  return (
    <>
      <h1>{category}</h1>
      <div>
        {titles &&
          titles.map((title) => (
            <img src={`${IMAGE_BASE_URL}${POSTER_SIZE}${title.poster_path}`} />
          ))}
      </div>
    </>
  );
};

export default TitleList;
