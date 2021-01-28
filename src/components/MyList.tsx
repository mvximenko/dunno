import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import XMark from './assets/XMark';
import { displayTitles, deleteTitle } from '../firebase/firebaseUtils';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import { Container, Link, Img, Button, Heading } from './MyListStyles';

interface Props {
  userId: string | null;
}

interface Titles {
  title: string;
  mediaType: string;
  posterPath: string;
  id: string;
}

const MyList: React.FC<Props> = ({ userId }) => {
  const [titles, setTitles] = useState<Titles[] | null>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    displayTitles(userId).then((res) => setTitles(res));
  }, [userId]);

  const handleDelete = (userId: string, id: string) => {
    deleteTitle(userId, id);
    setTitles(
      titles!.filter((title) => `${title.mediaType}_${title.id}` !== id)
    );
  };

  return (
    <>
      {userId ? (
        <>
          <Heading>My List</Heading>
          <Container>
            {titles &&
              titles.map((title) => (
                <Link
                  to={`/${title.mediaType}/${title.id}`}
                  key={`${title.mediaType}_${title.id}`}
                >
                  <Img
                    fade={loaded}
                    onLoad={() => setLoaded(true)}
                    alt={title.title}
                    src={`${IMAGE_BASE_URL}${POSTER_SIZE}${title.posterPath}`}
                  />
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete(userId!, `${title.mediaType}_${title.id}`);
                    }}
                  >
                    <XMark />
                  </Button>
                </Link>
              ))}
          </Container>
        </>
      ) : (
        <Redirect to='/signin' />
      )}
    </>
  );
};

export default MyList;
