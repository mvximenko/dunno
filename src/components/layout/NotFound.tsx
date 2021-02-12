import { Container, Link, Paragraph, Heading } from './NotFoundStyles';

const NotFound = () => (
  <Container>
    <Heading>404</Heading>
    <Paragraph>Oops! Something went wrong.</Paragraph>
    <Link to='/'>Go Home</Link>
  </Container>
);

export default NotFound;
