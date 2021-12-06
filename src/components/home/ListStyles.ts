import styled from 'styled-components';
import sizes from '@/utils/sizes';

export const Heading = styled.h1`
  font-size: 1.8em;
  font-weight: 300;
  margin-top: 5vw;
  margin-bottom: 3vw;
  ${[sizes.up('sm')]} {
    font-size: 3vw;
    margin-top: 1.2rem;
    margin-bottom: 1.2rem;
  }
  ${[sizes.up('md')]} {
    font-size: 2.5vw;
  }
  ${[sizes.up('lg')]} {
    font-size: 2.6em;
  }
`;

export const Container = styled.div`
  height: 44vw;
  display: inline-flex;
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
  min-width: 100vw;
  ${({ additionalSpace }) =>
    additionalSpace &&
    `
    &:last-child {
      margin-right: 5rem;
      ${[sizes.up('sm')]} {
        margin-right: 7rem;
      }
      ${[sizes.up('md')]} {
        margin-right: 8rem;
      }
      ${[sizes.up('lg')]} {
        margin-right: 9rem;
      }
    }
  `}
`;

export const LoadMore = styled.div`
  position: relative;
  margin-right: 1.5rem;
  padding-right: 29vw;
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
