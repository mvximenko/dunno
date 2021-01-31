import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';
import sizes from '../../sizes';

export const Container = styled.nav`
  display: flex;
  justify-content: center;
  margin: 19px 5vw 24px 5vw;
  ${[sizes.up('sm')]} {
    display: none;
  }
`;

export const NavLink = styled(RouterNavLink)`
  color: #aeaeae;
  font-size: 5vw;
  &.active {
    color: #fff;
  }
  &:not(:first-child) {
    margin-left: 20%;
  }
`;
