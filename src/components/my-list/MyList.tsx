import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTitles } from '../../redux/slices/myListSlice';
import { RootState } from '../../redux/rootReducer';
import MyListPoster from './MyListPoster';
import { Container, Heading } from './MyListStyles';

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
                <MyListPoster
                  {...title}
                  userId={userId}
                  key={title.firebaseId}
                />
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
