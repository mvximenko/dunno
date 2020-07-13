import styled from 'styled-components';
import sizes from '../../sizes';

export const SearchIcon = styled.img`
  width: 20.8px;
  padding-top: 4px;
  margin-right: 24px;
  cursor: pointer;
  ${[sizes.up('sm')]} {
    width: 24px;
    margin-right: 28.8px;
  }
`;

export const Overlay = styled.div<{ open: boolean }>`
  top: 0;
  left: 0;
  position: fixed;
  z-index: 10;
  ${({ open }) =>
    open &&
    `    
    left: 13vw;
    width: 74vw;
    background: green;
    ${[sizes.up('sm')]} {
      left: 20vw;
      width: 60vw;
    }
  `}
`;
