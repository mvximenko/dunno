import styled from 'styled-components';
import sizes from '../../sizes';
import { fadeEffect, FadeEffectTypes } from '../../CommonStyles';

export const Poster = styled.div`
  display: none;
  ${[sizes.up('md')]} {
    display: block;
  }
`;

export const Img = styled.img<FadeEffectTypes>`
  width: 365px;
  height: 530px;
  filter: contrast(110%);
  -webkit-filter: contrast(110%);
  ${fadeEffect}
`;
