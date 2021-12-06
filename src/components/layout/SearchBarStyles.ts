import styled from 'styled-components';
import sizes from '@/utils/sizes';

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

export const InputContainer = styled.div`
  display: flex;
  background: #212121;
`;

export const IconWrapper = styled.div<{ pointer?: boolean }>`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 2.2rem;
    fill: #aeaeae;
  }
  ${[sizes.up('sm')]} {
    svg {
      width: 2.6rem;
    }
  }
  ${[sizes.up('md')]} {
    width: 20%;
  }
  ${[sizes.up('lg')]} {
    width: 10%;
  }

  ${({ pointer }) =>
    pointer &&
    `
    cursor: pointer;
    svg {
      transition: all 350ms;
      &:hover {
        fill: #fff;
      }
    }
  `}
`;

export const Input = styled.input`
  width: 100%;
  height: 4.4rem;
  font-size: 1.6em;
  color: #fff;
  border: none;
  outline: none;
  box-sizing: border-box;
  background: #212121;
  ${[sizes.up('sm')]} {
    height: 5rem;
    font-size: 2em;
  }
`;

export const Item = styled.li<{ noPointer?: boolean }>`
  width: 100%;
  cursor: pointer;
  font-size: 1.4em;
  box-sizing: border-box;
  padding: 1.2rem 5.8%;
  &:hover {
    background: rgba(128, 128, 128, 0.2);
  }
  ${[sizes.up('sm')]} {
    font-size: 1.8em;
    padding: 1.3rem 5.8%;
  }
  ${[sizes.up('sm')]} {
    padding: 1.3rem 5.5%;
  }
  ${[sizes.up('lg')]} {
    padding: 1.44rem 4.5%;
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
