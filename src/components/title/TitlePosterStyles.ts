import styled from 'styled-components';
import sizes from '../../sizes';
import { fadeEffect, FadeEffectTypes } from '../../GlobalStyles';

export const Img = styled.img<FadeEffectTypes>`
  width: 365px;
  height: 530px;
  filter: contrast(110%);
  -webkit-filter: contrast(110%);
  ${fadeEffect}
  ${[sizes.up('xl')]} {
    width: 511px;
    height: 742px;
  }
`;
