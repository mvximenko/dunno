import styled, { css } from 'styled-components';
import { Link as RouterLink, NavLink as RouterNavLink } from 'react-router-dom';
import sizes from '../../sizes';

const blur = css`
  background: rgba(0, 0, 0, 0.8);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
`;

const menuLink = css`
  display: block;
  padding: 10px 0;
  font-size: 28px;
  text-align: center;
  text-decoration: none;
`;

export const StyledHeader = styled.header`
  width: 100%;
  height: 36px;
  display: flex;
  padding: 0 5vw;
  position: relative;
  align-items: center;
  box-sizing: border-box;
  z-index: 5;
  ${blur};
  ${[sizes.up('xs')]} {
    height: 40px;
    padding: 0 3vw;
  }
`;

export const Logo = styled.div`
  width: 100%;
  ${[sizes.up('sm')]} {
    width: auto;
  }
`;

export const LogoLink = styled(RouterLink)`
  font-size: 22px;
  font-weight: 600;
  font-family: sans-serif;
  cursor: none;
  ${[sizes.up('sm')]} {
    cursor: pointer;
  }
`;

export const Nav = styled.nav`
  display: none;
  ${[sizes.up('sm')]} {
    width: 100%;
    display: block;
    text-align: center;
  }
`;

export const NavLink = styled(RouterNavLink)`
  margin: 0 2vw;
  color: #aeaeae;
  font-size: 14px;
  font-weight: 400;
  transition: all 350ms;
  &:hover,
  &.active {
    color: #fff;
  }
`;

export const MenuWrapper = styled.div`
  ${[sizes.up('sm')]} {
    display: none;
  }
`;

export const ProfileWrapper = styled.div`
  display: none;
  ${[sizes.up('sm')]} {
    display: block;
  }
`;

export const Menu = styled.div<{ active: boolean }>`
  top: 0;
  right: 0;
  width: 0;
  height: 100%;
  padding: 60px 0;
  position: fixed;
  white-space: nowrap;
  z-index: 2;
  ${blur}
  ${({ active }) =>
    active &&
    `
    width: 100%;
  `}
`;

export const MenuLink = styled(RouterLink)`
  ${menuLink}
`;

export const SignOut = styled.span`
  ${menuLink}
`;
