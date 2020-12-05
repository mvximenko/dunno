import styled from 'styled-components';
import sizes from '../../sizes';

export const Container = styled.div`
  &:nth-last-child(1) {
    margin-bottom: 30px;
  }
`;

export const Heading = styled.h1`
  font-size: 18px;
  font-weight: 300;
  margin-top: 5vw;
  margin-bottom: 3vw;
  margin-left: 5vw;
  ${[sizes.up('xs')]} {
    font-size: 3.5vw;
    margin-top: 12px;
    margin-bottom: 12px;
    margin-left: 3vw;
  }
  ${[sizes.up('sm')]} {
    font-size: 3vw;
  }
  ${[sizes.up('md')]} {
    font-size: 2vw;
  }
  ${[sizes.up('xl')]} {
    margin-top: 16.8px;
    margin-bottom: 16.8px;
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

export const InitialSpace = styled.div<{ additionalSpace?: boolean }>`
  display: inline-flex;
  padding-left: 5vw;
  min-width: 100vw;
  ${[sizes.up('xs')]} {
    display: flex;
    padding-left: 3vw;
  }

  ${({ additionalSpace }) =>
    additionalSpace &&
    `
    &:last-child {
      margin-right: 50px;
      ${[sizes.up('xs')]} {
        margin-right: 60px;
      }
      ${[sizes.up('sm')]} {
        margin-right: 70px;
      }
      ${[sizes.up('md')]} {
        margin-right: 80px;
      }
      ${[sizes.up('lg')]} {
        margin-right: 90px;
      }
    }
  `}
`;

export const LoadMore = styled.div`
  position: relative;
  margin-right: 15px;
  padding-right: 29vw;
  ${[sizes.up('xs')]} {
    padding-right: 22vw;
  }
  ${[sizes.up('sm')]} {
    padding-right: 18vw;
  }
  ${[sizes.up('md')]} {
    padding-right: 15vw;
  }
  ${[sizes.up('lg')]} {
    padding-right: 11.26vw;
  }
  animation: pulse 1s infinite ease-in-out;
  @keyframes pulse {
    0% {
      background: #1c1c1c;
    }
    50% {
      background: #101010;
    }
    100% {
      background: #1c1c1c;
    }
  }
`;
