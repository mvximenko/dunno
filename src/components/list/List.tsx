import React, { useRef } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import ListPoster from './ListPoster';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import Poster from '../../assets/poster.png';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import { AdvancePageAction, Titles } from '../../store/list/listTypes';
import { titleCase } from '../../helpers';
import {
  Container,
  Heading,
  TitleListContainer,
  InitialSpace,
  LoadMore,
} from './ListStyles';

interface Props {
  titles: {
    titles: Titles[];
    category: string;
    type: string;
  };
  dispatch: React.Dispatch<AdvancePageAction>;
}

const List: React.FC<Props> = ({
  titles: { titles, category, type },
  dispatch,
}) => {
  const bottomBoundaryRef = useRef<HTMLDivElement>(null);
  useInfiniteScroll(bottomBoundaryRef, dispatch);
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
                  type={type}
                  key={title.id}
                />
              ))}
          </InitialSpace>
          <LoadMore ref={bottomBoundaryRef}>Loading...</LoadMore>
        </TitleListContainer>
      </ScrollContainer>
    </Container>
  );
};

export default List;
