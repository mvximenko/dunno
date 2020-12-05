import List from './list/List';
import { MOVIES, COMPANIES } from '../config';

const Movie = () => (
  <>
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
  </>
);

export default Movie;
