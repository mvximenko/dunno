import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import sizes from '../sizes';

export const Container = styled.div`
  padding: 5% 5%;
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
  }
  ${[sizes.up('xl')]} {
    grid-template-columns: repeat(8, 1fr);
  }
`;

export const Link = styled(RouterLink)`
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 25px;
  height: 25px;
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  border: none;
  outline: none;
  cursor: pointer;
  transition: 350ms;
  &:hover {
    color: black;
    background: rgba(255, 255, 255, 0.8);
  }
  ${[sizes.up('xl')]} {
    width: 35px;
    height: 35px;
    font-size: 22.4px;
  }
`;
