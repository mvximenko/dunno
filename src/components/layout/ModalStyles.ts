import styled from 'styled-components';
import sizes from '../../sizes';

export const SearchWrapper = styled.div`
  margin-right: 24px;
  ${[sizes.up('sm')]} {
    margin-right: 28.8px;
    cursor: pointer;
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
