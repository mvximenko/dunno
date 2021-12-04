import styled from 'styled-components';
import { Link } from 'react-router-dom';
import sizes from '@/utils/sizes';
import { fadeEffect, background } from '@/src/GlobalStyles';

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: calc(100% - 44px);
  ${[sizes.up('sm')]} {
    height: calc(100% - 50px);
  }
  ${[sizes.up('xl')]} {
    height: calc(100% - 70px);
  }
`;

export const Background = styled.img`
  ${[sizes.up('sm')]} {
    ${background}
`;

export const Column = styled.div`
  width: 73.33vw;
  display: flex;
  margin: auto;
  flex-direction: column;
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

export const StyledLink = styled(Link)`
  width: 100%;
  height: 110vw;
  position: relative;
  background: #101010;
  user-drag: none;
  user-select: none;
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

export const Img = styled.img`
  width: 100%;
  height: 100%;
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
  color: #fff;
  font-size: 15px;
  background: #0d0c0c;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 350ms;
  &:focus,
  &:hover {
    background: #101010;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  }
  ${[sizes.up('xl')]} {
    padding: 21px 0;
    font-size: 22.4px;
  }
`;
