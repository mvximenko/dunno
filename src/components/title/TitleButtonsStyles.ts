import styled, { css } from 'styled-components';
import sizes from '../../sizes';

const styles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48%;
  padding: 9px 0;
  font-size: 3.9vw;
  background: rgba(51, 51, 51, 0.7);
  ${[sizes.up('sm')]} {
    width: 42%;
    font-size: 2.5vw;
    padding: 1.9% 2.3%;
  }
  ${[sizes.up('md')]} {
    width: 32%;
    font-size: 14px;
    transition: all 350ms;
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
  ${[sizes.up('xl')]} {
    font-size: 19.6px;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px 0;
  ${[sizes.up('sm')]} {
    margin: 25px 10%;
  }
  ${[sizes.up('xl')]} {
    margin: 35px 10%;
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
  width: 14px;
  margin-right: 8px;
  ${[sizes.up('xl')]} {
    width: 19.6px;
    margin-right: 11.2px;
  }
`;
