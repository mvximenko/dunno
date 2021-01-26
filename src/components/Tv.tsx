import List from './list/List';
import Categories from './layout/Categories';
import { TV, NETWORKS } from '../config';

const Tv = () => (
  <>
    <Categories />
    <div>
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
    </div>
  </>
);

export default Tv;
