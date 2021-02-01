import StarIcon from '../assets/StarIcon';
import Imdb from '../assets/Imdb';
import { Rating, ImdbWrapper, StarWrapper, Rank } from './TitleRatingStyles';

interface Props {
  rating: number;
}

const TitleRating: React.VFC<Props> = ({ rating }) => (
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
