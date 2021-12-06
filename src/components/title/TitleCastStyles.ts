import styled from 'styled-components';
import sizes from '@/utils/sizes';
import { fadeEffect } from '@/src/GlobalStyles';

export const Column = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  ${[sizes.up('sm')]} {
    width: 20%;
  }
  ${[sizes.up('md')]} {
    width: 16%;
  }
`;

export const Photo = styled.div`
  height: 0;
  width: 100%;
  position: relative;
  padding-top: calc(750 / 500 * 100%);
`;

export const Img = styled.img`
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.1);
  ${fadeEffect}
  ${[sizes.up('md')]} {
    padding: 0.3rem;
    transition: all 350ms;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.1),
      0 0 8px rgba(255, 255, 255, 0.1);
    &:hover {
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.2),
        0 0 8px rgba(255, 255, 255, 0.2);
    }
  }
`;

export const Name = styled.span`
  width: 100%;
  display: flex;
  font-size: 3.9vw;
  text-align: center;
  justify-content: center;
  padding-top: 1rem;
  ${[sizes.up('sm')]} {
    font-size: 2.5vw;
  }
  ${[sizes.up('md')]} {
    font-size: 1.6em;
    padding: 1rem 0.3rem 0 0.3rem;
  }
`;
