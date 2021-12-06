import styled from 'styled-components';
import sizes from '@/utils/sizes';

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
    width: 100rem;
    height: 53rem;
    margin-top: 8.5rem;
    position: absolute;
    flex-direction: row;
    background: rgba(0, 0, 0, 0.8);
  }
`;

export const Info = styled.div`
  margin: 0 4vw;
  padding: 0.5rem;
  font-weight: 300;
  font-family: sans-serif;
  ${[sizes.up('md')]} {
    width: 100%;
    margin: 0;
    padding: 0.5rem 2.2rem;
    backdrop-filter: blur(5px);
    webkit-backdrop-filter: blur(5px);
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
    margin-top: 3.5rem;
    font-weight: 600;
    font-size: 2.3em;
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
    font-size: 1.6em;
    line-height: 2.1rem;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  ${[sizes.up('sm')]} {
    margin: 2rem 10% 0 10%;
  }
  ${[sizes.up('md')]} {
    margin: 2rem 5% 0 5%;
  }
`;
