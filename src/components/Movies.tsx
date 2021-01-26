import List from './list/List';
import Categories from './layout/Categories';
import { MOVIES, COMPANIES } from '../config';

const Movies = () => (
  <>
    <Categories />
    <div>
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
    </div>
  </>
);

export default Movies;
