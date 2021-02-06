import styled from 'styled-components';
import sizes from '../../sizes';

export const Container = styled.div`
  ${[sizes.up('md')]} {
    display: flex;
    justify-content: center;
  }
`;

export const Card = styled.div`
  width: 100%;
  margin-top: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  ${[sizes.up('md')]} {
    top: 0;
    width: 1000px;
    height: 530px;
    margin-top: 85px;
    position: absolute;
    flex-direction: row;
    background: rgba(0, 0, 0, 0.8);
  }
  ${[sizes.up('xl')]} {
    width: 1400px;
    height: 742px;
    margin-top: 119px;
  }
`;

export const Info = styled.div`
  margin: 0 4vw;
  padding: 5px;
  font-weight: 300;
  font-family: sans-serif;
  ${[sizes.up('md')]} {
    width: 100%;
    margin: 0;
    padding: 5px 22px;
    backdrop-filter: blur(5px);
    webkit-backdrop-filter: blur(5px);
  }
  ${[sizes.up('xl')]} {
    padding: 7px 37.8px;
  }
`;

export const Heading = styled.h1`
  font-size: 6.4vw;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  ${[sizes.up('sm')]} {
    font-size: 4.4vw;
  }
  ${[sizes.up('md')]} {
    margin-top: 35px;
    font-weight: 600;
    font-size: 23px;
  }
  ${[sizes.up('xl')]} {
    margin-top: 49px;
    font-size: 32.2px;
  }
`;

export const Overview = styled.span`
  display: block;
  font-size: 4.45vw;
  line-height: 5.9vw;
  ${[sizes.up('sm')]} {
    font-size: 3vw;
    line-height: 4.5vw;
  }
  ${[sizes.up('md')]} {
    font-size: 16px;
    line-height: 21px;
  }
  ${[sizes.up('xl')]} {
    font-size: 22.4px;
    line-height: 29.4px;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  ${[sizes.up('sm')]} {
    margin: 20px 10% 0 10%;
  }
  ${[sizes.up('md')]} {
    margin: 20px 5% 0 5%;
  }
  ${[sizes.up('xl')]} {
    margin: 28px 5% 0 5%;
  }
`;
