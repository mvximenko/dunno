import { ReactComponent as Star } from '@/assets/star.svg';
import { ReactComponent as Imdb } from '@/assets/imdb.svg';
import { Rating, ImdbWrapper, StarWrapper, Rank } from './TitleRatingStyles';

const TitleRating: React.VFC<{ rating: number }> = ({ rating }) => (
  <Rating>
    <ImdbWrapper>
      <Imdb />
    </ImdbWrapper>
    <Rank>{Math.round(rating * 10) / 10}/10</Rank>
    <StarWrapper>
      <Star />
    </StarWrapper>
  </Rating>
);

export default TitleRating;
