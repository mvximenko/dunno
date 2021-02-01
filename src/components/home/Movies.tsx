import List from './List';
import Categories from './Categories';
import { MOVIES, COMPANIES } from '../../config';
import { Container } from './HomeStyles';

const Movies = () => (
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

export default Movies;
