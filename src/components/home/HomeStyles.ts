import styled from 'styled-components';
import sizes from '../../sizes';

export const Container = styled.div`
  margin-left: 5vw;
  margin-bottom: 5vw;
  ${[sizes.up('sm')]} {
    margin-left: 3vw;
    margin-bottom: 3vw;
  }
`;
