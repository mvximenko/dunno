import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import sizes from '../sizes';
import { fadeEffect, FadeEffectTypes } from '../CommonStyles';

export const Container = styled.div`
  width: 100%;
  margin: 40px 0;
  display: flex;
  justify-content: center;
`;

export const Background = styled.img<FadeEffectTypes>`
  ${[sizes.up('lg')]} {
    top: 0;
    left: 0;
    width: 100%;
    position: fixed;
    filter: brightness(70%);
    ${fadeEffect}
  }
`;

export const Column = styled.div`
  width: 73.33vw;
  display: flex;
  flex-direction: column;
  ${[sizes.up('xs')]} {
    width: 70vw;
  }
  ${[sizes.up('sm')]} {
    width: 60vw;
  }
  ${[sizes.up('md')]} {
    width: 50vw;
  }
  ${[sizes.up('lg')]} {
    width: 25vw;
  }
`;

export const Link = styled(RouterLink)`
  width: 100%;
  height: 110vw;
  position: relative;
  background-color: #101010;
  user-drag: none;
  user-select: none;
  ${[sizes.up('xs')]} {
    height: 105vw;
  }
  ${[sizes.up('sm')]} {
    height: 90vw;
  }
  ${[sizes.up('md')]} {
    height: 75vw;
  }
  ${[sizes.up('lg')]} {
    height: 37.5vw;
  }
`;

export const Img = styled.img<FadeEffectTypes>`
  width: 100%;
  min-height: auto;
  position: absolute;
  top: 0;
  left: 0;
  user-drag: none;
  ${fadeEffect}
  ${[sizes.up('lg')]} {
    transition: all 350ms;
    &:hover {
      filter: brightness(1.15);
    }
  }
`;

export const Buttons = styled.div`
  width: 100%;
  position: relative;
  flex-direction: row;
`;

export const Button = styled.button`
  width: 50%;
  padding: 15px 0;
  color: white;
  background-color: #0d0c0c;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 350ms;
  &:focus,
  &:hover {
    background-color: #101010;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  }
`;
