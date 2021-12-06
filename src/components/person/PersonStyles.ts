import styled from 'styled-components';
import sizes from '@/utils/sizes';

export const Wrapper = styled.div`
  margin: 0 5vw 3rem;
  ${[sizes.up('lg')]} {
    margin: 0 12vw 3rem;
  }
`;

export const Heading = styled.h1`
  font-size: 2.8em;
  font-weight: 300;
`;

export const Row = styled.div`
  height: 7.5rem;
  display: flex;
  margin-bottom: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Placeholder = styled.div`
  width: 5rem;
  user-drag: none;
  user-select: none;
  position: relative;
  background: #101010;
`;

export const Img = styled.img`
  width: 5rem;
  height: 7.5rem;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Span = styled.span`
  width: 80%;
  display: flex;
  margin: 0 2rem;
  align-items: center;
  font-size: 1.6em;
`;
