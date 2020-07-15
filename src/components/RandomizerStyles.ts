import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import sizes from '../sizes';
import { fadeEffect, FadeEffectTypes } from '../CommonStyles';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

export const Column = styled.div`
  width: 73.33vw;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
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
  width: auto;
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
    transition: all 350ms;
    &:hover {
      filter: brightness(1.15);
    }
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
`;

export const Buttons = styled.div`
  width: 100%;
  flex-direction: row;
`;

export const Button = styled.button`
  width: 50%;
  padding: 15px 0 15px 0;
  border: none;
  background-color: rgba(5, 5, 5, 1);
  outline: none;
  color: white;

  &:focus {
    background-color: rgba(5, 5, 5, 0.5);
  }
`;
