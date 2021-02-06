import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import sizes from '../../sizes';
import { fadeEffect, FadeEffectTypes } from '../../GlobalStyles';

export const Link = styled(RouterLink)`
  height: 0;
  position: relative;
  background: #101010;
  padding-top: calc(750 / 500 * 100%);
  ${[sizes.up('lg')]} {
    transition: all 350ms;
    &:hover {
      filter: brightness(1.15);
    }
  }
`;

export const Img = styled.img<FadeEffectTypes>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  ${fadeEffect}
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 24px;
  fill: #fff;
  background: rgba(0, 0, 0, 0.8);
  border: none;
  outline: none;
  cursor: pointer;
  transition: 350ms;
  &:hover {
    fill: black;
    background: rgba(255, 255, 255, 0.8);
  }
  ${[sizes.up('lg')]} {
    width: 28px;
    height: 28px;
  }
  ${[sizes.up('xl')]} {
    width: 39.2px;
    height: 39.2px;
  }
`;
