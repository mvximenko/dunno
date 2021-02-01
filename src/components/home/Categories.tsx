import { Container, NavLink } from './CategoriesStyles';

const Categories = () => (
  <Container>
    <NavLink exact to='/'>
      TV SHOWS
    </NavLink>

    <NavLink exact to='/movie'>
      MOVIES
    </NavLink>
  </Container>
);

export default Categories;
