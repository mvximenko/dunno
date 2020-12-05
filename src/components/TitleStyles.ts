import styled from 'styled-components';
import sizes from '../sizes';

export const Container = styled.div`
  ${[sizes.up('md')]} {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const OuterDiv = styled.div`
  width: 100%;
  margin-top: auto;
  position: relative;
  ${[sizes.up('md')]} {
    top: 0;
    width: 1000px;
    height: 530px;
    margin-top: 85px;
    position: absolute;
    backdrop-filter: blur(5px);
    webkit-backdrop-filter: blur(5px);
    background: rgba(0, 0, 0, 0.8);
  }
`;

export const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  ${[sizes.up('md')]} {
    flex-direction: row;
  }
`;

export const Info = styled.div`
  margin: 0 4vw;
  padding: 5px;
  font-weight: lighter;
  font-family: sans-serif;
  ${[sizes.up('md')]} {
    margin-left: 15px;
    margin-right: 22px;
  }
`;

export const Heading = styled.h1`
  font-size: 23px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  ${[sizes.up('md')]} {
    padding-top: 20px;
    font-weight: 600;
  }
`;

export const Overview = styled.span`
  line-height: 21px;
  display: block;
`;

export const Rating = styled.div`
  padding: 5px;
  margin-top: 15px;
  border-radius: 5px;
  background: #000;
  display: inline-flex;
  align-items: center;
`;

export const ImdbWrapper = styled.div`
  width: 50px;
`;

export const StarWrapper = styled.div`
  width: 22px;
`;

export const Rank = styled.span`
  margin: 0 7px;
  font-size: 18px;
`;

export const Row = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: row;
  justify-content: center;
`;
