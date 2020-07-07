import styled from 'styled-components';

export const Info = styled.div`
  margin: 0 4vw;
  padding: 5px;
  font-size: 15px;
  font-weight: lighter;
  font-family: sans-serif;
`;

export const Heading = styled.h1`
  font-size: 23px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const Overview = styled.span`
  font-size: 0.9rem;
  line-height: 21px;
  display: block;
`;

export const Rating = styled.div`
  padding: 5px;
  margin-top: 15px;
  border-radius: 5px;
  background-color: #000;
  display: inline-flex;
  align-items: center;
`;

export const Imdb = styled.img`
  width: 50px;
`;

export const Rank = styled.span`
  margin-top: 3px;
  margin-left: 7px;
  font-size: 1.1rem;
`;

export const Star = styled.img`
  width: 30px;
`;

export const Cast = styled.h1`
  padding-top: 10px;
  font-size: 1.2rem;
`;

export const Row = styled.div`
  display: flex;
  margin-top: 12px;
  flex-direction: row;
  justify-content: center;
`;
