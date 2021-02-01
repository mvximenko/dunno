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

export const Container = styled.div<{ signUp?: boolean }>`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  ${({ signUp }) =>
    signUp &&
    `
    margin-top: 8px;
    ${[sizes.up('sm')]} {
      margin-top: 40px;
    }
  `}
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
  background: #e50914;
  cursor: pointer;
  ${[sizes.up('xl')]} {
    padding: 22.4px;
    font-size: 20.3px;
  }

  ${({ google }) =>
    google &&
    `
    background: #4a8cf6;
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
