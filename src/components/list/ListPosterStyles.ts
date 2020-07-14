import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import sizes from '../../sizes';
import { fadeEffect, FadeEffectTypes } from '../../CommonStyles';

export const Link = styled(RouterLink)`
  width: 29vw;
  height: 100%;
  margin-right: 6px;
  position: relative;
  background-color: #101010;
  user-drag: none;
  user-select: none;
  ${[sizes.up('xs')]} {
    width: 22vw;
  }
  ${[sizes.up('sm')]} {
    width: 18vw;
  }
  ${[sizes.up('md')]} {
    width: 15vw;
    margin-right: 0.5vw;
  }
  ${[sizes.up('lg')]} {
    width: 11.26vw;
    transition: all 350ms;
    &:hover {
      filter: brightness(1.15);
    }
  }
`;

export const Img = styled.img<FadeEffectTypes>`
  height: auto;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  user-drag: none;
  ${fadeEffect}
`;
