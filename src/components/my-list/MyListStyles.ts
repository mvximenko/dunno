import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import sizes from '../../sizes';
import { fadeEffect, FadeEffectTypes } from '../../GlobalStyles';

export const Heading = styled.h1`
  font-size: 28px;
  font-weight: 300;
  margin-left: 5vw;
  ${[sizes.up('lg')]} {
    margin-left: 6vw;
  }
  ${[sizes.up('xl')]} {
    font-size: 39.2px;
  }
`;

export const Container = styled.div`
  margin: 0 5% 5% 5%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 6px;
  ${[sizes.up('sm')]} {
    grid-template-columns: repeat(5, 1fr);
  }
  ${[sizes.up('md')]} {
    grid-template-columns: repeat(6, 1fr);
  }
  ${[sizes.up('lg')]} {
    grid-template-columns: repeat(7, 1fr);
    margin: 0 6% 5% 6%;
    grid-gap: 8.4px;
  }
  ${[sizes.up('xl')]} {
    grid-template-columns: repeat(8, 1fr);
  }
`;

export const Link = styled(RouterLink)`
  position: relative;
  height: 0;
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
  min-height: 100%;
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
