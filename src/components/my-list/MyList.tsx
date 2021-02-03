import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setTitles, removeTitle } from '../../redux/user/userActions';
import { MyListProps } from '../../redux/user/userTypes';
import { RootState } from '../../redux/rootReducer';
import XMark from '../assets/XMark';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import { Container, Link, Img, Button, Heading } from './MyListStyles';

const MyList: React.VFC<MyListProps> = ({
  setTitles,
  removeTitle,
  user: { userId, titles },
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (userId) setTitles(userId);
  }, [userId, setTitles]);

  return (
    <>
      {userId ? (
        <>
          <Heading>My List</Heading>
          <Container fade={loaded}>
            {titles &&
              titles.map((title) => (
                <Link
                  to={`/${title.mediaType}/${title.id}`}
                  key={`${title.mediaType}_${title.id}`}
                >
                  <Img
                    onLoad={() => setLoaded(true)}
                    alt={title.title}
                    src={`${IMAGE_BASE_URL}${POSTER_SIZE}${title.posterPath}`}
                  />
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      removeTitle(userId, `${title.mediaType}_${title.id}`);
                    }}
                  >
                    <XMark />
                  </Button>
                </Link>
              ))}
          </Container>
        </>
      ) : (
        <Redirect to='/signin' />
      )}
    </>
  );
};

const mapStateToProps = (state: RootState) => ({ user: state.user });

export default connect(mapStateToProps, { setTitles, removeTitle })(MyList);
