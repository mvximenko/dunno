import { Container, StyledLink, Paragraph, Heading } from './NotFoundStyles';

const NotFound = () => (
  <Container>
    <Heading>404</Heading>
    <Paragraph>Oops! Something went wrong.</Paragraph>
    <StyledLink to='/'>Go Home</StyledLink>
  </Container>
);

export default NotFound;
