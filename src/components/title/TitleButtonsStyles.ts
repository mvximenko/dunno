import styled from 'styled-components';
import sizes from '../../sizes';

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 25px;
`;

export const Button = styled.button`
  color: #fff;
  width: 150px;
  border: none;
  padding: 9px 11px;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  text-transform: capitalize;
  background-color: rgba(51, 51, 51, 0.7);
  ${[sizes.up('md')]} {
    cursor: pointer;
    transition: all 350ms;
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;

export const Svg = styled.svg`
  height: 1em;
  width: 14px;
  margin-right: 4px;
  display: inline-block;
  vertical-align: -2px;
  font-size: inherit;
  overflow: visible;
`;
