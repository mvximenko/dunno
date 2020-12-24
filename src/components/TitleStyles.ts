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
  ${[sizes.up('xl')]} {
    width: 1400px;
    height: 742px;
    margin-top: 119px;
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
  font-weight: 300;
  font-family: sans-serif;
  ${[sizes.up('md')]} {
    margin-left: 15px;
    margin-right: 22px;
  }
  ${[sizes.up('xl')]} {
    padding: 7px;
    margin-left: 21px;
    margin-right: 30.8px;
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
  ${[sizes.up('xl')]} {
    padding-top: 28px;
    font-size: 32.2px;
  }
`;

export const Overview = styled.span`
  display: block;
  line-height: 21px;
  ${[sizes.up('xl')]} {
    font-size: 22.4px;
    line-height: 29.4px;
  }
`;

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

export const Row = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: row;
  justify-content: center;
  ${[sizes.up('xl')]} {
    margin-top: 28px;
  }
`;
