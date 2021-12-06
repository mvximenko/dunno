import styled from 'styled-components';
import { Link } from 'react-router-dom';
import sizes from '@/utils/sizes';
import { fadeEffect } from '@/src/GlobalStyles';

export const StyledLink = styled(Link)`
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

export const Img = styled.img`
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
  width: 2.4rem;
  height: 2.4rem;
  padding: 0.1rem 0.6rem;
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
    width: 2.8rem;
    height: 2.8rem;
  }
`;
