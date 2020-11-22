import styled from 'styled-components';
import sizes from '../../sizes';

export const Container = styled.div<{ isOpen: boolean }>`
  top: 0;
  left: 0;
  margin: auto;
  border: none;
  position: absolute;
  background: #161616;
  z-index: 1000;

  ${({ isOpen }) =>
    isOpen &&
    `    
    left: 13vw;
    width: 74vw;
    ${[sizes.up('sm')]} {
      left: 20vw;
      width: 60vw;
    }
  `}
`;

export const Input = styled.input`
  width: 100%;
  color: #fff;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 10.5px 20px;
  box-sizing: border-box;
  background: #212121;
  ${[sizes.up('md')]} {
    padding: 18px 20px;
  }
`;

export const List = styled.ul`
  margin: 0;
`;

export const Item = styled.li<{ noPointer?: boolean }>`
  width: 100%;
  cursor: pointer;
  font-size: 13px;
  text-align: left;
  padding: 10px 15px;
  box-sizing: border-box;
  z-index: 3;
  &:hover {
    background: rgb(128, 128, 128, 0.2);
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
