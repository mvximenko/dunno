import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  width: 100%;
  height: 10vw;
  display: flex;
  padding: 0 5vw;
  position: relative;
  z-index: 5;
  align-items: center;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.8);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
`;

export const Logo = styled.div`
  width: 100%;
`;

export const LogoLink = styled(RouterLink)`
  font-size: 6vw;
  font-weight: 600;
  font-family: sans-serif;
`;

export const MenuIcon = styled.img`
  width: 1.5rem;
`;