import styled from 'styled-components';
import sizes from '../../sizes';

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

export const Container = styled.div<{ isOpen: boolean }>`
  top: 0;
  left: 0;
  margin: auto;
  border: none;
  position: fixed;
  background: #161616;
  z-index: 1000;
  display: none;
  ${({ isOpen }) =>
    isOpen &&
    `    
    left: 13vw;
    width: 74vw;
    display: block;
    ${[sizes.up('sm')]} {
      left: 20vw;
      width: 60vw;
    } 
  `}
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;
  font-size: 16px;
  padding: 0 20px;
  color: #fff;
  border: none;
  outline: none;
  box-sizing: border-box;
  background: #212121;
  ${[sizes.up('sm')]} {
    height: 50px;
    font-size: 20px;
    padding: 0 25px;
  }
  ${[sizes.up('xl')]} {
    height: 70px;
    font-size: 28px;
    padding: 0 35px;
  }
`;

export const Item = styled.li<{ noPointer?: boolean }>`
  width: 100%;
  cursor: pointer;
  font-size: 14px;
  box-sizing: border-box;
  padding: 12px 20px;
  &:hover {
    background: rgb(128, 128, 128, 0.2);
  }
  ${[sizes.up('sm')]} {
    font-size: 18px;
    padding: 13px 25px;
  }
  ${[sizes.up('xl')]} {
    font-size: 25px;
    padding: 14.4px 35px;
  }

  ${({ noPointer }) =>
    noPointer &&
    `
    cursor: default;
    &:hover {
      background: #161616;  
    }
  `}
`;
