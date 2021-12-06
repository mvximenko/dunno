import styled from 'styled-components';
import { Link } from 'react-router-dom';
import sizes from '@/utils/sizes';

export const Container = styled.div`
  height: 80vh;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const Heading = styled.h1`
  margin: 0;
  font-size: 30vw;
  font-weight: 300;
  ${[sizes.up('sm')]} {
    font-size: 23rem;
  }
`;

export const Paragraph = styled.p`
  margin: 0 0 8vw 0;
  font-size: 6vw;
  font-weight: 300;
  ${[sizes.up('sm')]} {
    margin: 0 0 5rem 0;
    font-size: 3.5em;
  }
`;

export const StyledLink = styled(Link)`
  width: 50vw;
  margin: 0 auto;
  padding: 3vw;
  font-size: 7vw;
  font-weight: 300;
  border: 1px solid;
  ${[sizes.up('sm')]} {
    width: 20rem;
    padding: 1rem;
    font-size: 2.5em;
    transition: all 350ms;
    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }
`;
