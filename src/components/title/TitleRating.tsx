import StarIcon from '../assets/StarIcon';
import Imdb from '../assets/Imdb';
import { Rating, ImdbWrapper, StarWrapper, Rank } from './TitleRatingStyles';

const TitleRating: React.VFC<{ rating: number }> = ({ rating }) => (
  <Rating>
    <ImdbWrapper>
      <Imdb />
    </ImdbWrapper>
    <Rank>{rating}/10</Rank>
    <StarWrapper>
      <StarIcon />
    </StarWrapper>
  </Rating>
);

export default TitleRating;
