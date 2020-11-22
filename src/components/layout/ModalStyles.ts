import styled from 'styled-components';

export const Overlay = styled.div<{ isOpen: boolean }>`
  ${({ isOpen }) =>
    isOpen &&
    `    
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 998;
    opacity: 0.75;
    background: #060606;
  `}
`;
