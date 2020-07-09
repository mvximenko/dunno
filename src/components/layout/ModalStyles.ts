import styled from 'styled-components';
import sizes from '../../sizes';

export const SearchIcon = styled.img`
  width: 1.3rem; /* ----- rem vs vh ------ */
  padding-top: 0.25rem;
  margin-right: 1.5rem;
  cursor: pointer;
  ${[sizes.up('sm')]} {
    width: 1.5rem;
    margin-right: 1.8rem;
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
