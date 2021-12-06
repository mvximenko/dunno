import styled, { css } from 'styled-components';
import sizes from '@/utils/sizes';

const styles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48%;
  padding: 0.9rem 0;
  font-size: 3.9vw;
  background: rgba(51, 51, 51, 0.7);
  ${[sizes.up('sm')]} {
    width: 42%;
    font-size: 2.5vw;
    padding: 1.9% 2.3%;
  }
  ${[sizes.up('md')]} {
    width: 32%;
    font-size: 1.4em;
    transition: all 350ms;
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2.5rem 0;
  ${[sizes.up('sm')]} {
    margin: 2.5rem 10%;
  }
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  color: #fff;
  ${styles}
`;

export const Link = styled.a`
  font-weight: 400;
  ${styles}
`;

export const IconWrapper = styled.div`
  width: 1.4rem;
  margin-right: 0.8rem;
`;
