import styled, { css } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import sizes from '../../sizes';

const common = css`
  margin-bottom: 20px;
  border-radius: 4px;
  border: none;
  color: #fff;
  ${[sizes.up('xl')]} {
    margin-bottom: 28px;
  }
`;

export const Container = styled.div`
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${[sizes.up('sm')]} {
    height: 80%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  width: 80vw;
  ${[sizes.up('sm')]} {
    width: 300px;
  }
  ${[sizes.up('xl')]} {
    width: 420px;
  }
`;

export const Heading = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 35px;
  font-weight: 600;
  ${[sizes.up('xl')]} {
    font-size: 49px;
    margin-bottom: 28px;
  }
`;

export const Input = styled.input`
  ${common}
  padding: 4px 18px;
  background: #333;
  font-size: 16px;
  line-height: 50px;
  outline: none;
  ${[sizes.up('xl')]} {
    padding: 5.6px 25.2px;
    font-size: 22.4px;
    line-height: 70px;
  }
`;

export const Button = styled.button<{ google?: boolean }>`
  ${common}
  padding: 16px;
  font-size: 14.5px;
  font-weight: bold;
  background: #e50914;
  cursor: pointer;
  transition: 150ms all;
  &:hover {
    background: #c40812;
  }
  ${[sizes.up('xl')]} {
    padding: 22.4px;
    font-size: 20.3px;
  }
  ${({ google }) =>
    google &&
    `
    background: #437ede;
    &:hover {
      background: #266bd9;
    }
  `}
`;

export const Link = styled(RouterLink)`
  margin: auto;
  text-align: center;
  &:hover {
    text-decoration: underline;
  }
  ${[sizes.up('xl')]} {
    font-size: 22.4px;
  }
`;
