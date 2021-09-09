import { Container, StyledNavLink } from './CategoriesStyles';

const Categories = () => (
  <Container>
    <StyledNavLink exact to='/'>
      TV SHOWS
    </StyledNavLink>

    <StyledNavLink exact to='/movie'>
      MOVIES
    </StyledNavLink>
  </Container>
);

export default Categories;
