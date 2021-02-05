import useLoaded from '../../hooks/useLoaded';
import PosterPng from '../../assets/poster.png';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import { Container, Img } from './TitlePosterStyles';

interface Props {
  title: string;
  posterPath: string | null;
}

const TitlePosterDesktop: React.VFC<Props> = ({ title, posterPath }) => {
  const [loaded, setLoaded] = useLoaded(posterPath);
  return (
    <Container>
      <Img
        alt={title}
        src={
          posterPath
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${posterPath}`
            : PosterPng
        }
        fade={loaded}
        onLoad={setLoaded}
      />
    </Container>
  );
};

export default TitlePosterDesktop;
