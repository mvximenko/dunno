import Backdrop from '../../assets/backdrop.png';
import useLoaded from '../../hooks/useLoaded';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';
import { Placeholder, Img, Background } from './TitleBackdropStyles';

interface Props {
  title: string;
  backdropPath: string | null;
}

const TitleBackdrop: React.VFC<Props> = ({ title, backdropPath }) => {
  const [loaded, setLoaded] = useLoaded(backdropPath);
  return (
    <>
      <Placeholder>
        <Img
          alt={title}
          src={
            backdropPath
              ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdropPath}`
              : Backdrop
          }
          fade={loaded}
          onLoad={setLoaded}
        />
      </Placeholder>

      {backdropPath && (
        <Background
          alt={title}
          src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdropPath}`}
          fade={loaded}
          onLoad={setLoaded}
        />
      )}
    </>
  );
};

export default TitleBackdrop;
