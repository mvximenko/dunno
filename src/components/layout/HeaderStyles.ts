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
  height: 40px;
  display: flex;
  padding: 0 5vw;
  position: relative;
  align-items: center;
  box-sizing: border-box;
  z-index: 5;
  ${blur};
  ${[sizes.up('xs')]} {
    height: 50px;
    padding: 0 3vw;
  }
  ${[sizes.up('xl')]} {
    height: 70px;
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
    font-size: 26px;
    cursor: pointer;
  }
  ${[sizes.up('xl')]} {
    font-size: 36.4px;
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

export const SearchWrapper = styled.div`
  width: 24px;
  ${[sizes.up('sm')]} {
    cursor: pointer;
  }
  ${[sizes.up('xl')]} {
    width: 33.6px;
  }
`;

export const MenuWrapper = styled.div`
  width: 30px;
  ${[sizes.up('sm')]} {
    display: none;
  }
`;

export const ProfileWrapper = styled.div`
  display: none;
  ${[sizes.up('sm')]} {
    width: 24px;
    display: block;
    cursor: pointer;
  }
  ${[sizes.up('xl')]} {
    width: 33.6px;
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
