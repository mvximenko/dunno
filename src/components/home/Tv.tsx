import List from './List';
import Categories from './Categories';
import { TV, NETWORKS } from '../../config';
import { Container } from './HomeStyles';

const Tv = () => (
  <>
    <Categories />
    <Container>
      {TV.map((category) => (
        <List category={category} mediaType='tv' key={category} />
      ))}

      {NETWORKS.map((network) => (
        <List
          id={network.id}
          mediaType='tv'
          category={network.name}
          key={network.name}
        />
      ))}
    </Container>
  </>
);

export default Tv;
