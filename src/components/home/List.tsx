import { useCallback, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import {
  getList,
  clearList,
  incrementPage,
} from '../../redux/list/listActions';
import { Props, DispatchProps } from '../../redux/list/listTypes';
import { RootState } from '../../redux/rootReducer';
import ScrollContainer from 'react-indiana-drag-scroll';
import ListPoster from './ListPoster';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import { titleCase } from '../../helpers';
import { Heading, Container, InitialSpace, LoadMore } from './ListStyles';

const List: React.VFC<Props> = ({
  getList,
  clearList,
  incrementPage,
  list: { titles, page, totalPages },
  mediaType,
  category,
  id,
}) => {
  useEffect(() => {
    getList(category, mediaType, page, id);
  }, [category, mediaType, page, id, getList]);

  useEffect(() => {
    return () => clearList(category, mediaType);
  }, [category, mediaType, clearList]);

  const handleLoad = useCallback(() => {
    incrementPage(category, mediaType);
  }, [category, mediaType, incrementPage]);

  const bottomBoundaryRef = useRef<HTMLDivElement>(null);
  useInfiniteScroll(bottomBoundaryRef, handleLoad);
  return (
    <>
      <Heading>{titleCase(category)}</Heading>
      <ScrollContainer vertical={false}>
        <Container>
          <InitialSpace additionalSpace={page === totalPages}>
            {titles &&
              titles.map(
                (title) =>
                  title.poster_path && (
                    <ListPoster
                      posterPath={`${IMAGE_BASE_URL}${POSTER_SIZE}${title.poster_path}`}
                      id={title.id}
                      title={title.title || title.name}
                      mediaType={mediaType}
                      key={title.id}
                    />
                  )
              )}
          </InitialSpace>
          {page < totalPages && <LoadMore ref={bottomBoundaryRef}></LoadMore>}
        </Container>
      </ScrollContainer>
    </>
  );
};

const mapStateToProps = (
  state: RootState,
  { category, mediaType }: DispatchProps
) => ({
  list: state.list[`${category}_${mediaType}`],
});

export default connect(mapStateToProps, {
  getList,
  clearList,
  incrementPage,
})(List);
