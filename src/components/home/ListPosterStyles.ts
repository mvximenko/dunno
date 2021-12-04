import styled from 'styled-components';
import { Link } from 'react-router-dom';
import sizes from '@/utils/sizes';
import { fadeEffect } from '@/src/GlobalStyles';

export const StyledLink = styled(Link)`
  width: 29vw;
  margin-right: 6px;
  position: relative;
  background: #101010;
  user-drag: none;
  user-select: none;
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

export const Img = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  user-drag: none;
  ${fadeEffect}
`;
