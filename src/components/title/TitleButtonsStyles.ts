import styled from 'styled-components';
import sizes from '../../sizes';

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 25px;
  margin-bottom: 20px;
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
`;

export const IconWrapper = styled.div`
  width: 14px;
  margin-right: 8px;
`;
