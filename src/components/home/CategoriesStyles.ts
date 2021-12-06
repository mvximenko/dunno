import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import sizes from '@/utils/sizes';

export const Container = styled.nav`
  display: flex;
  justify-content: center;
  margin: 1.9rem 5vw 2.4rem 5vw;
  ${[sizes.up('sm')]} {
    display: none;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: #aeaeae;
  font-size: 5vw;
  &.active {
    color: #fff;
  }
  &:not(:first-child) {
    margin-left: 20%;
  }
`;
