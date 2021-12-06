import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import sizes from '@/utils/sizes';

export const StyledHeader = styled.header`
  display: none;
  ${[sizes.up('sm')]} {
    width: 100%;
    height: 5rem;
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
`;

export const LogoLink = styled(Link)`
  font-size: 2.6rem;
  font-weight: 600;
  font-family: sans-serif;
`;

export const Nav = styled.nav`
  width: 100%;
  text-align: center;
`;

export const StyledNavLink = styled(NavLink)`
  margin: 0 2vw;
  color: #aeaeae;
  font-size: 1.6em;
  transition: all 350ms;
  &:hover,
  &.active {
    color: #fff;
  }
`;

export const Icons = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconWrapper = styled.div`
  width: 2.4rem;
  fill: #aeaeae;
  cursor: pointer;
  transition: all 350ms;
  &:hover {
    fill: #fff;
  }
`;
