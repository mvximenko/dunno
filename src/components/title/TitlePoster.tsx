import { useSelector, useDispatch } from 'react-redux';
import { setLoaded } from '../../redux/slices/titleSlice';
import { RootState } from '../../redux/rootReducer';
import PosterPng from '../../assets/poster.png';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import { Container, Img } from './TitlePosterStyles';

interface Props {
  title: string;
  posterPath: string | null;
}

const TitlePosterDesktop: React.VFC<Props> = ({ title, posterPath }) => {
  const dispatch = useDispatch();
  const isLoaded = useSelector((state: RootState) => state.title.poster);
  return (
    <Container>
      <Img
        alt={title}
        src={
          posterPath
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${posterPath}`
            : PosterPng
        }
        fade={isLoaded}
        onLoad={() => dispatch(setLoaded('poster'))}
      />
    </Container>
  );
};

export default TitlePosterDesktop;
