import styled from 'styled-components';
import sizes from '../sizes';

export const Heading = styled.h1`
  font-size: 18px;
  font-weight: 300;
  margin-top: 5vw;
  margin-bottom: 3vw;
  margin-left: 5vw;
  ${[sizes.up('xs')]} {
    font-size: 3.5vw;
    margin-top: 0.67em;
    margin-bottom: 0.67em;
    margin-left: 3vw;
  }
  ${[sizes.up('sm')]} {
    font-size: 3vw;
  }
  ${[sizes.up('md')]} {
    font-size: 2vw;
  }
`;

export const TitleListContainer = styled.div`
  height: 44vw;
  display: inline-flex;
  ${[sizes.up('xs')]} {
    height: 33vw;
  }
  ${[sizes.up('sm')]} {
    height: 27vw;
  }
  ${[sizes.up('md')]} {
    height: 22.5vw;
  }
  ${[sizes.up('lg')]} {
    height: 16.9vw;
  }
`;

export const InitialSpace = styled.div`
  display: inline-flex;
  padding-left: 5vw;
  min-width: 100vw;
  ${[sizes.up('xs')]} {
    display: flex;
    padding-left: 3vw;
  }
`;

export const LoadMore = styled.div`
  position: relative;
  padding-right: 10vw;
  background: green;
`;
