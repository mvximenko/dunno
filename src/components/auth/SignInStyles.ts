import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import sizes from '@/utils/sizes';

const common = css`
  margin-bottom: 2rem;
  border-radius: 0.4rem;
  border: none;
  color: #fff;
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
  border-radius: 0.4rem;
  width: 80vw;
  ${[sizes.up('sm')]} {
    width: 30rem;
  }
`;

export const Heading = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 3.5em;
  font-weight: 600;
`;

export const Input = styled.input`
  ${common}
  padding: 0.4rem 1.8rem;
  background: #333;
  font-size: 1.6em;
  line-height: 5rem;
  outline: none;
`;

export const Button = styled.button<{ google?: boolean }>`
  ${common}
  padding: 1.6rem;
  font-size: 1.45em;
  font-weight: bold;
  background: #e50914;
  cursor: pointer;
  transition: 150ms all;
  &:hover {
    background: #c40812;
  }
  ${({ google }) =>
    google &&
    `
    background: #4285f4;
    &:hover {
      background: #3367D6;
    }
  `}
`;

export const StyledLink = styled(Link)`
  margin: auto;
  text-align: center;
  font-size: 1.6em;
  &:hover {
    text-decoration: underline;
  }
`;
