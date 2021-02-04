import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTitles, removeTitle } from '../../redux/slices/myListSlice';
import { RootState } from '../../redux/rootReducer';
import XMark from '../assets/XMark';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import { Container, Link, Img, Button, Heading } from './MyListStyles';

const MyList = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.user.userId);
  const titles = useSelector((state: RootState) => state.myList.titles);

  useEffect(() => {
    if (userId) dispatch(fetchTitles(userId));
  }, [userId, dispatch]);

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
                    alt={title.title}
                    src={`${IMAGE_BASE_URL}${POSTER_SIZE}${title.posterPath}`}
                  />
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(
                        removeTitle(
                          userId,
                          `${title.mediaType}_${title.id}`,
                          title.firebaseId
                        )
                      );
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
