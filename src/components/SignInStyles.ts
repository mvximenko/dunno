import styled, { css } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import sizes from '../sizes';

const common = css`
  margin-bottom: 20px;
  border-radius: 4px;
  border: none;
  color: #fff;
`;

export const Container = styled.div<{ signUp?: boolean }>`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  ${({ signUp }) =>
    signUp &&
    `
    margin-top: 8px;
    ${[sizes.up('xs')]} {
      margin-top: 40px;
    }
  `}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  width: 80vw;
  ${[sizes.up('xs')]} {
    width: 300px;
  }
`;

export const Heading = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 35px;
  font-weight: 600;
  color: #fff;
`;

export const Input = styled.input`
  ${common}
  padding: 4px 18px;
  background: #333;
  font-size: 16px;
  line-height: 50px;
  outline: none;
`;

export const Button = styled.button<{ google?: boolean }>`
  ${common}
  padding: 16px;
  background: #e50914;
  font-size: 14.5px;
  cursor: pointer;
  ${({ google }) =>
    google &&
    `
    background: #4a8cf6;
  `}
`;

export const Link = styled(RouterLink)`
  text-align: center;
  cursor: pointer;
`;
