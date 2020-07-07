import styled from 'styled-components';
import sizes from '../../sizes';
import { fadeEffect, FadeEffectTypes } from '../../CommonStyles';

export const Poster = styled.div`
  position: relative;
  height: 0;
  padding-top: calc(720 / 1280 * 100%);
  ${[sizes.up('lg')]} {
    display: none;
  }
`;

export const Img = styled.img<FadeEffectTypes>`
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  max-width: 100%;
  ${fadeEffect}
`;
