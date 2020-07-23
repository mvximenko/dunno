import styled from 'styled-components';
import sizes from '../../sizes';
import { fadeEffect, FadeEffectTypes } from '../../CommonStyles';

export const Placeholder = styled.div`
  position: relative;
  background: #101010;
  padding-top: calc(720 / 1280 * 100%);
  ${[sizes.up('md')]} {
    display: none;
  }
`;

export const Img = styled.img<FadeEffectTypes>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  ${fadeEffect}
`;

export const Background = styled.img<FadeEffectTypes>`
  display: none;
  ${[sizes.up('lg')]} {
    top: 0;
    left: 0;
    width: 100%;
    display: block;
    position: fixed;
    ${fadeEffect}
  }
`;
