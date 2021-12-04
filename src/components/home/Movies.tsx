import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetLists } from '@/redux/slices/listSlice';
import List from './List';
import Categories from './Categories';
import { MOVIES, COMPANIES } from '@/src/config';
import { Container } from './HomeStyles';

const Movies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetLists());
    };
  }, [dispatch]);

  return (
    <>
      <Categories />
      <Container>
        {MOVIES.map((category) => (
          <List category={category} mediaType='movie' key={category} />
        ))}

        {COMPANIES.map((company) => (
          <List
            id={company.id}
            mediaType='movie'
            category={company.name}
            key={company.name}
          />
        ))}
      </Container>
    </>
  );
};

export default Movies;
