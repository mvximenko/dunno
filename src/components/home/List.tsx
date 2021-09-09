import { useCallback, useEffect, useRef } from 'react';
import { useDispatch, shallowEqual } from 'react-redux';
import { useSelector } from '@/redux/store';
import { fetchList, incrementPage, ListTypes } from '@/redux/slices/listSlice';
import ScrollContainer from 'react-indiana-drag-scroll';
import ListPoster from './ListPoster';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { IMAGE_BASE_URL, POSTER_SIZE } from '@/root/config';
import titleCase from '@/utils/titleCase';
import { Heading, Container, InitialSpace, LoadMore } from './ListStyles';

interface Props {
  mediaType: string;
  category: string;
  id?: number;
}

const List: React.VFC<Props> = ({ mediaType, category, id }) => {
  const dispatch = useDispatch();

  const { titles, page, totalPages }: ListTypes = useSelector(
    (state) => ({ ...state.list[`${category}_${mediaType}`] }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(fetchList(category, mediaType, page, id));
  }, [category, mediaType, page, id, dispatch]);

  const handleLoad = useCallback(() => {
    dispatch(incrementPage(`${category}_${mediaType}`));
  }, [category, mediaType, dispatch]);

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
          {page < totalPages && <LoadMore ref={bottomBoundaryRef} />}
        </Container>
      </ScrollContainer>
    </>
  );
};

export default List;
