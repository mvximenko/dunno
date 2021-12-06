import styled, { css } from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';
import sizes from '@/utils/sizes';

const icon = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 2.4rem;
    fill: #aeaeae;
  }
`;

export const Navbar = styled.nav`
  ${[sizes.up('sm')]} {
    display: none;
  }
`;

export const Space = styled.div`
  height: 4.4rem;
`;

export const Container = styled.div`
  width: 100%;
  height 4.4rem;
  bottom: 0;
  display: flex;
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
`;

export const NavLink = styled(RouterNavLink)`
  ${icon}
  &.active {
    svg {
      fill: #fff;
    }
  }
`;

export const IconWrapper = styled.div`
  ${icon}
  cursor: pointer;
`;
