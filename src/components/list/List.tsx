import React, { useCallback, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import ScrollContainer from 'react-indiana-drag-scroll';
import ListPoster from './ListPoster';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import Poster from '../../assets/poster.png';
import {
  loadList,
  resetList,
  incrementPage,
} from '../../redux/actions/listAction';
import { ListProps } from '../../redux/types/listTypes';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import { titleCase } from '../../helpers';
import {
  Container,
  Heading,
  TitleListContainer,
  InitialSpace,
  LoadMore,
} from './ListStyles';

const List: React.FC<ListProps> = ({
  loadList,
  resetList,
  incrementPage,
  mediaType,
  category,
  titles,
  page,
}) => {
  useEffect(() => {
    loadList(category, mediaType, page);
  }, [category, mediaType, page, loadList]);

  useEffect(() => {
    return () => resetList(category, mediaType);
  }, [category, mediaType, resetList]);

  const handleLoad = useCallback(() => incrementPage(category, mediaType), [
    incrementPage,
    category,
    mediaType,
  ]);

  const bottomBoundaryRef = useRef<HTMLDivElement>(null);
  useInfiniteScroll(bottomBoundaryRef, handleLoad);
  return (
    <Container>
      <Heading>{titleCase(category)}</Heading>
      <ScrollContainer vertical={false}>
        <TitleListContainer>
          <InitialSpace>
            {titles &&
              titles.map((title) => (
                <ListPoster
                  posterPath={
                    title.poster_path
                      ? `${IMAGE_BASE_URL}${POSTER_SIZE}${title.poster_path}`
                      : `${Poster}`
                  }
                  id={title.id}
                  title={title.title || title.name}
                  mediaType={mediaType}
                  key={title.id}
                />
              ))}
          </InitialSpace>
          <LoadMore ref={bottomBoundaryRef}></LoadMore>
        </TitleListContainer>
      </ScrollContainer>
    </Container>
  );
};

const mapStateToProps = (state: any, { category, mediaType }: any) => ({
  titles: state.list[`${category}_${mediaType}`].titles,
  page: state.list[`${category}_${mediaType}`].page,
});

export default connect(mapStateToProps, {
  loadList,
  resetList,
  incrementPage,
})(List);
