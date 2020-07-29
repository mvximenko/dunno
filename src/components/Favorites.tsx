import React, { useState, useEffect } from 'react';
import { displayTitles } from '../firebase/firebaseUtils';

interface Props {
  userId: string | null;
}

interface Titles {
  title: string;
  mediaType: string;
  posterPath: string;
  id: string;
}

const Favorites: React.FC<Props> = ({ userId }) => {
  const [titles, setTitles] = useState<Titles[] | null>([]);

  useEffect(() => {
    displayTitles(userId).then((res) => {
      setTitles(res);
    });
  }, [userId]);

  return (
    <>
      {titles &&
        titles.map((title) => (
          <p key={`${title.mediaType}_${title.title}`}>{title.title}</p>
        ))}
    </>
  );
};

export default Favorites;
