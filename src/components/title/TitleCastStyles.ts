import styled from 'styled-components';
import sizes from '../../sizes';
import { fadeEffect, FadeEffectTypes } from '../../CommonStyles';

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-right: 6px;
  }
  ${[sizes.up('md')]} {
    &:first-child {
      margin-left: 17px;
    }
    &:not(:last-child) {
      margin-right: 50px;
    }
  }
`;

export const Photo = styled.div`
  height: 0;
  width: 70px;
  padding-top: 70px;
  position: relative;
  ${[sizes.up('md')]} {
    width: 80px;
    padding-top: 80px;
  }
`;

export const Img = styled.img<FadeEffectTypes>`
  top: 0;
  left: 0;
  width: 70px;
  height: auto;
  padding: 3px;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.1);
  ${fadeEffect}
  ${[sizes.up('md')]} {
    width: 80px;
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
  width: 70px;
  display: flex;
  text-align: center;
  vertical-align: middle;
  justify-content: center;
  padding: 50px 3px 0 3px;
  ${[sizes.up('md')]} {
    width: 100px;
    margin-left: -10px;
    padding-top: 50px 0;
  }
`;