import React, { useState, useEffect } from 'react';
import { displayTitles, deleteTitle } from '../firebase/firebaseUtils';

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

  const handleDelete = (userId: string, id: string) => {
    deleteTitle(userId, id);
    setTitles(
      titles!.filter((title) => `${title.mediaType}_${title.id}` !== id)
    );
  };

  return (
    <>
      {titles &&
        titles.map((title) => (
          <div key={`${title.mediaType}_${title.id}`}>
            {title.title}
            <button
              onClick={() =>
                handleDelete(userId as string, `${title.mediaType}_${title.id}`)
              }
            >
              Delete
            </button>
          </div>
        ))}
    </>
  );
};

export default Favorites;
