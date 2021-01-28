import styled from 'styled-components';
import { Link as RouterLink, NavLink as RouterNavLink } from 'react-router-dom';
import sizes from '../../sizes';

export const StyledHeader = styled.header`
  display: none;
  ${[sizes.up('sm')]} {
    width: 100%;
    height: 50px;
    display: flex;
    padding: 0 3vw;
    position: relative;
    align-items: center;
    box-sizing: border-box;
    z-index: 5;
    background: rgba(0, 0, 0, 0.8);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
  }
  ${[sizes.up('xl')]} {
    height: 70px;
  }
`;

export const LogoLink = styled(RouterLink)`
  font-size: 26px;
  font-weight: 600;
  font-family: sans-serif;
  ${[sizes.up('xl')]} {
    font-size: 36.4px;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  text-align: center;
`;

export const NavLink = styled(RouterNavLink)`
  margin: 0 2vw;
  color: #aeaeae;
  transition: all 350ms;
  &:hover,
  &.active {
    color: #fff;
  }
  ${[sizes.up('xl')]} {
    font-size: 22.4px;
  }
`;

export const Icons = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${[sizes.up('xl')]} {
    width: 140px;
  }
`;

export const IconWrapper = styled.div`
  width: 24px;
  fill: #aeaeae;
  cursor: pointer;
  transition: all 350ms;
  &:hover {
    fill: #fff;
  }
  ${[sizes.up('xl')]} {
    width: 33.6px;
  }
`;
