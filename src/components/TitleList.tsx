import React, { useRef } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import TitlePoster from './TitlePoster';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import useLazyLoading from '../hooks/useLazyLoading';
import Placeholder from '../assets/placeholder.png';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import { AdvancePageAction } from '../types';
import {
  Heading,
  TitleListContainer,
  InitialSpace,
  LoadMore,
} from './TitleListStyles';

interface titleProps {
  poster_path?: string;
  id?: number;
  title?: string;
  name?: string;
}

interface Props {
  titles: titleProps[];
  category: string;
  type: string;
  pageDispatch: React.Dispatch<AdvancePageAction>;
}

const TitleList: React.FC<Props> = ({
  titles,
  category,
  type,
  pageDispatch,
}) => {
  let bottomBoundaryRef = useRef<HTMLDivElement>(null);
  useInfiniteScroll(bottomBoundaryRef, pageDispatch);
  useLazyLoading('.lazy', titles);
  return (
    <>
      <Heading>{category}</Heading>
      <ScrollContainer vertical={false}>
        <TitleListContainer>
          <InitialSpace>
            {titles &&
              titles.map((title) => (
                <TitlePoster
                  posterPath={
                    title.poster_path
                      ? `${IMAGE_BASE_URL}${POSTER_SIZE}${title.poster_path}`
                      : `${Placeholder}`
                  }
                  titleId={title.id}
                  titleName={title.title || title.name}
                  type={type}
                  key={title.id}
                />
              ))}
          </InitialSpace>
          <LoadMore ref={bottomBoundaryRef}>Loading...</LoadMore>
        </TitleListContainer>
      </ScrollContainer>
    </>
  );
};

export default TitleList;
