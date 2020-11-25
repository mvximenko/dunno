import React, { useCallback, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import ScrollContainer from 'react-indiana-drag-scroll';
import ListPoster from './ListPoster';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import Poster from '../../assets/poster.png';
import { loadTitles, loadNewPage } from '../../redux/actions/movieAction';
import { LoadTitles, LoadNewPage, Title } from '../../redux/types/movieTypes';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import { titleCase } from '../../helpers';
import {
  Container,
  Heading,
  TitleListContainer,
  InitialSpace,
  LoadMore,
} from './ListStyles';

interface Props {
  loadTitles: LoadTitles;
  loadNewPage: LoadNewPage;
  mediaType: string;
  category: string;
  titles: [];
  page: number;
}

const List: React.FC<Props> = ({
  loadTitles,
  loadNewPage,
  mediaType,
  category,
  titles,
  page,
}) => {
  useEffect(() => {
    loadTitles(category, page, mediaType);
  }, [category, page, mediaType, loadTitles]);

  const handleLoad = useCallback(() => loadNewPage(category), [
    loadNewPage,
    category,
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
              titles.map((title: Title) => (
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

const mapStateToProps = (state: any, { category }: any) => ({
  titles: state.movies[category].titles,
  page: state.movies[category].page,
});

export default connect(mapStateToProps, { loadTitles, loadNewPage })(List);
