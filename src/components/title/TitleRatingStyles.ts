import styled from 'styled-components';
import sizes from '../../sizes';

export const Rating = styled.div`
  padding: 5px;
  margin-top: 15px;
  border-radius: 5px;
  background: #000;
  display: inline-flex;
  align-items: center;
  ${[sizes.up('xl')]} {
    padding: 7px;
    margin-top: 21px;
    border-radius: 7px;
  }
`;

export const ImdbWrapper = styled.div`
  width: 50px;
  ${[sizes.up('xl')]} {
    width: 70px;
  }
`;

export const StarWrapper = styled.div`
  width: 22px;
  ${[sizes.up('xl')]} {
    width: 30.8px;
  }
`;

export const Rank = styled.span`
  margin: 0 7px;
  font-size: 18px;
  ${[sizes.up('xl')]} {
    margin: 0 9.8px;
    font-size: 25.2px;
  }
`;
