import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ScrollContainer from 'react-indiana-drag-scroll';
import ListPoster from './ListPoster';
import Poster from '../../assets/poster.png';
import { loadSimpleList, resetList } from '../../redux/actions/listAction';
import { SimpleListProps } from '../../redux/types/listTypes';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import {
  Container,
  Heading,
  TitleListContainer,
  InitialSpace,
} from './ListStyles';

const SimpleList: React.FC<SimpleListProps> = ({
  loadSimpleList,
  resetList,
  titles,
  id,
  mediaType,
  company,
}) => {
  useEffect(() => {
    loadSimpleList(company, mediaType, id);
    return () => resetList(company, mediaType);
  }, [company, mediaType, id, loadSimpleList, resetList]);

  return (
    <Container>
      <Heading>{company}</Heading>
      <ScrollContainer vertical={false}>
        <TitleListContainer>
          <InitialSpace additionalSpace={true}>
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
        </TitleListContainer>
      </ScrollContainer>
    </Container>
  );
};

const mapStateToProps = (state: any, { company, mediaType }: any) => ({
  titles: state.list[`${company}_${mediaType}`].titles,
});

export default connect(mapStateToProps, { loadSimpleList, resetList })(
  SimpleList
);
