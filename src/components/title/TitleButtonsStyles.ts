import styled from 'styled-components';
import sizes from '../../sizes';

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 25px;
  margin-bottom: 20px;
  ${[sizes.up('xl')]} {
    margin-top: 35px;
    margin-bottom: 28px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  width: 150px;
  border: none;
  cursor: pointer;
  padding: 9px 11px;
  font-size: 14px;
  background: rgba(51, 51, 51, 0.7);
  ${[sizes.up('md')]} {
    transition: all 350ms;
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
  ${[sizes.up('xl')]} {
    width: 210px;
    padding: 12.6px 15.4px;
    font-size: 19.6px;
  }
`;

export const IconWrapper = styled.div`
  width: 14px;
  margin-right: 8px;
  ${[sizes.up('xl')]} {
    width: 19.6px;
    margin-right: 11.2px;
  }
`;
