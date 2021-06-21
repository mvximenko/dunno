import styled from 'styled-components';
import sizes from '../../sizes';
import { fadeEffect, background } from '../../GlobalStyles';

export const Placeholder = styled.div`
  position: relative;
  background: #101010;
  padding-top: calc(720 / 1280 * 100%);
  ${[sizes.up('md')]} {
    display: none;
  }
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  ${fadeEffect}
`;

export const Background = styled.img`
  display: none;
  ${[sizes.up('md')]} {
    display: block;
    ${background}
  }
`;
