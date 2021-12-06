import styled from 'styled-components';
import { fadeEffect } from '@/src/GlobalStyles';

export const Container = styled.div`
  width: 58.5rem;
  height: 53rem;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  filter: contrast(110%);
  -webkit-filter: contrast(110%);
  ${fadeEffect}
`;
